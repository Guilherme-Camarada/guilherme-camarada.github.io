<script>
    import { createEventDispatcher, onMount } from 'svelte';
    const dispatch = createEventDispatcher();
  
    /** @type {any} */
    export let project;
  
    let activeMediaTab = 'gallery';
    let currentImageIdx = 0;
  
    $: allImages = project?.imageReel && project.imageReel.length > 0 
      ? project.imageReel 
      : (project?.image ? [project.image] : []);
  
    function prevImg() {
      if (allImages.length === 0) return;
      currentImageIdx = (currentImageIdx - 1 + allImages.length) % allImages.length;
    }
  
    function nextImg() {
      if (allImages.length === 0) return;
      currentImageIdx = (currentImageIdx + 1) % allImages.length;
    }
  
    function close() {
      dispatch('close');
    }
  
    /** @param {KeyboardEvent} e */
    function handleKeyDown(e) {
      if (e.key === 'Escape') close();
      if (activeMediaTab === 'gallery') {
        if (e.key === 'ArrowLeft') prevImg();
        if (e.key === 'ArrowRight') nextImg();
      }
    }
  
    onMount(() => {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    });
  </script>
  
  <svelte:window on:keydown={handleKeyDown} />
  
  <!-- Modal Backdrop -->
  <div
    role="presentation"
    class="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 lg:p-6 bg-black/85 backdrop-blur-md"
    on:click={close}
  >
    <!-- Horizontal Modal Box (Expanded Width & Clean Layout) -->
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project?.title || 'Project Details'}
      tabindex="-1"
      class="relative w-full max-w-7xl max-h-[96vh] bg-[#0c1017] border border-white/20 rounded-2xl shadow-2xl flex flex-col lg:flex-row overflow-hidden"
      on:click={(e) => e.stopPropagation()}
      on:keydown={(e) => e.stopPropagation()}
    >
      <!-- Close Button -->
      <button
        type="button"
        on:click={close}
        aria-label="Close modal"
        class="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/70 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition font-mono text-sm"
      >
        ✕
      </button>
  
      <!-- LEFT SIDE: Media Section (~56% width on desktop) -->
      <div class="lg:w-[56%] flex flex-col bg-black/90 border-b lg:border-b-0 lg:border-r border-white/10 shrink-0">
        <div class="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/5 font-mono text-xs">
          <div class="flex gap-2">
            {#if allImages.length > 0}
              <button
                type="button"
                on:click={() => (activeMediaTab = 'gallery')}
                class="px-3 py-1 rounded transition {activeMediaTab === 'gallery' ? 'bg-white/20 text-white font-bold' : 'text-slate-400 hover:text-white'}"
              >
                Gallery ({allImages.length})
              </button>
            {/if}
            {#if project?.trailerUrl}
              <button
                type="button"
                on:click={() => (activeMediaTab = 'video')}
                class="px-3 py-1 rounded transition {activeMediaTab === 'video' ? 'bg-white/20 text-white font-bold' : 'text-slate-400 hover:text-white'}"
              >
                Gameplay / Demo
              </button>
            {/if}
          </div>
  
        </div>
  
        <!-- Video / Gallery Area -->
        <div class="relative flex-1 min-h-75 sm:min-h-105 lg:min-h-140 bg-black flex items-center justify-center overflow-hidden">
          {#if activeMediaTab === 'gallery' && allImages.length > 0}
            <img
              src={allImages[currentImageIdx]}
              alt="{project?.title} screenshot"
              class="w-full h-full object-contain select-none"
            />
  
            {#if allImages.length > 1}
              <button
                type="button"
                on:click={prevImg}
                aria-label="Previous image"
                class="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/70 rounded-full border border-white/10 text-white hover:bg-black/95 transition flex items-center justify-center text-lg shadow-lg"
              >
                ‹
              </button>
              <button
                type="button"
                on:click={nextImg}
                aria-label="Next image"
                class="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/70 rounded-full border border-white/10 text-white hover:bg-black/95 transition flex items-center justify-center text-lg shadow-lg"
              >
                ›
              </button>
  
              <!-- Pill Navigation Indicators -->
              <div class="absolute bottom-3 flex space-x-1.5">
                {#each allImages as _, i}
                  <button
                    type="button"
                    on:click={() => (currentImageIdx = i)}
                    aria-label="Go to slide {i + 1}"
                    class="h-1.5 rounded-full transition-all {i === currentImageIdx ? 'w-6 bg-white' : 'w-2 bg-white/40'}"
                  ></button>
                {/each}
              </div>
            {/if}
          {:else if activeMediaTab === 'video' && project?.trailerUrl}
            <iframe
              class="w-full h-full"
              src={project.trailerUrl}
              title="{project.title} Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          {/if}
        </div>
      </div>
  
      <!-- RIGHT SIDE: Information, Links & Engineered Systems (~44% width) -->
      <div class="lg:w-[44%] p-6 sm:p-7 flex flex-col justify-between overflow-y-auto lg:overflow-y-visible space-y-4 font-mono text-left">
        <div class="space-y-4">
          <!-- Title & Metadata -->
          <div>
            <div class="inline-block px-2.5 py-0.5 text-[10px] uppercase tracking-wider rounded border border-white/20 bg-white/5 text-slate-400 mb-1.5">
              {project?.category === 'game-dev' ? 'Game Development' : 'Software Engineering'}
            </div>
            <h2 class="text-2xl sm:text-3xl font-bold text-white tracking-tight">{project?.title}</h2>
            {#if project?.role}
              <p class="text-xs text-slate-400 mt-0.5">{project.role}</p>
            {/if}
            <div class="text-[11px] text-slate-500 mt-0.5">{project?.date}</div>
          </div>
  
          <!-- Action Links -->
          <div class="grid grid-cols-2 gap-2">
            {#if project?.githubLink}
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                class="flex items-center justify-center gap-2 py-2 px-3 rounded border border-white/20 bg-white/5 hover:bg-white/10 text-xs text-white transition"
              >
                <svg class="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                <span>View Source ↗</span>
              </a>
            {/if}
  
            {#if project?.itchLink}
              <a
                href={project.itchLink}
                target="_blank"
                rel="noreferrer"
                class="flex items-center justify-center gap-2 py-2 px-3 rounded border border-white/20 bg-white/5 hover:bg-white/10 text-xs text-white transition"
              >
                <svg class="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.5 7h-11C3.57 7 2 8.57 2 11.5v3C2 17.43 3.57 19 6.5 19c1.63 0 2.94-.8 3.73-1.96l1.27-1.85a.99.99 0 0 1 .83-.44h.34c.32 0 .63.16.83.44l1.27 1.85C15.56 18.2 16.87 19 18.5 19c2.93 0 4.5-1.57 4.5-4.5v-3C23 8.57 21.43 7 18.5 7h-1zm-9 6h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2zm8.5 1.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm1.5-2.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"/>
                </svg>
                <span>Play on Itch.io ↗</span>
              </a>
            {:else if project?.websiteLink}
              <a
                href={project.websiteLink}
                target="_blank"
                rel="noreferrer"
                class="flex items-center justify-center gap-2 py-2 px-3 rounded border border-white/20 bg-white/5 hover:bg-white/10 text-xs text-white transition"
              >
                <svg class="w-4 h-4 fill-none stroke-white stroke-2 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                <span>Visit Website ↗</span>
              </a>
            {/if}
          </div>
  
          <!-- Description (Overview) -->
          <div class="text-xs text-slate-300 leading-relaxed font-sans space-y-2.5">
            {#if project?.summary}
              <div class="p-2.5 rounded-lg border border-white/10 bg-white/5 text-slate-200">
                {@html project.summary}
              </div>
            {/if}
            {#if project?.description}
              <div>
                {@html project.description}
              </div>
            {/if}
          </div>
  
          <!-- Systems List (Compact & Fully Visible) -->
          {#if project?.modules && project.modules.length > 0}
            <div class="space-y-2 pt-1">
              <h4 class="text-xs font-bold uppercase tracking-wider text-white">Engineered Systems</h4>
              <div class="space-y-1.5">
                {#each project.modules as mod}
                  <div class="p-2.5 rounded-lg border border-white/10 bg-white/5">
                    <h5 class="text-xs font-bold text-white mb-0.5">{mod.title}</h5>
                    <p class="text-[11px] text-slate-300 font-sans leading-relaxed">
                      {@html mod.text}
                    </p>
                  </div>
                {/each}
              </div>
            </div>
          {/if}
        </div>
  
        <!-- Emerald Badges Footer -->
        {#if project?.tags && project.tags.length > 0}
          <div class="pt-3 border-t border-white/10 flex flex-wrap gap-2">
            {#each project.tags as tag}
              <span class="px-3 py-1 text-xs font-mono font-medium rounded-md border border-emerald-500/40 bg-emerald-500/15 text-emerald-300">
                {tag}
              </span>
            {/each}
          </div>
        {/if}
      </div>
    </div>
  </div>