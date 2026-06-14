import { ChangeDetectionStrategy, Component, signal, Inject, PLATFORM_ID, OnInit } from '@angular/core';
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
  date: string;
  link: string;
  photo: string;
}

interface Extracurricular {
  title: string;
  description: string;
  photo: string;
}

interface Skill {
  name: string;
  url: string;
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
export class App implements OnInit {
  activeSection = signal<string>('about');

  sections = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'blog', label: 'Blog' },
    { id: 'extracurricular', label: 'Extracurricular' }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    this.onScroll();
  }

  onScroll() {
    if (!isPlatformBrowser(this.platformId)) return;

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

  about = {
    name: "Alberto Boffi",
    greet: "Hi, I'm Alberto Boffi 👋",
    role: 'Computer Science Engineer',
    description: 'I am a computer science engineer specializing in scalable full-stack applications, with a deep architectural foundation spanning computer graphics, cybersecurity, artificial intelligence, and advanced algorithms.',
    photo: './assets/albertoboffi.webp'
  };

  workExperience: Experience[] = [
    {
      company: 'Connect Reply',
      role: 'Software Engineer',
      date: 'May 2024 — Present',
      description: 'Design and implement web application architectures that manage integration with connected devices across international markets. Cordinate the full software development lifecycle and interface directly with global stakeholders to deliver scalable solutions.',
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

  skills: Skill[] = [
    { name: 'TypeScript', url: 'https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white' },
    { name: 'Go', url: 'https://img.shields.io/badge/Go-00ADD8?style=flat-square&logo=go&logoColor=white' },
    { name: 'Rust', url: 'https://img.shields.io/badge/Rust-000000?style=flat-square&logo=rust&logoColor=white' },
    { name: 'Python', url: 'https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white' },
    { name: 'C++', url: 'https://img.shields.io/badge/C++-00599C?style=flat-square&logo=c%2B%2B&logoColor=white' },
    { name: 'Java', url: 'https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=java&logoColor=white' },
    { name: 'PostgreSQL', url: 'https://img.shields.io/badge/PostgreSQL-316192?style=flat-square&logo=postgresql&logoColor=white' },
    { name: 'Redis', url: 'https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white' },
    { name: 'Docker', url: 'https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white' },
    { name: 'Kubernetes', url: 'https://img.shields.io/badge/Kubernetes-326CE5?style=flat-square&logo=kubernetes&logoColor=white' },
    { name: 'AWS', url: 'https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=amazon-aws&logoColor=white' },
    { name: 'Angular', url: 'https://img.shields.io/badge/Angular-DD0031?style=flat-square&logo=angular&logoColor=white' },
    { name: 'React', url: 'https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB' },
    { name: 'Linux', url: 'https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black' }
  ];

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
      title: 'Why I moved from REST to strictly typed RPCs',
      date: 'Feb 15, 2024',
      link: '#',
      photo: 'https://placehold.co/200x150/f3f4f6/4b5563?text=RPC'
    },
    {
      title: 'Optimizing Docker builds for minimal deployments',
      date: 'Oct 04, 2023',
      link: '#',
      photo: 'https://placehold.co/200x150/f3f4f6/4b5563?text=Docker'
    }
  ];



  extracurricular: Extracurricular[] = [
    {
      title: 'Open Source Contributor',
      description: 'Regularly submitting patches and feature proposals to major open-source observability frameworks out of pure passion.',
      photo: 'https://placehold.co/120x120/f3f4f6/4b5563?text=OSS'
    },
    {
      title: 'University Hackathon Coordinator',
      description: 'Organized competitive coding challenges for over 250 engineering students, managing sponsor integrations and judging panels.',
      photo: 'https://placehold.co/120x120/f3f4f6/4b5563?text=Hack'
    }
  ];

  socialLinks = {
    email: 'mailto:albertoboffi.1999@gmail.com',
    github: 'https://github.com/albertoboffi/',
    linkedin: 'https://www.linkedin.com/in/alberto-boffi/'
  };
}
