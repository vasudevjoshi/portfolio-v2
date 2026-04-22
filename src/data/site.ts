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
    secondaryLabel: 'View Code',
    secondaryHref: 'https://github.com/vasudevjoshi',
    icon: 'chart',
    layout: 'standard',
  },
  {
    title: 'Skincare Ingredient Analyzer',
    description:
      'RAG-based system using OCR + Sentence-BERT to recommend safe cosmetic ingredients based on skin type. Published at IJRASET 2026 with a 4.8/5 rating.',
    status: 'Published Research',
    statusTone: 'neutral',
    tags: ['Python', 'LangChain', 'Mongo Vector Store', 'OCR', 'Groq APIs'],
    primaryLabel: 'Read Paper',
    primaryHref: 'https://doi.org/10.22214/ijraset.2026.79381',
    secondaryLabel: 'View Code',
    secondaryHref: 'https://github.com/vasudevjoshi/fyp',
    icon: 'lab',
    layout: 'standard',
  },
  {
    title: 'Dynamic Form Engine',
    description:
      'Built reusable, config-driven reactive form components at internship. Supports validation, conditional logic, and report downloads. A performance-first architecture used in large-scale corporate applications.',
    status: 'Production',
    statusTone: 'blue',
    tags: ['Angular', 'TypeScript', 'Reactive Forms'],
    primaryLabel: 'Case Study',
    primaryHref: '#',
    secondaryLabel: null,
    secondaryHref: null,
    icon: 'stack',
    layout: 'featured',
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
  location: 'Mysuru, Karnataka, India',
  coordinates: '12.2958° N, 76.6394° E',
  longitude: 76.6394,
  latitude: 12.2958,
  availabilityTitle: 'Available for Remote',
  availabilityText:
    'I thrive in asynchronous environments and distributed teams across any timezone.',
  resumeHref: '#',
  portfolioHref: 'https://logxapp.in',
  codeHref: 'https://github.com/vasudevjoshi',
} as const
