import { InputJsonValue } from "../../types";
import { GameSessionUpdateManyWithoutUsersInput } from "./GameSessionUpdateManyWithoutUsersInput";
import { LeaderboardUpdateManyWithoutUsersInput } from "./LeaderboardUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  gameSessions?: GameSessionUpdateManyWithoutUsersInput;
  leaderboards?: LeaderboardUpdateManyWithoutUsersInput;
};
