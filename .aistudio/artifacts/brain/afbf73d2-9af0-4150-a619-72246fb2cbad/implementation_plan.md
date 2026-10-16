# Portfolio Enhancement: Technical Skills & Featured Projects Showcase

An editorial, Royal Neo-Brutalist integration incorporating Swaliha Khan's verified technical skills across Programming, Web, and Tools, alongside a dedicated interactive Featured Projects showcase with real telemetry benchmarks for the UAV Aero Piston Engine Digital Twin, AI Interview Coach, and LeetCode-style platform.

### User Review & Critical Decisions

> [!IMPORTANT]
> The following key decisions have been confirmed through Phase 1 clarification:
> - **Projects Presentation**: A dedicated interactive Projects section positioned between Skills and the Learning Journey, featuring category filter tabs (`All`, `AI & Systems Engineering`, `Web & Applied AI`) and comprehensive metric cards.
> - **UAV Digital Twin Telemetry**: Prominent engineering telemetry badge readouts and a comparative benchmark card highlighting the 84.02% fault classification accuracy, 100% misfire precision/recall, 79.0% RUL error reduction (26.6 hr MAE), and ultra-low 0.02 ms inference latency.
> - **Toolkit Reorganization**: Three clean categorized panels in the Skills section reflecting exact user capabilities: **Programming** (Python, C, C++, SQL), **Web** (HTML, CSS), and **Tools** (VS Code, Git, GitHub).

---

### 1. Overview & Core Concept

- **What It Delivers**: Transforms the portfolio from general foundational learning claims into a high-credibility, evidence-backed showcase. The application will feature:
  1. A structured **Technical Skills Toolkit** partitioned into Programming, Web Technologies, and Developer Tooling with practice context and interactive inspection.
  2. A new high-impact **Featured Projects Dossier** featuring Swaliha's three flagship projects with status badges (`Completed / Evaluated`, `In Progress`), architectural highlights, mission telemetry, and live interactive detail modals.
  3. Integrated **Navigation & Archival Anchors**: Updated Top Bar Contract with seamless smooth-scrolling links (`About`, `Skills`, `Projects`, `Journey`, `Contact`) and updated metadata.
- **Target Persona & Audience**: Academic admissions committees, AI/ML research lab directors, engineering hiring managers, and technical recruiters seeking demonstrated computational rigor and ML engineering capabilities.
- **Key Value**: Replaces hypothetical student milestones with concrete engineering deliverables and validated research results (36 flight missions, 18,400 telemetry frames, 79% error reduction).

---

### 2. User Experience & Visual Design

- **Visual Identity & Theme**:
  - *Aesthetic Style*: Royal Neo-Brutalist Editorial. Tactile physical borders (`3px` and `4px solid #211A1B`), crisp box shadows (`4px 4px 0 #211A1B`, `6px 6px 0 #651D32`), warm parchment canvas (`#F4EBDD`), and regal oxblood accents (`#651D32`) with antique gold foil tones (`#D7B46A`).
  - *Zero-Pill Discipline*: Unboxed metadata tags using subtle typographic dividers (`·` and `/`), clean tabular numbers (`tabular-nums font-mono`), and functional segmented filter buttons with active state indicators.
  - *Typography*: High-contrast pairing of `Bodoni Moda` (display editorial serif for headlines and hero title) with `DM Sans` (clean, highly readable modern sans for descriptions) and `Space Mono` (data telemetry, benchmarks, and code annotations).
- **Key User Flows**:
  1. **Hero & Wordmark**: User arrives at the tactile royal hero, greeted by the updated brand seal and summary of research focus in AI/ML and systems.
  2. **Technical Skills Inspection**: User scrolls to "02 / THE TOOLKIT", toggling between **Programming**, **Web**, and **Tools** panels. Clicking any skill opens an inspection drawer showing core concepts and applied context.
  3. **Featured Projects Exploration**: User reaches "03 / FEATURED PROJECTS", browsing the flagship UAV Digital Twin and in-progress applications. They can inspect the comparative benchmark card, switch filters, and open the Project Deep Dive modal.
  4. **Telemetry Benchmark Comparison**: In the UAV Digital Twin card, users explore the telemetry breakdown:
     - 36 Flight Missions & 18,400 Telemetry Frames
     - 84.02% ± 5.92% Fault Classification Accuracy (100% Misfire Precision & Recall)
     - 79.0% RUL Error Reduction (26.6 hr MAE vs Naive Baseline)
     - ~0.02 ms/sample Inference Latency
  5. **Learning Journey & Dispatch**: Tracing the evolution of principles into active research, concluding with direct dispatch via email and LinkedIn.

