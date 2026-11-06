/** @type {any[]} */
export const projects = [
    {
        id: 'post-credits',
        title: "Post Credits (WIP)",
        role: "Full-Stack Developer",
        category: 'software-dev',
        date: "Sep 2026 - Present",
        tags: ['ASP.NET Core', 'C#', 'ASP.NET Identity', 'JWT Tokens', 'REST', 'React', 'TypeScript', 'Render'],
        description: `I started this project because I felt a need to build a platform to <strong class="font-bold text-white"> store watchlists for movies and TV series</strong>, <strong class="font-bold text-white">publish reviews</strong>, and <strong class="font-bold text-white">share recommendations for myself and my friends</strong>. Beyond solving a personal need, it serves as an active project to <strong class="font-bold text-white">keep my full-stack engineering skills sharp</strong> through continuous feature delivery and refinement.`,
        image: "/Images/PostCredits/1.png",
        itchLink: "",
        githubLink: "https://github.com/Guilherme-Camarada/review-share-project",
    
        trailerUrl: "",
        imageReel: [
          "/Images/PostCredits/1.png",
          "/Images/PostCredits/2.png",
          "/Images/PostCredits/3.png",
          "/Images/PostCredits/4.png",
          "/Images/PostCredits/5.png",
          "/Images/PostCredits/6.png",
          "/Images/PostCredits/7.png",
          "/Images/PostCredits/8.png",
          "/Images/PostCredits/9.png",
          "/Images/PostCredits/10.png",
          "/Images/PostCredits/11.png",
          "/Images/PostCredits/12.png",
          "/Images/PostCredits/13.png",
          "/Images/PostCredits/14.png",
          "/Images/PostCredits/15.png"
        ],
        modules: [
            {
              title: "Backend Architecture & Auth",
              text: `Architected a <strong class="font-bold text-white">RESTful Web API</strong> in <strong class="font-bold text-white">ASP.NET Core (C#)</strong> integrated with <strong class="font-bold text-white">Entity Framework Core</strong>, engineering secure authentication, <strong class="font-bold text-white">token-based email verification</strong>, and transactional password-reset flows via <strong class="font-bold text-white">ASP.NET Identity</strong>.`
            },
            {
              title: "TMDb API Integration & Domain Logic",
              text: `Integrated <strong class="font-bold text-white">The Movie Database (TMDb) API</strong> via <strong class="font-bold text-white">asynchronous HTTP services</strong>, designing custom domain logic for <strong class="font-bold text-white">user watchlists</strong>, multi-category media filtering, and <strong class="font-bold text-white">friend rating comparisons</strong>.`
            },
            {
              title: "Frontend Development & Deployment",
              text: `Built an interactive single-page interface using <strong class="font-bold text-white">React and TypeScript</strong> and deployed the full-stack system to <strong class="font-bold text-white">Render</strong>, orchestrating environment variables, client routing, and automated <strong class="font-bold text-white">production build pipelines</strong>.`
            }
          ]
    },
    {
      id: 'cyber-gauntlet',
      title: "Cyber Gauntlet",
      role: "Solo Developer • Gameplay & Systems Programmer",
      category: 'game-dev',
      date: "May 2026 - Jul 2026",
      tags: ['Unity', 'C#', 'ScriptableObjects', 'Raycast Physics', 'NavMesh AI'],
      description: `My initial goal for this project was to build a <strong class="font-bold text-white">FPS weapon mechanics</strong> and a <strong class="font-bold text-white">FPS controller</strong> in Unity. It evolved into a <strong class="font-bold text-white">first-person wave-survival shooter</strong> featuring those mechanics, supported by <strong class="font-bold text-white">wave spawning logic</strong> and a <strong class="font-bold text-white">modular runtime roguelite upgrade system</strong>.`,
      image: "/Images/CyberGauntlet/cyber.png",
      itchLink: "https://lskingg.itch.io/cyber-gauntlet",
      githubLink: "https://github.com/Guilherme-Camarada/Soulslike_FPS_Shooter",
  
      trailerUrl: "https://www.youtube.com/embed/duSbtFFiiGE",
      imageReel: [
        "/Images/CyberGauntlet/cyber1.png",
        "/Images/CyberGauntlet/cyber2.png",
        "/Images/CyberGauntlet/cyber3.png",
        "/Images/CyberGauntlet/cyber4.png",
        "/Images/CyberGauntlet/cyber5.png",
        "/Images/CyberGauntlet/cyber6.png"
      ],
      summary: `Developing Cyber Gauntlet was a crucial step in my continuous game development journey. What began as a technical exercise to build a <strong class="font-bold text-white">simple FPS controller in Unity</strong> quickly evolved into a fully fleshed-out project with dynamic character upgrades.`,
      modules: [
        {
          title: "FPS Weapon Mechanics",
          text: `Implemented a precise <strong class="font-bold text-white">raycast-based shooting system</strong>, procedural recoil kickback, and procedural weapon animations utilizing the <strong class="font-bold text-white">Strategy Pattern</strong>.`
        },
        {
          title: "Wave Spawning Logic & Enemy AI",
          text: `Enemy pathfinding driven by <strong class="font-bold text-white">Unity NavMesh</strong>, featuring distinct melee swarmer, leaping cube, and ranged shooter behaviors.`
        },
        {
          title: "Modular Upgrade System",
          text: `Extensible runtime upgrade architecture using pure C# class inheritance with an <strong class="font-bold text-white">Executor class</strong> applying dynamic perks.`
        }
      ]
    },
    {
        id: 'solitaire-board-game-solver',
        title: "Solitaire Board Game Solver",
        role: "Co-Developer",
        category: 'software-dev',
        date: "Mar 2026 - May 2026",
        tags: ['Common Lisp', 'Artificial Intelligence', 'A* Search', 'BFS / DFS', 'Heuristics', 'State-Space'],
        description: `Co-Developed an artificial intelligence search engine in <strong class="font-bold text-white">Common Lisp</strong> designed to solve combinatorial board puzzles by systematically exploring state spaces. The system implements <strong class="font-bold text-white">uninformed (BFS, DFS)</strong> and <strong class="font-bold text-white">informed heuristic search algorithms (A*)</strong> to discover optimal paths with minimal moves, while logging comprehensive <strong class="font-bold text-white">performance analytics</strong> both in real time and to external files.`,
        image: "/Images/BoardGameSolver/1.png",
        itchLink: "",
        githubLink: "",
    
        trailerUrl: "",
        imageReel: [
          "/Images/BoardGameSolver/1.png",
          "/Images/BoardGameSolver/2.png",
          "/Images/BoardGameSolver/3.png",
        ],
        modules: [
            {
              title: "State-Space Search Algorithms",
              text: `Engineered core graph traversal engines in Lisp implementing <strong class="font-bold text-white">Breadth-First Search (BFS)</strong>, <strong class="font-bold text-white">Depth-First Search (DFS)</strong>, and <strong class="font-bold text-white">A* (A-Star)</strong> algorithms to systematically navigate valid transition operators from initial layouts to target goal states.`
            },
            {
              title: "Admissible Heuristic Design",
              text: `Formulated and evaluated <strong class="font-bold text-white">admissible and consistent heuristics</strong> for the A* search engine, minimizing explored search nodes while mathematically guaranteeing the <strong class="font-bold text-white">optimal (shortest move sequence)</strong> solution path.`
            },
            {
              title: "Performance Benchmarking & File I/O",
              text: `Implemented profiling mechanisms that compute runtime metrics (<strong class="font-bold text-white">nodes generated</strong>, <strong class="font-bold text-white">nodes expanded</strong>, <strong class="font-bold text-white">execution time</strong>, and solution depth), displaying output in the terminal and serializing reports to a file.`
            },
            {
                title: "Multiplayer Solver",
                text: `Utilized <strong class="font-bold text-white">algorithms to solve the game in a multiplayer context</strong>, where multiple players take turns and the solver dynamically accounts for the <strong class="font-bold text-white">evolving state of the board</strong> after each consecutive move.`
            }
          ]
    },
    {
      id: 'death-to-the-king',
      title: "Death to the King",
      role: "Lead Programmer • Technical Scene Designer",
      category: 'game-dev',
      date: "May 2026",
      tags: ['Unity', 'C#', 'Point & Click', 'Puzzle', 'Game Jam'],
      description: `Created for 'The Eye Jam' under an eldritch horror theme, this <strong class="font-bold text-white">point-and-click escape game</strong> follows a cultist attempting to summon a god by sacrificing the king. As the <strong class="font-bold text-white">programming team lead</strong>, my core contributions included engineering, <strong class="font-bold text-white">text-selection puzzle mechanics</strong>, and the <strong class="font-bold text-white">interactive book system</strong>.`,
      image: "/Images/DeathTTK/DTTK thumbnail.png",
      itchLink: "https://tetaban.itch.io/deathtotheking",
      githubLink: "https://github.com/manhthai4391/EyeJamGame",
  
      trailerUrl: "https://www.youtube.com/embed/w7IrSWD-6Ps",
      imageReel: [
        "/Images/DeathTTK/DTTK1.png",
        "/Images/DeathTTK/DTTK2.png",
        "/Images/DeathTTK/DTTK3.png",
        "/Images/DeathTTK/DTTK4.png",
        "/Images/DeathTTK/DTTK5.png",
        "/Images/DeathTTK/DTTK6.png"
      ],
      summary: `Developing Death to the King was a pivotal experience that tested my ability to lead a programming team under strict game jam deadlines.`,
      modules: [
        {
          title: "Dynamic Book System",
          text: `Interactive UI layout distributing solution keywords and randomized decoy words to trigger the endgame ritual.`
        },
        {
          title: "Project Leadership",
          text: `Coordinated milestone tracking, code delegation, and scene composition to deliver a playable vertical slice.`
        }
      ]
    },
    {
      id: 'torchpunk-dices-cards',
      title: "Torchpunk: Dices & Cards",
      role: "Game Developer Intern • Systems Engineer",
      category: 'game-dev',
      date: "Jul 2025 - Oct 2025",
      tags: ['Unity', 'C#', 'A* Pathfinding', 'Hex Grids', 'Procedural Gen', 'Internship'],
      description: `During my internship at <strong class="font-bold text-white">Overflow Interactive</strong>, I contributed to the development of this <strong class="font-bold text-white">strategy roguelite</strong> game. My responsibilities focused on engineering <strong class="font-bold text-white">core gameplay mechanics</strong>, including <strong class="font-bold text-white">A* pathfinding</strong> on hex grids, <strong class="font-bold text-white">3D physics dice</strong>, <strong class="font-bold text-white">procedural map generation</strong> systems and <strong class="font-bold text-white">modular upgrade systems</strong>.`,
      image: "/Images/Torchpunk/Torchpunk.png",
      websiteLink: "https://overflowinteractive.com/",
  
      imageReel: [
        "/Images/Torchpunk/Torchpunk.png",
        "/Images/Torchpunk/TorchpunkGIF1.gif",
        "/Images/Torchpunk/TorchpunkGIF2.gif",
        "/Images/Torchpunk/TorchpunkGIF3.gif"
      ],
      summary: `Focus of my 486-hour internship at Overflow Interactive, creating a tactical game resolving combat with physical dice.`,
      modules: [
        {
          title: "Physics-Based Dice Combat",
          text: `Simulated realistic dice rolling using Unity's Rigidbody with face-detection logic decoupled from game state.`
        },
        {
          title: "Procedural Hexagonal Generation",
          text: `Axial-coordinate hexagonal board generator powered by Perlin Noise elevation maps.`
        },
        {
          title: "A* Pathfinding Navigation",
          text: `Optimal path calculation on hex coordinates using movement costs and Euclidean distance heuristics.`
        }
      ]
    },
    {
      id: 'plants-r-pets',
      title: "Plants R' Pets",
      role: "Full-Stack Developer",
      category: 'software-dev',
      date: "Jan 2025 - Jul 2025",
      tags: ['Angular', 'TypeScript', 'C#', 'ASP.NET Core', 'Azure'],
      description: `Developed the <strong class="font-bold text-white">Plant Wiki</strong> and co-engineered the <strong class="font-bold text-white">Plantations</strong> functionality for a <strong class="font-bold text-white">garden tracking web app</strong>. The application helps users monitor vital plant indicators such as watering, pruning, and sun exposure while providing an <strong class="font-bold text-white">educational wiki</strong> for ongoing plant care.`,
      image: "/Images/PlantsRPets/plants-are-pets.png",
      githubLink: "https://github.com/RodrigoGordo/PlantsRPets",
  
      trailerUrl: "https://www.youtube.com/embed/HUOlSaQYVUQ",
      imageReel: [
        "/Images/PlantsRPets/PRP1.png",
        "/Images/PlantsRPets/PRP2.png",
        "/Images/PlantsRPets/PRP3.png",
        "/Images/PlantsRPets/PRP4.png",
        "/Images/PlantsRPets/PRP5.png",
        "/Images/PlantsRPets/PRP6.png",
        "/Images/PlantsRPets/PRP7.png",
        "/Images/PlantsRPets/PRP8.png",
        "/Images/PlantsRPets/PRP9.png",
        "/Images/PlantsRPets/PRP10.png",
        "/Images/PlantsRPets/PRP11.png",
        "/Images/PlantsRPets/PRP13.png",
        "/Images/PlantsRPets/PRP14.png",
        "/Images/PlantsRPets/PRP17.png",
      ],
      summary: `Full-stack garden management web application connecting an ASP.NET Core Web API with Angular, hosted on Microsoft Azure.`,
      modules: [
        {
          title: "Plantations Monitoring Engine",
          text: `Co-developed the <strong class="font-bold text-white">Plantations monitoring module</strong> within an <strong class="font-bold text-white">ASP.NET Core Web API (C#)</strong>, engineering backend domain logic to track vital plant care metrics including <strong class="font-bold text-white">watering schedules</strong>, pruning cycles, and sunlight exposure thresholds.`
        },
        {
          title: "Plant Wiki & Third-Party API Integration",
          text: `Engineered the <strong class="font-bold text-white">Plant Wiki</strong> feature by pairing an <strong class="font-bold text-white">Angular frontend</strong> with backend REST services, integrating <strong class="font-bold text-white">third-party botanical and geolocation APIs</strong> to provide dynamic, localized plant care recommendations.`
        },
        {
          title: "Cloud Deployment & API Verification",
          text: `Configured and deployed the full-stack system to <strong class="font-bold text-white">Microsoft Azure</strong>, managing environment variable configuration, reverse proxy routing, and interactive API endpoint verification via <strong class="font-bold text-white">Swagger / OpenAPI</strong>.`
        }
      ]
    },
    {
        id: 'bicyle-manager',
        title: "ESTSBike - Cycling Club Manager",
        role: "Co-Developer",
        category: 'software-dev',
        date: "March 2025 - May 2025",
        tags: ['SQL', 'Relational Database', 'CRUD Architecture', 'Web Development', 'Full-Stack'],
        description: `Developed a centralized web portal designed to manage cycling club operations through an end-to-end <strong class="font-bold text-white">CRUD architecture</strong> connected to a <strong class="font-bold text-white">local relational database</strong>. The platform allows administrators to register and manage club members across multiple disciplines (<strong class="font-bold text-white">Road, Mountain Bike/BTT, BMX, Track/Pista</strong>), schedule calendar events with custom classifications, and dynamically update persistent records with real-time transactional integrity.`,
        image: "/Images/CyberGauntlet/cyber.png",
        itchLink: "",
        githubLink: "",
    
        trailerUrl: "",
        imageReel: [
          "/Images/Bicycle/1.png",
          "/Images/Bicycle/2.png",
          "/Images/Bicycle/3.png"
        ],
        summary: ``,
    },
    {
      id: 'hourglass-of-eternity',
      title: "Hourglass of Eternity",
      role: "Team Lead & Gameplay Programmer",
      category: 'game-dev',
      date: "May 2024 - Jul 2024",
      tags: ['Unity', 'C#', 'Turn-Based', 'Roguelite', 'Team Lead'],
      description: `Led the development of a <strong class="font-bold text-white">roguelite turn-based combat</strong> game for my final Game Development class project. Leading a team of four, we delivered a <strong class="font-bold text-white">vertical slice</strong> where players navigate a map, confront progressively stronger enemies, and <strong class="font-bold text-white">collect strategic upgrades</strong> to defeat the final boss.`,
      image: "/Images/Hourglass/hourglass-of-eternity.png",
      itchLink: "https://lskingg.itch.io/hourglass-of-eternity",
  
      imageReel: [
        "/Images/Hourglass/hourglass1.png",
        "/Images/Hourglass/hourglass2.png",
        "/Images/Hourglass/hourglass3.png"
      ]
    },
    {
      id: 'lucid-nightmare',
      title: "Lucid Nightmare",
      role: "Gameplay Programmer",
      category: 'game-dev',
      date: "May 2024",
      tags: ['Unity', 'C#', 'Survivors-like', 'Arena', 'Game Jam'],
      description: `Developed for a class game jam under the theme 'Chaos', this is a <strong class="font-bold text-white">Vampire Survivors-like</strong> arena game created by a team of three. Players face increasingly difficult enemy waves over time and <strong class="font-bold text-white">unlock abilities</strong> as they <strong class="font-bold text-white">level up</strong> and progress.`,
      image: "/Images/LucidNightmare/lucid-nightmare.png",
      itchLink: "https://lskingg.itch.io/lucid-nightmare",
  
      imageReel: [
        "/Images/LucidNightmare/lucid1.png",
        "/Images/LucidNightmare/lucid2.png",
        "/Images/LucidNightmare/lucid3.png"
      ]
    },
    {
        id: 'dingo-app',
        title: "Dingo - Mobile Virtual Pet",
        role: "Mobile App Developer",
        category: 'software-dev',
        date: "Feb 2024 - Apr 2024",
        tags: ['Flutter', 'Dart', 'Google Maps API', 'OAuth / Auth', 'Mobile Development', 'State Management'],
        description: `Built an interactive mobile companion game centered on <strong>Dingo</strong>, a desktop computer virtual pet. Users care for their virtual PC by monitoring vital indicators (<strong class="font-bold text-white">Health, Speed, and Happiness</strong>), clearing motherboard dust and debris, playing in-app minigames to earn currency, and purchasing high-tier hardware upgrades (<strong class="font-bold text-white">GPUs, CPUs, keyboards, and motherboards</strong>) in the tech shop. The application also features interactive <strong class="font-bold text-white">Google Maps integration</strong> allowing users to place custom location pins and notes, backed by <strong class="font-bold text-white">Google and Facebook OAuth authentication</strong>.`,
        image: "/Images/CyberGauntlet/cyber.png",
        itchLink: "",
        githubLink: "",
    
        trailerUrl: "",
        imageReel: [
          "/Images/Dingo/1.png",
          "/Images/Dingo/3.png",
          "/Images/Dingo/4.png",
          "/Images/Dingo/5.png",
          "/Images/Dingo/6.png",
          "/Images/Dingo/7.png",
          "/Images/Dingo/8.png",
          "/Images/Dingo/9.png",
          "/Images/Dingo/10.png",
          "/Images/Dingo/14.png",
        ],
        summary: ``,
    }
  ];