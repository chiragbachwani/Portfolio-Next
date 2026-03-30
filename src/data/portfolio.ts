export const portfolioData = {
  hero: {
    greeting: "👋 Hello, World!",
    name: "I'm Chirag\nBachwani",
    bio: "Software Development Engineer with over 2+ years of full-stack production experience spanning mobile, backend, and cloud infrastructure.",
    roles: [
      "Software Engineer",
      "Flutter Developer",
      "Full Stack Engineer",
      "AI Integrations",
    ],
    resumeUrl:
      "https://drive.google.com/drive/folders/1J0oodz4RTR-N2jbuDLCsBzvtJ2Z3FKJU",
  },
  stats: [
    { number: "2+", label: "Years\nExperience" },
    { number: "4", label: "Companies\nWorked At" },
    { number: "200+", label: "DSA Problems\nSolved" },
    { number: "8.43", label: "CGPA\nB.Tech CSE" },
  ],
  skills: [
    {
      category: "Languages",
      skills: [
        { name: "C / C++", level: 0.8 },
        { name: "Go", level: 0.7 },
        { name: "Dart", level: 0.9 },
        { name: "Python", level: 0.8 },
        { name: "JavaScript", level: 0.8 },
        { name: "SQL", level: 0.75 },
      ],
    },
    {
      category: "Frameworks & Tech",
      skills: [
        { name: "Flutter", level: 0.9 },
        { name: "Node.js", level: 0.8 },
        { name: "Express.js", level: 0.8 },
        { name: "React Native", level: 0.75 },
        { name: "OpenAI API", level: 0.85 },
        { name: "WebSockets", level: 0.8 },
      ],
    },
    {
      category: "Mobile",
      skills: [
        { name: "Animations", level: 0.85 },
        { name: "State Management (BLoC, GetX)", level: 0.9 },
        { name: "Deep Linking", level: 0.8 },
        { name: "Push Notifications", level: 0.85 },
        { name: "Responsive UI", level: 0.9 },
      ],
    },
    {
      category: "Backend & Databases",
      skills: [
        { name: "REST APIs", level: 0.9 },
        { name: "API Optimization", level: 0.8 },
        { name: "MongoDB", level: 0.8 },
        { name: "PostgreSQL", level: 0.75 },
        { name: "SQLite", level: 0.8 },
      ],
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "AWS (Cognito, Elastic Beanstalk, S3, CodePipeline)", level: 0.75 },
        { name: "Firebase", level: 0.9 },
        { name: "Docker", level: 0.7 },
        { name: "GitHub Actions / CI/CD", level: 0.8 },
      ],
    },
    {
      category: "Observability & Payments",
      skills: [
        { name: "Firebase Crashlytics", level: 0.9 },
        { name: "Sentry & Amplitude", level: 0.8 },
        { name: "RevenueCat", level: 0.75 },
        { name: "Razorpay", level: 0.8 },
      ],
    },
  ],
  projects: [
    {
      title: "Galaxy.ai",
      subtitle: "The #1 All-in-One AI Platform",
      description:
        "Helped scale Galaxy.ai to 250K+ installs across Play Store and App Store viewing explosive growth. Designed a dynamic configuration architecture, enabling server-driven UI rendering and zero-update feature launches.",
      link: "https://play.google.com/store/apps/details?id=com.galaxyAi.app",
      images: [
        "/images/gai1.jpg",
        "/images/gai2.jpg",
        "/images/gai3.jpg",
        "/images/gai4.jpg",
      ],
      tags: ["Flutter", "AWS", "Firebase"],
      isPortrait: true,
    },
    {
      title: "HealthScan Pro",
      subtitle: "Health based Social Media App",
      description:
        "A health-based social media app with ML-powered diagnosis for 6 disease types. Users can post health issues and get community support from professionals.",
      link: "https://github.com/chiragbachwani/Health-Scan-Pro.git",
      images: [
        "/images/hs1.png",
        "/images/hs2.png",
        "/images/hs3.png",
        "/images/hs4.png",
      ],
      tags: ["Flutter", "Firebase", "ML"],
      isPortrait: true,
    },
    {
      title: "AntarMitra",
      subtitle: "Mental Health & Meditation Buddy",
      description:
        "Meditation and self-care app with a community feed, therapist support, guided video meditations, and a dynamic reward system to encourage mindfulness.",
      link: "https://github.com/chiragbachwani/antarmitra",
      images: [
        "/images/am1.png",
        "/images/am2.png",
        "/images/am3.png",
        "/images/am4.png",
        "/images/am6.png",
        "/images/am7.png",
      ],
      tags: ["Flutter", "Firebase", "GetX"],
      isPortrait: true,
    },
    {
      title: "Kuvaka",
      subtitle: "Food Delivery Partner App",
      description:
        "Partner-side food delivery app built with Flutter and Firebase. Features map selection, online/offline toggle, document upload, and order history.",
      link: "https://github.com/chiragbachwani/kuvaka-task.git",
      images: [
        "/images/k0.png",
        "/images/k1.png",
        "/images/k2.png",
        "/images/k3.png",
        "/images/k4.png",
        "/images/k5.png",
      ],
      tags: ["Flutter", "Firebase", "Maps"],
      isPortrait: true,
    },
    {
      title: "QuickBuy",
      subtitle: "E-Commerce Platform (User + Seller)",
      description:
        "Full-featured e-commerce app with cart, wishlist, categories, address selection, and real-time seller chat. Seller app includes dashboard, inventory management, and order fulfillment.",
      link: "https://github.com/Chirag-bachwani/QuickBuy-User_side.git",
      images: [
        "/images/qb0.png",
        "/images/qb1.png",
        "/images/qb2.png",
        "/images/qb3.png",
        "/images/qb4.png",
        "/images/qb5.png",
      ],
      tags: ["Flutter", "Firebase", "GetX"],
      isPortrait: true,
    },
    {
      title: "ChatterBox",
      subtitle: "Responsive Real-Time Chat App",
      description:
        "Real-time chat application with mobile OTP verification, profile customization, and a modern UI built with Flutter and Firebase.",
      link: "https://github.com/Chirag-bachwani/ChatterBox.git",
      images: [
        "/images/c0.png",
        "/images/c1.png",
        "/images/c2.png",
        "/images/c4.png",
        "/images/c5.png",
        "/images/c6.png",
      ],
      tags: ["Flutter", "Firebase"],
      isPortrait: true,
    },
    {
      title: "Scrabble",
      subtitle: "Cloud-Synced Notes App",
      description:
        "Simple cloud-connected notes app with Google Sign-In for seamless access across devices. Backend powered by Node.js.",
      link: "https://github.com/chiragbachwani/Scrabble--A_Notes_App.git",
      images: [
        "/images/sc1.png",
        "/images/sc2.png",
        "/images/sc3.jpg",
        "/images/sc4.jpg",
        "/images/sc5.jpg",
      ],
      tags: ["Flutter", "Node.js", "Firebase"],
      isPortrait: true,
    },
  ],
  experience: [
    {
      company: "Galaxy.ai",
      role: "Software Development Engineer",
      period: "Feb'25 – Present",
      description:
        "• Scaled application to 250K+ installs across Play Store and App Store, supporting rapid feature expansion and reliability.\n• Integrated 4,500+ tools by designing a dynamic configuration architecture, enabling server-driven UI rendering and zero-update feature launches.\n• Forked and extended the Clerk Flutter package - adding hydration-aware loading states and exponential backoff for API calls, achieving zero critical production issues.\n• Led mobile release planning end-to-end, conducted code reviews, and orchestrated a GitHub Actions AI bot for automated PR reviews and auto-fixes.",
      tags: ["Flutter", "Play Store", "CI/CD", "Clerk"],
    },
    {
      company: "SparkStart Solutions & Saarthi AI",
      role: "Full Stack Developer",
      period: "May’24 – Jan’25",
      description:
        "• Architected and built Collabify (Flutter + Node.js) at SparkStart, onboarding 500+ beta users in 4 weeks.\n• Engineered normalized database schema with Node.js APIs at Saarthi AI, targeting 1,000+ users.\n• Deployed and managed AWS infrastructure - Cognito, Elastic Beanstalk, S3, CodePipeline, SNS/SES - shrinking deployment time from 30 min to <5 min.\n• Sustaining 99.9% uptime and <250 ms API latency with 98% test coverage. Integrated Firebase OTP auth, Razorpay, and Google Maps.",
      tags: ["Flutter", "Node.js", "AWS", "MongoDB"],
    },
    {
      company: "Reway Technologies",
      role: "Mobile & Backend Developer Intern",
      period: "Jul’23 – Dec’23",
      description:
        "• Spearheaded end-to-end development of Reway E-waste App using Flutter, Firebase, and Google Cloud APIs, launching a production-ready application with 15+ core features in 6 months.\n• Built a scalable backend with Dart and Firebase for user registration, e-waste listing, and recycler matching, serving 5,000 users.\n• Achieved a 4.9/5 Play Store rating through a user-friendly interface connecting consumers and recyclers.",
      tags: ["Flutter", "Firebase", "Google Cloud APIs", "Dart"],
    },
  ],
  contact: {
    email: "bachwani620@gmail.com",
    github: "https://github.com/chiragbachwani",
    linkedin: "https://www.linkedin.com/in/chiragbachwani/",
    instagram: "https://www.instagram.com/chirag_bachwani/",
    tagline: "Let's Build Something\nAmazing Together",
    subtext:
      "I'm currently open to new opportunities. If you have a project in mind or just want to say hi, drop me a message!",
    copyright: "© 2026 Chirag Bachwani",
  },
  achievements: [
    "1st Runner-up, GeeksforGeeks Interview Contest.",
    "Solved 200+ data structures and algorithms problems on LeetCode.",
    "Secured top 10 positions in 3 major offline hackathons.",
    "Over 2+ years of full-stack production experience spanning 4 companies.",
  ],
};
