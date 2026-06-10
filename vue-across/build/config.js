// Shared frontend dev/build config.
// This file is imported by vite.config.ts and scripts/scriptUtils.js.
export const serverPort = Number.parseInt(process.env.VITE_DEV_SERVER_PORT || process.env.PORT || '5173', 10);
