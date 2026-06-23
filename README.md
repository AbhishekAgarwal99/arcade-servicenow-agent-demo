# arcade-servicenow-agent-demo

Engineering escalation demo repository for the Arcade ServiceNow agent interview.

This repo contains seeded bugs and source files that align with ServiceNow incidents and KB articles in the demo PDI.

## Demo areas

- VPN client stability (`src/vpn/`)
- SSO login callback handling (`src/auth/`)
- Status page health reporting (`src/status/`)
- Slack incident notifications (`src/slack/`)
- Customer search cache freshness (`src/search/`)

## Related systems

- **ServiceNow PDI** — system of record for incidents
- **GitHub** — engineering escalation tracker
- **Slack** — triage notifications
- **Arcade** — authorized tool execution layer

## Seeded GitHub issues

- VPN client crashes after latest desktop update
- Blank screen after SSO callback
- Status page shows healthy during partial outage
- Slack notification failed for P1 incident
- Search results return stale customer records
