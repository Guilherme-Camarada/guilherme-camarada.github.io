<script>
    export let title;
    export let date;
    export let description;
    export let image;

    /** @type {string[]} */
    export let engineIcons = [];

    /** @type {string | null} */
    export let itchLink = null;
    
    /** @type {string | null} */
    export let githubLink = null;
    
    /** @type {string | null} */
    export let websiteLink = null;
</script>

<!-- Added md:h-72 to force uniform height across all cards on desktop -->
<div class="flex flex-col md:flex-row bg-white/5 border border-white/20 rounded-lg p-6 hover:-translate-y-1 hover:bg-white/10 transition duration-300 md:h-72">
    
    <!-- Left Column: Details -->
    <!-- min-w-0 is required here so the title truncation works properly -->
    <div class="flex-1 flex flex-col pr-0 md:pr-8 min-w-0">
        
        <!-- Header section changed to flex-col to force Date below Title -->
        <div class="flex flex-col mb-4">
            
            <!-- Title & Icons Row -->
            <div class="flex items-center gap-3">
                <button 
                    on:click
                    class="text-left text-2xl font-bold text-white hover:text-[#64ffda] transition truncate min-w-0 cursor-pointer"
                >
                    {title}
                </button>
    
                <div class="flex items-center gap-3 shrink-0 text-2xl text-[#a0aec0]">
                    {#each engineIcons as icon}
                        <i class="{icon} text-[#64ffda] opacity-75 cursor-default" title="Tech stack"></i>
                    {/each}
                
                {#if githubLink}
                    <a href={githubLink} target="_blank" rel="noreferrer" aria-label="View Source on GitHub" class="hover:text-white transition duration-300">
                    <i class="fab fa-github"></i>
                    </a>
                {/if}

                {#if itchLink}
                    <a href={itchLink} target="_blank" rel="noreferrer" aria-label="View on Itch.io" class="hover:text-[#fa5c5c] transition duration-300">
                        <i class="fab fa-itch-io"></i>
                    </a>
                {/if}

                {#if websiteLink}
                    <a href={websiteLink} target="_blank" rel="noreferrer" aria-label="Visit Website" class="hover:text-[#64ffda] transition duration-300">
                        <i class="fas fa-globe"></i>
                    </a>
                {/if}

            </div>
        </div>  
            
            <!-- Date Row (Always Below) -->
            <span class="text-[#64ffda] text-sm italic mt-1">{date}</span>
        </div>

        <!-- Description with line-clamp to prevent overflowing the fixed height -->
        <p class="text-[#a0aec0] leading-relaxed wrap-break-word line-clamp-6 mt-1">
            {@html description}
        </p>
    </div>

    <!-- Right Column: Image -->
    <div class="w-full md:w-2/5 shrink-0 mt-6 md:mt-0 h-48 md:h-full flex items-center justify-center">
        
        <button 
            on:click
            class="block w-full h-full overflow-hidden rounded border border-white/10 cursor-pointer"
            aria-label="View project details"
        >
            <img src={image} alt="Gameplay screenshot" class="w-full h-full object-cover hover:scale-105 transition duration-500" />
        </button>
    </div>
</div>