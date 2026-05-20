# Content Calendar Ops

Public Fox & Hen working sample for a **content operations dashboard**.

![Demo screenshot](docs/demo-screenshot.png)

## Live Demo

- Demo: [https://foxhen-content-calendar-ops.vercel.app](https://foxhen-content-calendar-ops.vercel.app)
- Repository: [https://github.com/foxandhenllc/foxhen-content-calendar-ops](https://github.com/foxandhenllc/foxhen-content-calendar-ops)

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

## Local Run

```bash
npm install
npm run dev
npm run build
```

## Public-Safe Scope

This is a static React/Vite demo with fictional sample data. It includes no production data, credentials, real contacts, copied customer work, backend, auth, or external service calls.
