import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ClickEventResolverBase } from "./base/clickEvent.resolver.base";
import { ClickEvent } from "./base/ClickEvent";
import { ClickEventService } from "./clickEvent.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ClickEvent)
export class ClickEventResolver extends ClickEventResolverBase {
  constructor(
    protected readonly service: ClickEventService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
