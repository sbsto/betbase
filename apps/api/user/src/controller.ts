import { api } from "encore.dev/api";

export const hello = api({ method: "GET" }, () => {
  return { message: "Hello, world!" };
});
