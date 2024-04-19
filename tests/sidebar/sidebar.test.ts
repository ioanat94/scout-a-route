import { expect, test } from "@playwright/test";

test("sidebar is visible", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByTestId("sidebar")).toBeVisible();
});

test("welcome message is visible", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByTestId("welcome")).toBeVisible();
});

test("form is visible", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByTestId("route-form")).toBeVisible();
});

test("form is functional", async ({ page, request }) => {
  await page.goto("/");
  await page.getByTestId("distance-input").fill("5");
  await page.getByTestId("unit-select").selectOption({ label: "kilometers" });
  await page.getByTestId("generate-route-btn").click();

  const url = "/api/get-route";
  const response = await request.post(url, {
    data: { distance: 5, unit: "kilometers" },
  });
  const responseBody = await response.json();

  expect(response.status()).toBe(200);
  expect(responseBody).toBe("distance is 5, unit is kilometers");
});

test("form displays error on empty input", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("generate-route-btn").click();

  await expect(page.getByTestId("form-error-message")).toBeVisible();
  await expect(page.getByTestId("form-error-message")).toHaveText("Distance is required");
});
