import type {Page} from '@playwright/test';
import { expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async login(user: string, password: string) {
    await this.page.fill('input[name="user-name"]', user);
    await this.page.fill('input[name="password"]', password);
    await this.page.click('button[type="submit"]');
    // await this.page.click('#login-button');
  }

  async usuarioDeslogado() {
    return await expect(this.page.getByText('Accepted usernames are:'));
  }

  
}