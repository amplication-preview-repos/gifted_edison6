import { SortOrder } from "../../util/SortOrder";

export type ClickEventOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  clickTime?: SortOrder;
  gameSessionId?: SortOrder;
};
