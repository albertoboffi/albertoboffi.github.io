import { ChangeDetectionStrategy, Component } from '@angular/core';

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
})
export class App {
  about = {
    name: 'Alberto Boffi',
    role: 'Computer Science Engineer',
    description: 'I am a computer science engineer specializing in scalable backend architectures and robust full-stack applications. I enjoy building performant, minimal, and highly reliable software.',
    photo: 'https://placehold.co/400x400/f3f4f6/4b5563?text=AB'
  };

  workExperience: Experience[] = [
    {
      company: 'Tech Innovators Corp',
      role: 'Software Engineer',
      date: 'Jan 2023 — Present',
      description: 'Architecting scalable microservices using Go and Node.js. Reduced data processing latency by 35% and led the backend integration for a major payment system.',
      photo: 'https://placehold.co/120x120/f3f4f6/4b5563?text=TIC'
    },
    {
      company: 'Global Systems Lab',
      role: 'Backend Developer Intern',
      date: 'Jun 2022 — Dec 2022',
      description: 'Maintained internal CI/CD pipelines, migrated legacy Python scripts to Go, and improved database query execution times.',
      photo: 'https://placehold.co/120x120/f3f4f6/4b5563?text=GSL'
    }
  ];

  education: Education[] = [
    {
      school: 'Politecnico di Milano',
      course: 'Master of Science in Computer Science Engineering',
      date: '2022 — 2024',
      description: 'Focus on distributed systems, advanced algorithms, and software engineering principles. Graduated with honors.',
      photo: 'https://placehold.co/120x120/f3f4f6/4b5563?text=Poli'
    },
    {
      school: 'Politecnico di Milano',
      course: 'Bachelor of Science in Computer Engineering',
      date: '2019 — 2022',
      description: 'Core focus on mathematics, systems architecture, and low-level programming.',
      photo: 'https://placehold.co/120x120/f3f4f6/4b5563?text=Poli'
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

  contacts = [
    { name: 'Email', value: 'albertoboffi.1999@gmail.com', url: 'mailto:albertoboffi.1999@gmail.com' },
    { name: 'GitHub', value: 'github.com', url: '#' },
    { name: 'LinkedIn', value: 'linkedin.com', url: '#' },
    { name: 'X / Twitter', value: 'twitter.com', url: '#' }
  ];
}
