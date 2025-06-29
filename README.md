# 🎨 colorful-logger

A stylish, single-line, colorful console logger for Node.js (ES Modules). Includes timestamps, log levels, and customizable colors — perfect for modern CLI and backend tools.

---

## 🚀 Installation

## ✨ Features

- 🎯 Single-line logs (timestamp, level, message)
- 🎨 Customizable foreground & background colors
- 🕒 Includes 24-hour time
- 🛠 Easy to use & lightweight (powered by [chalk](https://www.npmjs.com/package/chalk))
- 📦 Ready for ESM / modern projects

---



import log from "colorful-logger";

log.info("Server started");
log.warn("Low disk space");
log.error("Unable to connect to database");
log.success("User registration complete");
log.custom("debug", "This is a debug log", { fg: "cyan", bg: "black" });



| Method          | Description                   | Colors          |
| --------------- | ----------------------------- | --------------- |
| `log.info()`    | ℹ️ Info message               | White on Blue   |
| `log.warn()`    | ⚠️ Warning message            | Black on Yellow |
| `log.error()`   | ❌ Error message               | White on Red    |
| `log.success()` | ✅ Success message             | White on Green  |
| `log.custom()`  | 🎛 Custom tag, message, color | Any color       |


```bash
npm install colorful-logger
