import { paths } from "../schema";
import { Fetcher } from "openapi-typescript-fetch";

// declare fetcher for paths
const fetcher = Fetcher.for<paths>();

const createUser = fetcher.path("/users").method("post").create();
const getUsers = fetcher.path("/users").method("get").create();
const getOneUser = fetcher.path(`/users/${"s"}`).method("get").create();

createUser({});
getOneUser("1");
getUsers();
