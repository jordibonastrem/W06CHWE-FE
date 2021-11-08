import { robotPaths } from "../paths/paths";
import { rest } from "msw";
import { getRandomRobots } from "./robotFactory";

export const handlers = [
  rest.get(
    process.env.REACT_APP_URL + robotPaths.get,
    async (req, res, ctx) => {
      const response = res(ctx.json(getRandomRobots()));
      return response;
    }
  ),
];
