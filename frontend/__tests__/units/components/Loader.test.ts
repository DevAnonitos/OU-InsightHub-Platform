import LoaderSpinner from "@/components/Loading/LoaderSpinner";


describe("Loader Component", () => {
  it("Should be defined LoaderSpinner Component", () => {
    expect(LoaderSpinner).toBeDefined();
  })

  it("Should be InstanceOf LoaderSpinner Component", () => {
    expect(LoaderSpinner).toBeInstanceOf(Function);
  })

  it("Should be Snapshot", () => {
    expect(LoaderSpinner).toMatchSnapshot();
  })
})
