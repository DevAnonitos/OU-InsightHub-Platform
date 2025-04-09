import request from "supertest"
import app from "../src/app"

describe('API Server', () => {
  it('should be defined', () => {
    expect(app).toBeDefined();
  });
});