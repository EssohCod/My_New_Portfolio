import { useEffect, useMemo, useState } from 'react'
import type { ReactElement } from 'react'
import Navbar from '../components/Navbar'
import projectsHeroImage from '../assets/projects-img.png'
import { filterProjectTitles, projectFilters, projects } from '../data/projects'
import type { Project } from '../data/projects'

type IconName =
  | 'arrow'
  | 'automation'
  | 'award'
  | 'bank'
  | 'briefcase'
  | 'building'
  | 'calendar'
  | 'cart'
  | 'check'
  | 'close'
  | 'cloud'
  | 'code'
  | 'cube'
  | 'database'
  | 'design'
  | 'download'
  | 'external'
  | 'github'
  | 'heart'
  | 'layers'
  | 'mail'
  | 'mobile'
  | 'rocket'
  | 'school'
  | 'server'
  | 'star'
  | 'store'
  | 'target'
  | 'truck'
  | 'users'

function Icon({ name, className = 'h-5 w-5' }: { name: IconName; className?: string }) {
  const shared = {
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }

  const icons: Record<IconName, ReactElement> = {
    arrow: <><path d="M5 12h14M14 7l5 5-5 5" {...shared} /></>,
    automation: <><path d="M12 3v4M12 17v4M3 12h4M17 12h4" {...shared} /><circle cx="12" cy="12" r="5" {...shared} /><path d="m5.6 5.6 2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" {...shared} /></>,
    award: <><circle cx="12" cy="9" r="5" {...shared} /><path d="m8.6 13-1.1 8 4.5-2.6 4.5 2.6-1.1-8" {...shared} /><path d="m10.3 9 1.1 1.1 2.3-2.4" {...shared} /></>,
    bank: <><path d="m3 9 9-5 9 5" {...shared} /><path d="M5 10h14M6 10v7M10 10v7M14 10v7M18 10v7M4 20h16" {...shared} /></>,
    briefcase: <><rect x="3" y="7" width="18" height="12" rx="2" {...shared} /><path d="M8 7V5h8v2M3 12h18M10 12v2h4v-2" {...shared} /></>,
    building: <><path d="M5 21V4h10v17M15 9h4v12M8 8h2M8 12h2M8 16h2M18 13h.01M18 17h.01M3 21h18" {...shared} /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" {...shared} /><path d="M7 3v4M17 3v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" {...shared} /></>,
    cart: <><circle cx="9" cy="20" r="1.5" {...shared} /><circle cx="18" cy="20" r="1.5" {...shared} /><path d="M3 4h2l2.5 11h10.8L21 8H6" {...shared} /></>,
    check: <><path d="m5 12 4 4L19 6" {...shared} /></>,
    close: <><path d="M6 6l12 12M18 6 6 18" {...shared} /></>,
    cloud: <><path d="M7 18h10a4 4 0 0 0 .7-7.9A6 6 0 0 0 6.2 8.6 4.8 4.8 0 0 0 7 18Z" {...shared} /></>,
    code: <><path d="m8 9-4 3 4 3M16 9l4 3-4 3M13.5 6l-3 12" {...shared} /></>,
    cube: <><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" {...shared} /><path d="m4 7.5 8 4.5 8-4.5M12 12v9" {...shared} /></>,
    database: <><ellipse cx="12" cy="6" rx="7" ry="3" {...shared} /><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" {...shared} /></>,
    design: <><path d="m4 16 4 4L20 8l-4-4L4 16Z" {...shared} /><path d="m13 7 4 4M4 16l-1 5 5-1" {...shared} /></>,
    download: <><path d="M12 3v12M7 10l5 5 5-5M5 21h14" {...shared} /></>,
    external: <><path d="M14 5h5v5M19 5l-8 8" {...shared} /><path d="M18 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" {...shared} /></>,
    github: <><path d="M9 19c-4.5 1.4-4.5-2.5-6-3m12 6v-3.5c0-1 .1-1.6-.5-2.3 2.8-.3 5.7-1.4 5.7-6.2A4.8 4.8 0 0 0 19 6.7 4.5 4.5 0 0 0 18.9 3S17.8 2.7 15 4.3a13 13 0 0 0-6 0C6.2 2.7 5.1 3 5.1 3A4.5 4.5 0 0 0 5 6.7 4.8 4.8 0 0 0 3.8 10c0 4.8 2.9 5.9 5.7 6.2-.5.6-.6 1.3-.5 2.3V22" {...shared} /></>,
    heart: <><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" {...shared} /></>,
    layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z" {...shared} /><path d="m3 12 9 5 9-5M3 16l9 5 9-5" {...shared} /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" {...shared} /><path d="m3 7 9 6 9-6" {...shared} /></>,
    mobile: <><rect x="7" y="2.5" width="10" height="19" rx="2" {...shared} /><path d="M10.5 18.5h3" {...shared} /></>,
    rocket: <><path d="M14 4c3.3.5 5.5 2.7 6 6l-5.5 5.5-4-4L14 4Z" {...shared} /><path d="m10.5 11.5-4 1-2.5 4 4-2.5 1-4M14 15.5l-1 4-4 2.5 2.5-4 4-1" {...shared} /></>,
    school: <><path d="m3 8 9-4 9 4-9 4-9-4Z" {...shared} /><path d="M7 10v5c2 2 8 2 10 0v-5M20 9v6" {...shared} /></>,
    server: <><rect x="3" y="4" width="18" height="6" rx="2" {...shared} /><rect x="3" y="14" width="18" height="6" rx="2" {...shared} /><path d="M7 7h.01M7 17h.01M11 7h6M11 17h6" {...shared} /></>,
    star: <><path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" {...shared} /></>,
    store: <><path d="M4 10h16l-1-5H5l-1 5Z" {...shared} /><path d="M6 10v10h12V10M9 20v-6h6v6" {...shared} /></>,
    target: <><circle cx="12" cy="12" r="8" {...shared} /><circle cx="12" cy="12" r="4" {...shared} /><path d="m12 12 6-6" {...shared} /></>,
    truck: <><path d="M3 6h11v11H3zM14 10h4l3 3v4h-7" {...shared} /><circle cx="7" cy="18" r="2" {...shared} /><circle cx="18" cy="18" r="2" {...shared} /></>,
    users: <><circle cx="9" cy="8" r="3" {...shared} /><path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5M16 11a3 3 0 1 0 0-6M16 14c2.7 0 4.5 1.8 4.5 4.5" {...shared} /></>,
  }

  return <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">{icons[name]}</svg>
}

