import { GameSessionWhereUniqueInput } from "../gameSession/GameSessionWhereUniqueInput";

export type ClickEventUpdateInput = {
  clickTime?: Date | null;
  gameSession?: GameSessionWhereUniqueInput | null;
};
