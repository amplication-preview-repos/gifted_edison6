import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { GameSessionTitle } from "../gameSession/GameSessionTitle";

export const ClickEventCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="clickTime" source="clickTime" />
        <ReferenceInput
          source="gameSession.id"
          reference="GameSession"
          label="gameSession"
        >
          <SelectInput optionText={GameSessionTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
