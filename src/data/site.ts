export const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vasudevjoshi2003' },
  { label: 'GitHub', href: 'https://github.com/vasudevjoshi' },
  { label: 'Twitter', href: 'https://twitter.com/vasujoshi2003' },
  { label: 'Email', href: 'mailto:vasujoshi2003@gmail.com' },
]

export const floatingNavItems = [
  { label: 'Home', href: '/', icon: 'home' },
  { label: 'Projects', href: '/projects', icon: 'projects' },
  { label: 'Experience', href: '/experience', icon: 'experience' },
  { label: 'Skills', href: '/skills', icon: 'skills' },
  { label: 'Contact', href: '/contact', icon: 'contact' },
] as const

export const techStack = [
  'React.js',
  'Spring Boot',
  'MongoDB',
  'LangChain',
  'AWS',
]

export const featuredProjects = [
  {
    title: 'LogX - Trade Journal & Analytics',
    description:
      'Auto-imports trades from Zerodha via Kite Connect API. Helps retail traders analyze emotional patterns beyond P&L with AI-driven insights.',
    status: 'Live',
    statusTone: 'green',
    tags: ['React', 'Fast API', 'Kite API', 'MongoDB'],
    primaryLabel: 'Visit logxapp.in',
    primaryHref: 'https://logxapp.in',
    secondaryLabel: null,
    secondaryHref: null,
    icon: 'chart',
    layout: 'standard',
  },
  {
    title: 'Skincare Ingredient Analyzer',
    description:
      'RAG-based system using OCR + Sentence-BERT to recommend safe cosmetic ingredients based on skin type. Published at ICTACT JOURNAL in Data Science And Machine Learning 2026 with a 4.8/5 rating.',
    status: 'Published Research',
    statusTone: 'neutral',
    tags: ['Python', 'LangChain', 'Mongo Vector Store', 'OCR', 'Groq APIs'],
    primaryLabel: 'Read Paper',
    primaryHref: 'https://ictactjournals.in/paper/IJDSML_Vol_7_Iss_3_Paper_7_1091_1096.pdf',
    secondaryLabel: 'View Code',
    secondaryHref: 'https://github.com/vasudevjoshi/fyp',
    icon: 'lab',
    layout: 'standard',
  },
] as const

export const skillGroups = [
  {
    title: 'Frontend',
    icon: 'frontend',
    items: ['React', 'Angular', 'TypeScript', 'Tailwind', 'Vite', 'shadcn/ui'],
  },
  {
    title: 'Backend',
    icon: 'backend',
    items: [
      'Spring Boot',
      'Flask',
      'FastAPI',
      'Node.js',
      'REST APIs',
      'OAuth2',
      'JWT',
      'MongoDB',
      'Spring Security',
    ],
  },
  {
    title: 'AI/ML',
    icon: 'ai',
    items: ['LangChain', 'RAG', 'VectorDB', 'OCR', 'Groq APIs', 'Spring AI'],
    featured: ['LangChain', 'RAG', 'Spring AI'],
  },
] as const

export const sideSkillGroups = [
  {
    title: 'Cloud & DevOps',
    icon: 'cloud',
    items: ['AWS Lambda', 'Heroku', 'Vercel', 'GitHub', 'Docker', 'Monorepo'],
  },
  {
    title: 'Integrations',
    icon: 'integrations',
    items: ['Zerodha Kite API', 'Google APIs', 'AWS Textract'],
  },
] as const

export const contactCards = [
  {
    title: 'Email',
    value: 'vasujoshi2003@gmail.com',
    href: 'mailto:vasujoshi2003@gmail.com',
    icon: 'mail',
  },
  {
    title: 'Phone',
    value: '+91 9008763226',
    href: 'tel:+91 9008763226',
    icon: 'phone',
  },
] as const

export const contactLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vasudevjoshi2003',
    icon: 'arrow',
  },
  { label: 'GitHub', href: 'https://github.com/vasudevjoshi', icon: 'card' },
] as const

export const contactMeta = {
  location: 'Nagarbhavi, Mysuru, Karnataka, India',
  coordinates: '12.966161, 77.519494',
  longitude: 77.519494,
  latitude: 12.966161,
  availabilityTitle: 'Available for Remote',
  availabilityText:
    'I thrive in asynchronous environments and distributed teams across any timezone.',
  resumeHref: 'https://drive.google.com/file/d/14m49mFJ6be2gJKtEif79_6-xwvtv4TJz/view?usp=sharing',
  portfolioHref: 'https://logxapp.in',
  codeHref: 'https://github.com/vasudevjoshi',
} as const
