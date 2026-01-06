document.addEventListener('DOMContentLoaded', function() {
    
    // Seleciona o intro e todas as secções
    const sections = document.querySelectorAll("#intro, .content-column section");
    const navLinks = document.querySelectorAll(".sticky-toc ul li a");

    function highlightNavigation() {
        let current = "";
        
        // 1. Lógica padrão: verifica a posição de cada secção
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute("id");
            }
        });

        // 2. CORREÇÃO: Verificar se chegámos ao Fundo da Página
        // Se a soma do scroll + altura da janela for >= altura total do documento (menos uma margem pequena)
        if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 50) {
            // Força a seleção da ÚLTIMA secção da lista
            if (sections.length > 0) {
                current = sections[sections.length - 1].getAttribute("id");
            }
        }

        // 3. Proteção de Topo (Scroll 0)
        if (window.pageYOffset < 100 && sections.length > 0) {
            current = sections[0].getAttribute("id");
        }

        // 4. Aplica as classes
        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    }

    highlightNavigation();
    window.addEventListener("scroll", highlightNavigation);
});