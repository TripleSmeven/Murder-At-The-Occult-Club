# Copilot Instructions for Murder at the Occult Club

## Project Overview

**Murder at the Occult Club** is a browser-based murder mystery puzzle game built with Next.js (v16) and React 19. It's deployed on Vercel. The game features a full storyline with characters, evidence investigation mechanics, fill-in-the-blank puzzles, and automatic progress saving via localStorage.

**Play**: https://murder-at-the-occult-club.vercel.app/

## Build, Test & Lint Commands

``ash
# Development
npm run dev              # Start development server (http://localhost:3000)

# Production
npm run build            # Build for production
npm start                # Start production server

# Code Quality
npm run lint             # Run ESLint on the entire codebase
npm run lint -- app      # Lint only the app directory
npm run lint -- app/game/page.tsx  # Lint specific file
``

**Note**: ESLint is configured with Next.js best practices (ESLint 9+), TypeScript support, and Prettier formatting integration. No separate test suite exists.

## Architecture & Structure

### High-Level Game Flow

The game is organized around a **tab-based interface** with progressive unlocking:
- **Stage 0**: Initial evidence (Letter from X, Police Report)
- **Stage 1**: Secondary evidence unlocked after Police Report objectives (Newspaper, Recipe)
- **Stage 2**: Secondary investigation sources unlocked (Text Messages, Emails, Online Orders)
- **Stage 3**: Final content (Potluck Planner, Solve the Case)

Each section tracks progress independently through objectives, which feed into unlock logic.

### Context-Based State Management

All game state uses **React Context** (no Redux/external state):

- **GameContext** (app/game/components/GameContext.tsx): Wraps everything, nests three providers
- **StageContext** (app/game/components/StageContext.tsx): Current game stage (0-3)
- **GlobalNotesContext** (app/game/components/GlobalNotesContext.tsx): Player notepad content
- **ObjectivesContext** (app/game/components/ObjectivesContext.tsx): Objective completion status for each section

All contexts persist to localStorage and sync on mount.

### Custom Hook Pattern

- **useLocalStorage(key: string)** returns [value, setValue] tuple
  - Safely handles SSR (prevents "window is not defined" errors)
  - Used internally by contexts for automatic persistence
  - See usage note in useLocalStorage.ts for why useEffect is needed

### Data Organization

Content data lives in separate TypeScript files (not components):
- app/game/tabContentComponents/*/[ContentName]Jsons.ts - Contains game content arrays (conversations, emails, orders, etc.)
- ObjectivesJson.ts - Defines interfaces for objective structure (questions with multiple answer options and colors)

Components import these data files and render them, keeping presentation separate from content.

### Font Strategy

Each game section uses a **thematic Google Font** to enhance immersion:
- Handlee: Notepad
- Patrick Hand: Letter from X
- Special Elite: Police Report
- Gochi Hand: Recipe
- Noto Sans: Text messages
- Roboto: Emails
- Newsreader: Newspaper
- Indie Flower: Word picker
- Permanent Marker: Notepad
- Space Mono: Default

Fonts are loaded in app/game/layout.tsx with CSS variables (--font-*).

### Component Structure

**Tab Content Components** (app/game/tabContentComponents/*/):
- Inherit from TabContentBase.tsx (provides common functionality)
- Each has its own .module.css file
- Import and render data from corresponding .ts files
- Interact with contexts to read/update objectives

**Shared Components** (app/game/components/):
- Context providers
- WordPicker.tsx - Multi-choice puzzle UI
- CustomCarousel.tsx - Evidence carousel
- Notepad.tsx - Player notes interface
- All use React Context for state

### CSS & Styling

- **Bootstrap** (v5.3.8) via react-bootstrap for layout and components
- **CSS Modules** for component-scoped styles (.module.css files)
- **Prettier** configured with 100-character line width (printWidth: 100)
- **Important**: All styles must be defined in `.module.css` files. Never use inline `style` props or CSS-in-JS. Exception: dynamic styles dependent on React state can use inline styles only when necessary (e.g., opacity based on state), but base/static styles always go in the module file.

## Key Conventions

### File Naming

- Components: PascalCase (e.g., LetterFromX.tsx)
- Data/utilities: camelCase (e.g., useLocalStorage.ts)
- Styles: [ComponentName].module.css
- Context providers: [ContextName]Context.tsx

### Client vs Server

- All interactive game components use "use client" directive (client-side rendering)
- Layout files (layout.tsx) handle metadata and font loading

### TypeScript Patterns

- Strict mode enabled in tsconfig.json
- React 19 uses functional components with hooks
- Context types are explicitly defined with interfaces
- Import paths use @/* alias for root imports

### Progress Persistence

- All progress saves to localStorage automatically via contexts
- Contexts sync on component mount via useEffect
- Reset functionality clears localStorage and reloads page
- No backend API required

### Answer Validation

- Objectives use color-coded answers for visual feedback
- Multiple answer formats supported (single answer vs. array of answers)
- See ObjectivesJson.ts for interface structure

## Common Tasks

### Adding New Evidence/Content Section

1. Create new folder under app/game/tabContentComponents/[SectionName]/
2. Create [SectionName].tsx component (add "use client" and import context)
3. Create [SectionName]Jsons.ts with content data
4. Create [SectionName].module.css for styles
5. Import into app/game/page.tsx and add new Tab.Pane
6. Add NavItemWithLock entry in the navigation

### Adding New Objectives

1. Edit or create ObjectivesJson.ts for that section
2. Component imports the interface and renders objectives using WordPicker
3. On correct answer, update ObjectivesContext to mark as complete
4. Trigger any stage unlocks or progress updates based on completion

### Modifying Game Unlock Logic

- Edit StageContext.tsx to change stage progression rules
- Update tooltip messages in app/game/page.tsx NavItemWithLock component
- Stage changes automatically persist to localStorage

## Technology Stack

- **Framework**: Next.js 16.1.3 with TypeScript 5
- **UI**: React 19.2.3 + Bootstrap 5.3.8 + react-bootstrap 2.10.10
- **Styling**: CSS Modules + Prettier
- **Linting**: ESLint 9 with Next.js config + Prettier integration
- **Fonts**: Google Fonts (loaded server-side in layout)
- **Deployment**: Vercel

## Deployment Notes

The app is deployed on Vercel with automatic deployments from the main branch. No environment variables or special configuration required for basic functionality.
