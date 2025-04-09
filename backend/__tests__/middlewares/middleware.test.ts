import { authMiddleWare } from "../../src/middlewares/auth.middleware";
import { errorMiddleware } from "../../src/middlewares/error.middleware";

describe('Middleware API', () => {
  it("Should be defined Auth Middleware", () => {
    expect(authMiddleWare).toBeDefined();
  });

  it("Should be defined Error Middleware", () => {
    expect(errorMiddleware).toBeDefined();
  });
});