import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ClickEventUpdateManyWithoutGameSessionsInput } from "./ClickEventUpdateManyWithoutGameSessionsInput";

export type GameSessionUpdateInput = {
  score?: number | null;
  startTime?: Date | null;
  endTime?: Date | null;
  user?: UserWhereUniqueInput | null;
  clickEvents?: ClickEventUpdateManyWithoutGameSessionsInput;
};
