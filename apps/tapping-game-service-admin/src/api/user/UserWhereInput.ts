import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GameSessionListRelationFilter } from "../gameSession/GameSessionListRelationFilter";
import { LeaderboardListRelationFilter } from "../leaderboard/LeaderboardListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  gameSessions?: GameSessionListRelationFilter;
  leaderboards?: LeaderboardListRelationFilter;
};
