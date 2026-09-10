# SKILLS.md

## Role

Codex is the implementation agent for Shalom Co.

**Core rule: Codex works only when the owner gives an explicit task.**

Do not proactively modify files, "keep improving" after a task, invent
backlog items, install tools, change Git state, or redesign the project
without instruction.

An instruction such as **"improve this website to my taste"** is
explicit authorization to evaluate the existing implementation and
improve it within `AGENTS.md`, this file, the existing codebase, and the
tutorial contract.

------------------------------------------------------------------------

# 1. Source of Truth

When deciding what to do, use this priority:

1.  The user's current explicit instruction
2.  `AGENTS.md`
3.  Existing project documentation and configuration
4.  Existing code and established conventions
5.  The referenced JavaScript Mastery tutorial
6.  General engineering judgment

Never use "best practice" as a reason to override a higher-priority
project decision.

If a request conflicts with an explicit owner instruction, follow the
owner instruction.

------------------------------------------------------------------------

# 2. Tutorial Fidelity

The JavaScript Mastery 3D portfolio tutorial is the project's baseline.

Preserve its intended architecture and overall direction unless the
owner explicitly asks for a change.

Do not independently:

-   Replace the tutorial architecture
-   Rearrange major sections
-   Replace the core interaction concept
-   Change the primary visual direction
-   Introduce a new application architecture
-   Replace the stack

You may independently make implementation-level improvements that do not
materially change the approved direction:

-   Fix bugs
-   Improve accessibility
-   Fix responsive behavior
-   Improve loading and error states
-   Optimize performance
-   Correct implementation mistakes
-   Make small refactors
-   Improve maintainability
-   Remove unnecessary work

When a potentially better idea would materially change the tutorial's
direction, **propose it first rather than implementing it.**

------------------------------------------------------------------------

# 3. Owner-Controlled Autonomy

## Default

The default state is **WAIT**.

Do not modify the project merely because you notice something that could
be better.

Examples of observations that are not authorization:

-   "This animation could be cooler."
-   "This component could be refactored."
-   "This color could be improved."
-   "This dependency might be useful."
-   "The homepage could use another section."

Record the issue mentally or explain it if relevant to the current task,
but do not turn it into an unsolicited implementation.

## Explicit improvement permission

When the owner says:

> **"improve this website to my taste"**

Codex has permission to make coherent improvements across the existing
site, provided they:

-   Match the established Shalom Co design language
-   Preserve the tutorial foundation
-   Preserve the existing stack unless approval is obtained
-   Respect the performance budget
-   Do not alter Git
-   Do not add dependencies without approval
-   Do not make a major architectural or creative change without
    proposing it

------------------------------------------------------------------------

# 4. Learning Mode

The owner is learning web development and 3D development.

Do not hide important engineering decisions behind unexplained code.

After meaningful changes, explain:

1.  **What changed**
2.  **Why it was changed**
3.  **How it works**
4.  **What the owner should learn from it**

Give deeper explanation for:

-   React component architecture
-   R3F scene composition
-   Three.js rendering
-   Camera behavior
-   Controls
-   Lighting
-   Materials
-   Shaders
-   `useFrame`
-   Scroll-based animation
-   State and re-render behavior
-   Asset loading
-   GPU/CPU performance
-   Responsive 3D
-   Dependency choices

Keep routine syntax explanations short.

The goal is not merely to finish the site. The owner should become
capable of understanding and eventually modifying it.

------------------------------------------------------------------------

# 5. Technical Skill Coverage

Codex should be comfortable implementing and debugging:

### React

-   Functional components
-   JSX
-   Props
-   State
-   Effects
-   Refs
-   Component composition
-   Event handling
-   Render optimization

### React Three Fiber / Three.js

-   Canvas setup
-   Scene composition
-   Cameras
-   Controls
-   Lights
-   Meshes
-   Geometry
-   Materials
-   Textures
-   Models
-   GLTF/GLB assets
-   `useFrame`
-   Pointer interaction
-   Scroll-driven scenes
-   Animation
-   Responsive cameras
-   Render-performance tuning

### UI

-   Tailwind CSS
-   Responsive layouts
-   Navigation
-   Multi-level dropdowns
-   Interactive controls
-   Mobile navigation
-   Hover/focus states
-   Accessibility
-   Motion and transitions

------------------------------------------------------------------------

# 6. Performance Is Non-Negotiable

Performance is one of Shalom Co's highest-priority engineering
requirements.

**Do not wait for the user to complain that the website is slow.**

Before adding or approving an expensive visual effect, consider its
cost.

## Inspect especially for

### React

-   Unnecessary re-renders
-   Unstable props
-   Excessive state
-   Effects that run unnecessarily
-   Expensive calculations during render

### R3F / Three.js

