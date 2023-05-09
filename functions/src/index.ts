import { Request, Response } from "firebase-functions";

export const hello = (_request: Request, response: Response): void => {
  response.send("Hello there!");
};
