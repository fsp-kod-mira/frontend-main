import { PaginatedResult } from "@/types/result.type";
import { HttpModule } from "..";
import { CVDto } from "@/lib/dto/cv.dto";
import { cv } from "../mock/cv";

export default class CVModule extends HttpModule {
  async upload(data: FormData): Promise<any> {
    const result = await this.call("POST", "/cv", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return result.data;
  }

  async getAll(): Promise<PaginatedResult<CVDto>> {
    return {
      data: cv,
      current: 1,
      total: 10,
    };
  }

  async get(id: string): Promise<CVDto> {
    return cv[0];
  }

  async favorite(id: string, state: boolean): Promise<boolean> {
    console.log("CALL" + state);
    return state;
  }

  async avgMetric(): Promise<number> {
    return cv.map((c) => c.metric).reduce((a, b) => a + b, 0) / cv.length;
  }
}
