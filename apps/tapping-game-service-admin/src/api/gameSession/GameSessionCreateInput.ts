import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ClickEventCreateNestedManyWithoutGameSessionsInput } from "./ClickEventCreateNestedManyWithoutGameSessionsInput";

export type GameSessionCreateInput = {
  score?: number | null;
  startTime?: Date | null;
  endTime?: Date | null;
  user?: UserWhereUniqueInput | null;
  clickEvents?: ClickEventCreateNestedManyWithoutGameSessionsInput;
};