const heroStats = [
  ['80+', 'Projects Delivered', 'briefcase'],
  ['30+', 'Happy Clients', 'users'],
  ['10+', 'Industries Served', 'cube'],
  ['Web, Mobile &', 'Enterprise Solutions', 'layers'],
] satisfies Array<[string, string, IconName]>

const featuredProject = projects.find((project) => project.title === 'Borderless Pay') ?? projects[0]

// const featureHighlights = [
//   'Secure authentication',
//   'Account management',
//   'Transaction workflows',
//   'Responsive dashboards',
//   'Scalable product architecture',
//   'Clear financial reporting',
// ]

const industries = [
  ['Financial Technology', 'bank'],
  ['Education Technology', 'school'],
  ['Healthcare', 'heart'],
  ['Logistics', 'truck'],
  ['Human Resources', 'users'],
  ['Artificial Intelligence', 'automation'],
  ['Marketplace Platforms', 'store'],
  ['Enterprise Software', 'building'],
  ['E-Commerce', 'cart'],
  ['Government Solutions', 'briefcase'],
  ['Business Automation', 'layers'],
  ['SaaS Products', 'cloud'],
] satisfies Array<[string, IconName]>

const technologyGroups = [
  ['Frontend', ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']],
  ['Backend', ['Node.js', 'Express.js', 'REST APIs', 'GraphQL']],
  ['Mobile', ['React Native', 'Expo', 'Responsive Web']],
  ['Database', ['PostgreSQL', 'MongoDB', 'Firebase', 'MySQL']],
  ['Cloud & AI', ['Docker', 'AWS', 'Vercel', 'OpenAI APIs']],
] satisfies Array<[string, string[]]>

const processSteps = [
  ['Discovery', 'Understanding the business goals and real user needs.', 'target'],
  ['UX Planning', 'Defining architecture, journeys, and a focused roadmap.', 'layers'],
  ['UI/UX Design', 'Creating intuitive interfaces and reusable design systems.', 'design'],
  ['Development', 'Building secure, scalable, and maintainable products.', 'code'],
  ['Deployment', 'Launching confidently with monitoring and improvement.', 'rocket'],
] satisfies Array<[string, string, IconName]>

const passionProjects = [
  projects.find((project) => project.title === 'Kona'),
  projects.find((project) => project.title === 'Viora'),
  projects.find((project) => project.title === 'ScoutNaija'),
  projects.find((project) => project.title === 'Afriverse Foods'),
].filter((project): project is Project => Boolean(project))

const testimonials = [
  ['Nsikan delivered an outstanding platform that exceeded our expectations. Professional, fast, and highly skilled.', 'David Okoro', 'CTO, FinTech'],
  ['Great communication and excellent problem solving. The project was delivered on time with strong quality.', 'Sarah Johnson', 'Product Manager, Learnova'],
  ['Highly recommended. He understands business needs and turns ideas into scalable digital solutions.', 'Michael Brown', 'CTO, MediTrack'],
  ['Working with Nsikan was a great experience. Reliable, innovative, and detail-oriented.', 'Chidi James', 'Founder, ShipSure'],
] satisfies Array<[string, string, string]>

const faqs = [
  ['Can I view a live demo of your work?', 'Yes. Public demos can be shared when a project is not restricted by a client agreement. For private products, I can provide a guided walkthrough of the relevant workflows.'],
  ['Do you sign NDAs for confidential projects?', 'Yes. I am comfortable working under an NDA and following project-specific confidentiality, data handling, and access requirements.'],
  ['Can you redesign an existing application?', 'Yes. I can audit the current product, identify usability and technical gaps, and deliver a phased redesign without disrupting core workflows.'],
  ['Do you build MVPs for startups?', 'Yes. I help founders define the smallest valuable release, select the right architecture, build the product, and prepare it for early users and iteration.'],
  ['Can you work with an existing codebase?', 'Yes. I can onboard into an existing repository, respect its conventions, resolve technical debt selectively, and deliver features without unnecessary rewrites.'],
  ['What industries have you worked in?', 'My portfolio spans financial technology, education, marketplaces, enterprise tools, logistics, AI products, SaaS, and business automation.'],
  ['Do you build web and mobile apps?', 'Yes. I build responsive web applications and cross-platform mobile products with React, Next.js, React Native, and Expo.'],
  ['Do you provide long-term maintenance?', 'Yes. Ongoing support can include monitoring, bug fixes, security updates, feature delivery, performance work, and technical planning.'],
  ['Can you provide UI implementation from Figma?', 'Yes. I translate Figma designs into responsive, accessible interfaces while preserving component consistency and interaction details.'],
  ['Can you integrate AI into existing software?', 'Yes. I can add assistants, search, content workflows, recommendations, and automation using well-scoped AI integrations.'],
] satisfies Array<[string, string]>

const recognition = [
  ['Featured Products', 'award'],
  ['Competition Awards', 'star'],
  ['Industry Recognition', 'briefcase'],
  ['Certifications', 'award'],
  ['Speaking Engagements', 'users'],
  ['Community Contributions', 'heart'],
] satisfies Array<[string, IconName]>

function SectionHeading({ title, description }: { title: string; description?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-2xl font-bold tracking-[-0.04em] text-slate-950 sm:text-3xl">{title}</h2>
      {description && <p className="mt-3 text-sm font-medium leading-7 text-slate-600 sm:text-base">{description}</p>}
    </div>
  )
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const filteredProjects = useMemo(() => {
    const titles = filterProjectTitles[activeFilter] ?? filterProjectTitles.All
    return titles
      .map((title) => projects.find((project) => project.title === title))
      .filter((project): project is Project => Boolean(project))
  }, [activeFilter])

  useEffect(() => {
    if (!selectedProject) return

    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedProject(null)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedProject])

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-950">
      <Navbar />

      <section className="relative border-b border-slate-100 bg-[radial-gradient(circle_at_85%_25%,rgba(21,87,255,0.14),transparent_32%),linear-gradient(110deg,#ffffff_0%,#ffffff_58%,#f4f7ff_100%)]">
        <div className="mx-auto max-w-[1720px] px-6 py-14 lg:px-16 lg:py-16">
          <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#1557ff]">My Projects</p>
              <h1 className="mt-5 max-w-3xl text-[38px] font-bold leading-[1.08] tracking-[-0.05em] sm:text-[52px] lg:text-[60px]">
                Building Digital Products That Create <span className="text-[#1557ff]">Real Impact</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-slate-600">
                Over the years, I&apos;ve designed and developed software solutions for startups,
                businesses, educational institutions, and organizations across multiple industries.
                Every project reflects my commitment to quality engineering, user-centered design,
                and scalable architecture.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row print:hidden">
                <a
                  href="mailto:nsikanessohofficial@gmail.com?subject=Project%20Enquiry"
                  className="inline-flex items-center justify-center gap-3 rounded-md bg-[#1557ff] px-7 py-4 text-sm font-black text-white shadow-[0_14px_30px_rgba(21,87,255,0.25)] transition hover:-translate-y-0.5 hover:bg-[#0f46d8]"
                >
                  Start a Project <Icon name="arrow" className="h-4 w-4" />
                </a>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex items-center justify-center gap-3 rounded-md border-2 border-[#1557ff] bg-white px-7 py-4 text-sm font-black text-[#1557ff] transition hover:-translate-y-0.5 hover:bg-[#eef4ff]"
                >
                  Download Portfolio <Icon name="download" className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[820px]">
              <img
                src={projectsHeroImage}
                alt="Responsive digital banking product displayed on laptop and mobile screens"
                className="relative z-10 w-full object-contain mix-blend-multiply drop-shadow-[0_24px_30px_rgba(15,23,42,0.15)]"
              />
            </div>
          </div>

          <div className="mt-10 grid w-full gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {heroStats.map(([value, label, icon]) => (
              <article key={label} className="flex min-h-24 items-center gap-4 rounded-xl border border-slate-200 bg-white/95 px-5 py-4 shadow-[0_12px_30px_rgba(15,23,42,0.06)]">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[#eef4ff] text-[#1557ff]">
                  <Icon name={icon} className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xl font-black leading-none text-slate-950">{value}</p>
                  <p className="mt-1.5 text-xs font-bold leading-4 text-slate-500">{label}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="px-6 py-16 lg:px-16">
        <div className="mx-auto max-w-[1540px]">
          <SectionHeading
            title="Featured Work"
            description="A selection of projects that demonstrate my technical expertise, problem-solving approach, and ability to deliver scalable digital products."
          />

          <article className="mt-9 grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.07)] lg:grid-cols-[0.92fr_1.08fr]">
            <div className="flex min-h-[360px] items-center bg-[linear-gradient(145deg,#f7f9ff,#edf3ff)] p-5 sm:p-8 lg:min-h-[520px]">
              <div className="overflow-hidden rounded-xl border border-white bg-white shadow-[0_22px_50px_rgba(15,23,42,0.12)]">
                <img src={featuredProject.image} alt={`${featuredProject.title} interface`} className="h-full w-full object-cover object-top" />
              </div>
            </div>

            <div className="p-7 sm:p-10 lg:p-12">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-[#1557ff]">FinTech • Web Application</p>
              <h3 className="mt-4 text-3xl font-black tracking-[-0.04em] text-slate-950 sm:text-4xl">{featuredProject.title}</h3>
              <p className="mt-5 max-w-3xl text-sm font-medium leading-7 text-slate-600 sm:text-base">
                A modern digital payment platform designed to provide secure account management,
                transfers, payment workflows, and financial visibility across desktop and mobile.
              </p>

              <div className="mt-8 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
                <div>
                  <h4 className="text-sm font-black text-slate-950">My Role</h4>
                  <ul className="mt-4 space-y-3">
                    {['Product architecture', 'Full-stack development', 'Backend engineering', 'UI implementation'].map((item) => (
                      <li key={item} className="flex gap-2 text-xs font-bold text-slate-600"><Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-[#1557ff]" />{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-950">Key Features</h4>
                  <ul className="mt-4 space-y-3">
                    {featureHighlights.slice(0, 4).map((item) => (
                      <li key={item} className="flex gap-2 text-xs font-bold text-slate-600"><Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-[#1557ff]" />{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="sm:col-span-2 xl:col-span-1">
                  <h4 className="text-sm font-black text-slate-950">Technology Used</h4>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'].map((item) => (
                      <span key={item} className="rounded-md bg-slate-100 px-3 py-1.5 text-[11px] font-black text-slate-600">{item}</span>
                    ))}
                  </div>
                  <h4 className="mt-6 text-sm font-black text-slate-950">Results</h4>
                  <ul className="mt-4 space-y-3">
                    {['Improved operational clarity', 'Secure financial workflows', 'Responsive user experience'].map((item) => (
                      <li key={item} className="flex gap-2 text-xs font-bold text-slate-600"><Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-[#1557ff]" />{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-9 flex flex-wrap gap-3 print:hidden">
                <button type="button" onClick={() => setSelectedProject(featuredProject)} className="inline-flex items-center gap-3 rounded-md bg-[#1557ff] px-6 py-3.5 text-sm font-black text-white transition hover:bg-[#0f46d8]">
                  View Case Study <Icon name="external" className="h-4 w-4" />
                </button>
                <a href="#portfolio" className="inline-flex items-center gap-3 rounded-md border border-[#1557ff] px-6 py-3.5 text-sm font-black text-[#1557ff] transition hover:bg-[#eef4ff]">
                  Explore Portfolio <Icon name="arrow" className="h-4 w-4" />
                </a>
              </div>
            </div>
          </article>
        </div>
      </section> */}

      <section id="portfolio" className="border-y border-slate-100 bg-[#fbfcff] px-6 py-16 lg:px-16">
        <div className="mx-auto max-w-[1540px]">
          <SectionHeading title="Explore by Category" />
          <div className="mt-7 flex flex-wrap justify-center gap-2.5 print:hidden">
            {projectFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
                className={`rounded-lg border px-5 py-2.5 text-xs font-bold transition ${activeFilter === filter ? 'border-[#1557ff] bg-[#1557ff] text-white shadow-[0_10px_24px_rgba(21,87,255,0.22)]' : 'border-slate-200 bg-white text-slate-600 hover:border-[#1557ff] hover:text-[#1557ff]'}`}
              >
                {filter === 'All' ? 'All Projects' : filter}
              </button>
            ))}
          </div>

          <div className="mt-11">
            <h3 className="text-center text-xl font-bold tracking-[-0.03em] text-slate-950">Project Portfolio</h3>
            <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProjects.map((project) => (
                <article key={`${activeFilter}-${project.title}`} className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_15px_38px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#1557ff]/35 hover:shadow-[0_24px_55px_rgba(15,23,42,0.1)]">
                  <button type="button" onClick={() => setSelectedProject(project)} className="relative block overflow-hidden bg-[#edf3ff] text-left">
                    <img src={project.image} alt={`${project.title} project preview`} className="h-48 w-full object-cover object-top transition duration-500 group-hover:scale-[1.04]" />
                    <span className="absolute left-3 top-3 rounded-md bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[#1557ff] shadow-sm">{project.category}</span>
                  </button>
                  <div className="flex flex-1 flex-col p-5">
                    <h4 className="text-lg font-bold tracking-[-0.025em] text-slate-950">{project.title}</h4>
                    <p className="mt-2 flex-1 text-xs font-medium leading-6 text-slate-600">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => <span key={tag} className="rounded bg-slate-100 px-2.5 py-1 text-[10px] font-bold text-slate-500">{tag}</span>)}
                    </div>
                    <button type="button" onClick={() => setSelectedProject(project)} className="mt-5 inline-flex items-center justify-between rounded-md border border-[#1557ff]/30 px-4 py-2.5 text-xs font-black text-[#1557ff] transition hover:bg-[#eef4ff] print:hidden">
                      View Project Details <Icon name="arrow" className="h-4 w-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-16">
        <div className="mx-auto max-w-[1540px]">
          <SectionHeading title="Project Case Studies" description="An inside look at how challenges were transformed into measurable product outcomes." />
          <div className="mt-9 grid gap-6 lg:grid-cols-2">
            {[projects.find((project) => project.title === 'Propulse') ?? projects[0], featuredProject].map((project) => (
              <article key={project.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.05)] sm:p-8">
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#eef4ff] text-[#1557ff]"><Icon name={project.category === 'FinTech' ? 'bank' : 'briefcase'} className="h-6 w-6" /></span>
                  <div>
                    <h3 className="text-xl font-black tracking-[-0.03em]">{project.title}</h3>
                    <p className="mt-1 text-xs font-black text-[#1557ff]">{project.category} • Product Engineering</p>
                  </div>
                </div>
                <div className="mt-7 grid gap-6 sm:grid-cols-3">
                  {[
                    ['Challenge', project.caseStudy.challenge],
                    ['Solution', project.caseStudy.solution],
                    ['Outcome', project.caseStudy.impact],
                  ].map(([heading, text]) => (
                    <div key={heading}>
                      <h4 className="text-xs font-black uppercase tracking-[0.12em] text-slate-950">{heading}</h4>
                      <p className="mt-3 text-xs font-medium leading-6 text-slate-600">{text}</p>
                    </div>
                  ))}
                </div>
                <button type="button" onClick={() => setSelectedProject(project)} className="mt-7 inline-flex items-center gap-2 text-xs font-black text-[#1557ff] print:hidden">Read full case study <Icon name="arrow" className="h-4 w-4" /></button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-[#fbfcff] px-6 py-16 lg:px-16">
        <div className="mx-auto max-w-[1540px] space-y-14">
          <div>
            <h2 className="text-center text-2xl font-bold tracking-[-0.04em]">Projects Across Industries</h2>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
              {industries.map(([industry, icon]) => (
                <article key={industry} className="rounded-xl border border-slate-200 bg-white px-3 py-5 text-center shadow-[0_10px_28px_rgba(15,23,42,0.04)]">
                  <Icon name={icon} className="mx-auto h-6 w-6 text-[#1557ff]" />
                  <p className="mt-3 text-xs font-bold leading-5 text-slate-700">{industry}</p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-center text-2xl font-bold tracking-[-0.04em]">Technologies Behind My Work</h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {technologyGroups.map(([group, items], groupIndex) => {
                const technologyIcons: IconName[] = ['code', 'server', 'mobile', 'database', 'cloud']
                return (
                  <article key={group} className="rounded-xl border border-slate-200 bg-white p-5 shadow-[0_10px_28px_rgba(15,23,42,0.04)]">
                    <Icon name={technologyIcons[groupIndex]} className="h-6 w-6 text-[#1557ff]" />
                    <h3 className="mt-4 text-sm font-bold">{group}</h3>
                    <ul className="mt-4 space-y-3">
                      {items.map((item) => <li key={item} className="flex items-center gap-2 text-[11px] font-medium text-slate-600"><span className="h-1.5 w-1.5 rounded-full bg-[#1557ff]" />{item}</li>)}
                    </ul>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-16">
        <div className="mx-auto max-w-[1540px] space-y-14">
          <div>
            <h2 className="text-center text-2xl font-bold tracking-[-0.04em]">How Every Project Comes to Life</h2>
            <div className="relative mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              <div className="absolute left-[10%] right-[10%] top-8 hidden border-t-2 border-dotted border-[#8fb0ff] lg:block" />
              {processSteps.map(([title, description, icon], index) => (
                <article key={title} className="relative text-center">
                  <div className="relative z-10 mx-auto grid h-16 w-16 place-items-center rounded-full border border-[#1557ff]/20 bg-[#eef4ff] text-[#1557ff] shadow-[0_10px_24px_rgba(21,87,255,0.12)]"><Icon name={icon} className="h-7 w-7" /></div>
                  <span className="mx-auto mt-3 grid h-6 w-6 place-items-center rounded-full bg-[#1557ff] text-[10px] font-bold text-white">{index + 1}</span>
                  <h3 className="mt-4 text-sm font-bold">{title}</h3>
                  <p className="mt-2 text-[11px] font-medium leading-5 text-slate-600">{description}</p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-center text-2xl font-bold tracking-[-0.04em]">Portfolio by Numbers</h2>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {[
                ['80+', 'Projects Completed'],
                ['30+', 'Happy Clients'],
                ['10+', 'Industries'],
                ['5+', 'Years Experience'],
              ].map(([value, label]) => (
                <article key={label} className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
                  <p className="text-2xl font-black text-[#1557ff]">{value}</p>
                  <p className="mt-2 text-xs font-bold text-slate-600">{label}</p>
                </article>
              ))}
              <article className="rounded-xl border border-slate-200 bg-[linear-gradient(110deg,#eef4ff,#ffffff)] p-5 text-center shadow-[0_12px_30px_rgba(15,23,42,0.05)] sm:col-span-2 lg:col-span-1">
                <p className="text-2xl font-black text-[#1557ff]">Thousands</p>
                <p className="mt-2 text-xs font-bold text-slate-600">of Users Served Across Multiple Platforms</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-[#fbfcff] px-6 py-16 lg:px-16">
        <div className="mx-auto max-w-[1540px]">
          <SectionHeading title="Passion Projects" description="Products built to explore new technologies, contribute to the developer community, and experiment with innovative ideas." />
          <div className="mt-9 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {passionProjects.map((project) => (
              <article key={project.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-[0_15px_38px_rgba(15,23,42,0.05)]">
                <div className="flex items-start gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#eef4ff] text-[#1557ff]"><Icon name="code" className="h-5 w-5" /></span>
                  <div><h3 className="text-sm font-black">{project.title}</h3><p className="mt-1 text-[11px] font-bold text-[#1557ff]">{project.tags.join(' • ')}</p></div>
                </div>
                <p className="mt-4 text-xs font-medium leading-6 text-slate-600">{project.description}</p>
                <button type="button" onClick={() => setSelectedProject(project)} className="mt-5 inline-flex w-full items-center justify-between rounded-md border border-slate-200 px-4 py-2.5 text-xs font-black text-slate-700 transition hover:border-[#1557ff] hover:text-[#1557ff] print:hidden">View Details <Icon name="external" className="h-4 w-4" /></button>
              </article>
            ))}
          </div>

          <div className="mt-16">
            <SectionHeading title="What Clients Say" />
            <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {testimonials.map(([quote, name, role]) => (
                <article key={name} className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0_15px_38px_rgba(15,23,42,0.05)]">
                  <div className="flex gap-1 text-[#f5b301]">{Array.from({ length: 5 }).map((_, index) => <Icon key={index} name="star" className="h-4 w-4 fill-current" />)}</div>
                  <p className="mt-4 text-xs font-medium leading-6 text-slate-600">&ldquo;{quote}&rdquo;</p>
                  <div className="mt-5 flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-[linear-gradient(135deg,#1557ff,#77a0ff)] text-xs font-black text-white">{name.split(' ').map((part) => part[0]).join('')}</span>
                    <div><p className="text-xs font-black text-slate-950">{name}</p><p className="mt-0.5 text-[10px] font-bold text-slate-500">{role}</p></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-16">
        <div className="mx-auto max-w-[1540px] space-y-14">
          <div>
            <h2 className="text-center text-2xl font-black tracking-[-0.04em]">Project FAQs</h2>
            <div className="mt-8 grid gap-3 md:grid-cols-2">
              {faqs.map(([question, answer], index) => {
                const isOpen = openFaq === index
                return (
                  <div key={question} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_10px_28px_rgba(15,23,42,0.04)]">
                    <button type="button" onClick={() => setOpenFaq(isOpen ? null : index)} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-5 px-5 py-4 text-left text-xs font-black text-slate-800">
                      {question}
                      <span className={`grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#eef4ff] text-base text-[#1557ff] transition ${isOpen ? 'rotate-45' : ''}`}>+</span>
                    </button>
                    {isOpen && <p className="border-t border-slate-100 px-5 py-4 text-xs font-medium leading-6 text-slate-600">{answer}</p>}
                  </div>
                )
              })}
            </div>
          </div>

          <div>
            <h2 className="text-center text-2xl font-black tracking-[-0.04em]">Recognition</h2>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {recognition.map(([label, icon]) => (
                <article key={label} className="rounded-xl border border-slate-200 bg-white px-3 py-6 text-center shadow-[0_10px_28px_rgba(15,23,42,0.04)]">
                  <span className="mx-auto grid h-11 w-11 place-items-center rounded-xl bg-[#eef4ff] text-[#1557ff]"><Icon name={icon} className="h-5 w-5" /></span>
                  <p className="mt-4 text-xs font-black leading-5 text-slate-700">{label}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#061c52] px-6 py-14 text-white lg:px-16 print:hidden">
        <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_5%_70%,#4b7cff_1.3px,transparent_1.3px),radial-gradient(circle_at_92%_20%,#4b7cff_1px,transparent_1px)] [background-size:18px_18px,22px_22px]" />
        <div className="absolute -right-16 -top-20 h-72 w-72 rounded-full bg-[#1557ff]/30 blur-3xl" />
        <div className="relative mx-auto flex max-w-[1540px] flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8fb0ff]">Let&apos;s Build</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] sm:text-4xl">Have a Project in Mind?</h2>
            <p className="mt-4 text-sm font-medium leading-7 text-white/75">Every successful product starts with a great idea and the right technical partner. Let&apos;s turn your vision into a scalable, secure, and user-focused solution.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
            <a href="mailto:nsikanessohofficial@gmail.com?subject=Let%27s%20Build%20Together" className="inline-flex items-center justify-center gap-3 rounded-md bg-[#1557ff] px-6 py-4 text-sm font-bold text-white shadow-[0_14px_30px_rgba(21,87,255,0.32)] transition hover:-translate-y-0.5 hover:bg-[#2e68ff]">Let&apos;s Build Together <Icon name="arrow" className="h-4 w-4" /></a>
            <a href="mailto:nsikanessohofficial@gmail.com?subject=Discovery%20Call" className="inline-flex items-center justify-center gap-3 rounded-md border border-white/60 px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10">Schedule a Discovery Call <Icon name="calendar" className="h-4 w-4" /></a>
            <a href="mailto:nsikanessohofficial@gmail.com" className="inline-flex items-center justify-center gap-3 rounded-md border border-white/60 px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10">Contact Me <Icon name="mail" className="h-4 w-4" /></a>
          </div>
        </div>
      </section>

      <div className="bg-[#04133a] px-6 py-5 text-center text-xs font-medium text-white/60 print:hidden">© {new Date().getFullYear()} Nsikan Essoh. Built with care and purpose.</div>

      {selectedProject && (
        <div className="fixed inset-0 z-[100] overflow-y-auto bg-slate-950/75 p-4 backdrop-blur-md print:hidden" role="presentation" onMouseDown={() => setSelectedProject(null)}>
          <div className="mx-auto my-6 max-w-5xl overflow-hidden rounded-2xl bg-white shadow-[0_34px_100px_rgba(0,0,0,0.3)]" role="dialog" aria-modal="true" aria-labelledby="project-dialog-title" onMouseDown={(event) => event.stopPropagation()}>
            <div className="relative bg-[#edf3ff]">
              <img src={selectedProject.image} alt={`${selectedProject.title} case study preview`} className="max-h-[440px] w-full object-cover object-top" />
              <button type="button" onClick={() => setSelectedProject(null)} className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white text-slate-950 shadow-[0_12px_28px_rgba(15,23,42,0.18)] transition hover:scale-105" aria-label="Close project case study"><Icon name="close" className="h-5 w-5" /></button>
            </div>
            <div className="p-6 sm:p-9">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-md bg-[#eef4ff] px-3 py-1 text-xs font-black text-[#1557ff]">{selectedProject.category}</span>
                {selectedProject.tags.map((tag) => <span key={tag} className="rounded-md bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{tag}</span>)}
              </div>
              <h2 id="project-dialog-title" className="mt-5 text-3xl font-black tracking-[-0.04em] sm:text-4xl">{selectedProject.title} Case Study</h2>
              <p className="mt-4 max-w-3xl text-sm font-medium leading-7 text-slate-600 sm:text-base">{selectedProject.description}</p>
              <div className="mt-8 grid gap-5 md:grid-cols-3">
                {[
                  ['Challenge', selectedProject.caseStudy.challenge, 'target'],
                  ['Solution', selectedProject.caseStudy.solution, 'code'],
                  ['Impact', selectedProject.caseStudy.impact, 'rocket'],
                ].map(([heading, text, icon]) => (
                  <article key={heading} className="rounded-xl border border-slate-200 bg-[#fbfcff] p-5">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-[#eef4ff] text-[#1557ff]"><Icon name={icon as IconName} className="h-5 w-5" /></span>
                    <h3 className="mt-4 text-xs font-black uppercase tracking-[0.12em] text-slate-950">{heading}</h3>
                    <p className="mt-3 text-sm font-medium leading-7 text-slate-600">{text}</p>
                  </article>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
                <button type="button" onClick={() => setSelectedProject(null)} className="inline-flex items-center justify-center rounded-md border border-slate-300 px-6 py-3.5 text-sm font-black text-slate-700 transition hover:bg-slate-50">Close</button>
                <a href={`mailto:nsikanessohofficial@gmail.com?subject=${encodeURIComponent(`Project enquiry inspired by ${selectedProject.title}`)}`} className="inline-flex items-center justify-center gap-3 rounded-md bg-[#1557ff] px-6 py-3.5 text-sm font-black text-white transition hover:bg-[#0f46d8]">Start a Similar Project <Icon name="arrow" className="h-4 w-4" /></a>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default Projects
