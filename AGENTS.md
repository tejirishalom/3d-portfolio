# AGENTS.md

# SHALOM CO --- PROJECT OPERATING SYSTEM

> **North Star:** Shalom Co should feel like entering an interactive
> digital world that happens to be a portfolio.

This file defines how an AI coding agent should understand, modify, and
protect the Shalom Co codebase.

------------------------------------------------------------------------

## 0. PROJECT AT A GLANCE

**Product:** Shalom Co\
**Type:** Personal creative + technical portfolio\
**Primary technologies:** React, JSX, React Three Fiber, Three.js
ecosystem, Tailwind CSS\
**Reference:** JavaScript Mastery 3D portfolio tutorial\
**Tutorial:** https://youtu.be/kt0FrkQgw8w

### Shalom Co showcases

-   Web development
-   UI/UX
-   3D development
-   Branding and visual design
-   Technical experiments

Photography and video are outside the intended portfolio scope.

------------------------------------------------------------------------

# 1. THE PRODUCT, NOT JUST THE CODE

Shalom Co is not supposed to feel like:

-   another GitHub-style developer portfolio
-   a template with a few 3D objects added
-   a collection of animations with no purpose
-   a generic SaaS landing page

It should feel like a **designed digital environment**.

The visitor should be curious about what happens when they:

-   move the cursor
-   scroll
-   hover
-   click
-   explore a project
-   interact with a 3D object
-   move between sections

The goal is not to overwhelm the visitor.

The goal is to make exploration feel rewarding.

### Experience target

**Curiosity → interaction → discovery → understanding → trust →
contact**

Every major interaction should support some part of that journey.

------------------------------------------------------------------------

# 2. SOURCE OF TRUTH / DECISION HIERARCHY

When instructions conflict, use this order:

1.  Explicit instruction from the project owner
2.  This `AGENTS.md`
3.  Existing project-specific documentation
4.  Existing code and established conventions
5.  The referenced YouTube tutorial
6.  General engineering judgment

Never silently override a higher-priority instruction.

------------------------------------------------------------------------

# 3. TUTORIAL CONTRACT

The JavaScript Mastery tutorial is the project's current foundation and
visual reference.

The tutorial is **not** permission to redesign the project.

### Preserve unless explicitly told otherwise

-   Overall architectural approach
-   Major component relationships
-   Core R3F approach
-   Existing project structure
-   Major interaction concepts
-   Tutorial-derived visual decisions

### Codex may independently

-   Fix bugs
-   Fix broken imports
-   Fix runtime errors
-   Fix responsive problems
-   Improve accessibility
-   Improve obvious performance problems
-   Correct implementation mistakes
-   Refactor small pieces without changing architecture
-   Improve maintainability
-   Modify existing Tailwind color variables

### Codex must ask before

-   Replacing the architecture
-   Reorganizing major pages
-   Replacing R3F with another approach
-   Changing the fundamental 3D concept
-   Removing major sections
-   Replacing the tutorial's core interaction model
-   Making a major visual redesign
-   Introducing a large new dependency or architectural system

**If a proposed change could reasonably be described as "changing how
the project is fundamentally built," ask first.**

------------------------------------------------------------------------

# 4. DESIGN LANGUAGE

## Personality

Shalom Co should feel:

-   futuristic
-   intelligent
-   interactive
-   premium
-   cinematic
-   technical
-   clean
-   immersive
-   confident

Think **sci-fi interface**, not "cyberpunk decoration."

The design should have restraint.

### Avoid

-   Random glowing effects
-   Excessive gradients
-   Too many competing animations
-   Unnecessary glassmorphism
-   Excessive neon
-   Visual clutter
-   Generic futuristic UI components
-   Animations that exist only to demonstrate technical ability

Futurism should come from **composition, motion, depth, typography,
lighting, interaction, and precision**.

------------------------------------------------------------------------

# 5. COLOR SYSTEM

## Brand foundation

Primary colors:

-   Blue
-   White

Supporting accents:

-   Sky blue
-   Beige

General background direction:

**Whitish blue / very light cool backgrounds**

The project already contains Tailwind color variables.

### Rule

Those variables are the project's color system.

Codex may edit them.

When changing the palette:

-   Prefer modifying existing variables.
-   Keep the palette small.
-   Preserve consistency across sections.
-   Ensure readable contrast.
-   Ensure 3D lighting/material colors harmonize with the UI.
-   Do not introduce arbitrary colors for individual components.

A new color should have a reason.

------------------------------------------------------------------------

# 6. TYPOGRAPHY

Typography should feel technologically modern without becoming difficult
to read.

Prefer:

-   Modern sans-serif families
-   Technical-looking display typography
-   Strong hierarchy
-   Clean letter spacing
-   Deliberate weight contrast

Avoid novelty fonts that sacrifice readability.

Typography should make the site feel advanced, not childish.

------------------------------------------------------------------------

