import { SignUpDto } from "@/lib/dto/sign-up.dto";
import { HttpModule } from "..";
import { AuthResult } from "@/types/auth.type";

export default class UsersModule extends HttpModule {
  async create(signUpDto: SignUpDto) {
    return (
      await this.call<{ data: AuthResult }>(
        "POST",
        "/auth/sign-up",
        JSON.stringify(signUpDto)
      )
    ).data.data;
  }
}
