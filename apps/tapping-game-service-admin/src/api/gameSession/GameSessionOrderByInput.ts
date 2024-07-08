import { SortOrder } from "../../util/SortOrder";

export type GameSessionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  score?: SortOrder;
  startTime?: SortOrder;
  endTime?: SortOrder;
  userId?: SortOrder;
};
