import AuthLayout from "@/app/(auth)/layout";
import RootLayout from "@/app/(root)/layout";
import AdminLayout from "@/app/admin/layout";

describe("Layout Component", () => {
  describe("Root Layout", () => {
    it("Should be defined RootLayout", () => {
      expect(RootLayout).toBeDefined();
      expect(RootLayout).toBeInstanceOf(Function);
      expect(typeof RootLayout).toBe('function');
    });

    it("Should have a lenght", () => {
      expect(RootLayout).toHaveLength(1);
    })

    it("Should be Snapshot", () => {
      expect(RootLayout).toMatchSnapshot();
    });
  });

  describe("Auth Layout", () => {
    it("Should be defined AuthLayout", () => {
      expect(AuthLayout).toBeDefined();
      expect(AuthLayout).toBeInstanceOf(Function); 
      expect(typeof AuthLayout).toBe('function');
    });

    it("Should have a lenght", () => {
      expect(AuthLayout).toHaveLength(1);
    })

    it("Should be Snapshot", () => {
      expect(AuthLayout).toMatchSnapshot();
    });
  });

  describe("Admin Layout", () => {
    it("Should be defined AdminLayout", () => {
      expect(AdminLayout).toBeDefined();
      expect(AdminLayout).toBeInstanceOf(Function);
      expect(typeof AdminLayout).toBe('function');
    });

    it("Should have a lenght", () => {
      expect(AdminLayout).toHaveLength(1);
    })

    it("Should be Snapshot", () => {
      expect(AdminLayout).toMatchSnapshot();
    });
  });
});