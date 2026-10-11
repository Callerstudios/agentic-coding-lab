# Agentic Coding Lab

A hands-on learning project for exploring **agentic coding with OpenAI Codex**.

This repository serves as a practical environment for learning how to guide, configure, and supervise AI coding agents. Rather than relying on one-shot prompts, the goal is to build reliable development workflows through clear instructions, reusable skills, code reviews, testing, and verification.

## Goals

- Understand how AI coding agents inspect and modify codebases.
- Learn to write effective `AGENTS.md` instructions.
- Create reusable Codex skills using `SKILL.md`.
- Practice planning and implementing features in small, controlled steps.
- Learn to review generated code and verify agent claims.
- Use Git to track changes and recover from mistakes.
- Explore automated checks, hooks, subagents, and MCP integrations.
- Develop good habits for safe and maintainable AI-assisted development.

## Practice Project

The initial project is a simple task-management website built with vanilla web technologies.

### Features

- Create tasks.
- Validate task input.
- Display task-creation feedback.
- Structure content with semantic HTML.
- Style the interface with CSS.
- Handle interactions with JavaScript.
- Practice accessibility and responsive-design improvements.

Additional features and testing tools will be introduced as the learning progresses.

## Technology Stack

- HTML
- CSS
- Vanilla JavaScript
- OpenAI Codex
- Git and GitHub

No frontend framework is required for the initial exercises.

## Repository Structure

```text
agentic-coding-lab/
├── .agents/
│   └── skills/
│       └── frontend-review/
│           └── SKILL.md
├── AGENTS.md
├── index.html
├── styles.css
├── script.js
├── package.json
└── README.md
```

The structure will evolve as new concepts and tools are introduced.

## Learning Roadmap

1. **Project instructions** — Configure `AGENTS.md` and learn how Codex uses repository guidance.
2. **Planning and implementation** — Break features into small, verifiable tasks.
3. **Code review** — Identify defects and distinguish potential issues from confirmed bugs.
4. **Skills** — Create reusable workflows with `SKILL.md`.
5. **Testing** — Validate behavior and reduce regressions.
6. **Git workflows** — Use commits and diffs to manage agent-generated changes.
7. **Hooks and automation** — Introduce automated checks and controlled workflows.
8. **Subagents** — Explore task delegation and independent reviews.
9. **MCP integrations** — Learn how agents connect to external tools.
10. **Advanced workflows** — Combine these concepts into a repeatable development process.

## Development Principles

- Inspect before modifying.
- Plan before implementing non-trivial changes.
- Prefer small, focused changes.
- Avoid unnecessary dependencies and refactoring.
- Review generated code rather than blindly accepting it.
- Run relevant checks and report their actual results.
- Keep a clean Git history and use checkpoints before risky changes.
- Treat security, correctness, accessibility, and maintainability as part of implementation.

## Purpose

This is a learning lab, not a production-ready application.

The objective is to understand **how to work effectively with AI coding agents**, including their capabilities, limitations, failure modes, and verification requirements.

As the project grows, the lessons learned here can be applied to larger applications and different technology stacks.

---

Built while learning agentic coding with OpenAI Codex.
