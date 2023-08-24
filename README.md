# grammYAdmin

Access control plugin for the [grammY](https://github.com/grammyjs/grammy) framework!

### Features

Middleware for grammY which lets you implement separate logic for admins or paid/pro users.

Use this to ensure only authorized Telegram IDs (admins) can use your bot or certain features.

### Usage

Copy the plugin code from ```access.js``` and use it in your grammY project.

Messages sent to your bot are checked against user IDs in admin or pro user list.

Implement separate logic for admins and pro users.

### Example

1. To only let paid users access the bot

```node
bot.on("message" => (ctx){
    if (ctx.config.isPro) {
        ctx.reply("Hello 👋 You are a Pro user.")
    } else {
        ctx.reply ("Please subscribe to a paid plan to use the bot.)
    }
})
```

2. To only let admins access the bot

```node
bot.on("message" => (ctx){
    if (ctx.config.isAdmin) {
        ctx.reply("Hello 👋 You are an admin.")
    } else {
        ctx.reply ("You are unauthorized to use the bot.")
    }
})
```

_Note: The admin or pro user list is stored in env_

### Future

1. Implement time based access
2. Replace env management of access list to db

_Note: 'Admin' here only refers to the list of Telegram IDs included in the env. It has nothing to do with group admins or any other._

### Contribute

If you'd like to contribute to the project, please read grammY's [guide to plugins](https://grammy.dev/plugins/guide.html), then open a PR.

### License

MIT  ©️ Zubin