import { authorize } from "@/middlewares/auth.middleware";
import { errorMiddleware } from "@/middlewares/error.middleware";

describe('Middleware API', () => {
  it("Should be defined Auth Middleware", () => {
    expect(authorize).toBeDefined();
  });

  it("Should be Snapshot", () => {
    expect(authorize).toMatchSnapshot();
  });

  it("Should be defined Error Middleware", () => {
    expect(errorMiddleware).toBeDefined();
  });

  it("Should be defined Error Middleware", () => {
    expect(errorMiddleware).toMatchSnapshot();
  });

  it("Should be defined a function", () => {
    expect(errorMiddleware).toBeInstanceOf(Function);
    expect(authorize).toBeInstanceOf(Function);
  });
});