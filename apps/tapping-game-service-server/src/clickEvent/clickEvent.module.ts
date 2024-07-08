import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ClickEventModuleBase } from "./base/clickEvent.module.base";
import { ClickEventService } from "./clickEvent.service";
import { ClickEventController } from "./clickEvent.controller";
import { ClickEventResolver } from "./clickEvent.resolver";

@Module({
  imports: [ClickEventModuleBase, forwardRef(() => AuthModule)],
  controllers: [ClickEventController],
  providers: [ClickEventService, ClickEventResolver],
  exports: [ClickEventService],
})
export class ClickEventModule {}
