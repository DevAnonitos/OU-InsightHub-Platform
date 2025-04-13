import HomePage from "@/app/(root)/page";
import FAQPage from "@/app/(root)/faq/page";
import SearchPage from "@/app/(root)/search/page";
import TermsPage from "@/app/(root)/terms/page";
import AboutOUPage from "@/app/(root)/about-ou/page";
import AboutUsPage from "@/app/(root)/about-us/page";

import SignInPage from "@/app/(auth)/sign-in/page";
import SignUpPage from "@/app/(auth)/sign-up/page";
import ForgotPassword from "@/app/(auth)/forgot-password/page";

import AdminPage from "@/app/admin/page";
import ManagementPage from "@/app/admin/management-users/page";

import { render } from "@testing-library/react";

const pages = [
  { name: "Home Page", component: HomePage },
  { name: "Search Page", component: SearchPage },
  { name: "About OU Page", component: AboutOUPage },
  { name: "About Us Page", component: AboutUsPage },
  { name: "Terms Page", component: TermsPage },
  { name: "FAQ Page", component: FAQPage },
  { name: "Sign In Page", component: SignInPage },
  { name: "Sign Up Page", component: SignUpPage },
  { name: "Forgot Password Page", component: ForgotPassword },
  { name: "Admin Page", component: AdminPage },
  { name: "Management Page", component: ManagementPage },
];

describe("Page Component", () => {
  pages.forEach(({ name, component }) => {
    describe(`${name}`, () => {
      it(`Should render ${name} correctly`, () => {
        expect(component).toBeDefined();
        expect(component).toBeInstanceOf(Function);
        expect(typeof component).toBe('function');
      });

      it(`Should have a lenght`, () => {
        expect(component).toHaveLength(1);
      });

      it(`Should be ${name} Snapshot`, () => {
        expect(component).toMatchSnapshot();
      });
    });
  });
});
