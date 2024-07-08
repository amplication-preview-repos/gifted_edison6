import { User } from "../user/User";
import { ClickEvent } from "../clickEvent/ClickEvent";

export type GameSession = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  score: number | null;
  startTime: Date | null;
  endTime: Date | null;
  user?: User | null;
  clickEvents?: Array<ClickEvent>;
};
