<script>
    import { onMount } from 'svelte';
    import { createEventDispatcher } from 'svelte';

    export let project;
    const dispatch = createEventDispatcher();

    let activeSection = 'summary';

    /** * @param {string} id 
     * @param {'left' | 'right'} direction 
     */
    function scrollReel(id, direction) {
        const container = document.getElementById(id);
        if (!container) return;
        
        const scrollAmount = container.clientWidth;
        container.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        });
    }

    onMount(() => {
        window.scrollTo(0, 0);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    activeSection = entry.target.id;
                }
            });
        }, { rootMargin: '-20% 0px -70% 0px' }); 

        const ids = ['summary', 'introduction', 'modules', 'closing'];
        ids.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    });
</script>

<div class="mb-8">
    <button 
        on:click={() => dispatch('close')}
        class="flex items-center gap-2 text-[#a0aec0] hover:text-[#64ffda] transition font-mono tracking-wide cursor-pointer"
    >
        <i class="fas fa-arrow-left"></i> RETURN TO PROJECTS
    </button>
</div>

<div class="flex flex-col lg:flex-row gap-12 relative items-start">
    
    <div class="w-full lg:w-3/4 flex flex-col gap-12">
        
        <div class="flex flex-col gap-6 w-full">
            
            <div class="w-full bg-black/30 rounded-lg overflow-hidden border border-white/10">
                {#if project.trailerUrl}
                    <iframe 
                        class="w-full aspect-video" 
                        src={project.trailerUrl} 
                        title="Project Trailer" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                {:else if project.imageReel && project.imageReel.length > 0}
                    <div class="relative group h-full">
                        <div id="main-reel-1" class="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar h-full">
                            {#each project.imageReel as img}
                                <img src={img} alt="Gameplay screenshot" class="w-full h-full shrink-0 snap-center object-cover aspect-video" />
                            {/each}
                        </div>
                        
                        <button on:click={() => scrollReel('main-reel-1', 'left')} class="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all hover:bg-[#64ffda] hover:text-black hover:scale-110 cursor-pointer shadow-lg z-10" aria-label="Previous image">
                            <i class="fas fa-chevron-left"></i>
                        </button>
                        <button on:click={() => scrollReel('main-reel-1', 'right')} class="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all hover:bg-[#64ffda] hover:text-black hover:scale-110 cursor-pointer shadow-lg z-10" aria-label="Next image">
                            <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>
                {:else}
                    <img src={project.image} alt="Gameplay screenshot" class="w-full aspect-video object-contain bg-black/40" />
                {/if}
            </div>

            {#if project.trailerUrl && project.imageReel && project.imageReel.length > 0}
                <div class="w-full bg-black/30 rounded-lg overflow-hidden border border-white/10 relative group">
                    <div id="main-reel-2" class="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar">
                        {#each project.imageReel as img}
                            <img src={img} alt="Gameplay screenshot" class="w-full shrink-0 snap-center object-cover aspect-video" />
                        {/each}
                    </div>
                    
                    <button on:click={() => scrollReel('main-reel-2', 'left')} class="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all hover:bg-[#64ffda] hover:text-black hover:scale-110 cursor-pointer shadow-lg z-10" aria-label="Previous image">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <button on:click={() => scrollReel('main-reel-2', 'right')} class="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all hover:bg-[#64ffda] hover:text-black hover:scale-110 cursor-pointer shadow-lg z-10" aria-label="Next image">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
            {/if} 
        </div>

        <h1 class="text-4xl md:text-5xl font-bold text-[#64ffda] drop-shadow-md">{project.title}</h1>

        {#if project.summary}
            <section id="summary" class="scroll-mt-8">
                <h2 class="text-2xl font-bold text-white mb-2">Summary</h2>
                <hr class="border-[#64ffda]/30 mb-6" />
                <div class="text-[#a0aec0] leading-relaxed">{@html project.summary}</div>
            </section>
        {/if}

        {#if project.introduction}
            <section id="introduction" class="scroll-mt-8">
                <h2 class="text-2xl font-bold text-white mb-2">Introduction</h2>
                <hr class="border-[#64ffda]/30 mb-6" />
                <div class="text-[#a0aec0] leading-relaxed">{@html project.introduction}</div>
            </section>
        {/if}

        {#if project.modules && project.modules.length > 0}
            <section id="modules" class="scroll-mt-8 flex flex-col gap-12">
                {#each project.modules as mod, i}
                    <div>
                        <h2 class="text-2xl font-bold text-white mb-2">{mod.title}</h2>
                        <hr class="border-[#64ffda]/30 mb-6" />
                        <div class="text-[#a0aec0] leading-relaxed">{@html mod.text}</div>
    
                        {#if mod.images && mod.images.length > 0}
                            <div class="w-full bg-black/30 rounded-lg overflow-hidden border border-white/10 relative group mt-6">
                                <div id="module-reel-{i}" class="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar">
                                    {#each mod.images as img}
                                        <img src={img} alt="{mod.title} screenshot" class="w-full shrink-0 snap-center object-contain bg-black/40 aspect-video" />
                                    {/each}
                                </div>
                                
                                <button on:click={() => scrollReel(`module-reel-${i}`, 'left')} class="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all hover:bg-[#64ffda] hover:text-black hover:scale-110 cursor-pointer shadow-lg z-10" aria-label="Previous image">
                                    <i class="fas fa-chevron-left"></i>
                                </button>
                                <button on:click={() => scrollReel(`module-reel-${i}`, 'right')} class="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all hover:bg-[#64ffda] hover:text-black hover:scale-110 cursor-pointer shadow-lg z-10" aria-label="Next image">
                                    <i class="fas fa-chevron-right"></i>
                                </button>
                            </div>
                        {/if}
                    </div>
                {/each}
            </section>
        {/if}

        {#if project.closing}
            <section id="closing" class="scroll-mt-8">
                <h2 class="text-2xl font-bold text-white mb-2">Closing Thoughts</h2>
                <hr class="border-[#64ffda]/30 mb-6" />
                <div class="text-[#a0aec0] leading-relaxed">{@html project.closing}</div>
            </section>
        {/if}
    </div>

    <div class="hidden lg:block lg:w-1/4 sticky top-12">
        <div class="border-l border-white/10 pl-6 flex flex-col gap-4 font-mono text-sm">
            <span class="text-white/50 mb-2 uppercase tracking-widest">Contents</span>
            
            {#if project.summary}
                <a href="#summary" class="transition {activeSection === 'summary' ? 'text-[#64ffda]' : 'text-[#a0aec0] hover:text-white'}">Summary</a>
            {/if}
            
            {#if project.introduction}
                <a href="#introduction" class="transition {activeSection === 'introduction' ? 'text-[#64ffda]' : 'text-[#a0aec0] hover:text-white'}">Introduction</a>
            {/if}
            
            {#if project.modules && project.modules.length > 0}
                <a href="#modules" class="transition {activeSection === 'modules' ? 'text-[#64ffda]' : 'text-[#a0aec0] hover:text-white'}">Modules</a>
            {/if}
            
            {#if project.closing}
                <a href="#closing" class="transition {activeSection === 'closing' ? 'text-[#64ffda]' : 'text-[#a0aec0] hover:text-white'}">Closing Thoughts</a>
            {/if}
        </div>
    </div>

</div>

<style>
    .hide-scrollbar::-webkit-scrollbar { display: none; }
    .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>