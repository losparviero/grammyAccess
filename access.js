/*!
 * grammYAdmin
 * Copyright(c) 2023
 *
 * @author Zubin
 * @username (GitHub) losparviero
 * @license MIT
 */

/*
      PLUGIN CODE

*/

const admins = process.env.BOT_ADMIN?.split(",").map(Number) || [];
async function admin(ctx, next) {
  ctx.config = {
    botAdmins: admins,
    isAdmin: admins.includes(ctx.chat?.id),
  };

  if (
    ctx.message.text &&
    !ctx.message.text.includes("/") &&
    !ctx.config.isAdmin
  ) {
    ctx.reply("*You are not authorized to use this bot.*", {
      reply_to_message_id: ctx.message.message_id,
      parse_mode: "Markdown",
    });
    console.log("Unauthorized use detected by:\n", ctx.from);
    return;
  }
  await next();
}

bot.use(admin);
