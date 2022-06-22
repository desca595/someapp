import { Fetcher } from "openapi-typescript-fetch";
import "whatwg-fetch";
import { paths } from "../schema";

// declare fetcher for paths
export const fetcher = Fetcher.for<paths>();

const api1 = fetcher.configure({
  baseUrl: "http://localhost:3000",
  use: [],
});

// create user
// get user
// patch user

const createUser = fetcher.path("/premium-users").method("post").create();
const getUser = fetcher.path("/premium-users").method("get").create();
const getUserById = fetcher.path("/premium-users/{id}").method("get").create();
const updateUser = fetcher.path("/premium-users/{id}").method("patch").create();

updateUser({
  id: "asd",
  name: "asdsa",
  work: {},
});

getUserById({
  id: "123",
});

getUser({});
