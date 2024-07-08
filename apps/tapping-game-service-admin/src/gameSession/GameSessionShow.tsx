import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { GAMESESSION_TITLE_FIELD } from "./GameSessionTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const GameSessionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="score" source="score" />
        <TextField label="startTime" source="startTime" />
        <TextField label="endTime" source="endTime" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="ClickEvent"
          target="gameSessionId"
          label="ClickEvents"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