-   Excessive draw calls
-   High-poly geometry
-   Too many objects
-   Excessive lights
-   Expensive shadows
-   Large textures
-   Uncompressed or oversized models
-   Unnecessary post-processing
-   Heavy per-frame calculations
-   Object creation inside `useFrame`
-   Repeated allocations
-   Unnecessary scene traversal
-   Excessive pixel ratio
-   Effects that disproportionately hurt mobile GPUs

### Network / bundle

-   Large JavaScript bundles
-   Large assets
-   Blocking resources
-   Unnecessary dependencies
-   Duplicate libraries
-   Assets loaded before they are needed

## Performance rule

Prefer:

**minimum computational cost → required visual result**

rather than:

**maximum effects → hope the device can handle them**

Visual quality matters, but smooth interaction is part of the visual
quality.

------------------------------------------------------------------------

# 7. Performance Investigation Workflow

When performance is relevant:

1.  Identify the expensive area.
2.  Determine whether the bottleneck is CPU, GPU, memory, network,
    React, or asset-related.
3.  Measure or inspect where practical.
4.  Form a hypothesis.
5.  Make the smallest meaningful change.
6.  Verify the visual result.
7.  Verify that the change actually improves or preserves performance.
8.  Check desktop and mobile behavior when relevant.

Do not optimize blindly.

Do not replace a working visual system with a worse-looking one merely
because it is theoretically cheaper.

------------------------------------------------------------------------

# 8. 3D Philosophy

3D is a **communication tool**, not automatically the main event.

Use 3D to communicate:

-   Technical ability
-   Depth
-   Interactivity
-   Brand character
-   Spatial relationships
-   Product/work quality

Normally, 3D should enhance the portfolio content.

When the showcased work is itself:

-   3D
-   WebGL
-   R3F
-   interactive graphics

then the 3D presentation may become the primary attraction.

Avoid adding 3D merely to say "this site has 3D."

------------------------------------------------------------------------

# 9. Interaction Philosophy

A strong interaction should generally follow:

**visitor action → system response → visual discovery**

Examples:

-   Hover reveals information
-   Scroll changes spatial state
-   Pointer movement affects depth
-   Navigation reveals a meaningful layer
-   Selecting a project changes its presentation
-   A transition communicates movement between sections

Avoid:

-   Random motion
-   Animation that prevents reading
-   Excessive cursor-following
-   Gimmicks
-   Effects with no communicative purpose
-   Interaction that makes navigation harder

The site should feel engaging because it is well designed, not because
it constantly demands attention.

------------------------------------------------------------------------

# 10. Animation Stack

Preferred tools:

1.  **GSAP** for structured/timeline-driven animation
2.  **Framer Motion / Motion** for UI and React-oriented animation
3.  **R3F / Three.js `useFrame`** for render-loop-dependent 3D animation

Use the simplest appropriate tool.

Do not install an animation library for a problem that can be solved
cleanly with the existing stack.

When using `useFrame`:

-   Avoid unnecessary allocations
-   Avoid expensive calculations every frame
-   Reuse references
-   Keep per-frame logic small
-   Consider whether the animation really needs 60+ updates per second

------------------------------------------------------------------------

# 11. Visual Direction

Shalom Co should feel like:

> **an interactive digital world that happens to be a portfolio.**

Desired qualities:

-   Futuristic
-   Intelligent
-   Premium
-   Cinematic
-   Technical
-   Clean
-   Immersive
-   Confident
-   Purposeful

Avoid:

-   Generic developer-portfolio styling
-   Generic cyberpunk aesthetics
-   Random neon effects
-   Excessive glow
-   Excessive gradients
-   Visual clutter
-   Animation for decoration alone
-   "AI-generated landing page" sameness

The design should communicate competence before it communicates
complexity.

------------------------------------------------------------------------

# 12. Creative Decision Protocol

When there is no existing decision to follow, Codex should **propose
before materially changing the creative direction**.

Use this pattern:

### Concept

One concise description of the proposed direction.

### Why

What problem it solves.

### Impact

What it changes visually, technically, and/or in performance.

### Recommendation

Whether Codex recommends it.

Then wait for the owner's decision when the change is substantial.

Small details may be decided autonomously if they clearly fit the
established direction.

------------------------------------------------------------------------

# 13. Brand System

Primary colors:

-   Blue
-   White

Supporting accents:

-   Sky blue
-   Beige

Background direction:

-   Mostly whitish-blue

The existing Tailwind color variables are the source of truth.

Codex may edit those variables when authorized by the user's request or
when carrying out an explicitly requested visual improvement.

Do not create a competing color system.

------------------------------------------------------------------------

# 14. Typography

Use modern, highly readable typography with a technical/futuristic
character where appropriate.

Typography should support hierarchy and readability before stylistic
novelty.

Avoid overly decorative fonts that reduce clarity.

------------------------------------------------------------------------

# 15. UI / UX Without Mockups

No mockup is required for Codex to implement polished UI.

When no mockup exists:

