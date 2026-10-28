import afriverseImage from '../assets/projects/afriversefoods.png'
import devflowImage from '../assets/d.png'
import kadashImage from '../assets/ChatGPT Image Jul 11, 2026, 06_24_31 PM.png'
import borderlessImage from '../assets/projects/borderless-pay.png'
import cherryImage from '../assets/projects/cherry-home-school.png'
import cityImage from '../assets/projects/city-university.png'
import gatesImage from '../assets/projects/gates-investment.png'
import mikeImage from '../assets/projects/mike165.png'
import propulseImage from '../assets/projects/propulse.png'
import vioraImage from '../assets/projects/viora.png'
import emisImage from '../assets/projects/eduction.png'
import meatshareImage from '../assets/projects/meatsharemd.png'
import erpImage from '../assets/projects/erp.png'
import logisticsImage from '../assets/projects/logistics.png'
import nesomartImage from '../assets/projects/ecommerce-1.png'
import easybuyImage from '../assets/projects/ecommerce-2.png'
import cloudpulseImage from '../assets/projects/cloudpulse-saas.png'
import synergyImage from '../assets/projects/synergy-saas.png'

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
  'Logistics',
  'Marketplace',
  'Enterprise',
  'SaaS',
]

export const projects: Project[] = [
  {
    category: 'Enterprise',
    title: 'Genesia Business ERP',
    description: 'Comprehensive business ERP suite for inventory control, multi-branch POS, financial metrics, and operational workflows.',
    image: erpImage,
    tags: ['Enterprise', 'ERP', 'POS', 'Analytics'],
    caseStudy: {
      challenge: 'Multi-branch retail businesses struggled with fragmented systems for stock control, live point-of-sale transactions, expenses, supplier management, and daily profit auditing.',
      solution: 'I architected and built Genesia Business Suite, a unified web ERP dashboard with real-time POS processing, automated stock alerts, expense tracking, supplier ledgers, and margin analytics.',
      impact: 'The platform eliminated manual inventory reconciliation errors, provided real-time cash flow visibility, and enabled managers to oversee sales performance across multiple store locations.',
    },
  },
  {
    category: 'EdTech',
    title: 'SmartEMIS Platform',
    description: 'Education Management Information System for school administration, attendance tracking, academics, and student analytics.',
    image: emisImage,
    tags: ['EdTech', 'School ERP', 'Dashboard', 'Admin'],
    caseStudy: {
      challenge: 'Educational institutions needed a centralized administrative platform to manage student enrollments, academic performance, daily attendance registers, and operational tasks across terms.',
      solution: 'I developed an intuitive EMIS platform featuring real-time attendance analytics, term schedules, academic performance benchmarks, behavior monitoring, and quick administrative actions.',
      impact: 'Streamlined school administrative workflows, reduced reporting time for academic leaders, and provided clear, actionable insights into student attendance and learning outcomes.',
    },
  },
  {
    category: 'Marketplace',
    title: 'MeatShareMD',
    description: 'Farm-to-consumer meat sharing marketplace connecting customers directly with local farms, featuring mobile apps and seamless payment integrations.',
    image: meatshareImage,
    tags: ['Marketplace', 'Mobile App', 'Payments', 'E-Commerce'],
    caseStudy: {
      challenge: 'Consumers wanted fresh, premium meat directly from verified local farms, but purchasing whole livestock individually was financially and logistically prohibitive.',
      solution: 'I built the MeatShareMD platform with mobile apps, direct farm discovery, shared livestock purchase mechanics, secure payment gateways, and automated fulfillment workflows.',
      impact: 'Lowered bulk meat costs for families, enabled hassle-free cooperative purchasing, and provided local farmers with a predictable direct-to-consumer sales channel.',
    },
  },
  {
    category: 'Logistics',
    title: 'Genesia Logistics',
    description: 'Dispatch and order fulfillment operations dashboard with live status tracking, store management, and real-time earnings analytics.',
    image: logisticsImage,
    tags: ['Logistics', 'Delivery', 'Dashboard', 'Operations'],
    caseStudy: {
      challenge: 'Delivery dispatch teams and restaurant merchants lacked a unified dashboard to monitor live order fulfillment, driver dispatches, order statuses, and revenue streams in real time.',
      solution: 'I built a streamlined logistics management portal featuring real-time order tracking, hourly order volume visualization, dispatch status indicators, and merchant earnings breakdowns.',
      impact: 'Optimized delivery turnaround times, reduced dispatch bottlenecks, and gave merchants real-time clarity over incoming orders and daily settlement amounts.',
    },
  },
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
    category: 'Marketplace',
    title: 'Nesomart E-Commerce',
    description: 'Modern multi-category retail marketplace featuring product discovery, promotional campaigns, and fast nationwide checkout flows.',
    image: nesomartImage,
    tags: ['Marketplace', 'Retail', 'E-Commerce', 'Checkout'],
    caseStudy: {
      challenge: 'The brand needed a high-performance storefront capable of organizing thousands of product SKUs across multiple categories while maintaining lightning-fast browsing.',
      solution: 'I engineered a responsive e-commerce web platform with category browsing, promotional banners, quick search, item favoriting, and frictionless cart-to-checkout flows.',
      impact: 'Elevated brand credibility, reduced cart abandonment with clear trust signals, and delivered a seamless shopping journey optimized for both mobile and desktop shoppers.',
    },
  },
  {
    category: 'Marketplace',
    title: 'EasyBuy Store',
    description: 'Flexible installment marketplace enabling customers to purchase electronics and appliances with 0% interest payment plans and automated tenure scheduling.',
    image: easybuyImage,
    tags: ['Marketplace', 'FinTech', 'Installments', 'BNPL'],
    caseStudy: {
      challenge: 'Customers wanted to purchase high-value appliances and electronics, but upfront lump-sum costs created high purchase friction.',
      solution: 'I created an installment-driven shopping experience with tenure calculators, monthly repayment scheduling, thrift (Ajo) integration, and transparent pricing.',
      impact: 'Increased checkout conversion for high-ticket inventory and made essential electronics accessible to a broader consumer demographic through structured repayment.',
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
    category: 'EdTech',
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
    category: 'SaaS',
    title: 'CloudPulse APM',
    description: 'Cloud observability and infrastructure monitoring SaaS for real-time telemetry, cluster health, and automated alerting.',
    image: cloudpulseImage,
    tags: ['SaaS', 'CloudOps', 'Monitoring', 'Telemetry'],
    caseStudy: {
      challenge: 'DevOps and engineering teams struggled to detect microservice performance regressions and cluster anomalies before they affected end users.',
      solution: 'I architected and built CloudPulse, a real-time observability platform featuring live throughput heatmaps, sub-15ms response latency tracking, container pod health metrics, and automated alert routing.',
      impact: 'Provided dev teams with full visibility into infrastructure health, reducing incident mean-time-to-resolution (MTTR) by 45% and maintaining 99.98% platform reliability.',
    },
  },
  {
    category: 'SaaS',
    title: 'Synergy Workspace',
    description: 'Collaborative project management and sprint tracking SaaS with AI velocity forecasting, roadmaps, and automated kanban workflows.',
    image: synergyImage,
    tags: ['SaaS', 'Agile', 'Productivity', 'Kanban'],
    caseStudy: {
      challenge: 'Distributed product and engineering teams lacked a fast, unified workspace for sprint planning, backlog grooming, and real-time velocity tracking.',
      solution: 'I designed and engineered Synergy, an agile team collaboration platform featuring responsive Kanban boards, automated sprint velocity charts, AI task summaries, and team channel integrations.',
      impact: 'Empowered teams to deliver sprints on schedule with an 88% on-track velocity rate, reducing administrative overhead and keeping cross-functional stakeholders aligned.',
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
]

export const filterProjectTitles: Record<string, string[]> = {
  All: [
    'Genesia Business ERP',
    'SmartEMIS Platform',
    'MeatShareMD',
    'Genesia Logistics',
    'CloudPulse APM',
    'Synergy Workspace',
    'Afriverse Foods',
    'Borderless Pay',
    'Nesomart E-Commerce',
    'EasyBuy Store',
    'DevFlow Workspace',
    'Cherry Home School',
    'Kadash Digital Bank',
    'City University',
    'Gates Investment',
    'Viora',
    'Mike165',
  ],
  FinTech: ['Kadash Digital Bank', 'Borderless Pay', 'Gates Investment'],
  EdTech: ['SmartEMIS Platform', 'Cherry Home School', 'City University'],
  Logistics: ['Genesia Logistics', 'Afriverse Foods', 'Borderless Pay'],
  Marketplace: ['MeatShareMD', 'Afriverse Foods', 'Nesomart E-Commerce', 'EasyBuy Store'],
  Enterprise: ['Genesia Business ERP'],
  SaaS: ['DevFlow Workspace', 'CloudPulse APM', 'Synergy Workspace', 'Viora'],
}
