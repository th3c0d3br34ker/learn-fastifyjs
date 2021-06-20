import pino from "pino";

export const logger = pino({
  prettyPrint: {
    translateTime: "SYS:h:MM:ss TT o",
    colorize: true,
    ignore: "pid, hostname",
    messageFormat: "{levelLabel} - {req.url} - {msg}",
    hideObject: true,
  },
});
