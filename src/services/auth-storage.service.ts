import { CookieOpts, CookieService } from "./cookie.service";
import { AuthResult } from "@/types/auth.type";
import { jwtDecode } from "jwt-decode";

class AuthStorageService extends CookieService {
  constructor() {
    super("auth");
  }

  async needRefresh(cookies: CookieOpts = {}) {
    const authResult = await this.get(cookies);
    if (!authResult)
      throw Error("Failed to get auth data. Maybe you are not authorized.");

    const accessToken = authResult.accessToken;
    const jwtData = jwtDecode(accessToken);
    const expires = jwtData.exp!;
    const now = Math.round(Date.now() / 1000);
    return expires - now <= 0;
  }

  async get(cookies?: CookieOpts) {
    return (await super.get(cookies)) as AuthResult | null;
  }

  async set(data: AuthResult, cookies?: CookieOpts) {
    return await super.set(data, cookies);
  }
}

const authStorageService = new AuthStorageService();
export default authStorageService;
