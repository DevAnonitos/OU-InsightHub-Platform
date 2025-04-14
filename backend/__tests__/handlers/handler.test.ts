import { responseHandler } from "@/handlers/response.handler";

describe("Handler", () => {
    it("Should be defined", () => {
        expect(responseHandler).toBeDefined();
    });

    it("Should be Snapshot", () => {
        expect(responseHandler).toMatchSnapshot();
    });
});