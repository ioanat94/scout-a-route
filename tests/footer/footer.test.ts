import { expect, test } from "@playwright/test";

test("footer is visible", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByTestId("footer")).toBeVisible();
});
