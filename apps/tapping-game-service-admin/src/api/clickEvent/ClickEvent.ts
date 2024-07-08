import { GameSession } from "../gameSession/GameSession";

export type ClickEvent = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  clickTime: Date | null;
  gameSession?: GameSession | null;
};
