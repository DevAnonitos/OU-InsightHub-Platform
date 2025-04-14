import { 
    generateAccessToken, 
    generateRefreshToken, 
    verifyAccessToken, 
    verifyRefreshToken 
} from "@/helpers/token.helper";

describe("Token Helper", () => {
    it("Should be defined", () => {
        expect(generateAccessToken).toBeDefined();
        expect(generateRefreshToken).toBeDefined();
        expect(verifyAccessToken).toBeDefined();
        expect(verifyRefreshToken).toBeDefined();
    });


    it("Should be defined a function", () => {
        expect(generateAccessToken).toBeInstanceOf(Function);
        expect(generateRefreshToken).toBeInstanceOf(Function);
        expect(verifyAccessToken).toBeInstanceOf(Function);
        expect(verifyRefreshToken).toBeInstanceOf(Function);
    });

    it("Should be Snapshot", () => {
        expect(generateAccessToken).toMatchSnapshot();
        expect(generateRefreshToken).toMatchSnapshot();
        expect(verifyAccessToken).toMatchSnapshot();
        expect(verifyRefreshToken).toMatchSnapshot();
    });
})