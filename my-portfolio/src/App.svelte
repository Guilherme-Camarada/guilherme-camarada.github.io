<script>
  import Header from './components/Header.svelte';
  import ProjectCard from './components/ProjectCard.svelte';
  import ExperienceCard from './components/ExperienceCard.svelte';
  import SkillsMatrix from './components/SkillsMatrix.svelte';

  // State assignment (defaulting to the projects view)
  let activeTab = 'projects';

  const projects = [
    {
        id: 'cyber-gauntlet',
        title: "Cyber Gauntlet",
        date: "May 2026 - Jul 2026",
        description: `My initial goal for this project was to build a <strong class="font-bold text-white">FPS weapon mechanics</strong> and a <strong class="font-bold text-white">FPS controller</strong> in Unity. It evolved into a <strong class="font-bold text-white">first-person wave-survival shooter</strong> featuring those mechanics, supported by <strong class="font-bold text-white">wave spawning logic</strong> and a <strong class="font-bold text-white">modular runtime roguelite upgrade system</strong>.`,
        image: "public/Images/CyberGauntlet/cyber.png",
        engineIcon: "devicon-unity-original",
        itchLink: "https://lskingg.itch.io/cyber-gauntlet",
        githubLink: "https://github.com/Guilherme-Camarada/Soulslike_FPS_Shooter"
    },
    {
        id: 'death-to-the-king',
        title: "Death to the King",
        date: "May 2026",
        description: `Created for 'The Eye Jam' under an eldritch horror theme, this <strong class="font-bold text-white">point-and-click escape game</strong> follows a cultist attempting to summon a god by sacrificing the king. As the <strong class="font-bold text-white">programming team lead</strong>, my core contributions included engineering, <strong class="font-bold text-white">text-selection puzzle mechanics</strong>, and the <strong class="font-bold text-white">interactive book system</strong>.`,
        image: "public/Images/DeathTTK/DTTK thumbnail.png",
        engineIcon: "devicon-unity-original",
        itchLink: "https://tetaban.itch.io/deathtotheking",
        githubLink: "https://github.com/manhthai4391/EyeJamGame"
    },
    {
        id: 'torchpunk-dices-cards',
        title: "Torchpunk: Dices & Cards",
        date: "Jul 2025 - Oct 2025",
        description: `During my internship at <strong class="font-bold text-white">Overflow Interactive</strong>, I contributed to the development of this <strong class="font-bold text-white">strategy roguelite</strong> game. My responsibilities focused on engineering <strong class="font-bold text-white">core gameplay mechanics</strong>, including <strong class="font-bold text-white">A* pathfinding</strong> on hex grids, <strong class="font-bold text-white">3D physics dice</strong>, <strong class="font-bold text-white">procedural map generation</strong> systems and <strong class="font-bold text-white">modular upgrade systems</strong>.`,
        image: "public/Images/Torchpunk/Torchpunk.png",
        engineIcon: "devicon-unity-original",
        websiteLink: "https://overflowinteractive.com/"
    },
    {
        id: 'plants-r-pets',
        title: "Plants R' Pets",
        date: "Jan 2025 - Jul 2025",
        description: `Developed the <strong class="font-bold text-white">Plant Wiki</strong> and co-engineered the <strong class="font-bold text-white">Plantations</strong> functionality for a <strong class="font-bold text-white">garden tracking web app</strong>. The application helps users monitor vital plant indicators such as watering, pruning, and sun exposure while providing an <strong class="font-bold text-white">educational wiki</strong> for ongoing plant care.`,
        image: "public/Images/PlantsRPets/plants-are-pets.png",
        engineIcon: "devicon-unity-original",
        githubLink: "https://github.com/RodrigoGordo/PlantsRPets"
    },
    {
        id: 'hourglass-of-eternity',
        title: "Hourglass of Eternity",
        date: "May 2024 - Jul 2024",
        description: `Led the development of a <strong class="font-bold text-white">roguelite turn-based combat</strong> game for my final Game Development class project. Leading a team of four, we delivered a <strong class="font-bold text-white">vertical slice</strong> where players navigate a map, confront progressively stronger enemies, and <strong class="font-bold text-white">collect strategic upgrades</strong> to defeat the final boss.`,
        image: "public/Images/Hourglass/hourglass-of-eternity.png",
        engineIcon: "devicon-unity-original",
        itchLink: "https://lskingg.itch.io/hourglass-of-eternity"
    },
    {
        id: 'lucid-nightmare',
        title: "Lucid Nightmare",
        date: "May 2024",
        description: `Developed for a class game jam under the theme 'Chaos', this is a <strong class="font-bold text-white">Vampire Survivors-like</strong> arena game created by a team of three. Players face increasingly difficult enemy waves over time and <strong class="font-bold text-white">unlock abilities</strong> as they <strong class="font-bold text-white">level up</strong> and progress.`,
        image: "public/Images/LucidNightmare/lucid-nightmare.png",
        engineIcon: "devicon-unity-original",
        itchLink: "https://lskingg.itch.io/lucid-nightmare"
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

<div class="max-w-4xl mx-auto">
  <Header />

  <!-- Navigation Tabs -->
  <div class="flex flex-col md:flex-row gap-4 mb-10">
      <!-- Event Binding and Dynamic Tailwind Injection via JS Literals -->
      <button on:click={() => activeTab = 'projects'} class="flex-1 border border-white/30 py-3 tracking-wider transition {activeTab === 'projects' ? 'bg-white/20' : 'bg-transparent hover:bg-white/10'}">PROJECTS</button>
      <button on:click={() => activeTab = 'experience'} class="flex-1 border border-white/30 py-3 tracking-wider transition {activeTab === 'experience' ? 'bg-white/20' : 'bg-transparent hover:bg-white/10'}">EXPERIENCE</button>
      <button on:click={() => activeTab = 'skills'} class="flex-1 border border-white/30 py-3 tracking-wider transition {activeTab === 'skills' ? 'bg-white/20' : 'bg-transparent hover:bg-white/10'}">SKILLS</button>
  </div>

  <!-- Conditional Evaluation Logic -->
  {#if activeTab === 'projects'}
      <div class="flex flex-col gap-8">
          {#each projects as project}
              <!-- Spreading the single project object cleanly into individual parameters -->
              <ProjectCard {...project} />
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
</div>