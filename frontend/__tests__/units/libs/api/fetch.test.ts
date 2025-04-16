import { clientFetch } from "@/lib/api/clientFetch";
import { serverFetch } from "@/lib/api/serverFetch";

describe("Custom Fetch API", () => {
  it("Should be defined", () => {
    expect(clientFetch).toBeDefined();
    expect(serverFetch).toBeDefined();
  });

  it("Should be match Snapshot", () => {
    expect(clientFetch).toMatchSnapshot();
    expect(serverFetch).toMatchSnapshot();
  });
});