# Build Task: zoom-meeting-engagement-scorer

Build a complete, production-ready Next.js 15 App Router application.

PROJECT: zoom-meeting-engagement-scorer
HEADLINE: Score student engagement in virtual classes
WHAT: Analyzes video, audio, and chat patterns to score student engagement in online classes
WHY: Online learning engagement dropped 40% post-COVID, teachers struggle to measure participation
WHO PAYS: Online educators and training coordinators
NICHE: education-tech
PRICE: $$10/mo

ARCHITECTURE SPEC:
A Next.js web app that integrates with Zoom's SDK to analyze meeting recordings and real-time data, processing video frames for facial expressions, audio levels for participation, and chat activity to generate engagement scores. Uses AI models for sentiment analysis and attention detection, with a dashboard for educators to view individual and class-wide engagement metrics.

PLANNED FILES:
- app/page.tsx
- app/dashboard/page.tsx
- app/api/zoom/webhook/route.ts
- app/api/analyze/route.ts
- app/api/payments/route.ts
- components/EngagementDashboard.tsx
- components/StudentMetrics.tsx
- components/PricingCard.tsx
- lib/zoom-sdk.ts
- lib/engagement-analyzer.ts
- lib/ai-models.ts
- lib/database.ts
- lib/lemonsqueezy.ts

DEPENDENCIES: next, tailwindcss, @zoom/videosdk, prisma, @prisma/client, openai, @tensorflow/tfjs, recharts, lemonsqueezy.js, stripe, next-auth, zod, lucide-react

REQUIREMENTS:
- Next.js 15 with App Router (app/ directory)
- TypeScript
- Tailwind CSS v4
- shadcn/ui components (npx shadcn@latest init, then add needed components)
- Dark theme ONLY — background #0d1117, no light mode
- Stripe Payment Link for payments (hosted checkout — use the URL directly as the Buy button href)
- Landing page that converts: hero, problem, solution, pricing, FAQ
- The actual tool/feature behind a paywall (cookie-based access after purchase)
- Mobile responsive
- SEO meta tags, Open Graph tags
- /api/health endpoint that returns {"status":"ok"}
- NO HEAVY ORMs: Do NOT use Prisma, Drizzle, TypeORM, Sequelize, or Mongoose. If the tool needs persistence, use direct SQL via `pg` (Postgres) or `better-sqlite3` (local), or just filesystem JSON. Reason: these ORMs require schema files and codegen steps that fail on Vercel when misconfigured.
- INTERNAL FILE DISCIPLINE: Every internal import (paths starting with `@/`, `./`, or `../`) MUST refer to a file you actually create in this build. If you write `import { Card } from "@/components/ui/card"`, then `components/ui/card.tsx` MUST exist with a real `export const Card` (or `export default Card`). Before finishing, scan all internal imports and verify every target file exists. Do NOT use shadcn/ui patterns unless you create every component from scratch — easier path: write all UI inline in the page that uses it.
- DEPENDENCY DISCIPLINE: Every package imported in any .ts, .tsx, .js, or .jsx file MUST be
  listed in package.json dependencies (or devDependencies for build-only). Before finishing,
  scan all source files for `import` statements and verify every external package (anything
  not starting with `.` or `@/`) appears in package.json. Common shadcn/ui peers that MUST
  be added if used:
  - lucide-react, clsx, tailwind-merge, class-variance-authority
  - react-hook-form, zod, @hookform/resolvers
  - @radix-ui/* (for any shadcn component)
- After running `npm run build`, if you see "Module not found: Can't resolve 'X'", add 'X'
  to package.json dependencies and re-run npm install + npm run build until it passes.

ENVIRONMENT VARIABLES (create .env.example):
- NEXT_PUBLIC_STRIPE_PAYMENT_LINK  (full URL, e.g. https://buy.stripe.com/test_XXX)
- NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY  (pk_test_... or pk_live_...)
- STRIPE_WEBHOOK_SECRET  (set when webhook is wired)

BUY BUTTON RULE: the Buy button's href MUST be `process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK`
used as-is — do NOT construct URLs from a product ID, do NOT prepend any base URL,
do NOT wrap it in an embed iframe. The link opens Stripe's hosted checkout directly.

After creating all files:
1. Run: npm install
2. Run: npm run build
3. Fix any build errors
4. Verify the build succeeds with exit code 0

Do NOT use placeholder text. Write real, helpful content for the landing page
and the tool itself. The tool should actually work and provide value.


PREVIOUS ATTEMPT FAILED WITH:
Codex exited 1: Reading additional input from stdin...
OpenAI Codex v0.121.0 (research preview)
--------
workdir: /tmp/openclaw-builds/zoom-meeting-engagement-scorer
model: gpt-5.3-codex
provider: openai
approval: never
sandbox: danger-full-access
reasoning effort: xhigh
reasoning summaries: none
session id: 019debe9-48ca-79b2-8b1a-c602de880f50
--------
user
# Build Task: zoom-meeting-engagement-scorer

Build a complete, production-ready Next.js 15 App Router application.

PROJECT: zoom-meeting-engagement-score
Please fix the above errors and regenerate.