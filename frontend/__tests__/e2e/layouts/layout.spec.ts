import { test, expect } from "@playwright/test";

const baseURL = 'http://localhost:3000';

const pages = [
  { name: "root", path: '/' },
  { name: "about-us", path: '/about' },
  { name: "contact", path: '/about-ou' }
];

pages.forEach(({ name, path }) => {
  test(`Should navigate to the ${name} page`, async ({ page }) => {
    await page.goto(`${baseURL}${path}`);
    await expect(page).toHaveURL(`${baseURL}${path}`);
  });
});