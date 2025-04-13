import { startServer } from "../src/server";

describe('API Server', () => {
  it('Should be defined', () => {
    expect(startServer).toBeDefined();
  })

  it("Should be defined a function", () => {
    expect(startServer).toBeInstanceOf(Function);
  });

  it('Should be Snapshot', () => {
    expect(startServer).toMatchSnapshot();
  });
});