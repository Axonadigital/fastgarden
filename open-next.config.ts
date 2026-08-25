import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Sidan är helt statiskt renderad (inga API-routes, server actions eller ISR),
// så ingen incremental cache behövs — det sparar en R2-bucket och dess kostnad.
export default defineCloudflareConfig();
