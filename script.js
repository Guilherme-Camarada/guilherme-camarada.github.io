class ProjectCard {
    constructor(projectData) {
        this.project = projectData;
    }

    createCard() {
        const card = document.createElement('div');
        card.className = `project-card ${this.project.category}`;
        card.innerHTML = `
            <img src="${this.project.thumbnail}" alt="${this.project.title}" class="card-thumbnail">
            <div class="card-content">
                <h3 class="card-title">${this.project.title}</h3>
                <p class="card-description">${this.project.description}</p>
                <div class="card-actions">
                    <a href="${this.project.links.github}" target="_blank" class="see-more">See More ></a>
                </div>
            </div>
        `;
        return card;
    }
}

class ProjectFilter {
    constructor() {
        this.projects = [];
        this.filterButtons = document.querySelectorAll('.categories a');
        this.gridContainer = document.querySelector('.project-grid');
        this.activeFilter = 'all';
    }

    initialize(projectsData) {
        this.projects = projectsData;
        this.addEventListeners();
        this.filterProjects();
    }

    addEventListeners() {
        this.filterButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                this.setActiveFilter(button.dataset.filter);
                this.filterProjects();
            });
        });
    }

    setActiveFilter(filter) {
        this.activeFilter = filter;
        this.filterButtons.forEach(button => {
            button.classList.toggle('active', button.dataset.filter === filter);
        });
    }

    filterProjects() {
        this.gridContainer.innerHTML = '';
        const filtered = this.activeFilter === 'all' 
            ? this.projects 
            : this.projects.filter(project => project.category === this.activeFilter);

        filtered.forEach(project => {
            const card = new ProjectCard(project).createCard();
            this.gridContainer.appendChild(card);
        });
    }
}

const projectsData = [
    {
        title: "Portfolio Website v1.0",
        description: "This is version 1.0 of my personal website where i showcase my projects. It was made using Javascript along with CSS/HTML.",
        thumbnail: "images/portfolio-website.png",
        category: "software",
        links: {
            github: "#"
        }
    },
    {
        title: "Plant R' Pets",
        description: "This the final project of my bachelor's degree, together with a team we made a website where you can manage plantations, learn more about plants and at the same time have fun by collecting pets. It includes an authentication system, a plant wiki, pet collection and a plantation management system. Made using .NET Web API with C# for the back-end and Angular with Typescript for the front-end.",
        thumbnail: "/images/plants-are-pets.png",
        category: "software",
        links: {
            github: "#"
        }
    },
    {
        title: "Cycling Events Manager",
        description: "Cycling Events Manager is a web project where I together with a teammate made website where it was possible to create/edit/remove cycling events and members, you can also register members into their favorite events. The project was made using Javascript with Node.JS and CSS/HTML all the information was manipulated from a database we had to create to accomodate the data.",
        thumbnail: "images/cyclyst-manager.png",
        category: "software",
        links: {
            github: "#"
        }
    },
    {
        title: "Hourglass of Eternity",
        description: "This is the final project of my Game Development class, together in a team of 4 we made a vertical slice of a roguelike turn-based game, where you move throught a map facing stronger enemies. Every time you win a battle you get to pick an augment, improving your character, with mini-bosses giving better augments. The objective is to get strong enough to defeat the final boss. Made with Unity.",
        thumbnail: "/images/hourglass-of-eternity.png",
        category: "games",
        links: {
            github: "#"
        }
    },
    {
        title: "Lucid Nightmare",
        description: "This is a game that was made for a class game jam with the theme 'Chaos', together in a team of 3 we made a small vampire-survivors like where you can kill stronger enemies as time passes and gain abilities as you level up. Made using Unity.",
        thumbnail: "images/lucid-nightmare.png",
        category: "games",
        links: {
            github: "#"
        }
    },
    {
        title: "Little Knight's Riches",
        description: "This is one of the games I made solo for my Game Development class, the game consists of picking up coins and as you pick coins you get faster and recharge the timer by a small amount. The objective of the game is to collect as many coins as you can before the time runs out. Made using Unity.",
        thumbnail: "/images/little-knights-riches.png",
        category: "games",
        links: {
            github: "#"
        }
    }
    ,
    {
        title: "Dingo",
        description: "Dingo is a mobile app made with a team of 4. In Dingo you take care of a computer pet, tamagotchi style, where you need to clean him up, buy better parts and take him to the repair shop. Dingo also comes with a map feature where he will show you interesting information about certain locations. The game also comes with 1 minigame where you dodge incoming 'viruses' as dingo. Made in Flutter using Dart.",
        thumbnail: "/images/dingo.png",
        category: "games",
        links: {
            github: "#"
        }
    }
];

class ContactModal {
    constructor(contacts) {
      this.contacts = contacts;
      this.modal = null;
      this.init();
    }
  
    init() {
      this.createModal();
      this.setupEventListeners();
    }
  
    createModal() {
      this.modal = document.createElement('div');
      this.modal.className = 'contact-modal';
      this.modal.innerHTML = `
        <div class="modal-content">
          <span class="close-modal">&times;</span>
          ${this.contacts.map(contact => `
            <div class="contact-item">
              <i class="${contact.icon}"></i>
              <h3>${contact.label}</h3>
              <a href="${contact.link}" target="${contact.label === 'Email' ? '_self' : '_blank'}">${contact.value}</a>
            </div>
          `).join('')}
        </div>
      `;
      document.body.appendChild(this.modal);
    }
  
    setupEventListeners() {
      document.querySelector('.contact-button').addEventListener('click', () => this.open());
  
      this.modal.querySelector('.close-modal').addEventListener('click', () => this.close());
  
      window.addEventListener('click', (e) => {
        if (e.target === this.modal) this.close();
      });
  
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') this.close();
      });
    }
  
    open() {
      this.modal.style.display = 'block';
    }
  
    close() {
      this.modal.style.display = 'none';
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const contacts = [
      {
        icon: 'fas fa-envelope',
        label: 'Email',
        value: 'guilhermecamarada.dev@gmail.com',
        link: 'mailto:guilhermecamarada.dev@gmail.com'
      },
      {
        icon: 'fab fa-linkedin',
        label: 'LinkedIn',
        value: 'https://www.linkedin.com/in/guilherme-camarada-23a424335/',
        link: 'https://www.linkedin.com/in/guilherme-camarada-23a424335/'
      },
      {
        icon: 'fab fa-github',
        label: 'GitHub',
        value: 'https://github.com/Guilherme-Camarada',
        link: 'https://github.com/Guilherme-Camarada'
      }
    ];
  
    new ContactModal(contacts);
  });


document.addEventListener('DOMContentLoaded', () => {
    const filter = new ProjectFilter();
    filter.initialize(projectsData);
});