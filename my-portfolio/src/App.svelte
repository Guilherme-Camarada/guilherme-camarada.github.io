<script>
  import Header from './components/Header.svelte';
  import ProjectCard from './components/ProjectCard.svelte';
  import ExperienceCard from './components/ExperienceCard.svelte';
  import SkillsMatrix from './components/SkillsMatrix.svelte';
  import ProjectDetail from './components/ProjectDetail.svelte';

  // State assignment (defaulting to the projects view)
  let activeTab = 'projects';
  /** @type {any} */
  let selectedProject = null;

  const projects = [
    {
        id: 'cyber-gauntlet',
        title: "Cyber Gauntlet",
        date: "May 2026 - Jul 2026",
        description: `My initial goal for this project was to build a <strong class="font-bold text-white">FPS weapon mechanics</strong> and a <strong class="font-bold text-white">FPS controller</strong> in Unity. It evolved into a <strong class="font-bold text-white">first-person wave-survival shooter</strong> featuring those mechanics, supported by <strong class="font-bold text-white">wave spawning logic</strong> and a <strong class="font-bold text-white">modular runtime roguelite upgrade system</strong>.`,
        image: "/Images/CyberGauntlet/cyber.png",
        engineIcons: ["devicon-unity-original"],
        itchLink: "https://lskingg.itch.io/cyber-gauntlet",
        githubLink: "https://github.com/Guilherme-Camarada/Soulslike_FPS_Shooter",

        // --- NEW PAGE DATA ---
        trailerUrl: "https://www.youtube.com/embed/duSbtFFiiGE", // Use YouTube 'embed' URLs
        imageReel: ["/Images/CyberGauntlet/cyber1.png", "/Images/CyberGauntlet/cyber2.png", "/Images/CyberGauntlet/cyber3.png", "/Images/CyberGauntlet/cyber4.png", "/Images/CyberGauntlet/cyber5.png", "/Images/CyberGauntlet/cyber6.png"], // (Use this if you don't have a trailerUrl)
            
        summary: `Developing Cyber Gauntlet was a crucial step in my continuous game development journey. What began as a technical exercise to build a <strong class="font-bold text-white">simple FPS controller in Unity</strong> quickly evolved into a fully fleshed-out project. As the mechanics matured, I drafted a complete game design document and expanded the prototype into a <strong class="font-bold text-white">first-person wave survival game featuring a dynamic upgrade system</strong>.`,
            
            introduction: `I originally set out to practice new mechanics by building a robust FPS controller from scratch. Once the core movement and shooting felt satisfying, I decided to build a standalone game around it to put those mechanics to the test. The result is an arena survival shooter featuring <strong class="font-bold text-white">multiple firing styles, procedural recoil, and procedural weapon animations</strong>. To add replayability, I also engineered a <strong class="font-bold text-white">modular runtime upgrade system</strong> that allows players to continuously evolve their character.`,
            
            modules: [
                {
                    title: "FPS Weapon Mechanics",
                    text: `I began by implementing a precise <strong class="font-bold text-white">raycast-based shooting system</strong>, instantly calculating hits at the crosshair center. Next, I engineered a <strong class="font-bold text-white">procedural recoil system</strong> that dynamically applies randomized horizontal and upward weapon kickback for a satisfying game feel. To complement this, I implemented <strong class="font-bold text-white">procedural animations</strong> for recoil and reloading rather than relying on static keyframes. Expanding the arsenal, I added <strong class="font-bold text-white">projectile physics</strong> for explosive rockets, scatter-shot logic for shotguns, and penetrating rounds for crowd control. I utilized the <strong class="font-bold text-white">Strategy Pattern</strong> to separate these different firing behaviors into distinct classes. While effective, in retrospect, a parameterized approach combining these behaviors into a single unified system would have allowed for crazier, overlapping weapon upgrades.`,
                    images: [
                        "/Images/CyberGauntlet/CyberGauntletShootUsable.png",
                        "/Images/CyberGauntlet/CyberGauntletSingleRaycast.png",
                        "/Images/CyberGauntlet/CyberGauntletScatterProjectile.png"
                    ]
                },
                {
                    title: "Wave Spawning Logic & Enemy AI",
                    text: `Enemy pathfinding is driven by <strong class="font-bold text-white">Unity's NavMesh system</strong>, with different geometric enemy types exhibiting distinct behaviors: spheres swarm the player for melee damage, cubes execute leaping attacks at close range, and cones maintain distance to fire ranged projectiles. I also implemented a high-health boss encounter to cap off the progression loop. The wave system utilizes a <strong class="font-bold text-white">weighted random spawner</strong>, dynamically selecting spawn points based on configured probabilities. Waves are quota-based, requiring the player to eliminate a specific number of hostiles before triggering the inter-round upgrade phase.`,
                    images: [
                        "/Images/CyberGauntlet/CyberGauntletEnemyAI.png",
                        "/Images/CyberGauntlet/CyberGauntletEnemyAI.png",
                        "/Images/CyberGauntlet/CyberGauntletWave.png",
                        "/Images/CyberGauntlet/CyberGauntletWave2.png"
                    ]
                },
                {
                    title: "Modular Upgrade System",
                    text: `I needed an upgrade system that was highly dynamic and capable of being modified entirely at runtime. Unlike my previous work on Torchpunk: Dices & Cards, I opted against Unity ScriptableObjects in favor of <strong class="font-bold text-white">pure C# class inheritance</strong>. The architecture revolves around an <strong class="font-bold text-white">Executor class</strong> that applies effects instantly upon pickup, with support for continuous Update loop modifications. Each upgrade is split into two layers: an <strong class="font-bold text-white">abstract base class</strong> defining Execute() and ExecuteContinuous() methods, and an in-game MonoBehaviour script that holds lists of these effect objects alongside UI data. This highly extensible framework allows me to rapidly create brand new abilities simply by inheriting from the base class.`,
                    images: [
                        "/Images/CyberGauntlet/CyberGauntletUpgradeInventory.png",
                        "/Images/CyberGauntlet/CyberGauntletUpgradeEffect.png",
                        "/Images/CyberGauntlet/CyberGauntletUpgrade.png"
                    ]
                }
            ],
            
            closing: `Developing Cyber Gauntlet solidified my understanding of <strong class="font-bold text-white">software architecture and design patterns</strong>. If I were to rebuild the project, I would decouple the base stats into <strong class="font-bold text-white">ScriptableObjects</strong> for easier designer iteration. I would also unify the weapon systems to allow for wilder, overlapping upgrade combinations and introduce more complex state-machine behaviors for the enemy AI.`
    },
    {
        id: 'death-to-the-king',
        title: "Death to the King",
        date: "May 2026",
        description: `Created for 'The Eye Jam' under an eldritch horror theme, this <strong class="font-bold text-white">point-and-click escape game</strong> follows a cultist attempting to summon a god by sacrificing the king. As the <strong class="font-bold text-white">programming team lead</strong>, my core contributions included engineering, <strong class="font-bold text-white">text-selection puzzle mechanics</strong>, and the <strong class="font-bold text-white">interactive book system</strong>.`,
        image: "/Images/DeathTTK/DTTK thumbnail.png",
        engineIcons: ["devicon-unity-original"],
        itchLink: "https://tetaban.itch.io/deathtotheking",
        githubLink: "https://github.com/manhthai4391/EyeJamGame",

        // --- NEW PAGE DATA ---
        trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Use YouTube 'embed' URLs
        imageReel: ["/Images/CyberGauntlet/pic1.png", "/Images/CyberGauntlet/pic2.png"], // (Use this if you don't have a trailerUrl)
            
            summary: "Cyber Gauntlet is an action-packed first-person wave survival game. You must survive endless hordes while upgrading your arsenal.",
            
            introduction: "I originally set out to create a simple FPS controller in Unity to learn the ropes. As the controller felt better, I realized I needed targets to shoot at, which spiraled into a full survival game.",
            
            modules: [
                {
                    title: "FPS Weapon Mechanics",
                    text: "I built a highly modular raycast shooting system that handles recoil, spread, and dynamic reloading animations..."
                },
                {
                    title: "Wave Spawning Logic",
                    text: "Enemies spawn dynamically out of the player's line of sight using a custom node-based spawn manager..."
                }
            ],
            
            closing: "Looking back, this project taught me the importance of modular architecture. If I were to do it again, I would decouple the weapon stats..."
    },
    {
        id: 'torchpunk-dices-cards',
        title: "Torchpunk: Dices & Cards",
        date: "Jul 2025 - Oct 2025",
        description: `During my internship at <strong class="font-bold text-white">Overflow Interactive</strong>, I contributed to the development of this <strong class="font-bold text-white">strategy roguelite</strong> game. My responsibilities focused on engineering <strong class="font-bold text-white">core gameplay mechanics</strong>, including <strong class="font-bold text-white">A* pathfinding</strong> on hex grids, <strong class="font-bold text-white">3D physics dice</strong>, <strong class="font-bold text-white">procedural map generation</strong> systems and <strong class="font-bold text-white">modular upgrade systems</strong>.`,
        image: "/Images/Torchpunk/Torchpunk.png",
        engineIcons: ["devicon-unity-original"],
        websiteLink: "https://overflowinteractive.com/",

        // --- NEW PAGE DATA ---
        imageReel: ["/Images/CyberGauntlet/pic1.png", "/Images/CyberGauntlet/pic2.png"], // (Use this if you don't have a trailerUrl)
            
            summary: "Cyber Gauntlet is an action-packed first-person wave survival game. You must survive endless hordes while upgrading your arsenal.",
            
            introduction: "I originally set out to create a simple FPS controller in Unity to learn the ropes. As the controller felt better, I realized I needed targets to shoot at, which spiraled into a full survival game.",
            
            modules: [
                {
                    title: "FPS Weapon Mechanics",
                    text: "I built a highly modular raycast shooting system that handles recoil, spread, and dynamic reloading animations..."
                },
                {
                    title: "Wave Spawning Logic",
                    text: "Enemies spawn dynamically out of the player's line of sight using a custom node-based spawn manager..."
                }
            ],
            
            closing: "Looking back, this project taught me the importance of modular architecture. If I were to do it again, I would decouple the weapon stats..."
    },
    {
        id: 'plants-r-pets',
        title: "Plants R' Pets",
        date: "Jan 2025 - Jul 2025",
        description: `Developed the <strong class="font-bold text-white">Plant Wiki</strong> and co-engineered the <strong class="font-bold text-white">Plantations</strong> functionality for a <strong class="font-bold text-white">garden tracking web app</strong>. The application helps users monitor vital plant indicators such as watering, pruning, and sun exposure while providing an <strong class="font-bold text-white">educational wiki</strong> for ongoing plant care.`,
        image: "/Images/PlantsRPets/plants-are-pets.png",
        engineIcons: [
            "devicon-angularjs-plain", 
            "devicon-typescript-plain", 
            "devicon-csharp-plain"
        ],
        githubLink: "https://github.com/RodrigoGordo/PlantsRPets",

        // --- NEW PAGE DATA ---
        trailerUrl: "https://www.youtube.com/embed/HUOlSaQYVUQ", // Use YouTube 'embed' URLs
        imageReel: ["/Images/PlantsRPets/PRP1.png", "/Images/PlantsRPets/PRP2.png", "/Images/PlantsRPets/PRP3.png", "/Images/PlantsRPets/PRP4.png", "/Images/PlantsRPets/PRP5.png", "/Images/PlantsRPets/PRP6.png", "/Images/PlantsRPets/PRP7.png", "/Images/PlantsRPets/PRP8.png", "/Images/PlantsRPets/PRP9.png", "/Images/PlantsRPets/PRP10.png", "/Images/PlantsRPets/PRP11.png", "/Images/PlantsRPets/PRP13.png", "/Images/PlantsRPets/PRP14.png", "/Images/PlantsRPets/PRP17.png"], // (Use this if you don't have a trailerUrl)

            introduction: "Developed the Plant Wiki and co-engineered the Plantations functionality for a garden tracking web app. The application helps users monitor vital plant indicators such as watering, pruning, and sun exposure while providing an educational wiki for ongoing plant care.",
    },
    {
        id: 'hourglass-of-eternity',
        title: "Hourglass of Eternity",
        date: "May 2024 - Jul 2024",
        description: `Led the development of a <strong class="font-bold text-white">roguelite turn-based combat</strong> game for my final Game Development class project. Leading a team of four, we delivered a <strong class="font-bold text-white">vertical slice</strong> where players navigate a map, confront progressively stronger enemies, and <strong class="font-bold text-white">collect strategic upgrades</strong> to defeat the final boss.`,
        image: "/Images/Hourglass/hourglass-of-eternity.png",
        engineIcons: ["devicon-unity-original"],
        itchLink: "https://lskingg.itch.io/hourglass-of-eternity",

        // --- NEW PAGE DATA ---
        imageReel: ["/Images/Hourglass/hourglass1.png", "/Images/Hourglass/hourglass2.png", "/Images/Hourglass/hourglass3.png", "/Images/Hourglass/hourglass4.png", "/Images/Hourglass/hourglass5.png",], // (Use this if you don't have a trailerUrl)
            
            introduction: "Led the development of a roguelite turn-based combat game for my final Game Development class project. Leading a team of four, we delivered a vertical slice where players navigate a map, confront progressively stronger enemies, and collect strategic upgrades to defeat the final boss.",
    },
    {
        id: 'lucid-nightmare',
        title: "Lucid Nightmare",
        date: "May 2024",
        description: `Developed for a class game jam under the theme 'Chaos', this is a <strong class="font-bold text-white">Vampire Survivors-like</strong> arena game created by a team of three. Players face increasingly difficult enemy waves over time and <strong class="font-bold text-white">unlock abilities</strong> as they <strong class="font-bold text-white">level up</strong> and progress.`,
        image: "/Images/LucidNightmare/lucid-nightmare.png",
        engineIcons: ["devicon-unity-original"],
        itchLink: "https://lskingg.itch.io/lucid-nightmare",

        // --- NEW PAGE DATA ---
        imageReel: ["/Images/LucidNightmare/lucid1.png", "/Images/LucidNightmare/lucid2.png", "/Images/LucidNightmare/lucid3.png", "/Images/LucidNightmare/lucid4.png", "/Images/LucidNightmare/lucid5.png", "/Images/LucidNightmare/lucid6.png"], // (Use this if you don't have a trailerUrl)
            
            introduction: "Developed for a class game jam under the theme 'Chaos', this is a Vampire Survivors-like arena game created by a team of three. Players face increasingly difficult enemy waves over time and unlock abilities as they level up and progress.",             
    }
];

  const experiences = [
    {
        date: "Jul 2025 &mdash; Oct 2025", 
        company: "Overflow Interactive",
        role: "Game Developer",
        logo: "/Images/Faculdade/overflow.png",
        description: `
            <p>During my internship at Overflow Interactive, I played a key role in the development of the strategy roguelike <strong class="font-bold text-white">"Torchpunk: Dices & Cards"</strong>. Working within a <strong class="font-bold text-white">Scrumban Agile</strong> environment, I was responsible for engineering <strong class="font-bold text-white">core gameplay modules</strong> using Unity.</p>
            <p class="mt-4">My key technical contributions include:</p>
            <ul class="list-disc pl-5 space-y-2 mt-2">
                <li>Implementing <strong class="font-bold text-white">A* Pathfinding</strong> for AI and player navigation on hexagonal tiles.</li>
                <li>Developing <strong class="font-bold text-white">physics-based 3D dice</strong> throwing mechanics.</li>
                <li>Creating algorithms for <strong class="font-bold text-white">procedural world generation</strong>, including biomes and structures.</li>
                <li>Building a modular <strong class="font-bold text-white">deckbuilding reward system</strong> and a comprehensive UI feedback system.</li>
            </ul>
            <p class="mt-4">I maintained a strong focus on code quality by adhering to <strong class="font-bold text-white">SOLID principles</strong> and <strong class="font-bold text-white">Clean Code</strong> practices, ensuring the software was <strong class="font-bold text-white">scalable</strong> and easy for designers to integrate.</p>
        `,
        skills: ["Unity", "C#", "A* Pathfinding", "Procedural Generation", "SOLID", "Clean Code", "Agile (Scrumban)"]
    },
    {
        date: "Sep 2022 &mdash; Jun 2026",
        company: "Instituto Politécnico de Setúbal",
        role: "Bachelor in Software Engineering",
        logo: "/Images/Faculdade/ests-copy.png", 
        description: `
            <p>My Software Engineering degree was heavily focused on <strong class="font-bold text-white">practical, project-based learning</strong>. I collaborated extensively in teams using <strong class="font-bold text-white">Agile methodologies</strong>, particularly Scrum, to simulate real-world development environments.</p>
            <p class="mt-4">The curriculum also emphasized <strong class="font-bold text-white">Software Design concepts</strong> and advanced problem-solving strategies, equipping me with the skills to <strong class="font-bold text-white">architect scalable solutions</strong> and tackle complex technical challenges effectively.</p>
        `,
        skills: ["Software Design", "Design Patterns", "Agile (Scrum)", "Team Collaboration", "Problem Solving", "Project Management"]
    }
  ];
