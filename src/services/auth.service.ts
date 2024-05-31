import { SignInDto } from "@/lib/dto/auth.dto";
import { GATEWAY_URL } from "@/lib/env";
import { AuthResult } from "@/types/auth.type";
import { User } from "@/types/user.type";

class AuthService {
  async signIn(data: SignInDto): Promise<AuthResult> {
    const result = await fetch(`${GATEWAY_URL}/auth/sign-in`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!result.ok) {
      return Promise.reject(result);
    }

    const authResult = (await result.json()).data as AuthResult;
    return Promise.resolve(authResult);
  }

  async refresh(data: AuthResult): Promise<AuthResult> {
    const result = await fetch(`${GATEWAY_URL}/auth/refresh`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refreshToken: data.refreshToken,
      }),
    });

    if (!result.ok) {
      return Promise.reject(result);
    }

    const authResult = (await result.json()).data as AuthResult;
    return Promise.resolve(authResult);
  }

  async getMe(data: AuthResult): Promise<User> {
    const result = await fetch(`${GATEWAY_URL}/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.accessToken}`,
      },
    });

    if (!result.ok) {
      return Promise.reject(result);
    }

    const user = (await result.json()).data as User;
    return Promise.resolve(user);
  }

  async signout(data: AuthResult): Promise<boolean> {
    const result = await fetch(`${GATEWAY_URL}/auth/sign-out`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.accessToken}`,
      },
    });

    if (!result.ok) {
      return Promise.reject(result);
    }
    return true;
  }
}

const authService = new AuthService();
export default authService;
