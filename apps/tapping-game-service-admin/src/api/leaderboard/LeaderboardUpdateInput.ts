import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LeaderboardUpdateInput = {
  score?: number | null;
  rank?: number | null;
  user?: UserWhereUniqueInput | null;
};