</script>

<main class="max-w-4xl mx-auto w-full relative z-10">

  {#if selectedProject}
      <ProjectDetail 
          project={selectedProject} 
          on:close={() => selectedProject = null} 
      />
      
  {:else}
      <Header />

      <div class="flex flex-col md:flex-row gap-4 mb-10">
          <button on:click={() => activeTab = 'projects'} class="flex-1 border border-white/30 py-3 tracking-wider transition {activeTab === 'projects' ? 'bg-white/20' : 'bg-transparent hover:bg-white/10'}">PROJECTS</button>
          <button on:click={() => activeTab = 'experience'} class="flex-1 border border-white/30 py-3 tracking-wider transition {activeTab === 'experience' ? 'bg-white/20' : 'bg-transparent hover:bg-white/10'}">EXPERIENCE</button>
          <button on:click={() => activeTab = 'skills'} class="flex-1 border border-white/30 py-3 tracking-wider transition {activeTab === 'skills' ? 'bg-white/20' : 'bg-transparent hover:bg-white/10'}">SKILLS</button>
      </div>

      {#if activeTab === 'projects'}
          <div class="flex flex-col gap-8">
              {#each projects as project}
                  <ProjectCard {...project} on:click={() => selectedProject = project} />
              {/each}
          </div>
      {:else if activeTab === 'experience'}
          <div class="flex flex-col gap-8">
              {#each experiences as exp}
                  <ExperienceCard {...exp} />
              {/each}
         </div>
      {:else if activeTab === 'skills'}
          <div class="animate-fade-in">
                <SkillsMatrix />
          </div>
      {/if}
  {/if} </main>