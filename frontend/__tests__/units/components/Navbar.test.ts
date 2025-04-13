import Navbar from '@/components/Custombar/Navbar';

describe('NavBar component', () => {
  it("Should be defined Navbar Component", () => {
    expect(Navbar).toBeDefined();
  });

  it("Should be to be a function", () => {
    expect(Navbar).toBeInstanceOf(Function);
  });

  it("Should be Snapshot", () => {
    expect(Navbar).toMatchSnapshot();
  })
});