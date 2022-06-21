import { Fetcher } from "openapi-typescript-fetch";
import "whatwg-fetch";
import { paths } from "../schema";

// declare fetcher for paths
const fetcher = Fetcher.for<paths>();
console.info(fetcher);
