import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ClickEventListRelationFilter } from "../clickEvent/ClickEventListRelationFilter";

export type GameSessionWhereInput = {
  id?: StringFilter;
  score?: IntNullableFilter;
  startTime?: DateTimeNullableFilter;
  endTime?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
  clickEvents?: ClickEventListRelationFilter;
};