---

### 3. Key Product Decisions & Trade-Offs

- **Decision 1: Dedicated Projects Component vs Nested Journey Milestones**
  - *Chosen Approach*: Create a first-class `Projects.tsx` section with its own navigation anchor (`#projects`), responsive grid, and detailed project dialog.
  - *Why*: The MALE UAV Digital Twin project has extensive quantitative results that deserve prominent visual hierarchy rather than being condensed into a minor timeline bullet.
  - *Alternative Considered*: Nesting inside `LearningJourney.tsx` would bury the telemetry metrics and understate the project's technical depth.

- **Decision 2: Categorized 3-Panel Toolkit Architecture**
  - *Chosen Approach*: Organize skills into three distinct editorial panels:
    - **Programming**: Python (Primary AI/ML), C & C++ (Low-Level Systems & Memory), SQL (Relational Data & Modeling)
    - **Web**: HTML, CSS (Semantic layout, responsive design & structure)
    - **Tools**: VS Code, Git, GitHub (Version control, code management, collaborative workflow)
  - *Why*: Accurately mirrors the user's provided skill inventory with complete intellectual honesty, removing outdated references to Java.

- **Decision 3: Telemetry Metric Badges & Comparative Visualizer**
  - *Chosen Approach*: An engineering telemetry readout grid within the UAV Digital Twin card using monospace numbers, comparative delta bars (+79.0% RUL improvement), and precision badges.
  - *Why*: Immediately communicates empirical research rigor to engineering reviewers in less than 5 seconds of scanning.

---

### 4. Technical Architecture & Data Strategy

#### Component Hierarchy & Interaction Flow

```
┌────────────────────────────────────────────────────────────────────────┐
│                               App.tsx                                  │
└────────────────────────────────────────────────────────────────────────┘
     │
     ├──► Navbar.tsx ──────────► [Brand | About | Skills | Projects | Journey | Contact]
     │
     ├──► Hero.tsx ────────────► Updated subheadings & quick language badges
     │
     ├──► About.tsx ───────────► Verified Dossier synced with Web & Tools
     │
     ├──► Skills.tsx ──────────► 3 Panels: [Programming | Web | Tools]
     │                             └─► Detail Modal on inspection click
     │
     ├──► Projects.tsx ────────► [Featured Projects Section (NEW)]
     │    (Active Filter State)    ├─► Filter Tabs (All / AI & Systems / Web)
     │                             ├─► Project Cards (UAV Digital Twin, Coach, LeetCode)
     │                             │     └─► Telemetry Badges & RUL Delta
     │                             └─► Interactive Project Modal
     │
     ├──► LearningJourney.tsx ─► Aligned chronological narrative
     │
     └──► Contact.tsx ─────────► Direct mail dispatch & profile links
```

#### Data Schemas

1. **`ProjectItem` Data Model**:
   - `id`: Unique identifier (`uav-digital-twin`, `ai-interview-coach`, `leetcode-platform`)
   - `title`: Formal project name
   - `category`: Category classification (`AI & Systems Engineering`, `Applied AI & Web`)
   - `status`: `'COMPLETED / EVALUATED'` | `'IN PROGRESS'`
   - `badgeColor`: Palette token (`#651D32`, `#D7B46A`, `#211A1B`)
   - `summary`: High-level problem and solution statement
   - `highlights`: Array of specific technical bullet points from user brief
   - `metrics`: Optional array of quantitative metrics (`label`, `value`, `detail`, `trend`)
   - `techStack`: Array of technologies utilized (`Python`, `Machine Learning`, `Signal Processing`, `Telemetry`, etc.)
   - `inProgressNotice`: Optional progress phase description

2. **`SkillCategory` Data Model**:
   - `category`: `'programming'` | `'web'` | `'tools'`
   - `title`: Display name
   - `skills`: List of skills with role, description, and key concepts practiced

#### Interactive State Transitions

- **Filter Selection**: User clicks a filter tab (`all`, `ai-systems`, `web-apps`), triggering instant CSS-animated filtering without layout shifting.
- **Project Deep-Dive Modal**: Clicking "Inspect Architecture & Metrics" mounts a full-screen accessible dialog with full technical bullets, methodology breakdown, and telemetry charts.
- **Accessible ESC / Backdrop Dismissal**: All modals support `Escape` key listeners, scroll-locking, and backdrop clicks.
