<script>
    import { onMount } from 'svelte';
    import { projects } from './data/projects.js';
    import Header from './components/Header.svelte';
    import ProjectCard from './components/ProjectCard.svelte';
    import ExperienceCard from './components/ExperienceCard.svelte';
    import SkillsMatrix from './components/SkillsMatrix.svelte';
    import ProjectModal from './components/ProjectModal.svelte';
  
    let activeTab = 'projects';
    /** @type {any} */
    let selectedProject = null;
  
    // Category filter
    let activeCategory = 'all'; // 'all' | 'software-dev' | 'game-dev'
  
    const experiences = [
      {
        date: "Jul 2025 &mdash; Oct 2025", 
        company: "Overflow Interactive",
        role: "Game Developer",
        logo: "/Images/Faculdade/overflow.png",
        description: `
        <div class="space-y-4 text-slate-300 leading-relaxed font-sans text-sm">
        <p>
            During my internship at Overflow Interactive, I played a key role in the development of the strategy roguelike <strong class="font-bold text-white">"Torchpunk: Dices & Cards"</strong>. Working within a <strong class="font-bold text-white">Scrumban Agile</strong> environment, I was responsible for engineering <strong class="font-bold text-white">core gameplay modules</strong> using <strong class="font-bold text-white">Unity</strong>.
        </p>

        <p class="font-medium text-slate-200">
            My key technical contributions include:
        </p>

        <ul class="list-disc list-inside space-y-2 ml-1 text-slate-300">
            <li>
            Implementing <strong class="font-bold text-white">A* Pathfinding</strong> for AI and player navigation on hexagonal tiles.
            </li>
            <li>
            Developing <strong class="font-bold text-white">physics-based 3D dice</strong> throwing mechanics.
            </li>
            <li>
            Creating algorithms for <strong class="font-bold text-white">procedural world generation</strong>, including biomes and structures.
            </li>
            <li>
            Building a modular <strong class="font-bold text-white">deckbuilding reward system</strong> and a comprehensive UI feedback system.
            </li>
        </ul>

        <p>
            I maintained a strong focus on code quality by adhering to <strong class="font-bold text-white">SOLID principles</strong> and <strong class="font-bold text-white">Clean Code</strong> practices, ensuring the software was <strong class="font-bold text-white">scalable</strong> and easy for designers to integrate.
        </p>
        </div>
        `,
        skills: ["Unity", "C#", "A* Pathfinding", "Procedural Generation", "SOLID", "Clean Code", "Agile (Scrumban)"]
      },
      {
        date: "Sep 2022 &mdash; Jun 2026",
        company: "Instituto Politécnico de Setúbal",
        role: "Bachelor in Software Engineering",
        logo: "/Images/Faculdade/ests-copy.png", 
        description: `
        <div class="space-y-4 text-slate-300 leading-relaxed font-sans text-sm">
        <p>
        My Software Engineering degree was heavily focused on <strong class="font-bold text-white">practical, project-based learning</strong>. I collaborated extensively in teams using <strong class="font-bold text-white">Agile methodologies</strong>, particularly Scrum, to simulate real-world development environments.
        </p>

        <p>
            The curriculum also emphasized <strong class="font-bold text-white">Software Design concepts</strong> and advanced problem-solving strategies, equipping me with the skills to <strong class="font-bold text-white">architect scalable solutions</strong> and tackle complex technical challenges effectively.
        </p>
        </div>
        `,
        skills: ["Software Design", "Design Patterns", "Agile (Scrum)", "Team Collaboration", "Problem Solving", "Project Management"]
      }
    ];
  
    // Hash Routing Logic for Direct CV Links
    function syncProjectFromHash() {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        /** @param {any} p */
        const match = projects.find((p) => p.id === hash);
        if (match) {
          selectedProject = match;
          activeTab = 'projects';
          return;
        }
      }
      selectedProject = null;
    }
  
    /** @param {any} project */
    function openProject(project) {
      selectedProject = project;
      history.pushState(null, '', `#${project.id}`);
    }
  
    function closeProject() {
      selectedProject = null;
      history.pushState(null, '', window.location.pathname + window.location.search);
    }
  
    onMount(() => {
      syncProjectFromHash();
      window.addEventListener('hashchange', syncProjectFromHash);
      return () => window.removeEventListener('hashchange', syncProjectFromHash);
    });
  
    $: softwareCount = projects.filter(p => p.category === 'software-dev').length;
    $: gameCount = projects.filter(p => p.category === 'game-dev').length;
  
    $: filteredProjects = projects.filter((project) => {
      return activeCategory === 'all' || project.category === activeCategory;
    });
  </script>
  
  <main class="max-w-5xl mx-auto w-full relative z-10 px-4">
    <Header />
  
    <!-- Navigation Tabs -->
    <div class="flex flex-col md:flex-row gap-4 mb-8">
        <button on:click={() => activeTab = 'projects'} class="flex-1 border border-white/30 py-3 tracking-wider transition {activeTab === 'projects' ? 'bg-white/20 text-white font-bold' : 'bg-transparent text-slate-300 hover:bg-white/10'}">PROJECTS</button>
        <button on:click={() => activeTab = 'experience'} class="flex-1 border border-white/30 py-3 tracking-wider transition {activeTab === 'experience' ? 'bg-white/20 text-white font-bold' : 'bg-transparent text-slate-300 hover:bg-white/10'}">EXPERIENCE</button>
        <button on:click={() => activeTab = 'skills'} class="flex-1 border border-white/30 py-3 tracking-wider transition {activeTab === 'skills' ? 'bg-white/20 text-white font-bold' : 'bg-transparent text-slate-300 hover:bg-white/10'}">SKILLS</button>
    </div>
  
    {#if activeTab === 'projects'}
        <!-- Centered Filter Box with Dedicated Vector Icons -->
        <div class="border border-white/20 bg-black/40 backdrop-blur-sm rounded-xl p-2.5 mb-8 max-w-3xl mx-auto font-mono text-xs shadow-lg">
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full">
                <!-- All Projects Filter -->
                <button
                    on:click={() => activeCategory = 'all'}
                    class="py-2.5 px-3 rounded border text-center transition flex items-center justify-center gap-2 {activeCategory === 'all' ? 'bg-white/20 border-white text-white font-bold' : 'border-white/20 bg-white/5 text-slate-400 hover:text-white hover:border-white/40'}"
                >
                    <svg class="w-3.5 h-3.5 fill-none stroke-current stroke-2 shrink-0" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                    <span>All Projects ({projects.length})</span>
                </button>
  
                <!-- Software Engineering Filter -->
                <button
                    on:click={() => activeCategory = 'software-dev'}
                    class="py-2.5 px-3 rounded border text-center transition flex items-center justify-center gap-2 {activeCategory === 'software-dev' ? 'bg-white/20 border-white text-white font-bold' : 'border-white/20 bg-white/5 text-slate-400 hover:text-white hover:border-white/40'}"
                >
                    <svg class="w-3.5 h-3.5 fill-none stroke-current stroke-2 shrink-0" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="16 18 22 12 16 6"/>
                        <polyline points="8 6 2 12 8 18"/>
                        <line x1="14" y1="4" x2="10" y2="20"/>
                    </svg>
                    <span>Software Engineering ({softwareCount})</span>
                </button>
  
                <!-- Game Development Filter -->
                <button
                    on:click={() => activeCategory = 'game-dev'}
                    class="py-2.5 px-3 rounded border text-center transition flex items-center justify-center gap-2 {activeCategory === 'game-dev' ? 'bg-white/20 border-white text-white font-bold' : 'border-white/20 bg-white/5 text-slate-400 hover:text-white hover:border-white/40'}"
                >
                    <svg class="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M17.5 7h-11C3.57 7 2 8.57 2 11.5v3C2 17.43 3.57 19 6.5 19c1.63 0 2.94-.8 3.73-1.96l1.27-1.85a.99.99 0 0 1 .83-.44h.34c.32 0 .63.16.83.44l1.27 1.85C15.56 18.2 16.87 19 18.5 19c2.93 0 4.5-1.57 4.5-4.5v-3C23 8.57 21.43 7 18.5 7h-1zm-9 6h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2zm8.5 1.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm1.5-2.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"/>
                    </svg>
                    <span>Game Development ({gameCount})</span>
                </button>
            </div>
        </div>
  
        <!-- 2-Column Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            {#each filteredProjects as project (project.id)}
                <ProjectCard 
                    {...project} 
                    on:click={() => openProject(project)} 
                />
            {/each}
        </div>
  
        {#if filteredProjects.length === 0}
            <div class="p-12 text-center text-slate-400 font-mono text-xs border border-white/20 rounded-xl bg-black/40">
                No projects match the selected category.
            </div>
        {/if}
  
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
  
    <!-- Horizontal Zoomed Modal Overlay -->
    {#if selectedProject}
        <ProjectModal 
            project={selectedProject} 
            on:close={closeProject} 
        />
    {/if}
  </main>