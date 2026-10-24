export const projects = [
  {
    id: "rasb", title: "RASB", category: "Software & AI", eyebrow: "Personal Systems",
    description: "A personal operating system in progress: notes, reminders, recurring cycles, daily execution, and a connected knowledge layer.",
    detail: "RASB is a personal command centre designed to bring scattered information and everyday workflows into one place. The current web application brings together notes, reminders, recurring cycles, an activity trail, digital-life records, and a planned time-aware Executor. The longer-term direction is a connected ecosystem across web, Android, desktop, and browser extension, with AI assistance operating inside explicit permission boundaries.",
    tags: ["React", "Vite", "Node.js", "Express", "PostgreSQL", "Supabase", "AI workflows"],
    status: "In development", visual: "rasb", number: "01",
    caseStudy: {
      subtitle: "A personal workspace for remembering, planning, and acting",
      overview: "RASB is being built as a modular personal information system rather than a collection of disconnected productivity widgets. Its goal is to make personal data useful in context: capture a note, schedule a reminder, define a recurring cycle, then use that information to help plan a day.",
      problem: "Personal work is often fragmented across notes apps, calendars, messaging, browser tabs, and cloud storage. Context gets lost between capture and execution, and automation can be risky when an assistant is allowed to change or delete data without clear consent.",
      solution: "The current architecture separates the React client from a Node.js/Express API and PostgreSQL data layer. Feature modules have their own routes, services, and repositories. The planned AI layer sits above the Executor, can read and summarize approved information, and must request explicit approval before destructive or consequential actions.",
      contribution: "Personal project: product direction, feature design, frontend and backend implementation, database modelling, integration work, and end-to-end debugging.",
      workflow: [
        { title: "Capture & organize", text: "Notes and media are stored through dedicated UI and API flows, with structured records instead of loose page state.", tools: ["React", "Vite", "REST API"] },
        { title: "Schedule & recur", text: "Reminders and recurring Cycles represent one-off and repeatable events, including time zones and notification preferences.", tools: ["Node.js", "Express", "PostgreSQL"] },
        { title: "Execute the day", text: "The planned Executor combines scheduled items into a time-aware daily view, helping turn stored intentions into a practical sequence.", tools: ["Scheduling logic", "Date/time handling", "Notifications"] },
        { title: "Assist with guardrails", text: "The longer-term AI layer will research, summarize, and coordinate approved workflows while pausing for permission before edits or deletion.", tools: ["LLM integration", "RAG direction", "Permission checks"] }
      ],
      features: ["Notes with create, edit, and media-upload flows", "Reminders with email notifications", "Recurring Cycles for repeatable life events", "Digital-life account records and activity history", "Planned Executor for time-aware daily planning", "Permission-aware AI and a connected multi-client roadmap"],
      architecture: ["React + Vite frontend", "Node.js + Express API", "PostgreSQL database via Supabase", "JWT-based authentication planned/in progress", "SMTP email notifications", "Future Android client using Kotlin and Jetpack Compose"],
      statusNote: "Active personal build. Some items described here are implemented, while Executor, broader AI orchestration, and additional clients remain planned work."
    }
  },
    {
    id: "hackamate", title: "HackaMate", category: "Software & AI", eyebrow: "Distributed Platforms & Developer Tools",
    description: "A developer matchmaking and hackathon orchestration platform designed to help participants form balanced teams and coordinate sprint progress.",
    detail: "HackaMate addresses the early friction of hackathons: discovering complementary teammates, balancing frontend/backend/AI skills, coordinating invitations, and giving organizers a clearer view of sprint progress. This is a shared, actively developing project; the page follows the public project brief and should be kept aligned with the actual implementation.",
    tags: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Redis", "Team matching"],
    status: "Active / ongoing", visual: "hackamate", number: "06",
    externalLinks: [{ label: "Reference project page", url: "https://siddhantdixit.vercel.app/projects/hackamate" }],
    caseStudy: {
      subtitle: "A shared platform for forming teams and coordinating hackathon work",
      overview: "HackaMate is an ongoing developer matchmaking and hackathon orchestration platform. It aims to help builders find teammates with complementary skills, while providing a structured workspace for team formation, invitations, milestones, and event progress.",
      problem: "Hackathon teams often form under time pressure. Participants may not know who has complementary frontend, backend, or AI/ML experience, while organizers need a reliable way to understand team formation and sprint progress without chasing updates manually.",
      solution: "The project brief describes a full-stack application with a developer skill graph and compatibility scoring, team availability and invitation state, milestone tracking, and a responsive client workspace. The architecture is designed around clear API boundaries and fast updates as teams form and work progresses.",
      contribution: "Shared project. This portfolio describes the overall product direction and architecture; individual responsibilities should be listed separately once the team agrees on an accurate contribution breakdown.",
      workflow: [
        { title: "Developer profile & skill graph", text: "Represent skills, language experience, domain interests, and preferred roles to estimate complementary team fit.", tools: ["TypeScript", "Skill tags", "Graph scoring"] },
        { title: "Match & form squads", text: "Use compatibility signals to suggest balanced teams, then coordinate availability, invitations, and team-state changes.", tools: ["Matching logic", "REST API", "Redis direction"] },
        { title: "Track sprint milestones", text: "Organize progress around milestones and submission checkpoints so participants and organizers can see the current state.", tools: ["PostgreSQL", "Express", "Milestone tracking"] },
        { title: "Coordinate through the workspace", text: "Present team formation, project context, and sprint progress in a responsive interface designed for active event use.", tools: ["React", "TypeScript", "Tailwind CSS"] }
      ],
      features: ["Developer profiles and skill-based compatibility", "Complementary role and domain matching", "Team formation and invitation workflow", "Hackathon sprint milestones and progress visibility", "Organizer-oriented coordination workspace"],
      architecture: ["React client", "TypeScript application contracts", "Node.js and Express API", "PostgreSQL persistence", "Redis-backed coordination described in the project brief", "Responsive UI and API-driven workflows"],
      statusNote: "Shared project in active development. The public reference describes Redis-backed squad locks, skill-graph matching, sprint telemetry, and a query-latency figure under 45 ms; verify current implementation and benchmarks with the team before presenting those as measured production results."
    }
  },
  {
    id: "rudranta", title: "Rudranta Tech", category: "Entrepreneurship", eyebrow: "Technology & Education",
    description: "A technology initiative focused on robotics, IoT, STEM learning, and making hands-on engineering more accessible.",
    detail: "Rudranta Tech connects practical engineering education with product development. The work spans robotics and IoT learning, STEM workshops, educational kits, software, and 3D-printed prototypes. It is intended to help learners move beyond theory by building, testing, and improving real systems.",
    tags: ["Robotics", "IoT", "STEM", "Education", "Product building"],
    status: "Ongoing", visual: "rudranta", number: "02",
    caseStudy: {
      subtitle: "Hands-on engineering education with a maker mindset",
      overview: "Rudranta Tech is a technology and education initiative built around the idea that engineering is best learned by making. Its direction combines guided STEM learning, robotics and IoT projects, educational kits, and practical prototypes that students can understand and improve themselves.",
      problem: "Beginners can find it difficult to connect classroom concepts with real engineering. Hardware projects also require components, safe guidance, debugging support, and a clear path from a first experiment to a working prototype.",
      solution: "The initiative brings learning activities and build projects together: explain the concept, assemble the system, write or adapt the code, test the result, and iterate. Workshops and kits can make the process repeatable for schools, clubs, and independent learners.",
      contribution: "Founder-led initiative involving program planning, project development, workshop organization, robotics instruction, and product experimentation.",
      workflow: [
        { title: "Choose a real-world problem", text: "Start with a concrete challenge such as automation, safety, sensing, or environmental monitoring.", tools: ["Problem framing", "STEM design"] },
        { title: "Prototype the system", text: "Combine microcontrollers, sensors, actuators, and fabricated parts into a build that can be tested.", tools: ["Microcontrollers", "Sensors", "CAD / 3D printing"] },
        { title: "Program & validate", text: "Write the firmware or application logic, inspect sensor readings, and debug the physical behaviour.", tools: ["Embedded C/C++", "Arduino IDE", "Testing"] },
        { title: "Teach, document & iterate", text: "Turn lessons from the prototype into a workshop, kit, build guide, or improved version.", tools: ["Workshop design", "Documentation", "Iteration"] }
      ],
      features: ["Robotics and IoT learning activities", "STEM workshops and hands-on demonstrations", "Educational kits and practical build exercises", "Prototype development and 3D-printed parts", "Project-based learning around automation and sensing"],
      architecture: ["Embedded systems and microcontrollers", "Sensors and actuators", "Arduino-based prototyping", "3D CAD and additive manufacturing", "Web/software tools where useful"],
      statusNote: "An ongoing initiative. Add verified program dates, learner counts, partner names, and business outcomes as you decide which details to publish."
    }
  },
  {
    id: "swabud", title: "Swabud", category: "Hardware & IoT", eyebrow: "Desk Companion",
    description: "A small desktop companion concept with expressive screen animations, reminders, and a connected dashboard.",
    detail: "Swabud is a desk companion concept designed to make a computer workspace feel more alive. A small display can show expressive moods, animations, and reminders, while a web dashboard provides a way to control the device and its behaviour.",
    tags: ["ESP32", "TFT display", "3D printing", "Web dashboard"],
    status: "Prototype / concept", visual: "swabud", number: "03",
    caseStudy: {
      subtitle: "A small physical interface for a more personal digital workspace",
      overview: "Swabud explores the idea of a compact desk companion that communicates through motion, colour, and expression instead of another notification-heavy app. It pairs a small screen with a connected dashboard and a custom enclosure.",
      problem: "Digital reminders are easy to ignore when they compete with everything else on a laptop. A dedicated physical display could make status and gentle prompts visible without demanding constant interaction.",
      solution: "The concept combines a microcontroller-driven display, animation states, reminder logic, and a browser-based control panel. The enclosure can be iterated through 3D printing, while the firmware and dashboard evolve independently.",
      contribution: "Personal product concept spanning interaction design, embedded hardware exploration, display animation, enclosure prototyping, and web-control planning.",
      workflow: [
        { title: "Define the interaction", text: "Map a small set of states—idle, focused, reminder, and expressive mood—before implementing the animations.", tools: ["Interaction design", "State modelling"] },
        { title: "Drive the display", text: "Use a microcontroller and TFT display to render animations and status states within the device's memory and power constraints.", tools: ["ESP32", "TFT display", "Embedded firmware"] },
        { title: "Connect the dashboard", text: "Plan a web interface for changing settings, selecting moods, and managing device behaviour.", tools: ["Web UI", "Device communication"] },
        { title: "Build the enclosure", text: "Prototype a compact housing, check screen visibility and cable access, then refine the physical design.", tools: ["CAD", "3D printing", "Rapid iteration"] }
      ],
      features: ["Expressive screen animations and mood states", "Reminder and status display concept", "Web dashboard for device control", "Custom enclosure and 3D-printed prototyping", "Modular path for adding sensors or new behaviours"],
      architecture: ["ESP32-class microcontroller", "Small TFT display", "Firmware-driven animation states", "Web dashboard concept", "3D-printed enclosure"],
      statusNote: "Concept/prototype stage. The final component selection, connectivity model, and implemented features should be updated as the hardware is finalized."
    }
  },
  {
    id: "robotics", title: "Robotics & IoT Builds", category: "Hardware & IoT", eyebrow: "Physical Computing",
    description: "A collection of hands-on experiments spanning automation, sensing, robotics, and connected devices.",
    detail: "A portfolio of practical builds including traffic-management concepts, a women's safety device, an agro-bot and irrigation system, an automatic water pump, a weather station, and automatic street lighting. Each project explores how sensors, embedded logic, and actuators can respond to real-world conditions.",
    tags: ["ESP32 / Arduino", "Sensors", "Automation", "Embedded systems"],
    status: "Selected builds", visual: "robotics", number: "04",
    caseStudy: {
      subtitle: "Learning embedded systems by solving physical-world problems",
      overview: "These builds are a collection rather than a single product. They explore how a physical system senses its environment, applies simple control logic, and triggers an output such as a light, pump, alert, or robotic movement.",
      problem: "Automation projects need more than a sensor reading: the hardware must be wired reliably, the firmware must handle edge cases, and the device should behave predictably under changing conditions.",
      solution: "Each prototype follows a repeatable loop: define the input and desired response, select components, implement the control logic, test against real conditions, and improve the enclosure or circuit where needed.",
      contribution: "Hands-on project development across component selection, wiring, embedded programming, prototype assembly, and troubleshooting.",
      workflow: [
        { title: "Sense the environment", text: "Collect input from sensors, switches, or user controls relevant to the use case.", tools: ["Sensors", "Signal reading"] },
        { title: "Process the input", text: "Apply thresholds, conditions, and control logic to decide when the system should respond.", tools: ["Embedded C/C++", "Control logic"] },
        { title: "Act or notify", text: "Drive an output such as a motor, pump, light, display, or alert module.", tools: ["Relays", "Motors", "LEDs / alerts"] },
        { title: "Test in context", text: "Observe behaviour in realistic conditions, find failure modes, and refine the prototype.", tools: ["Hardware debugging", "Iteration"] }
      ],
      features: ["Traffic-management system concept", "Women's safety device prototype", "Agro-bot and irrigation automation", "Automatic water-pump control", "Weather station and automatic street lights"],
      architecture: ["Microcontrollers", "Environmental and motion sensors", "Actuators and switching modules", "Embedded firmware", "Physical prototyping and testing"],
      statusNote: "A collection of past and ongoing builds. Individual pages and performance claims should be added only when the corresponding project notes, photos, and tests are available."
    }
  },
  {
    id: "3dprinting", title: "3D Printing & Prototyping", category: "Hardware & IoT", eyebrow: "Rapid Prototyping",
    description: "Using accessible fabrication tools to move from an idea or CAD model to a physical prototype.",
    detail: "This work explores the complete prototype loop: modelling a part, preparing it in a slicer, printing it, inspecting fit and strength, and revising the design. Applications include enclosures, functional parts, educational models, and small product experiments.",
    tags: ["CAD", "3D printing", "Slicing", "Product design"],
    status: "Ongoing experiments", visual: "printing", number: "05",
    caseStudy: {
      subtitle: "From digital geometry to physical iteration",
      overview: "3D printing makes it possible to test form, fit, and usability without committing to expensive tooling. The process is treated as an engineering loop, not just a way to produce a finished object.",
      problem: "A CAD model that looks correct on screen may still fail due to tolerances, overhangs, orientation, material behaviour, or print settings. Those issues are best discovered through small, deliberate iterations.",
      solution: "Create a parametric or editable model, slice it with suitable material and quality settings, inspect the print, and update the geometry or process based on observed results.",
      contribution: "CAD modelling, slicer setup, print testing, fit checks, and iterative prototyping for practical parts and product concepts.",
      workflow: [
        { title: "Model the part", text: "Define dimensions, interfaces, clearances, and the intended use before generating the geometry.", tools: ["CAD", "Parametric modelling"] },
        { title: "Prepare the print", text: "Choose orientation, supports, layer height, infill, and material settings for the part's requirements.", tools: ["OrcaSlicer", "PLA / PLA+", "Print profiles"] },
        { title: "Print & inspect", text: "Check dimensional fit, surface finish, layer adhesion, and any failure points.", tools: ["FDM printing", "Fit testing"] },
        { title: "Revise & repeat", text: "Adjust the model or process and keep track of what changed between iterations.", tools: ["Design iteration", "Build notes"] }
      ],
      features: ["Custom enclosures and brackets", "Rapid fit and form testing", "Educational and demonstration models", "Slicer setting experiments", "Iteration notes for repeatable prints"],
      architecture: ["CAD software", "FDM 3D printer", "Slicer profiles", "PLA / PLA+ materials", "Measurement and fit testing"],
      statusNote: "An evolving fabrication practice. Specific tolerances, print times, and material-performance figures should be included only when measured for a named part."
    }
  },

];

export const categories = ["All", "Software & AI", "Entrepreneurship", "Hardware & IoT"];
