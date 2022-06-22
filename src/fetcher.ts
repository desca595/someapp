import { Fetcher } from "openapi-typescript-fetch";
import "whatwg-fetch";
import { paths } from "../schema";

// declare fetcher for paths
export const fetcher = Fetcher.for<paths>();

fetcher.configure({
  baseUrl: "http://localhost:3000",
});
