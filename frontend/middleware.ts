import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { REFRESH_TOKEN_ENDPOINT, GET_USER_ENDPOINT } from './constants/api-endpoint';
import { ResponseCookies, RequestCookies } from 'next/dist/server/web/spec-extension/cookies';

function applySetCookie(req: NextRequest, res: NextResponse): void {
  const setCookies = new ResponseCookies(res.headers); 
  const newReqHeaders = new Headers(req.headers);   
  const newReqCookies = new RequestCookies(newReqHeaders); 

  setCookies.getAll().forEach((cookie) => newReqCookies.set(cookie));

  NextResponse.next({
    request: { headers: newReqHeaders },
  }).headers.forEach((value, key) => {
    if (key === 'x-middleware-override-headers' || key.startsWith('x-middleware-request-')) {
      res.headers.set(key, value);
    }
  });
}

export const middleware = async (request: NextRequest) => {
  
  const res = NextResponse.next();

  const accessToken = request.cookies.get('accessToken')?.value;
  const refreshToken = request.cookies.get('refreshToken')?.value;

  if(!accessToken && refreshToken) {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${REFRESH_TOKEN_ENDPOINT}`, {
        method: "POST",
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refreshToken })
      });
      console.log(response);
      const result = await response.json();

      if(response.ok && result.data?.tokens) {
        const newAccessToken = result.data.tokens.accessToken;
        const newRefreshToken = result.data.tokens.refreshToken

        res.cookies.set('accessToken', newAccessToken!, {
          httpOnly: true,
          secure: true,
          sameSite: 'strict',
          maxAge: 60 * 60,
          path: '/',
        });

        res.cookies.set('refreshToken', newRefreshToken!, {
          httpOnly: true,
          secure: true,
          sameSite: 'strict',
          maxAge: 60 * 60 * 24 * 30,
          path: '/',
        });

        console.log('✅ Refreshed tokens via middleware');
        applySetCookie(request, res);
        return res;
      } else {
        res.cookies.delete('accessToken');
        res.cookies.delete('refreshToken');
        console.warn('⚠️ Token refresh failed:', result?.message || 'Unknown error');
      }
    } catch (error: any) {
      console.error('❌ Refresh token request failed:', error.message);
      res.cookies.delete('accessToken');
      res.cookies.delete('refreshToken');
    }
  }

  return res;
}

export const config = {
  matcher: ['/admin/:path'],
};