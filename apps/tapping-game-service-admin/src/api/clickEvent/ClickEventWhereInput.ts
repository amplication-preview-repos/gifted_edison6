import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { GameSessionWhereUniqueInput } from "../gameSession/GameSessionWhereUniqueInput";

export type ClickEventWhereInput = {
  id?: StringFilter;
  clickTime?: DateTimeNullableFilter;
  gameSession?: GameSessionWhereUniqueInput;
};
