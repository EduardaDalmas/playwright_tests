import type {Page} from '@playwright/test';
import { expect } from '@playwright/test';

export class MainPage {
  readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async usuarioLogado() {
        return await expect(this.page.getByText('Products')).toBeVisible();
    }

    async deslogar() {
        await this.page.click('#react-burger-menu-btn');
        await this.page.click('#logout_sidebar_link');
    }
}