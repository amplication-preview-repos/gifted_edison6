import { SortOrder } from "../../util/SortOrder";

export type LeaderboardOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  score?: SortOrder;
  rank?: SortOrder;
  userId?: SortOrder;
};
