import { InputJsonValue } from "../../types";
import { GameSessionCreateNestedManyWithoutUsersInput } from "./GameSessionCreateNestedManyWithoutUsersInput";
import { LeaderboardCreateNestedManyWithoutUsersInput } from "./LeaderboardCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  gameSessions?: GameSessionCreateNestedManyWithoutUsersInput;
  leaderboards?: LeaderboardCreateNestedManyWithoutUsersInput;
};
