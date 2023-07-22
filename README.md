# grammYAdmin

Access control plugin for the [grammY](https://github.com/grammyjs/grammy) framework!

<br>

### Features

Middleware for grammY which blocks unauthorized requests. Use this to ensure only authorized Telegram IDs (admins) can use your bot.

<br>

### Usage

Copy the plugin code from ```access.js``` and use it in your grammY project. All messages sent to your bot by an ID not in the pre-defined admin list will be blocked from being able to execute further code and waste CPU cycles. You will get a console notification of their details, and they will get the message "You are not authorized to use this bot." when they try to use the bot. Only commands or messages beginning with a '/' are allowed.

_Note: The admin list is stored in env_

<br>

### Future Implementations

1. Add support for multiple Telegram IDs (currently untested)
2. Allow one step admin only access on/off using a feature flag config
3. Implement time based access

_Note: 'Admin' here only refers to the list of Telegram IDs included in the env. It has nothing to do with group admins or any other._

<br>

### Contribute

If you'd like to contribute to the project, please read grammY's [guide to plugins](https://grammy.dev/plugins/guide.html), then open a PR.

<br>

### License

MIT  ©️ Zubin