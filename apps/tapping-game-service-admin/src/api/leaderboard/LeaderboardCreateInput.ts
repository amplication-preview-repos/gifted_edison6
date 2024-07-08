import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LeaderboardCreateInput = {
  score?: number | null;
  rank?: number | null;
  user?: UserWhereUniqueInput | null;
};
