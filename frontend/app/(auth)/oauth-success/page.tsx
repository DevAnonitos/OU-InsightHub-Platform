"use client";

import React, { useEffect } from 'react';
import { setAuthCookies } from '@/lib/actions/cookies';
import { useRouter, useSearchParams } from 'next/navigation';
import LoaderSpinner from '@/components/Loading/LoaderSpinner';
import { useUserStore } from '@/components/Providers/UserProvider';

const OAuthSuccessPage = () => {

  const router = useRouter();
  const params = useSearchParams();
  const{ setUser } = useUserStore((state) => state);

  useEffect(() => {
    const userParam = params.get("user");
    if (!userParam) {
      router.replace("/sign-in?error=no_user");
      return;
    }

    try {
      const user = JSON.parse(decodeURIComponent(userParam));
      setUser(user);
      router.replace("/");
    } catch (e) {
      console.error("Invalid user data", e);
      router.replace("/sign-in?error=invalid_user_data");
    }
  }, [params, router]);

  return (
    <div>
      <LoaderSpinner />
    </div>
  );
};

export default OAuthSuccessPage;