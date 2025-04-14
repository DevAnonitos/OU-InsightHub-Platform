import app from "../src/app"
import request from "supertest"

// jest.mock('../src/app');

describe('API Server', () => {
  it('should be defined', () => {
    expect(app).toBeDefined();
  });

  it("Should be defined a function", () => {
    expect(app).toBeInstanceOf(Function);
  })

  it('should be to Snapshot', () => {
    expect(app).toMatchSnapshot();
  });
});

describe("API Status", () => {
  it("Should be expected status", () => {
    request(app).get("/").expect(200)
  });

  it("Should be expected status 400", () => {
    request(app).get("/test").expect(400)
  });

  it("Should be expected status 404", () => {
    request(app).get("/test").expect(404)
  });

  it("Should be expected status 405", () => {
    request(app).post("/").expect(405)
  });
});

// describe("Mocked API", () => {
//   it("Should return 200 with message hello", async () => {
//     const res = await request(app).get("/");
//     expect(res.statusCode).toBe(200);
//     expect(res.body).toEqual({ message: "hello" });
//   });

//   it("Should return 404 on /test", async () => {
//     const res = await request(app).get("/test");
//     expect(res.statusCode).toBe(404);
//   });

//   it("Should return 405 on POST /", async () => {
//     const res = await request(app).post("/");
//     expect(res.statusCode).toBe(405);
//   });
// });