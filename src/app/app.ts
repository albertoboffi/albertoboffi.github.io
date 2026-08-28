import { ChangeDetectionStrategy, Component, signal, computed, Inject, PLATFORM_ID, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface Experience {
  company: string;
  role: string;
  date: string;
  description: string;
  photo: string;
}

interface Education {
  school: string;
  course: string;
  date: string;
  description: string;
  photo: string;
}

interface Project {
  title: string;
  description: string;
  photo: string;
  links: { name: string; url: string; }[];
}

interface BlogPost {
  title: string;
  description: string;
  link: string;
  photo: string;
  pdfLink?: string;
}

interface Extracurricular {
  title: string;
  date?: string;
  description: string;
  photo: string;
}

interface SkillItem {
  name: string;
  url: string;
}

interface SkillCategory {
  category: string;
  items: SkillItem[];
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  host: {
    '(window:scroll)': 'onScroll()',
    '(window:resize)': 'onScroll()'
  }
})
export class App implements OnInit, AfterViewInit {
  activeSection = signal<string>('about');
  activeSkillCategory = signal<string>('Frontend');
  isDownloadMenuOpen = signal<boolean>(false);
  canScrollLeft = signal<boolean>(false);
  canScrollRight = signal<boolean>(true);

  @ViewChild('skillsContainer') skillsContainer?: ElementRef<HTMLElement>;

