import Breadcrumb from "@/components/Shared/Breadcrumb";
import ProfileUser from "@/components/Shared/ProfileUser";
import ContainerLayout from "@/components/Shared/ContainerLayout";

describe("Component Test", () => {
  it("Should be defined Container Layout", () => {
    expect(ContainerLayout).toBeDefined();
  });

  it("Should be defined Profile User", () => {
    expect(ProfileUser).toBeDefined();
  });

  it("Should be defined BreadCump", () => {
    expect(Breadcrumb).toBeDefined();
  });
});