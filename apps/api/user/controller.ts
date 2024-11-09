import { api } from "encore.dev/api";

interface HelloParams {
  name: string;
}

interface HelloResponse {
  message: string;
}

export const hello = api(
  { method: "GET", path: "/hello", expose: true },
  async (params: HelloParams): Promise<HelloResponse> => {
    return { message: `Hello, ${params.name}!` };
  },
);