  sections = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Tech Stack' },
    { id: 'projects', label: 'Projects' },
    { id: 'blog', label: 'Blog' },
    { id: 'extracurricular', label: 'Extracurricular' }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    this.onScroll();
  }

  ngAfterViewInit() {
    // Slight delay to ensure rendering is complete on browser before checking layout bounds
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.checkSkillsScroll(), 100);
    }
  }

  onScroll() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.checkSkillsScroll();

    let current = this.sections[0].id;
    const scrollY = window.scrollY;
    const detectionOffset = 200;

    for (const section of this.sections) {
      const element = document.getElementById(section.id);
      if (element) {
        const elementTop = element.getBoundingClientRect().top + scrollY;
        if (elementTop <= scrollY + detectionOffset) {
          current = section.id;
        }
      }
    }

    const documentHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    );
    if (Math.ceil(scrollY + window.innerHeight) >= documentHeight - 10) {
      current = this.sections[this.sections.length - 1].id;
    }

    if (this.activeSection() !== current) {
      this.activeSection.set(current);
    }
  }

  checkSkillsScroll() {
    const el = this.skillsContainer?.nativeElement;
    if (!el) return;
    this.canScrollLeft.set(el.scrollLeft > 0);
    this.canScrollRight.set(Math.ceil(el.scrollLeft + el.clientWidth) < el.scrollWidth);
  }

  about = {
    name: "Alberto Boffi",
    greet: "Hi, I'm Alberto Boffi 👋",
    role: 'Computer Science Engineer',
    description: 'I am a computer science engineer specializing in scalable full-stack applications and artificial intelligence, with a deep architectural foundation spanning data science, computer graphics, cybersecurity and advanced algorithms.',
    photo: './assets/albertoboffi.webp'
  };

  workExperience: Experience[] = [
    {
      company: 'Connect Reply',
      role: 'Software Engineer',
      date: 'May 2024 — Present',
      description: 'Design and implement web applications integrating connected devices across international markets, leveraging autonomous agents and LLM-driven solutions.\nCoordinate the full SDLC and interface with global stakeholders to deliver scalable, intelligent applications.\nCultivated strong Data Science competencies to drive data-informed decision-making.',
      photo: './assets/reply.webp'
    }
  ];

  education: Education[] = [
    {
      school: 'Politecnico di Milano • Master of Science',
      course: 'Computer Science & Engineering',
      date: 'Sept. 2021 — April 2024',
      description: "• Grade: 110/110 Cum Laude\n• Completed my thesis with VirtualRelativity, an interactive simulation of the Special Theory of Relativity in Virtual Reality.",
      photo: './assets/polimi.webp'
    },
    {
      school: 'Politecnico di Milano • Bachelor of Science',
      course: 'Ingegneria Informatica',
      date: 'Sept. 2018 — Sept. 2021',
      description: '',
      photo: './assets/polimi.webp'
    }
  ];

  skills: SkillCategory[] = [
    {
      category: 'Frontend',
      items: [
        { name: 'Angular', url: 'https://img.shields.io/badge/Angular-DD0031?style=flat-square&logo=angular&logoColor=white' },
        { name: 'React', url: 'https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=white' },
        { name: 'Redux', url: 'https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=redux&logoColor=white' },
        { name: 'Svelte', url: 'https://img.shields.io/badge/Svelte-FF3E00?style=flat-square&logo=svelte&logoColor=white' },
        { name: 'TypeScript', url: 'https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white' },
        { name: 'JavaScript', url: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black' },
        { name: 'jQuery', url: 'https://img.shields.io/badge/jQuery-0769AD?style=flat-square&logo=jquery&logoColor=white' },
        { name: 'HTML5', url: 'https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white' },
        { name: 'CSS3', url: 'https://img.shields.io/badge/CSS3-663399?style=flat-square&logo=css&logoColor=white' },
        { name: 'SASS', url: 'https://img.shields.io/badge/SCSS-CC6699?style=flat-square&logo=sass&logoColor=white' },
        { name: 'Progressive Web Apps', url: 'https://img.shields.io/badge/Progressive_Web_Apps-5A0FC8?style=flat-square&logo=pwa&logoColor=white' },
        { name: 'Three.js', url: 'https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=threedotjs&logoColor=white' },
        { name: 'UI / UX', url: 'https://img.shields.io/badge/UI_%2F_UX-FF0055?style=flat-square&logo=figma&logoColor=white' }
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'Python', url: 'https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white' },
        { name: 'PHP', url: 'https://img.shields.io/badge/PHP-777BB4?style=flat-square&logo=php&logoColor=white' },
        { name: 'Node.js', url: 'https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white' },
        { name: 'Java', url: 'https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white' },
        { name: 'RESTful APIs', url: 'https://img.shields.io/badge/RESTful_APIs-FF5E5B?style=flat-square&logo=postman&logoColor=white' },
        { name: 'GraphQL', url: 'https://img.shields.io/badge/Graph_QL-E10098?style=flat-square&logo=graphql&logoColor=white' },
        { name: 'gRPC', url: 'https://img.shields.io/badge/gRPC-51B8C0?style=flat-square&logo=grpc&logoColor=white' },
        { name: 'IAM', url: 'https://img.shields.io/badge/IAM-EB5424?style=flat-square&logo=auth0&logoColor=white' },
        { name: 'Microservices', url: 'https://img.shields.io/badge/Microservices-844FBA?style=flat-square&logo=terraform&logoColor=white' },
        { name: 'Event Streaming', url: 'https://img.shields.io/badge/Event_Streaming-C93CD7?style=flat-square&logo=socket&logoColor=white' },
        { name: 'Cybersecurity', url: 'https://img.shields.io/badge/Cybersecurity-557C94?style=flat-square&logo=kalilinux&logoColor=white' },
        { name: 'MySQL', url: 'https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white' },
        { name: 'NoSQL', url: 'https://img.shields.io/badge/NoSQL-47A248?style=flat-square&logo=mongodb&logoColor=white' },
        { name: 'C#', url: 'https://img.shields.io/badge/C%23-7D62DB?style=flat-square&logo=csharp&logoColor=white' },
        { name: 'Lua', url: 'https://img.shields.io/badge/Lua-000080?style=flat-square&logo=lua&logoColor=white' }
      ]
    },
    {
      category: 'DevOps',
      items: [
        { name: 'Docker', url: 'https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white' },
        { name: 'Git', url: 'https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white' },
        { name: 'Github', url: 'https://img.shields.io/badge/Github-181717?style=flat-square&logo=github&logoColor=white' },
        { name: 'Azure DevOps', url: 'https://img.shields.io/badge/Azure_DevOps-0089D6?style=flat-square' },
        { name: 'Jira', url: 'https://img.shields.io/badge/Jira-0052CC?style=flat-square&logo=jira&logoColor=white' },
        { name: 'Confluence', url: 'https://img.shields.io/badge/Confluence-172B4D?style=flat-square&logo=confluence&logoColor=white' },
        { name: 'CI/CD Pipelines', url: 'https://img.shields.io/badge/CI_%2F_CD_Pipelines-2088FF?style=flat-square&logo=githubactions&logoColor=white' },
        { name: 'SCRUM', url: 'https://img.shields.io/badge/SCRUM-F29400?style=flat-square&logo=loop&logoColor=white' },
        { name: 'Kanban', url: 'https://img.shields.io/badge/Kanban-FC5200?style=flat-square&logo=loops&logoColor=white' },
        { name: 'Sentry', url: 'https://img.shields.io/badge/Sentry-362D59?style=flat-square&logo=sentry&logoColor=white' },
        { name: 'New Relic', url: 'https://img.shields.io/badge/New_Relic-008C99?style=flat-square&logo=newrelic&logoColor=white' },
        { name: 'SDLC Coordination', url: 'https://img.shields.io/badge/SDLC_Coordination-A9225C?style=flat-square' }
      ]
    },
    {
      category: 'AI',
      items: [
        { name: 'TensorFlow', url: 'https://img.shields.io/badge/TensorFlow-FF6F00?style=flat-square&logo=tensorflow&logoColor=white' },
        { name: 'Scikit-learn (ML)', url: 'https://img.shields.io/badge/Scikit--learn_(ML)-F7931E?style=flat-square&logo=scikitlearn&logoColor=white' },
        { name: 'Gymnasium (RL)', url: 'https://img.shields.io/badge/Gymnasium_(RL)-0081A5?style=flat-square&logo=openaigym&logoColor=white' },
        { name: 'Hugging Face', url: 'https://img.shields.io/badge/Hugging_Face-FFD21E?style=flat-square&logo=huggingface&logoColor=black' },
        { name: 'LangChain', url: 'https://img.shields.io/badge/LangChain-7FC8FF?style=flat-square&logo=langchain&logoColor=black' },
        { name: 'Vector DBs', url: 'https://img.shields.io/badge/Vector_DBs-DC244C?style=flat-square&logo=qdrant&logoColor=white' },
        { name: 'MCP', url: 'https://img.shields.io/badge/MCP-191919?style=flat-square&logo=anthropic&logoColor=white' },
        { name: 'RAG', url: 'https://img.shields.io/badge/RAG-F90000?style=flat-square&logo=rag&logoColor=white' },
        { name: 'Prompt Engineering', url: 'https://img.shields.io/badge/Prompt_Engineering-B8EE4B?style=flat-square&logo=claude&logoColor=black' },
        { name: 'Agentic Workflows', url: 'https://img.shields.io/badge/Agentic_Workflows-3BABC3?style=flat-square' },
        { name: 'Deep Learning', url: 'https://img.shields.io/badge/Deep_Learning-D00000?style=flat-square&logo=keras&logoColor=white' },
        { name: 'LLM Integration', url: 'https://img.shields.io/badge/LLM_Integration-00BC8E?style=flat-square' },
        { name: 'Google Colab', url: 'https://img.shields.io/badge/Google_Colab-F9AB00?style=flat-square&logo=googlecolab&logoColor=white' },
      ]
    },
    {
      category: 'Data',
      items: [
        { name: 'Relational Design', url: 'https://img.shields.io/badge/Relational_Design-4479A1?style=flat-square&logo=mysql&logoColor=white' },
        { name: 'ETL Pipelines', url: 'https://img.shields.io/badge/ETL_Pipelines-D22128?style=flat-square&logo=dataintegration&logoColor=white' },
        { name: 'EDA', url: 'https://img.shields.io/badge/EDA-150458?style=flat-square&logo=pandas&logoColor=white' },
        { name: 'Analytics', url: 'https://img.shields.io/badge/Analytics-3776AB?style=flat-square&logo=python&logoColor=white' },
        { name: 'A/B Testing', url: 'https://img.shields.io/badge/A/B_Testing-4285F4?style=flat-square&logo=abtesting&logoColor=white' },
        { name: 'Data Security', url: 'https://img.shields.io/badge/Data_Security-4C4A73?style=flat-square&logo=datasecurity&logoColor=white' },
      ]
    },
    {
      category: 'Automation',
      items: [
        { name: 'Claude Code', url: 'https://img.shields.io/badge/Claude_Code-D97757?style=flat-square&logo=claudecode&logoColor=white' },
        { name: 'GitHub Copilot', url: 'https://img.shields.io/badge/GitHub_Copilot-000000?style=flat-square&logo=githubcopilot&logoColor=white' },
        { name: 'Google AI Studio', url: 'https://img.shields.io/badge/Google_AI_Studio-8E75B2?style=flat-square&logo=googlegemini&logoColor=white' },
        { name: 'Google Antigravity', url: 'https://img.shields.io/badge/Google_Antigravity-2C2255?style=flat-square&logo=google&logoColor=white' },
        { name: 'Cursor', url: 'https://img.shields.io/badge/Cursor-000000?style=flat-square&logo=cursor&logoColor=white' },
        { name: 'Google Jules', url: 'https://img.shields.io/badge/Google_Jules-715CD7?style=flat-square&logo=googlejules&logoColor=white' },
        { name: 'Google Opal', url: 'https://img.shields.io/badge/Google_Opal-665EF6?style=flat-square&logo=google&logoColor=white' },
        { name: 'Industrial Automation', url: 'https://img.shields.io/badge/Industrial_Automation-009999?style=flat-square&logo=siemens&logoColor=white' }
      ]
    },
    {
      category: 'Hardware',
      items: [
        { name: 'VHDL', url: 'https://img.shields.io/badge/VHDL-0071C5?style=flat-square&logo=intel&logoColor=white' },
        { name: 'C', url: 'https://img.shields.io/badge/C-00599C?style=flat-square&logo=c&logoColor=white' },
        { name: 'C++', url: 'https://img.shields.io/badge/C%2B%2B-00599C?style=flat-square&logo=cplusplus&logoColor=white' },
        { name: 'IoT', url: 'https://img.shields.io/badge/IoT-18BCF2?style=flat-square&logo=homeassistant&logoColor=white' },
        { name: 'SBC', url: 'https://img.shields.io/badge/SBC-A22846?style=flat-square&logo=raspberrypi&logoColor=white' },
        { name: 'Electrical Engineering', url: 'https://img.shields.io/badge/Electrical_Engineering-00629B?style=flat-square&logo=ieee&logoColor=white' },
        { name: 'Hardware Architectures', url: 'https://img.shields.io/badge/Hardware_Architectures-283272?style=flat-square&logo=riscv&logoColor=white' },
        { name: 'Networking', url: 'https://img.shields.io/badge/Networking-1BA0D7?style=flat-square&logo=cisco&logoColor=white' }
      ]
    },
    {
      category: 'Media',
      items: [
        //{ name: 'Computer Graphics', url: 'https://img.shields.io/badge/Computer_Graphics-000000?style=flat-square&logo=threedotjs&logoColor=white' },
        { name: 'Figma', url: 'https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white' },
        { name: 'Canva', url: 'https://img.shields.io/badge/Canva-06B8C9?style=flat-square&logo=canva&logoColor=white' },
        { name: 'Unity (VR)', url: 'https://img.shields.io/badge/Unity_(VR)-000000?style=flat-square&logo=unity&logoColor=white' },
        { name: 'Photo Editing', url: 'https://img.shields.io/badge/Photo_Editing-8C8073?style=flat-square&logo=gimp&logoColor=white' },
        { name: 'Vector Graphics', url: 'https://img.shields.io/badge/Vector_Graphics-000000?style=flat-square&logo=inkscape&logoColor=white' },
        { name: 'Video Editing', url: 'https://img.shields.io/badge/Video_Editing-233A51?style=flat-square&logo=davinciresolve&logoColor=white' },
        { name: 'Google Stitch', url: 'https://img.shields.io/badge/Google_Stitch-EBA4E9?style=flat-square&logo=google&logoColor=black' },
        { name: 'Google Pomelli', url: 'https://img.shields.io/badge/Google_Pomelli-3B4609?style=flat-square&logo=google&logoColor=white' }
      ]
    },
    {
      category: 'Mathematics',
      items: [
        { name: 'Algorithms & Data Structures', url: 'https://img.shields.io/badge/Algorithms_%26_Data Structures-FFA116?style=flat-square&logo=leetcode&logoColor=white' },
        { name: 'Operations Research', url: 'https://img.shields.io/badge/Operations_Research-F37626?style=flat-square&logo=jupyter&logoColor=white' },
        { name: 'Formal Logic', url: 'https://img.shields.io/badge/Formal_Logic-E6A100?style=flat-square&logo=formalogic&logoColor=white' },
        { name: 'Theoretical Computer Science', url: 'https://img.shields.io/badge/Theoretical_Computer_Science-3F51B5?style=flat-square&logo=lean&logoColor=white' },
        { name: 'Discrete Mathematics', url: 'https://img.shields.io/badge/Discrete_Mathematics-DD1100?style=flat-square&logo=wolfram&logoColor=white' },
        { name: 'Algebra', url: 'https://img.shields.io/badge/Algebra-013243?style=flat-square&logo=numpy&logoColor=white' },
        { name: 'Physics', url: 'https://img.shields.io/badge/Physics-15559A?style=flat-square&logo=nasa&logoColor=white' },
        { name: 'Calculus', url: 'https://img.shields.io/badge/Calculus-008080?style=flat-square&logo=latex&logoColor=white' }
      ]
    }
  ];

  activeSkills = computed(() => {
    const active = this.activeSkillCategory();
    const category = this.skills.find(s => s.category === active);
    return category ? category.items : [];
  });

  projects: Project[] = [
    {
      title: 'Distributed Key-Value Store',
      description: 'A high-performance custom distributed datastore written entirely in Rust. Handles massive concurrent connections using asynchronous custom runtimes.',
      photo: 'https://placehold.co/800x400/f3f4f6/4b5563?text=Project+KV',
      links: [{ name: 'GitHub ↗', url: '#' }, { name: 'Read Paper ↗', url: '#' }]
    },
    {
      title: 'Minimal Metrics Dashboard',
      description: 'Real-time telemetry and server metrics aggregator utilizing WebSockets and Go. Clean, minimal UI rendered via Tailwind and modern Angular.',
      photo: 'https://placehold.co/800x400/f3f4f6/4b5563?text=Metrics+Dash',
      links: [{ name: 'GitHub ↗', url: '#' }, { name: 'Live Demo ↗', url: '#' }]
    }
  ];

  blogPosts: BlogPost[] = [
    {
      title: 'Progressive Web Apps: The Web\'s Answer to Native Applications',
      description: 'Applied research to evaluate KPIs of PWAs for potential adoption in enterprise projects.',
      link: 'https://dev.to/albertoboffi/series/43437',
      photo: './assets/blog_pwa.webp',
      pdfLink: './assets/papers/pwa_boffi.pdf'
    },
    {
      title: 'From One-Time-Pad to PKI: How Real-World Encryption Protects Our Data',
      description: 'Highly technical review of cryptographic techniques and their theoretical foundations.',
      link: 'https://dev.to/albertoboffi/series/43198',
      photo: './assets/blog_cryptography.webp',
      pdfLink: './assets/papers/cryptography_boffi.pdf'
    },
    {
      title: 'Move Fast, Fail Fast, Judge Fair: Why Tech Needs Outcome-Based Responsibility',
      description: 'Comparative analysis of responsibility attribution frameworks and their impact on modern engineering teams.',
      link: 'https://dev.to/albertoboffi/move-fast-fail-fast-judge-fair-why-tech-needs-outcome-based-responsibility-5747',
      photo: './assets/blog_responsibility.webp',
      pdfLink: './assets/papers/responsibility_boffi.pdf'
    }
  ];

  extracurricular: Extracurricular[] = [
    {
      title: 'Competitive Football',
      date: '2006 — 2021, Current',
      description: 'Football career spanning 15 years, with experience up to the regional level.',
      photo: './assets/figc.webp'
    },
    {
      title: 'PoliMi Athletics Team',
      date: '2021 — 2022',
      description: 'Former member of the Official Athletics Team of Politecnico di Milano.',
      photo: './assets/sport_polimi.webp'
    }
  ];

  socialLinks = {
    email: 'mailto:albertoboffi.1999@gmail.com',
    github: 'https://github.com/albertoboffi/',
    linkedin: 'https://www.linkedin.com/in/alberto-boffi/',
    resume: '#',
    cv: '#'
  };
}
