import log from "./index.js";

log.info("Server started");
log.warn("Low disk space");
log.error("DB connection failed");
log.success("User created");
log.custom("debug", "Loading config", { fg: "cyan", bg: "black" });
