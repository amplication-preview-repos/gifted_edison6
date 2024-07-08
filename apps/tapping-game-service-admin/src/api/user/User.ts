import { JsonValue } from "type-fest";
import { GameSession } from "../gameSession/GameSession";
import { Leaderboard } from "../leaderboard/Leaderboard";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  gameSessions?: Array<GameSession>;
  leaderboards?: Array<Leaderboard>;
};
