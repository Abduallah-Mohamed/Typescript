import { IUser } from "./types";

export default class User implements IUser {
  constructor(public name: string) {}
}
