import { authorize } from "@/middlewares/auth.middleware";
import { errorMiddleware } from "../../src/middlewares/error.middleware";

describe('Middleware API', () => {
  it("Should be defined Auth Middleware", () => {
    expect(authorize).toBeDefined();
  });

  it("Should be defined Error Middleware", () => {
    expect(errorMiddleware).toBeDefined();
  });
});