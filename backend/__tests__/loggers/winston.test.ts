import logger from "@/loggers/winston.logger";

describe("Winston Logger", () => {
  it("Should be defined", () => {
    expect(logger).toBeDefined();
  });

  // it("Should be SnapShot", () => {
  //   expect(logger).toMatchSnapshot();
  // })
})