# 7. 3D IS A TOOL, NOT THE PRODUCT

The default rule is:

> **3D enhances the portfolio. It does not replace the portfolio.**

Use conventional UI when conventional UI communicates information
better.

Use 3D when it adds:

-   spatial meaning
-   interaction
-   visual storytelling
-   technical credibility
-   atmosphere
-   discovery
-   demonstration of actual 3D work

### Exception

When the showcased work itself is a 3D/WebGL/R3F creation by Shalom Co,
the 3D experience may become the main content.

------------------------------------------------------------------------

# 8. INTERACTION SYSTEM

Interaction is one of Shalom Co's defining characteristics.

Favor interactions that create a clear relationship between:

**visitor action → system response → visual discovery**

Examples:

-   Hover reveals information
-   Scroll changes perspective
-   Cursor movement affects an environment
-   Clicking an object exposes project information
-   A transition creates continuity between sections
-   A 3D object reacts naturally to user input

### Interaction quality test

Before keeping an interaction, ask:

1.  Does the visitor understand what happened?
2.  Does the interaction reward them?
3.  Does it help communicate the brand or work?
4.  Does it remain usable on mobile?
5.  Does it justify its performance cost?

If most answers are no, simplify it.

------------------------------------------------------------------------

# 9. MOTION PRINCIPLES

Motion should feel intentional.

Prefer:

-   smooth easing
-   restrained spring-like movement
-   depth-based transitions
-   subtle parallax
-   scroll-linked motion
-   meaningful state transitions

Avoid:

-   constant movement everywhere
-   excessive bounce
-   animation on every element
-   long waits before content becomes usable
-   distracting looping effects

### Performance rule

Never add an expensive animation merely because it looks cool.

------------------------------------------------------------------------

# 10. PORTFOLIO INFORMATION ARCHITECTURE

The project should maintain a balanced mix of:

### Brand / introduction

-   Navbar
-   Hero
-   Introduction
-   About

### Capability

-   Skills
-   Experience
-   Services/capabilities where appropriate

### Proof

-   Selected projects
-   Web development
-   UI/UX
-   3D work
-   Branding/design
-   Technical experiments
-   Testimonials/clients if applicable

### Conversion

-   Contact
-   Clear calls to action
-   Footer

The exact implementation should remain compatible with the tutorial
unless explicitly changed.

------------------------------------------------------------------------

# 11. CONTENT DESIGN

The visitor should understand:

**Who is Shalom Co?**

**What can Shalom Co create?**

**What has Shalom Co created?**

**Why should someone care?**

**How can someone make contact?**

3D must never make those answers harder to find.

A beautiful portfolio that fails to communicate the work is
unsuccessful.

------------------------------------------------------------------------

# 12. RESPONSIVE EXPERIENCE

Desktop and mobile are not two separate products.

They are two expressions of the same experience.

Design for:

-   large desktop
-   normal desktop
-   laptop
-   tablet
-   mobile

Pay particular attention to:

-   canvas sizing
-   camera framing
-   touch interaction
-   text wrapping
-   navigation
-   section height
-   overflow
-   animation density
-   asset loading
-   performance

### Mobile rule

Do not simply shrink the desktop experience.

Where necessary, **adapt the interaction** while preserving its intent.

------------------------------------------------------------------------

# 13. R3F / THREE.JS ENGINEERING RULES

Keep 3D code understandable and modular.

Prefer:

-   focused scene components
-   reusable 3D components
-   controlled animation loops
-   reusable geometries/materials
-   clear separation between DOM UI and 3D scene logic
-   Drei utilities where they simplify the implementation

Avoid:

-   unnecessary per-frame React state updates
-   recreating objects unnecessarily
-   excessive geometry complexity
-   oversized textures
-   unnecessary post-processing
-   deeply coupled scene components

If an effect is expensive, ask whether the visitor actually benefits
from it.

------------------------------------------------------------------------

# 14. PERFORMANCE BUDGET MINDSET

Performance is part of the design.

When adding a 3D feature, consider:

-   draw calls
-   geometry complexity
-   texture size
-   shader complexity
-   post-processing
-   animation frequency
-   asset loading
-   mobile GPU limitations
-   memory usage

Prefer graceful degradation over forcing the maximum visual quality onto
every device.

The site should still feel intentional when 3D quality is reduced.

------------------------------------------------------------------------

# 15. TAILWIND RULES

Use the existing Tailwind setup.

Before adding a new utility pattern:

1.  Search the project for an existing pattern.
2.  Reuse it if appropriate.
3.  Extend the existing system only when necessary.

Keep:

-   spacing consistent
-   typography consistent
-   colors centralized
-   responsive behavior deliberate

Avoid creating one-off styles that could have been represented by the
project's existing design system.

------------------------------------------------------------------------

# 16. COMPONENT DESIGN

Components should have clear responsibilities.

A component should generally answer one question:

> "What part of the experience does this component own?"

