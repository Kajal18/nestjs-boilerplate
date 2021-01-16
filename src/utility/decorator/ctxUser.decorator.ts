import { createParamDecorator } from "@nestjs/common";

export const ctxUser = createParamDecorator(
  (data, [root, args, ctx, info]) => ctx.req.user,
);