# AI UI Generator (Claude-style)

A MERN stack project for generating React UI code from natural language using a deterministic component library, version history, and live preview.

## Features
- AI agent pipeline: Planner → Generator → Explainer
- Deterministic UI component library (ui-library)
- Version history and rollback
- Live preview and Monaco code editor
- Prompt separation
- Validation and whitelist enforcement

## Tech Stack
- React, Zustand/Redux, Monaco Editor, Sandpack
- Node.js, Express.js, MongoDB, Zod, OpenAI/Anthropic

## Folder Structure
- `client/` - Frontend
- `server/` - Backend
- `shared/` - Shared logic
- `ui-library/` - Whitelisted components
- `prompts/` - AI prompt templates

## Setup
1. Install dependencies in `client/`, `server/`, and `shared/`.
2. Configure `.env` for API keys and MongoDB.
3. Run backend and frontend servers.

## Security
- Middleware for validation and whitelist enforcement.

## License
MIT
