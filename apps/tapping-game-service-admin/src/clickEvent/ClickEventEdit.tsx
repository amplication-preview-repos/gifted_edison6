import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { GameSessionTitle } from "../gameSession/GameSessionTitle";

export const ClickEventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
