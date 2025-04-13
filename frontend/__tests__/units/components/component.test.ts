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

  it("Should be defined a function", () => {
    expect(Breadcrumb).toBeInstanceOf(Function);
    expect(ProfileUser).toBeInstanceOf(Function);
    expect(ContainerLayout).toBeInstanceOf(Function);
  });

  it("Should be Snapshot", () => {
    expect(ContainerLayout).toMatchSnapshot();
    expect(ProfileUser).toMatchSnapshot();
    expect(Breadcrumb).toMatchSnapshot();
  });
});
