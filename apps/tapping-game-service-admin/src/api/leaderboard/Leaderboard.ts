import { User } from "../user/User";

export type Leaderboard = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  score: number | null;
  rank: number | null;
  user?: User | null;
};
