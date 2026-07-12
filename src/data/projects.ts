import afriverseImage from '../assets/projects/afriversefoods.png'
import devflowImage from '../assets/d.png'
import kadashImage from '../assets/ChatGPT Image Jul 11, 2026, 06_24_31 PM.png'
import borderlessImage from '../assets/projects/borderless-pay.png'
import cherryImage from '../assets/projects/cherry-home-school.png'
import cityImage from '../assets/projects/city-university.png'
import gatesImage from '../assets/projects/gates-investment.png'
import konaImage from '../assets/projects/kona.png'
import mikeImage from '../assets/projects/mike165.png'
import propulseImage from '../assets/projects/propulse.png'
import scoutImage from '../assets/projects/scoutnaija.png'
import vioraImage from '../assets/projects/viora.png'

export type Project = {
  title: string
  category: string
  description: string
  image: string
  tags: string[]
  caseStudy: {
    challenge: string
    solution: string
    impact: string
  }
}

export const projectFilters = [
  'All',
  'FinTech',
  'EdTech',
  'HealthTech',
  'Logistics',
  'AI',
  'Marketplace',
  'Enterprise',
  'SaaS',
]

export const projects: Project[] = [
  {
    category: 'Marketplace',
    title: 'Afriverse Foods',
    description: 'African grocery marketplace with product discovery, ordering, and checkout flows.',
    image: afriverseImage,
    tags: ['React', 'Commerce', 'Firebase'],
    caseStudy: {
      challenge: 'The business needed a polished storefront that could organize a broad grocery catalog, support mobile shoppers, and make product discovery feel simple.',
      solution: 'I designed a responsive product experience with category browsing, clear pricing, cart flows, and Firebase-ready data wiring so the storefront can scale with inventory.',
      impact: 'The final product gives customers a clean purchase journey and gives the business a flexible foundation for online sales, marketing campaigns, and future mobile integration.',
    },
  },
  {
    category: 'FinTech',
    title: 'Borderless Pay',
    description: 'Digital payment interface for cross-border transactions and user dashboards.',
    image: borderlessImage,
    tags: ['Payments', 'Dashboard', 'Security'],
    caseStudy: {
      challenge: 'Users needed a payment experience that simplified complex cross-border actions while keeping balances, transactions, and onboarding easy to understand.',
      solution: 'I built dashboard screens, transaction flows, and responsive layouts focused on clarity, trust, and fast access to key financial actions.',
      impact: 'The interface reduced friction around account activity and gave the product a more credible, investor-ready financial technology presentation.',
    },
  },
  {
    category: 'EdTech',
    title: 'Cherry Home School',
    description: 'Education platform for learning content, enrollment, and school communication.',
    image: cherryImage,
    tags: ['Education', 'CMS', 'Responsive'],
    caseStudy: {
      challenge: 'The school needed a digital presence that could communicate programs, build trust with parents, and support a modern learning brand.',
      solution: 'I created a structured education website with program sections, clear calls to action, and responsive pages for parents and students.',
      impact: 'The platform improved presentation quality and made it easier for families to understand the school offering and take the next step.',
    },
  },
  {
    category: 'Enterprise',
    title: 'City University',
    description: 'Institutional website with admissions, programs, leadership, and student-facing pages.',
    image: cityImage,
    tags: ['University', 'Admissions', 'CMS'],
    caseStudy: {
      challenge: 'The institution needed a professional web presence that could communicate academics, leadership, admissions, and credibility across devices.',
      solution: 'I built a polished multi-section experience with clear content hierarchy, reusable page sections, and strong visual direction aligned with the school brand.',
      impact: 'The site created a stronger first impression for prospective students and helped organize institutional information into a more navigable experience.',
    },
  },
  {
    category: 'FinTech',
    title: 'Gates Investment',
    description: 'Investment landing experience for financial products, trust signals, and lead capture.',
    image: gatesImage,
    tags: ['Investment', 'Landing Page', 'Leads'],
    caseStudy: {
      challenge: 'The finance brand needed a trustworthy product page that could explain investment value clearly and support lead generation.',
      solution: 'I designed a conversion-focused interface with benefits, financial credibility cues, and simplified contact paths.',
      impact: 'The result improved brand trust and gave the business a clearer path for turning visitors into qualified leads.',
    },
  },
  {
    category: 'AI',
    title: 'Kona',
    description: 'AI-inspired product interface for modern automation and digital workflows.',
    image: konaImage,
    tags: ['AI', 'Automation', 'Product UI'],
    caseStudy: {
      challenge: 'The product needed a sharp digital interface to present automation features without overwhelming non-technical users.',
      solution: 'I shaped the UI around clean feature discovery, strong visual hierarchy, and guided user actions for automation workflows.',
      impact: 'The interface made the AI concept feel practical, approachable, and ready for product demos.',
    },
  },
  {
    category: 'Enterprise',
    title: 'Mike165',
    description: 'Corporate web experience for brand credibility, services, and conversion.',
    image: mikeImage,
    tags: ['Corporate', 'Services', 'Brand'],
    caseStudy: {
      challenge: 'The brand needed a credible web presence that could explain services and move visitors toward inquiry.',
      solution: 'I built a responsive corporate site with strong service positioning, clean sections, and direct contact flows.',
      impact: 'The website improved perceived professionalism and made the business easier to evaluate on mobile and desktop.',
    },
  },
  {
    category: 'SaaS',
    title: 'Propulse',
    description: 'Agent portal and operational dashboard with real-data workflows.',
    image: propulseImage,
    tags: ['SaaS', 'Dashboard', 'Portal'],
    caseStudy: {
      challenge: 'Teams needed an internal portal that could surface applications, account state, notifications, and operational actions without relying on placeholders.',
      solution: 'I connected frontend workflows to backend APIs, improved notification states, and strengthened user-facing portal behavior.',
      impact: 'The portal became more useful for real operations, reducing manual checking and improving confidence in agent workflows.',
    },
  },
  {
    category: 'Logistics',
    title: 'ScoutNaija',
    description: 'Sports and talent discovery platform for scouting workflows and player visibility.',
    image: scoutImage,
    tags: ['Sports', 'Discovery', 'Profiles'],
    caseStudy: {
      challenge: 'The platform needed to present sports talent, content, and discovery flows in a way that feels modern and trustworthy.',
      solution: 'I created responsive sections and interface patterns for player visibility, scouting content, and platform engagement.',
      impact: 'The experience helped position the platform as a serious sports technology product for talent discovery.',
    },
  },
  {
    category: 'SaaS',
    title: 'Viora',
    description: 'Campaign performance dashboard for marketing visibility and decisions.',
    image: vioraImage,
    tags: ['SaaS', 'Analytics', 'Marketing'],
    caseStudy: {
      challenge: 'Marketing users needed a clear view of performance data and campaign activity without dense, confusing dashboards.',
      solution: 'I built a clean analytics interface with campaign metrics, visual summaries, and predictable dashboard composition.',
      impact: 'The dashboard made campaign performance easier to scan, compare, and explain to stakeholders.',
    },
  },
  {
    category: 'FinTech',
    title: 'Kadash Digital Bank',
    description: 'Responsive digital banking platform for accounts, transfers, cards, and financial analytics.',
    image: kadashImage,
    tags: ['FinTech', 'Banking', 'Dashboard'],
    caseStudy: {
      challenge: 'Customers needed a secure banking experience that made balances, transfers, cards, and spending insights easy to access across devices.',
      solution: 'I designed a unified responsive dashboard with clear account summaries, transaction activity, quick actions, and mobile-first financial workflows.',
      impact: 'The product delivers a more intuitive banking journey while giving users stronger visibility and confidence across everyday financial tasks.',
    },
  },
  {
    category: 'SaaS',
    title: 'DevFlow Workspace',
    description: 'Developer productivity dashboard for projects, technology insights, and delivery performance.',
    image: devflowImage,
    tags: ['Developer Tools', 'Analytics', 'SaaS'],
    caseStudy: {
      challenge: 'Development teams needed a focused workspace for understanding project activity, technology usage, and delivery performance without switching between disconnected tools.',
      solution: 'I created a responsive engineering dashboard with project summaries, technology indicators, performance analytics, and mobile-friendly reporting.',
      impact: 'The workspace makes delivery data easier to understand and gives technical teams a clearer view of progress, tooling, and product health.',
    },
  },
]

export const filterProjectTitles: Record<string, string[]> = {
  All: projects.map((project) => project.title),
  FinTech: ['Kadash Digital Bank', 'Borderless Pay', 'Gates Investment', 'Propulse', 'Afriverse Foods'],
  EdTech: ['Cherry Home School', 'City University', 'Kona', 'ScoutNaija'],
  HealthTech: ['City University', 'Viora', 'Kona', 'Propulse'],
  Logistics: ['ScoutNaija', 'Afriverse Foods', 'Borderless Pay', 'Viora'],
  AI: ['DevFlow Workspace', 'Kona', 'Viora', 'Propulse', 'ScoutNaija'],
  Marketplace: ['Afriverse Foods', 'Kona', 'ScoutNaija', 'Cherry Home School'],
  Enterprise: ['City University', 'Mike165', 'Gates Investment', 'Propulse'],
  SaaS: ['DevFlow Workspace', 'Propulse', 'Viora', 'Kona', 'Borderless Pay'],
}
