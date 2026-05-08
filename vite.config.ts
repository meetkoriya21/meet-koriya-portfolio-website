import { defineConfig } from "@lovable.dev/vite-tanstack-config";
 
export default defineConfig({
  tanstackStart: {
    server: {
      entry: "server",
      preset: "vercel", // ✅ FIX: Tells TanStack Start/Nitro to build for Vercel's serverless runtime
    },
  },
 
  vite: {
    server: {
      port: 5173,
    },
  },
});
 