import { defineConfig } from "@tanstack/react-start/config";
import tailwindcss from "@tailwindcss/vite";
import viteTsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  // ✅ FIX: Explicitly set Vercel as the deployment preset.
  // Previously, @lovable.dev/vite-tanstack-config was silently defaulting to
  // Cloudflare Workers — evident from wrangler.json appearing in build output.
  server: {
    preset: "vercel",
  },

  tsr: {
    // Tells TanStack Router where to find your route files
    appDirectory: "src",
  },

  vite: {
    server: {
      port: 5173,
    },
    plugins: [
      // Tailwind CSS v4 vite plugin
      tailwindcss(),

      // Resolves path aliases from tsconfig.json (e.g. "@/components/...")
      viteTsConfigPaths({
        projects: ["./tsconfig.json"],
      }),
    ],
  },
});