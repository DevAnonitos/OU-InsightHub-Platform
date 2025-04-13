import { cn } from "@/lib/utils";

describe("CN Modules", () => {
    it("Should be defined", () => {
        expect(cn).toBeDefined();
    });

    it("Should be Snapshoot", () => {
        expect(cn).toMatchSnapshot();
    });
})