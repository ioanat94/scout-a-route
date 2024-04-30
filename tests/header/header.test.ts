import { expect, test } from "@playwright/test";

test("header is visible", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByTestId("header")).toBeVisible();
});
