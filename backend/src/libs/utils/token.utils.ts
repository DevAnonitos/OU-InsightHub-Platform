import { 
  generateAccessToken, 
  generateRefreshToken, 
  verifyAccessToken, 
  verifyRefreshToken,
} from "@/helpers/token.helper";
import { JwtPayload } from "jsonwebtoken";
import { TokenPayLoadDTO } from "@/dtos/token.dto";

export const generateToken = (payload: object) => {
  const accessToken = generateAccessToken({ payload });
  const refreshToken = generateRefreshToken({ payload });

  return {
    accessToken,
    refreshToken,
  };
};

export const verifyToken =  (token: string, type: "access" | "refresh") => {
  if (type === "access") {
    return verifyAccessToken(token);
  } else {
    return verifyRefreshToken(token);
  }
};

export const refreshToken = (token: string) => {
  // Verify token hiện tại
  const payload = verifyRefreshToken(token);
  
  if (!payload) {
    throw new Error("Invalid refresh token");
  }
  
  // Trích xuất chỉ các trường cần thiết từ payload, bỏ qua metadata JWT
  const { id, email, roles } = payload as JwtPayload & TokenPayLoadDTO;
  
  // Tạo clean payload mới chỉ với thông tin cần thiết
  const cleanPayload: TokenPayLoadDTO = {
    id,
    email,
  };
  
  // Thêm roles nếu có
  if (roles) {
    cleanPayload.roles = roles;
  }
  
  // Tạo token mới với payload đã làm sạch
  return generateToken(cleanPayload);
};