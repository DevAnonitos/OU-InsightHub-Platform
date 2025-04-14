import { winstonConfig } from "@/configs/winston.config";

describe("Winston Config", () => {
  it("Should be defined", () => {
    expect(winstonConfig).toBeDefined();
  });

  it("Should be Snapshot", () => {
    expect(winstonConfig).toMatchSnapshot();
  });
})