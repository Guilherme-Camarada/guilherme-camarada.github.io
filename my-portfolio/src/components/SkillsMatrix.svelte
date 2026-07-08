<script>
    const categories = [
    {
        title: "DEVELOPMENT",
        skills: [
            { name: "C#", icon: "devicon-csharp-plain" },
            { name: "ASP.NET", icon: "devicon-dot-net-plain-wordmark" },
            { name: "Angular", icon: "devicon-angularjs-plain" },
            { name: "Unity", icon: "devicon-unity-original text-white" },
            { name: "TypeScript", icon: "devicon-typescript-plain" },
            { name: "JavaScript", icon: "devicon-javascript-plain" },
            { name: "Java", icon: "devicon-java-plain" },
            { name: "HTML", icon: "devicon-html5-plain" },
            { name: "CSS", icon: "devicon-css3-plain" }
            
            // Just in case you meant to include these (since their icons were in your list):
            // { name: "C++", icon: "devicon-cplusplus-plain" },
            // { name: "Unreal Engine", icon: "devicon-unrealengine-original text-white" }
        ]
    },
    {
        title: "DATA",
        skills: [
            { name: "MySQL", icon: "devicon-mysql-plain" },
            { name: "MSSQL", icon: "devicon-microsoftsqlserver-plain" },
            { name: "MongoDB", icon: "devicon-mongodb-plain" }
        ]
    },
    {
        title: "TOOLS",
        skills: [
            { name: "Git", icon: "devicon-git-plain" },
            { name: "GitHub", icon: "devicon-github-original text-white" },
            { name: "Jira", icon: "devicon-jira-plain" },
            { name: "Confluence", icon: "devicon-confluence-original" },
            { name: "HacknPlan", icon: "fas fa-list-check" }, 
            { name: "Lark", icon: "fas fa-comment-dots" }, 
            { name: "Notion", icon: "fas fa-book" } 
        ]
    }
    ];
</script>

<!-- Main Matrix Container -->
<div class="border border-white/20 rounded-lg flex flex-col bg-white/5 overflow-hidden">
    
    {#each categories as category, index}
        <!-- Row Container -->
        <!-- Adds a bottom border to every row except the very last one -->
        <div class="flex flex-col md:flex-row {index !== categories.length - 1 ? 'border-b border-white/20' : ''}">
            
            <!-- Left Column: Category Name -->
            <!-- Fixed width, right border for the vertical dividing line -->
            <div class="w-full md:w-48 p-6 md:border-r border-white/20 flex items-center border-b md:border-b-0 shrink-0">
                <h3 class="text-white font-bold tracking-widest text-sm uppercase">
                    {category.title}
                </h3>
            </div>
            
            <!-- Right Column: Skills List -->
            <!-- Flex-wrap allows the items to naturally flow to the next line if they run out of space -->
            <div class="flex-1 p-6 flex flex-wrap gap-x-8 gap-y-5 items-center">
                {#each category.skills as skill}
                    <div class="flex items-center gap-3 text-white hover:text-[#64ffda] transition duration-300 cursor-default">
                        <i class="{skill.icon} text-xl"></i>
                        <span class="font-semibold text-sm tracking-wide">{skill.name}</span>
                    </div>
                {/each}
            </div>
            
        </div>
    {/each}

</div>