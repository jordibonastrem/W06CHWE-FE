import { handlers } from "./handlers";
import { setUpServer } from "./handlers";

export const server = setUpServer(...handlers);