1.  Follow the tutorial where applicable.
2.  Follow the existing design system.
3.  Follow `AGENTS.md`.
4.  Use established Shalom Co visual principles.
5.  Propose major new concepts before implementation.
6.  Make small UI decisions autonomously when they clearly preserve the
    direction.

The resulting UI should feel intentional rather than like a collection
of components.

------------------------------------------------------------------------

# 16. Responsive Design

Treat every screen size as a real product target:

-   Large desktop
-   Desktop
-   Laptop
-   Tablet
-   Mobile

Do not simply shrink desktop layouts.

Check:

-   Navigation
-   Dropdowns
-   Typography
-   Spacing
-   Touch targets
-   3D camera framing
-   Model scale
-   Scroll behavior
-   Animation intensity
-   Render cost
-   Content order
-   Overflow
-   Interaction accessibility

A beautiful desktop experience that becomes unusable on mobile is not
finished.

------------------------------------------------------------------------

# 17. Content Architecture

Current rule:

**Content is hardcoded in JSX.**

Do not introduce:

-   CMS
-   Markdown content systems
-   JSON content architecture
-   Database-backed portfolio content

unless explicitly requested.

Componentize repeated presentation logic, but do not build abstractions
merely to avoid a few repeated lines.

------------------------------------------------------------------------

# 18. Asset Workflow

When final assets do not exist:

1.  Use a placeholder.
2.  Continue implementation.
3.  Tell the owner exactly what final asset is needed.
4.  Give useful specifications when relevant.

Examples of useful requirements:

-   PNG/SVG/WebP
-   Transparent background
-   Approximate dimensions
-   Aspect ratio
-   GLB/GLTF model
-   Texture resolution
-   Whether animation is required

Never imply that a placeholder is a final approved brand asset.

------------------------------------------------------------------------

# 19. Dependencies

The owner must approve new dependencies.

Before recommending one, state:

-   What it solves
-   Why the current stack is insufficient
-   Why it is preferable to implementing the feature manually
-   Expected bundle/runtime implications
-   Whether the tutorial already provides another approach

Do not install the dependency until approval is given.

------------------------------------------------------------------------

# 20. Debugging

Use a disciplined debugging loop:

**reproduce → isolate → hypothesize → fix → verify → regression-check**

Inspect, as appropriate:

-   Browser console
-   Build output
-   Runtime errors
-   Component tree
-   Hooks
-   Asset paths
-   Network requests
-   R3F scene configuration
-   Dependencies
-   Responsive behavior

Fix root causes where possible.

Do not repeatedly patch symptoms without understanding the failure.

If the cause is uncertain, say so.

------------------------------------------------------------------------

# 21. Verification

Meaningful implementation work should be verified when the environment
allows it.

Check the relevant combination of:

-   Build
-   Type/lint checks
-   Browser runtime
-   Console errors
-   Navigation
-   Interactions
-   Responsive behavior
-   3D rendering
-   Asset loading
-   Performance-sensitive paths

Do not claim a test was run when it was not run.

If verification was blocked, report what could and could not be
verified.

------------------------------------------------------------------------

# 22. Git Safety

**Never modify Git unless explicitly instructed.**

Do not:

-   Commit
-   Push
-   Pull
-   Create branches
-   Switch branches
-   Merge
-   Rebase
-   Reset
-   Revert
-   Stash
-   Modify Git configuration

Git inspection may be performed when it directly helps with a requested
task.

No Git state may be changed without explicit permission.

------------------------------------------------------------------------

# 23. File Safety

Before editing:

-   Inspect the relevant files.
-   Understand their role.
-   Reuse existing patterns.
-   Avoid replacing an entire file when a focused edit is sufficient.

Do not delete or overwrite unrelated work.

Do not create duplicate components merely because an existing component
was not immediately noticed.

------------------------------------------------------------------------

# 24. Completion Standard

A task is complete when:

-   The requested behavior exists.
-   The implementation fits the existing architecture.
-   Tutorial direction is preserved unless a change was requested.
-   Responsive behavior is considered.
-   Accessibility is considered.
-   Performance is considered.
-   No unnecessary dependency was added.
-   No unrelated files were changed.
-   No Git state was changed.
-   Verification was performed where possible.
-   Important implementation decisions are explained to the owner.

------------------------------------------------------------------------

# 25. Shalom Co Success Criteria

The website should create three impressions in sequence:

### 1. "This guy knows what he's doing."

The visitor sees technical competence, intentional design, and strong
execution.

### 2. "I forgot myself in there."

The experience is immersive enough that the visitor explores rather than
immediately leaving.

### 3. "I'll empty my pocket to hire Shalom Co."

The immersion is supported by credible proof of skill, clear
presentation of services/work, and a convincing path toward hiring
Shalom Co.

**Important:** engagement must come from quality and discovery, not
manipulative interaction patterns.

The final experience should feel technically impressive, commercially
convincing, and unmistakably Shalom Co.
