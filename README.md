# Content Calendar Ops

[![Build](https://github.com/foxandhenllc/foxhen-content-calendar-ops/actions/workflows/build.yml/badge.svg)](https://github.com/foxandhenllc/foxhen-content-calendar-ops/actions/workflows/build.yml)

Public Fox & Hen working sample for a **content operations dashboard**.

![Demo screenshot](docs/demo-screenshot.png)

## Live Demo

- Demo: [https://freetoolsforpeople.com/content-calendar-ops](https://freetoolsforpeople.com/content-calendar-ops)
- Repository: [https://github.com/foxandhenllc/foxhen-content-calendar-ops](https://github.com/foxandhenllc/foxhen-content-calendar-ops)

## Purpose

Content calendar operations board for ideas, assignments, approvals, publishing readiness, and schedule exports.

## What This Demo Is

Content Calendar Ops is a forkable React/Vite operating tool for teams that want to turn draft ideas, assets, approval blockers, schedule slots, and reuse notes into a publishing queue. It is intentionally small, static, and public-safe so you can copy the pattern without inheriting a backend or vendor lock-in.

## Fully Working Behaviors

- Search, filter, and sort a domain-specific workflow board.
- Add a fictional item and edit owner, notes, priority, value, effort, and friction.
- Advance status and watch readiness metrics update in real time.
- Run a 24-hour sprint simulation to reduce friction on the highest-scoring work.
- Toggle QA gates, generate a handoff report, and download the board as JSON.

## Workflow Template

See [docs/workflow-template.md](docs/workflow-template.md) for the sample publish-ready calendar loop, adaptation checklist, and public-safe data rules.

## Suggested Forks

- Swap sample cards for channels, campaigns, or recurring series.
- Score value by audience impact and effort by asset lift.
- Use checks as publish gates before export.
- Download JSON to seed Airtable, Sheets, or a CMS import.

## SEO / AIO Discoverability

**Plain-language answer:** Use this repo to manage ideas, assignments, approvals, publishing readiness, reuse notes, and schedule exports.

**Who it helps:** small marketing teams, agencies, and local businesses managing publishing queues.

**Search intents covered:**

- content calendar operations board
- publishing approval workflow
- small business content calendar
- content readiness dashboard

**Why this repo is useful:** It exposes what is ready, blocked, assigned, or reusable so content work becomes operational instead of scattered.

## Open Source Readiness

- MIT licensed for reuse, remixing, and client-safe adaptation.
- GitHub Actions build workflow runs install, typecheck, tests when present, and production build.
- Contribution guide, roadmap, and issue templates are included for public collaboration.
- Public-safe data policy keeps examples fictional and reviewable.

## Local Run

```bash
npm install
npm run dev
npm run build
```

## Validation

```bash
npm run typecheck --if-present
npm run test --if-present
npm run build --if-present
```

## Public-Safe Scope

This is a static React/Vite demo with fictional sample data. It includes no production data, credentials, real contacts, copied customer work, backend, auth, or external service calls.

## Contributing

See `CONTRIBUTING.md` for public-safe contribution rules, local validation commands, and good first contribution ideas. Roadmap items live in `ROADMAP.md`.

## License

MIT - see `LICENSE`.
