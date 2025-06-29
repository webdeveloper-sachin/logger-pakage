import chalk from "chalk";

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
const getTime = () =>
  new Date().toLocaleTimeString("en-GB", { hour12: false });

const formatLog = (level, levelStyle, message) => {
  const timestamp = chalk.white.bgGray(` ${getTime()} `);
  const levelTag = levelStyle.bold(` ${level.toUpperCase()} `);
  const messageText = levelStyle(` ${message} `);
  return `\n${levelTag} ${timestamp} ${messageText}`;
};

const log = {
  info: (message) => console.log(formatLog("INFO", chalk.white.bgBlue, message)),
  warn: (message) => console.log(formatLog("WARN", chalk.black.bgYellow, message)),
  error: (message) => console.log(formatLog("ERROR", chalk.white.bgRed, message)),
  success: (message) => console.log(formatLog("SUCCESS", chalk.white.bgGreen, message)),
  custom: (tag, message, { fg = "white", bg = "magenta" } = {}) => {
    const levelStyle = chalk[fg][`bg${capitalize(bg)}`];
    console.log(formatLog(tag, levelStyle, message));
  }
};

export default log;
