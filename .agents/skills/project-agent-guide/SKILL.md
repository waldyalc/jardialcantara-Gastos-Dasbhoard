---
name: project-agent-guide
description: Create or improve portable AGENTS.md guides and agent handoff instructions for software projects. Use when asked to document how future AI agents, Codex instances, or other models should understand a repo, preserve user preferences, avoid unsafe changes, deploy safely, test the app, or continue work without relying on chat history.
---

# Project Agent Guide

## Purpose

Write a practical `AGENTS.md` or equivalent guide that lets another agent work well in the project with minimal prior context. Treat the guide as operational memory: what the project is, how to run it, what matters to the user, what not to break, and how to verify changes.

## Workflow

1. Inspect the repo before writing. Read existing `AGENTS.md`, README, config examples, package/build files, deployment files, schemas, and the main app entry points.
2. Identify the real project shape: framework or static app, data sources, auth, deployment path, languages, tests, generated files, and important local-only files.
3. Capture user decisions separately from guesses. Mark unstable or future work as pending rather than current behavior.
4. Write instructions that another model can execute without this chat. Prefer exact file names, commands, URLs, credentials placeholders, and safety boundaries.
5. Keep the guide concise but complete. Remove stale claims when the code does not support them.
6. Verify the guide against the repo after editing: no contradictions, no secrets, no impossible commands, and no feature described as shipped unless it exists.

## Required Sections

Use these sections unless the project already has a stronger structure:

- Project: what the app does, who it is for, domain language, currency/locale, and production target.
- Current Structure: important files and folders, including generated or ignored files when relevant.
- Current Flow: startup, auth, data loading, persistence, and key user workflows.
- Data And Integrations: schemas, APIs, third-party services, environment variables, and known setup requirements.
- Security Rules: secrets that must never be committed, auth/RLS constraints, tokens that belong only in backend systems.
- Design And UX: user language, tone, visual preferences, accessibility or responsive rules, and product boundaries.
- How To Test: exact local commands, URLs, accounts, manual checks, automated tests, and browser QA expectations.
- Deploy: repo/branch, host, build settings, domain/DNS notes, and what triggers production.
- Change Rules: how to handle dirty worktrees, config files, generated files, migrations, and out-of-scope features.
- Known Pending State: uncertain setup, missing migrations, future work, and decisions that still need confirmation.

## Writing Rules

- Use imperative language for future agents: "Do X", "Do not Y", "Verify Z".
- Prefer facts discovered from files over narrative from memory.
- If the user has personal preferences, record them as preferences, not universal engineering rules.
- If a feature is planned but not deployed, say "future" or "pending"; do not describe it as current UI.
- Include placeholders for credentials, never real secrets.
- Mention ignored local files only when agents need to know they exist, such as `config.js`.
- Keep examples short and runnable. Avoid broad tutorials.
- If the app may be used with another model, include enough context that the next agent does not need hidden chat history.

## Safety Checklist

Before finishing, check:

- No `service_role`, private database URL, OAuth client secret, refresh token, API token, or personal secret appears in the guide.
- The guide does not instruct agents to disable RLS, bypass auth, or commit local config with secrets.
- Deploy instructions match the actual project type and do not invent a build step.
- Testing instructions can run from the repo root.
- Future features are clearly separated from shipped behavior.
- The guide names files with exact paths relative to the repo root.
