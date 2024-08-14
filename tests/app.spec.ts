import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("mesop-shell")).toContainText("Count=0");
  await page.getByRole("button", { name: "Increment" }).click();
  await expect(page.getByText("Count=1")).toBeVisible();
});
