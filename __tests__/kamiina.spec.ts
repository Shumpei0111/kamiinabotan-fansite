import { test, expect } from '@playwright/test';

test('Top page has title', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    await expect(page).toHaveTitle(
        /百合に酔う。 - 「上伊那ぼたん、酔へる姿は百合の花」ファンサイト/
    );
});

test('Character page has title', async ({ page }) => {
    await page.goto('/characters', { waitUntil: 'domcontentloaded' });

    await expect(page).toHaveTitle(
        /キャラクター一覧 | 百合に酔う。 - 「上伊那ぼたん、酔へる姿は百合の花」ファンサイト/
    );
});

test('Liquor page has title', async ({ page }) => {
    await page.goto('/liquorlist', { waitUntil: 'domcontentloaded' });

    await expect(page).toHaveTitle(
        /登場するお酒一覧 | 百合に酔う。 - 「上伊那ぼたん、酔へる姿は百合の花」ファンサイト/
    );
});

test('Quiz page has title', async ({ page }) => {
    await page.goto('/quiz', { waitUntil: 'domcontentloaded' });

    await expect(page).toHaveTitle(
        /上伊那ぼたんクイズ | 百合に酔う。 - 「上伊那ぼたん、酔へる姿は百合の花」ファンサイト/
    );
});

test('Clothes page has title', async ({ page }) => {
    await page.goto('/clothes', { waitUntil: 'domcontentloaded' });

    await expect(page).toHaveTitle(
        /ファッションで見る | 百合に酔う。 - 「上伊那ぼたん、酔へる姿は百合の花」ファンサイト/
    );
});