Examples:

-   `Hero` owns the hero experience.
-   A scene component owns the relevant 3D scene.
-   A project card owns project presentation.
-   Navigation owns navigation behavior.

Avoid enormous components that contain unrelated UI, scene logic,
content, and animation logic.

But also avoid creating dozens of tiny components solely for the sake of
abstraction.

Use judgment.

------------------------------------------------------------------------

# 17. ASSETS

When an asset is missing:

-   Do not fabricate that it exists.
-   Use a temporary placeholder only when appropriate.
-   Keep temporary assets easy to replace.
-   Do not permanently depend on tutorial assets without a deliberate
    decision.

If a tutorial asset is being used temporarily, make its replacement path
obvious.

------------------------------------------------------------------------

# 18. MARKDOWN AS PROJECT MEMORY

Markdown files may contain:

-   project context
-   plans
-   design decisions
-   content
-   technical notes
-   future ideas

Before a substantial change, inspect relevant Markdown documentation.

Do not treat every Markdown file as an instruction file automatically;
determine its purpose from its content.

If documentation explicitly records an approved design decision,
preserve that decision unless the owner changes it.

------------------------------------------------------------------------

# 19. WORKING WITH THE OWNER

The owner is learning and building the project while following the
tutorial.

Therefore, do not optimize the project into something the owner cannot
understand.

When making a non-obvious technical change:

-   Keep the implementation understandable.
-   Avoid unnecessary abstractions.
-   Explain significant architectural decisions.
-   Preserve the learning value of the code.

The objective is not merely to produce working code.

The objective is to help build a project the owner can understand,
maintain, and continue developing.

------------------------------------------------------------------------

# 20. TASK EXECUTION PROTOCOL

For every meaningful task:

### Phase A --- Understand

Inspect:

-   relevant files
-   project structure
-   relevant Markdown
-   existing components
-   current styling
-   related R3F code

### Phase B --- Plan

Determine:

-   what needs to change
-   what should remain untouched
-   whether the change is architectural
-   whether the tutorial contract is affected

### Phase C --- Implement

Make the smallest change that achieves the requested result.

Do not opportunistically redesign unrelated areas.

### Phase D --- Verify

Check:

-   build
-   runtime
-   console errors
-   responsive behavior
-   interaction behavior
-   visual consistency
-   obvious performance regressions

### Phase E --- Report

Tell the owner:

-   what changed
-   what was tested
-   any assumptions
-   anything requiring explicit approval

------------------------------------------------------------------------

# 21. WHEN TO ASK INSTEAD OF ACT

Ask before proceeding when:

-   requirements contradict each other
-   a design choice has multiple substantially different interpretations
-   the tutorial architecture would need to change
-   a major feature would need to be removed
-   a major dependency would be introduced
-   the brand direction would materially change
-   you cannot determine the intended behavior from the repository

Do not ask unnecessary questions for ordinary implementation details.

Use reasonable engineering judgment for small decisions.

------------------------------------------------------------------------

# 22. QUALITY BAR

A feature is not "done" because it compiles.

It is done when it is:

### Functional

It works as intended.

### Visual

It belongs in Shalom Co.

### Interactive

Its interactions feel deliberate.

### Responsive

It works across screen sizes.

### Performant

It does not introduce avoidable performance problems.

### Accessible

Important information remains usable without relying exclusively on 3D.

### Maintainable

The owner can understand where the implementation lives.

### Consistent

It respects the tutorial foundation and existing project conventions.

------------------------------------------------------------------------

# 23. ANTI-PATTERNS

Do not:

-   Rewrite the project because you prefer another architecture.
-   Replace R3F with another solution without approval.
-   Add 3D everywhere.
-   Add animations everywhere.
-   Introduce random colors.
-   Add dependencies casually.
-   Turn every component into an abstraction.
-   Destroy tutorial code during refactoring.
-   Make large visual decisions without approval.
-   Sacrifice readability for visual spectacle.
-   Sacrifice performance for visual spectacle.
-   Hide important portfolio information behind 3D interactions.

------------------------------------------------------------------------

# 24. FINAL CREATIVE STANDARD

Before shipping a meaningful UI/3D feature, evaluate it against these
questions:

**Does it feel like Shalom Co?**

**Does it make the visitor curious?**

**Does the interaction have a purpose?**

**Does it showcase the work rather than distract from it?**

**Does it feel futuristic without becoming cliché?**

**Does it remain understandable?**

**Does it perform well?**

**Would this still feel good after the visitor has used it several
times?**

If the answer is yes, the feature is moving in the right direction.

------------------------------------------------------------------------

# 25. THE SHALOM CO PRINCIPLE

> **Build for curiosity.**
>
> **Build for exploration.**
>
> **Build for clarity.**
>
> **Build for performance.**
>
> **Let the work be the proof.**

The goal is not to make the most complicated portfolio.

The goal is to make a portfolio people remember.
