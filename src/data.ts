export const sample = {
  "repoName": "foxhen-content-calendar-ops",
  "title": "Content Calendar Ops",
  "subtitle": "Publishing workflow sample",
  "serviceLine": "Content operations dashboard",
  "heroTitle": "A calm publishing calendar for content-heavy teams.",
  "heroCopy": "A fictional editorial ops board that turns scattered ideas into assigned posts, approval states, asset readiness, and exportable schedule notes.",
  "primaryAction": "Open calendar",
  "secondaryAction": "Export queue",
  "repositoryUrl": "https://github.com/foxandhenllc/foxhen-content-calendar-ops",
  "liveDemoUrl": "https://foxhen-content-calendar-ops.vercel.app",
  "theme": {
    "accent": "#8b3f5d",
    "accent2": "#f4ba62",
    "ink": "#160711",
    "soft": "#faedf3",
    "warm": "#fff4df",
    "surface": "#fffaf4",
    "muted": "#5c667a",
    "border": "rgba(7, 18, 31, 0.12)"
  },
  "metrics": [
    {
      "label": "Scheduled posts",
      "value": "18",
      "note": "next 14 days"
    },
    {
      "label": "Asset readiness",
      "value": "82%",
      "note": "+26 pts"
    },
    {
      "label": "Blocked items",
      "value": "4",
      "note": "needs approval"
    }
  ],
  "stages": [
    {
      "label": "Ideas",
      "detail": "Capture rough topics and attach audience, channel, and proof of value.",
      "status": "ready",
      "owner": "Editor",
      "index": 1
    },
    {
      "label": "Production",
      "detail": "Move assets into draft, design, caption, and QA lanes.",
      "status": "active",
      "owner": "Studio",
      "index": 2
    },
    {
      "label": "Approval",
      "detail": "Keep blocked posts visible with exact decision needed.",
      "status": "waiting",
      "owner": "Owner",
      "index": 3
    },
    {
      "label": "Publish",
      "detail": "Package a schedule export with reminders and fallback slots.",
      "status": "queued",
      "owner": "Ops",
      "index": 4
    }
  ],
  "workItems": [
    {
      "title": "Founder post",
      "detail": "Convert raw note into LinkedIn-ready draft",
      "status": "ready"
    },
    {
      "title": "Case study clip",
      "detail": "Attach thumbnail and caption checklist",
      "status": "active"
    },
    {
      "title": "Email teaser",
      "detail": "Waiting on product screenshot",
      "status": "waiting"
    },
    {
      "title": "Friday recap",
      "detail": "Queued for export bundle",
      "status": "queued"
    }
  ],
  "deliverables": [
    {
      "title": "Calendar board",
      "detail": "A weekly view with channel, owner, deadline, and state."
    },
    {
      "title": "Asset queue",
      "detail": "Clear production blockers and missing creative fields."
    },
    {
      "title": "Export memo",
      "detail": "A human-readable schedule handoff for publishing."
    }
  ],
  "timeline": [
    {
      "time": "0-2 hrs",
      "detail": "Inventory content and channels"
    },
    {
      "time": "2-12 hrs",
      "detail": "Structure queue and approval workflow"
    },
    {
      "time": "12-24 hrs",
      "detail": "QA schedule and prepare export notes"
    }
  ],
  "proof": [
    "Useful for content ops and social scheduling gigs.",
    "Shows operator thinking around approvals and reuse.",
    "Keeps demo data fictional and brand-safe."
  ]
} as const;

export type StageStatus = "ready" | "active" | "waiting" | "queued";
export type DemoStage = (typeof sample.stages)[number];
export type WorkItem = (typeof sample.workItems)[number];
