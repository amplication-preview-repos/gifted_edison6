/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ClickEventWhereUniqueInput } from "./ClickEventWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ClickEventUpdateInput } from "./ClickEventUpdateInput";

@ArgsType()
class UpdateClickEventArgs {
  @ApiProperty({
    required: true,
    type: () => ClickEventWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ClickEventWhereUniqueInput)
  @Field(() => ClickEventWhereUniqueInput, { nullable: false })
  where!: ClickEventWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ClickEventUpdateInput,
  })
  @ValidateNested()
  @Type(() => ClickEventUpdateInput)
  @Field(() => ClickEventUpdateInput, { nullable: false })
  data!: ClickEventUpdateInput;
}

export { UpdateClickEventArgs as UpdateClickEventArgs };
