<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
  
    export let title = "";
    export let role = "";
    export let date = "";
    export let description = "";
    export let image = "";
    export let itchLink = "";
    export let githubLink = "";
    export let websiteLink = "";
    export let trailerUrl = "";
    /** @type {string[]} */
    export let imageReel = [];
    /** @type {string[]} */
    export let tags = [];
    /** @type {Array<{title: string, text: string}>} */
    export let modules = [];
  
    // Media tab state (Gallery / Video)
    let activeMediaTab = 'gallery';
    let currentImageIdx = 0;
  
    // Sub-tab state
    let activeSubTab = 'overview'; // 'overview' | 'systems'
  
    $: allImages = imageReel && imageReel.length > 0 ? imageReel : (image ? [image] : []);
  
    function prevImg() {
      if (allImages.length === 0) return;
      currentImageIdx = (currentImageIdx - 1 + allImages.length) % allImages.length;
    }
  
    function nextImg() {
      if (allImages.length === 0) return;
      currentImageIdx = (currentImageIdx + 1) % allImages.length;
    }
  
    function handleCardClick() {
      dispatch('click');
    }
  
    /** @param {KeyboardEvent} event */
    function handleKeyDown(event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        dispatch('click');
      }
    }
  </script>
  
  <div
    role="button"
    tabindex="0"
    on:click={handleCardClick}
    on:keydown={handleKeyDown}
    class="border border-white/20 bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden hover:border-white/50 transition cursor-pointer flex flex-col justify-between text-left"
  >
    <div>
      <!-- Media Bar -->
      <div class="flex items-center justify-between px-3 py-1.5 border-b border-white/10 bg-white/5 font-mono text-xs">
        <div class="flex gap-2">
          {#if allImages.length > 0}
            <button
              type="button"
              on:click={(e) => { e.stopPropagation(); activeMediaTab = 'gallery'; }}
              class="px-2 py-0.5 rounded transition {activeMediaTab === 'gallery' ? 'bg-white/20 text-white font-bold' : 'text-slate-400 hover:text-white'}"
            >
              Gallery ({allImages.length})
            </button>
          {/if}
  
          {#if trailerUrl}
            <button
              type="button"
              on:click={(e) => { e.stopPropagation(); activeMediaTab = 'video'; }}
              class="px-2 py-0.5 rounded transition {activeMediaTab === 'video' ? 'bg-white/20 text-white font-bold' : 'text-slate-400 hover:text-white'}"
            >
              Demo
            </button>
          {/if}
        </div>
  
        <span class="text-[10px] text-slate-500 font-mono">Click to view details ↗</span>
      </div>
  
      <!-- Media Screen -->
      <div class="relative aspect-video w-full bg-black/80 flex items-center justify-center overflow-hidden">
        {#if activeMediaTab === 'gallery' && allImages.length > 0}
          <img
            src={allImages[currentImageIdx]}
            alt={title}
            class="w-full h-full object-cover"
          />
  
          {#if allImages.length > 1}
            <button
              type="button"
              on:click={(e) => { e.stopPropagation(); prevImg(); }}
              aria-label="Previous image"
              class="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/70 rounded-full text-white hover:bg-black/90 transition text-sm"
            >
              ‹
            </button>
            <button
              type="button"
              on:click={(e) => { e.stopPropagation(); nextImg(); }}
              aria-label="Next image"
              class="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/70 rounded-full text-white hover:bg-black/90 transition text-sm"
            >
              ›
            </button>
  
            <div class="absolute bottom-2 flex space-x-1">
              {#each allImages as _, i}
                <span class="h-1 rounded-full transition-all {i === currentImageIdx ? 'w-4 bg-white' : 'w-1 bg-white/40'}"></span>
              {/each}
            </div>
          {/if}
        {:else if activeMediaTab === 'video' && trailerUrl}
          <iframe
            class="w-full h-full pointer-events-auto"
            src={trailerUrl}
            title="{title} Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        {/if}
      </div>
  
      <!-- Content Area -->
      <div class="p-5 space-y-4 font-mono">
        <!-- Title & Details -->
        <div>
          <h3 class="text-xl font-bold text-white tracking-wide">{title}</h3>
          {#if role}
            <p class="text-xs text-slate-400 mt-1">{role}</p>
          {/if}
          <div class="text-[11px] text-slate-500 mt-0.5">{date}</div>
        </div>
  
        <!-- Action Buttons Row -->
        <div class="grid grid-cols-2 gap-2" on:click={(e) => e.stopPropagation()} role="presentation">
          {#if githubLink}
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer"
              class="flex items-center justify-center gap-2 py-2 px-3 rounded border border-white/20 bg-white/5 hover:bg-white/10 text-xs text-white transition font-mono"
            >
              <svg class="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              <span>View Source ↗</span>
            </a>
          {/if}
  
          {#if itchLink}
            <a
              href={itchLink}
              target="_blank"
              rel="noreferrer"
              class="flex items-center justify-center gap-2 py-2 px-3 rounded border border-white/20 bg-white/5 hover:bg-white/10 text-xs text-white transition font-mono"
            >
              <svg class="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.5 7h-11C3.57 7 2 8.57 2 11.5v3C2 17.43 3.57 19 6.5 19c1.63 0 2.94-.8 3.73-1.96l1.27-1.85a.99.99 0 0 1 .83-.44h.34c.32 0 .63.16.83.44l1.27 1.85C15.56 18.2 16.87 19 18.5 19c2.93 0 4.5-1.57 4.5-4.5v-3C23 8.57 21.43 7 18.5 7h-1zm-9 6h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2zm8.5 1.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm1.5-2.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"/>
              </svg>
              <span>Play on Itch.io ↗</span>
            </a>
          {:else if websiteLink}
            <a
              href={websiteLink}
              target="_blank"
              rel="noreferrer"
              class="flex items-center justify-center gap-2 py-2 px-3 rounded border border-white/20 bg-white/5 hover:bg-white/10 text-xs text-white transition font-mono"
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
  
        <!-- Sub-Tab Switcher -->
        <div class="grid grid-cols-2 gap-1 p-1 bg-white/5 rounded border border-white/10" on:click={(e) => e.stopPropagation()} role="presentation">
          <button
            type="button"
            on:click={() => activeSubTab = 'overview'}
            class="py-1 text-xs rounded transition {activeSubTab === 'overview' ? 'bg-white/20 text-white font-bold shadow' : 'text-slate-400 hover:text-white'}"
          >
            Overview
          </button>
          <button
            type="button"
            on:click={() => activeSubTab = 'systems'}
            class="py-1 text-xs rounded transition {activeSubTab === 'systems' ? 'bg-white/20 text-white font-bold shadow' : 'text-slate-400 hover:text-white'}"
          >
            Key Systems ({modules ? modules.length : 0})
          </button>
        </div>
  
        <!-- Content Section (No Scrolling / Full Expansion) -->
        {#if activeSubTab === 'overview'}
          <div class="text-xs text-slate-300 leading-relaxed font-sans">
            {@html description}
          </div>
        {:else}
          <div class="space-y-3">
            {#if modules && modules.length > 0}
              {#each modules as mod}
                <div class="p-3 rounded-lg bg-white/5 border border-white/10">
                  <h4 class="text-xs text-white font-bold mb-1.5">{mod.title}</h4>
                  <p class="text-[11px] text-slate-300 font-sans leading-relaxed">
                    {@html mod.text}
                  </p>
                </div>
              {/each}
            {:else}
              <div class="text-xs text-slate-500 py-4 text-center">
                No extra systems detailed for this project.
              </div>
            {/if}
          </div>
        {/if}
      </div>
    </div>
  
    <!-- Green Badges Footer -->
    {#if tags && tags.length > 0}
      <div class="px-5 pb-4 pt-3 flex flex-wrap gap-2 border-t border-white/10">
        {#each tags as tag}
          <span class="px-3 py-1 text-xs font-mono font-medium rounded-md border border-emerald-500/40 bg-emerald-500/15 text-emerald-300">
            {tag}
          </span>
        {/each}
      </div>
    {/if}
  </div>