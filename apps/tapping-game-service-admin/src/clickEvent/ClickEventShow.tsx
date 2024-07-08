import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { GAMESESSION_TITLE_FIELD } from "../gameSession/GameSessionTitle";

export const ClickEventShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="clickTime" source="clickTime" />
        <ReferenceField
          label="gameSession"
          source="gamesession.id"
          reference="GameSession"
        >
          <TextField source={GAMESESSION_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
