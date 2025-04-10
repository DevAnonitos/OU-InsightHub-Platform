
import Bottombar from "@/components/Custombar/Bottombar";
import { AppSidebar } from "@/components/Custombar/AppSidebar";

import AdminNavbar from "@/components/Custombar/AdminNavbar";
import AdminSidebar from "@/components/Custombar/AdminSidebar";

describe("Custombar Component", () => {
  it("Should be defined App Sidebar ", () => {
    expect(AppSidebar).toBeDefined();
  });

  it("Should be defined Bottombar", () => {
    expect(Bottombar).toBeDefined();
  });

  it("Should be defined Admin Navbar", () => {
    expect(AdminNavbar).toBeDefined();
  });

  it("Should be defined Admin Navbar", () => {
    expect(AdminSidebar).toBeDefined();
  });
})