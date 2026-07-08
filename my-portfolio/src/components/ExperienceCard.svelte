<script>
    export let date;
    export let company;
    export let role;
    export let description;
    export let logo;
    
    /** @type {string[]} */
    export let skills = [];
</script>

<!-- The main container uses a bottom border for the dividing line -->
<div class="flex flex-col md:flex-row gap-4 md:gap-8 border-b border-white/15 pb-12 mb-12 last:border-none last:pb-0">
    
    <!-- Left Column: Date -->
    <!-- Fixed width and right-aligned on desktop to match your screenshot -->
    <div class="w-full md:w-48 shrink-0 md:text-right text-[#64ffda] text-sm mt-1 font-mono italic whitespace-nowrap">
        {@html date}
    </div>

    <!-- Right Column: Content -->
    <div class="flex-1 flex flex-col">
        
        <!-- Header: Company & Logo -->
        <div class="flex justify-between items-start mb-2 gap-4">
            <h3 class="text-2xl font-bold text-white">{company}</h3>
            
            <!-- Logo Image (Only renders if you provide a logo URL) -->
            {#if logo}
                <!-- Changed from w-16 h-16 to w-32 h-auto max-h-20 so horizontal logos can stretch out -->
                <img src={logo} alt="{company} logo" class="w-24 md:w-32 h-auto max-h-20 object-contain rounded" />
            {/if}
        </div>

        <!-- Role -->
        <h4 class="text-[#64ffda] italic mb-6">{role}</h4>

        <!-- Description (Allows HTML like <p> and <ul> for your bullet points) -->
        <div class="text-[#a0aec0] leading-relaxed space-y-4">
            {@html description}
        </div>

        <!-- Skills Tags -->
        {#if skills.length > 0}
            <div class="flex flex-wrap gap-2 mt-8">
                {#each skills as skill}
                    <span class="px-3 py-1 bg-white/10 text-[#64ffda] text-xs font-semibold rounded border border-[#64ffda]/30 tracking-wide">
                        {skill}
                    </span>
                {/each}
            </div>
        {/if}

    </div>
</div>