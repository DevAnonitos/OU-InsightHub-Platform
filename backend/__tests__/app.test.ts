import request from "supertest"
import app from "../src/app"

describe('API Server', () => {
  it('should be defined', () => {
    expect(app).toBeDefined();
  });

  it("Should be expected status 200", () => {
    request(app).get("/").expect(200)
  });

  it("Should be expected status 404", () => {
    request(app).get("/test").expect(404)
  });

  it("Should be defined a function", () => {
    expect(app).toBeInstanceOf(Function);
  })

  it('should be to Snapshot', () => {
    expect(app).toMatchSnapshot();
  });
});