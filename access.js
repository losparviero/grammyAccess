/*!
 * grammYAccess
 * Copyright(c) 2023
 *
 * @author Zubin
 * @username (GitHub) losparviero
 * @license MIT
 */

/*
      PLUGIN CODE

*/

// PRO [PLUGIN]

const proUsers = process.env.PRO_USERS?.split(",").map(Number) || [];
async function pro(ctx, next) {
  ctx.config = {
    botProUsers: proUsers,
    isPro: proUsers.includes(ctx.chat?.id),
  };
}

bot.use(pro);

// Example Usage

bot.on("message", (ctx) => {
  if (ctx.config.isPro) {
    ctx.reply("You are a Pro user.");
    // Implement logic for pro users here
  } else {
    ctx.reply("You are a normal user.");
  }
});

// ADMIN [PLUGIN]

const admins = process.env.BOT_ADMIN?.split(",").map(Number) || [];
async function admin(ctx, next) {
  ctx.config = {
    botAdmins: admins,
    isAdmin: admins.includes(ctx.chat?.id),
  };
  await next();
}

bot.use(admin);

// Example Usage

bot.on("message", (ctx) => {
  if (ctx.config.isAdmin) {
    ctx.reply("You are an admin");
    // Implement logic for admins here
  } else {
    ctx.reply("You are not authorized to use this bot.");
  }
});
