import { GameSessionWhereUniqueInput } from "../gameSession/GameSessionWhereUniqueInput";

export type ClickEventCreateInput = {
  clickTime?: Date | null;
  gameSession?: GameSessionWhereUniqueInput | null;
};
