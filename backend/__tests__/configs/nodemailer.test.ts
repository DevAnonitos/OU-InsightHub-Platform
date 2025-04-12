import { nodemailerConfig } from "@/configs/nodemailer.config";

describe("Nodemailer Config", () => {
  it("Should be defined CORS Config", () => {
    expect(nodemailerConfig).toBeDefined();
  })

  it("Should be defined Snapshot", () => {
    expect(nodemailerConfig).toMatchSnapshot();
  })
})