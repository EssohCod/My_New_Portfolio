import type { ReactElement } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import heroImage from '../assets/hero-img.png'

type IconName =
  | 'ai'
  | 'bank'
  | 'briefcase'
  | 'calendar'
  | 'check'
  | 'cloud'
  | 'code'
  | 'database'
  | 'design'
  | 'desktop'
  | 'gear'
  | 'heart'
  | 'home'
  | 'layers'
  | 'lock'
  | 'phone'
  | 'rocket'
  | 'school'
  | 'server'
  | 'shield'
  | 'spark'
  | 'store'
  | 'target'
  | 'truck'
  | 'users'

function Icon({ name, className = 'h-7 w-7' }: { name: IconName; className?: string }) {
  const shared = {
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }

  const icons: Record<IconName, ReactElement> = {
    ai: <><path d="M12 3v18M8 5c-2 .7-3.5 2.6-3.5 5 0 3.3 2.5 5.8 6 6M16 5c2 .7 3.5 2.6 3.5 5 0 3.3-2.5 5.8-6 6" {...shared} /><path d="M8 10h8M8 14h8" {...shared} /></>,
    bank: <><path d="M3 9 12 4l9 5" {...shared} /><path d="M5 10v8M9 10v8M15 10v8M19 10v8M3 20h18" {...shared} /></>,
    briefcase: <><rect x="4" y="7" width="16" height="12" rx="2" {...shared} /><path d="M9 7V5h6v2M4 12h16" {...shared} /></>,
    calendar: <><rect x="4" y="5" width="16" height="15" rx="2" {...shared} /><path d="M8 3v4M16 3v4M4 10h16" {...shared} /></>,
    check: <path d="m5 12 4 4L19 6" {...shared} />,
    cloud: <path d="M7 18h10a4 4 0 0 0 .8-7.9A6 6 0 0 0 6.5 8.4 4.8 4.8 0 0 0 7 18Z" {...shared} />,
    code: <><path d="m8 9-4 3 4 3" {...shared} /><path d="m16 9 4 3-4 3" {...shared} /><path d="m13.5 6-3 12" {...shared} /></>,
    database: <><ellipse cx="12" cy="6" rx="7" ry="3" {...shared} /><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" {...shared} /><path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" {...shared} /></>,
    design: <><path d="M5 4h14v10H5z" {...shared} /><path d="M8 20h8M12 14v6" {...shared} /></>,
    desktop: <><rect x="4" y="5" width="16" height="11" rx="2" {...shared} /><path d="M8 20h8M12 16v4" {...shared} /></>,
    gear: <><circle cx="12" cy="12" r="3" {...shared} /><path d="M19 12a7 7 0 0 0-.1-1l2-1.6-2-3.4-2.4 1a7 7 0 0 0-1.8-1L14.4 3h-4.8L9.3 6a7 7 0 0 0-1.8 1l-2.4-1-2 3.4L5.1 11a7 7 0 0 0 0 2l-2 1.6 2 3.4 2.4-1a7 7 0 0 0 1.8 1l.3 3h4.8l.3-3a7 7 0 0 0 1.8-1l2.4 1 2-3.4-2-1.6c.1-.3.1-.7.1-1Z" {...shared} /></>,
    heart: <path d="M12 20s-7-4.4-8.6-9.2C2.2 7.2 4.9 4.5 8.1 4.5c1.8 0 3.1.9 3.9 2 .8-1.1 2.1-2 3.9-2 3.2 0 5.9 2.7 4.7 6.3C19 15.6 12 20 12 20Z" {...shared} />,
    home: <><path d="m3 11 9-7 9 7" {...shared} /><path d="M5 10v10h14V10M9 20v-6h6v6" {...shared} /></>,
    layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z" {...shared} /><path d="m3 13 9 5 9-5" {...shared} /><path d="m3 17 9 5 9-5" {...shared} /></>,
    lock: <><rect x="5" y="10" width="14" height="10" rx="2" {...shared} /><path d="M8 10V7a4 4 0 0 1 8 0v3" {...shared} /></>,
    phone: <><rect x="7" y="3.5" width="10" height="17" rx="2" {...shared} /><path d="M10.5 17.5h3" {...shared} /></>,
    rocket: <><path d="M14 4c3.3.5 5.5 2.7 6 6l-5.5 5.5-4-4L14 4Z" {...shared} /><path d="m10.5 11.5-4 1-2.5 4 4-2.5 1-4" {...shared} /></>,
    school: <><path d="m3 8 9-4 9 4-9 4-9-4Z" {...shared} /><path d="M7 10v5c2 2 8 2 10 0v-5" {...shared} /></>,
    server: <><rect x="4" y="4" width="16" height="6" rx="2" {...shared} /><rect x="4" y="14" width="16" height="6" rx="2" {...shared} /><path d="M8 7h.01M8 17h.01" {...shared} /></>,
    shield: <><path d="M12 3 5 6v5c0 4.4 2.9 8.4 7 10 4.1-1.6 7-5.6 7-10V6l-7-3Z" {...shared} /><path d="m8.8 12 2.1 2.1 4.3-4.3" {...shared} /></>,
    spark: <><path d="M12 3v5M12 16v5M3 12h5M16 12h5" {...shared} /><path d="m5 5 3.5 3.5M15.5 15.5 19 19M19 5l-3.5 3.5M8.5 15.5 5 19" {...shared} /></>,
    store: <><path d="M4 10h16l-1-5H5l-1 5Z" {...shared} /><path d="M6 10v10h12V10M9 20v-6h6v6" {...shared} /></>,
    target: <><circle cx="12" cy="12" r="8" {...shared} /><circle cx="12" cy="12" r="4" {...shared} /><path d="m12 12 5-5" {...shared} /></>,
    truck: <><path d="M3 7h11v10H3zM14 11h4l3 3v3h-7" {...shared} /><circle cx="7" cy="18" r="2" {...shared} /><circle cx="17" cy="18" r="2" {...shared} /></>,
    users: <><path d="M16 19c0-2.2-1.8-4-4-4s-4 1.8-4 4" {...shared} /><circle cx="12" cy="9" r="3" {...shared} /><path d="M20 18c0-1.7-1.1-3.1-2.7-3.7" {...shared} /></>,
  }

  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      {icons[name]}
    </svg>
  )
}

const heroStats = [
  ['80+', 'Projects Delivered', 'briefcase'],
  ['30+', 'Happy Clients', 'users'],
  ['10+', 'Industries Served', 'home'],
  ['End-to-End', 'Development', 'layers'],
] satisfies Array<[string, string, IconName]>

const services = [
  {
    title: 'Custom Software Development',
    icon: 'desktop',
    color: 'text-[#1557ff] bg-[#eef4ff]',
    description: 'I build custom software solutions tailored to your unique business processes, helping you automate operations and improve productivity.',
    items: ['Business Process Automation', 'Enterprise Software', 'CRM Systems', 'ERP Solutions', 'Internal Management Systems', 'Workflow Automation', 'Scalable Architecture', 'Long-Term Maintainability'],
  },
  {
    title: 'Full-Stack Web Development',
    icon: 'cloud',
    color: 'text-purple-600 bg-purple-50',
    description: 'Modern, responsive, and scalable web applications built using industry-leading technologies that deliver exceptional performance.',
    items: ['Business Websites', 'SaaS Platforms', 'Dashboards', 'Admin Panels', 'Customer Portals', 'Booking Systems', 'Marketplace Platforms', 'Progressive Web Apps'],
  },
  {
    title: 'Mobile App Development',
    icon: 'phone',
    color: 'text-teal-600 bg-teal-50',
    description: 'Cross-platform mobile applications for Android and iOS that provide seamless user experiences and robust performance.',
    items: ['Android Applications', 'iOS Applications', 'Cross-Platform Apps', 'Business Apps', 'Customer Apps', 'Internal Staff Apps', 'Push Notifications', 'App Store Deployment'],
  },
  {
    title: 'Backend Development & API Engineering',
    icon: 'server',
    color: 'text-orange-600 bg-orange-50',
    description: 'Secure, scalable, and well-structured backend systems that power modern applications and integrate seamlessly with third-party services.',
    items: ['REST APIs', 'GraphQL APIs', 'Authentication Systems', 'Database Design', 'Payment Gateway Integration', 'Third-Party Integrations', 'Cloud Storage', 'Business Logic Development'],
  },
  {
    title: 'UI Implementation',
    icon: 'design',
    color: 'text-pink-600 bg-pink-50',
    description: 'Transforming UI and UX designs into fast, responsive, accessible, and pixel-perfect web and mobile applications.',
    items: ['Figma to React', 'Figma to Next.js', 'Responsive Layouts', 'Design Systems', 'Component Libraries', 'Animations', 'Accessibility Improvements', 'Performance Optimization'],
  },
  {
    title: 'AI Integration',
    icon: 'ai',
    color: 'text-[#1557ff] bg-[#eef4ff]',
    description: 'Enhance your products with intelligent features powered by artificial intelligence to automate workflows and improve decisions.',
    items: ['AI Assistants', 'Chatbots', 'Workflow Automation', 'AI Search', 'Recommendation Systems', 'Content Generation', 'AI Analytics', 'OpenAI Integration'],
  },
  {
    title: 'Software Architecture & Consulting',
    icon: 'layers',
    color: 'text-teal-600 bg-teal-50',
    description: 'Helping businesses make the right technical decisions before development begins by designing scalable architectures and roadmaps.',
    items: ['Product Planning', 'Technical Strategy', 'System Design', 'Database Architecture', 'Technology Selection', 'Scalability Planning', 'Code Reviews', 'Technical Audits'],
  },
  {
    title: 'Maintenance & Support',
    icon: 'shield',
    color: 'text-purple-600 bg-purple-50',
    description: 'Providing ongoing maintenance, monitoring, updates, and technical support to keep software secure, reliable, and performing at its best.',
    items: ['Bug Fixes', 'Security Updates', 'Performance Monitoring', 'Feature Enhancements', 'Database Maintenance', 'Server Monitoring', 'Technical Support', 'Continuous Improvement'],
  },
] satisfies Array<{
  title: string
  icon: IconName
  color: string
  description: string
  items: string[]
}>

const process = [
  ['Discovery', 'Understanding your goals, users, business challenges, and project vision.', 'target'],
  ['Planning', 'Creating the project roadmap, system architecture, timelines, and technology stack.', 'layers'],
  ['UI/UX Design', 'Designing intuitive user experiences and modern interfaces before development begins.', 'design'],
  ['Development', 'Building secure, scalable, and maintainable software using modern technologies.', 'code'],
  ['Testing & Quality Assurance', 'Ensuring reliability, performance, security, and usability through comprehensive testing.', 'shield'],
  ['Launch & Support', 'Deploying your solution and providing ongoing maintenance, monitoring, and enhancements.', 'rocket'],
] satisfies Array<[string, string, IconName]>

const trust = [
  ['Business-First Approach', 'I focus on solving business problems, not just writing code.', 'target'],
  ['Scalable Solutions', 'Every product is built with future growth in mind.', 'layers'],
  ['Modern Technologies', 'Using up-to-date tools and best practices to ensure long-term reliability.', 'desktop'],
  ['Transparent Communication', 'Clear updates, collaborative planning, and honest feedback throughout every project.', 'users'],
  ['Quality Engineering', 'Clean architecture, maintainable code, and attention to detail.', 'shield'],
  ['Long-Term Partnership', 'Supporting your product beyond launch with maintenance and continuous improvements.', 'heart'],
] satisfies Array<[string, string, IconName]>

// const workModels = [
//   ['Fixed-Price Projects', 'Ideal for projects with clearly defined requirements, timeline, and deliverables.', 'shield'],
//   ['Dedicated Developer', 'Hire me as an extension of your team for ongoing product development.', 'users'],
//   ['Technical Consulting', 'Get expert advice on architecture, technology choice, code quality, and product strategy.', 'target'],
//   ['Long-Term Partnership', 'Continuous development, maintenance, feature enhancements, and technical support.', 'heart'],
// ] satisfies Array<[string, string, IconName]>

// const testimonials = [
//   ['Nsikan delivered beyond our expectations. He understood our requirements perfectly and built a scalable solution that improved our operations significantly.', 'David Olaro', 'CTO, PayFlow'],
//   ['Highly professional, excellent communication, and very skilled engineer. He transformed our ideas into a fantastic product.', 'Sarah Johnson', 'Product Manager, Learnova'],
//   ['Reliable, efficient, and always delivers quality work on time. I highly recommend Nsikan for any software project.', 'Michael Brown', 'CTO, MediTrack'],
//   ['Great developer with strong technical expertise and a problem-solving mindset. Working with him was a great experience.', 'Chris James', 'Founder, ShipSure'],
//   ['Nsikan is a top-tier engineer. He built our entire platform and continues to support us with new feature development.', 'Emily Martin', 'Operations Lead, EduSphere'],
// ] satisfies Array<[string, string, string]>

function Services() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-950">
      <Navbar />

      <section className="relative mx-auto grid max-w-[1720px] items-end gap-10 px-6 py-12 lg:grid-cols-[1fr_0.95fr] lg:px-16 lg:py-8">
        <div className="absolute inset-y-0 left-1/2 hidden w-screen -translate-x-1/2 bg-[radial-gradient(circle_at_78%_42%,rgba(21,87,255,0.14),transparent_34%),linear-gradient(90deg,#ffffff_0%,#ffffff_52%,#f3f7ff_100%)] lg:block" />
        <div className="relative z-10 self-center py-8">
          <p className="text-sm font-bold uppercase tracking-[0.08em] text-[#1557ff]">My Services</p>
          <h1 className="mt-6 max-w-4xl text-[42px] font-bold leading-[1.14] tracking-[-0.045em] sm:text-[58px] lg:text-[64px]">
            Transforming Ideas Into Powerful <span className="text-[#1557ff]">Digital Solutions</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-slate-700">
            I help startups, businesses, and organizations design, build, and scale modern
            digital products that are secure, scalable, and user-focused. From product
            strategy and UI implementation to full-stack development and AI integration,
            I provide end-to-end software solutions tailored to your business goals.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="/contact" className="inline-flex items-center justify-center gap-3 rounded-md bg-[#1557ff] px-7 py-4 text-sm font-black text-white shadow-[0_14px_28px_rgba(21,87,255,0.24)]">
              Start Your Project <span aria-hidden="true">-&gt;</span>
            </a>
            <a href="/contact" className="inline-flex items-center justify-center gap-3 rounded-md border-2 border-[#1557ff] px-7 py-4 text-sm font-black text-[#1557ff] transition hover:bg-[#eef4ff]">
              Schedule a Discovery Call <Icon name="calendar" className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-12 grid max-w-4xl gap-1 sm:grid-cols-2 lg:grid-cols-4">
            {heroStats.map(([value, label, icon]) => (
              <div key={label} className="flex items-center gap-2">
                <Icon name={icon} className="h-6 w-6 shrink-0 text-[#1557ff]" />
                <div>
                  <p className="text-1xl font-bold tracking-[-0.02em]">{value}</p>
                  <p className="text-xs font-bold text-slate-600">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 mx-auto flex min-h-[430px] w-full max-w-[760px] items-end justify-center rounded-2xl bg-[#063188] px-8 pt-10 shadow-[0_22px_55px_rgba(15,23,42,0.12)] lg:min-h-[590px]">
          <div className="absolute inset-y-10 left-8 w-32 bg-[radial-gradient(circle,rgba(21,87,255,0.45)_1.4px,transparent_1.4px)] opacity-60 [background-size:18px_18px]" />
          <div className="absolute inset-y-10 right-8 w-32 bg-[radial-gradient(circle,rgba(255,255,255,0.8)_1.4px,transparent_1.4px)] opacity-70 [background-size:18px_18px]" />
          <div className="absolute left-5 top-24 hidden rounded-xl bg-white p-5 text-[#1557ff] shadow-[0_18px_45px_rgba(15,23,42,0.14)] sm:block">
            <Icon name="code" className="h-8 w-8" />
          </div>
          <div className="absolute right-14 top-20 hidden w-44 rounded-xl bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.16)] sm:block">
            <Icon name="design" className="h-7 w-7 text-[#1557ff]" />
            <div className="mt-4 space-y-2">
              <span className="block h-2 w-24 rounded-full bg-slate-200" />
              <span className="block h-2 w-32 rounded-full bg-slate-100" />
            </div>
          </div>
          <div className="absolute bottom-28 right-8 hidden w-52 rounded-xl bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.16)] md:block">
            <span className="block h-2 w-24 rounded-full bg-[#1557ff]" />
            <div className="mt-5 space-y-4">
              <span className="block h-8 rounded-lg bg-slate-100" />
              <span className="block h-8 rounded-lg bg-slate-100" />
            </div>
          </div>
          <img src={heroImage} alt="Nsikan Essoh" className="relative z-10 max-h-[420px] w-auto object-contain lg:max-h-[610px]" />
        </div>
      </section>

      <section className="px-6 py-12 lg:px-16">
        <div className="mx-auto max-w-[1540px] text-center">
          <p className="text-sm font-bold uppercase tracking-[0.08em] text-slate-900">Services I Offer</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-[-0.04em] lg:text-4xl">
            Comprehensive software engineering services designed to bring your ideas to life and accelerate business growth.
          </h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-[1540px] gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <article key={service.title} className="rounded-xl border border-slate-200 bg-white p-7 shadow-[0_14px_35px_rgba(15,23,42,0.04)]">
              <div className={`grid h-14 w-14 place-items-center rounded-xl ${service.color}`}>
                <Icon name={service.icon} className="h-8 w-8" />
              </div>
              <h3 className="mt-5 text-lg font-bold leading-6">
                {index + 1}. {service.title}
              </h3>
              <p className="mt-5 text-sm font-medium leading-7 text-slate-600">{service.description}</p>
              <ul className="mt-6 space-y-2.5">
                {service.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm font-medium text-slate-700">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-[#1557ff]" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 py-8 lg:px-16">
        <div className="mx-auto">
          <div>
            <h2 className="text-xl text-center font-bold uppercase tracking-[-0.02em]">How We Work Together</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3 xl:grid-cols-6">
              {process.map(([title, description, icon], index) => (
                <article key={title} className="relative text-center">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-[#1557ff]/20 bg-[#eef4ff] text-[#1557ff]">
                    <Icon name={icon} className="h-7 w-7" />
                  </div>
                  <span className="mx-auto mt-4 grid h-6 w-6 place-items-center rounded-full bg-[#1557ff] text-[10px] font-black text-white">{index + 1}</span>
                  <h3 className="mt-4 text-sm font-bold">{title}</h3>
                  <p className="mt-3 text-xs font-medium leading-6 text-slate-600">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-8 lg:px-16">
        <div className="mx-auto">
          <div>
            <h2 className="text-xl text-center font-bold uppercase tracking-[-0.02em]">Why Clients Trust Me</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {trust.map(([title, description, icon]) => (
                <article key={title} className="rounded-xl border border-slate-200 p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
                  <Icon name={icon} className="h-8 w-8 text-[#1557ff]" />
                  <h3 className="mt-4 text-sm font-bold">{title}</h3>
                  <p className="mt-3 text-xs font-medium leading-6 text-slate-600">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
{/* 
      <section className="px-6 py-8 lg:px-16">
        <div className="mx-auto grid max-w-[1540px] gap-12 xl:grid-rows-[0.78fr_1.22fr]">
          <div>
            <h2 className="text-xl text-center font-bold uppercase tracking-[-0.02em]">Ways We Can Work Together</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
              {workModels.map(([title, description, icon]) => (
                <article key={title} className="rounded-xl border border-slate-200 p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
                  <Icon name={icon} className="h-8 w-8 text-[#1557ff]" />
                  <h3 className="mt-4 text-sm font-bold">{title}</h3>
                  <p className="mt-3 text-xs font-medium leading-6 text-slate-600">{description}</p>
                </article>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl text-center font-bold uppercase tracking-[-0.02em]">Service FAQs</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {faqs.map(([question, answer], index) => {
                const isOpen = openFaq === index
                return (
                  <div key={question} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_10px_24px_rgba(15,23,42,0.03)]">
                    <button type="button" onClick={() => setOpenFaq(isOpen ? null : index)} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-black text-slate-900">
                      {question}
                      <span className={`text-lg text-[#1557ff] transition ${isOpen ? 'rotate-45' : ''}`} aria-hidden="true">+</span>
                    </button>
                    {isOpen && <p className="border-t border-slate-100 px-5 py-4 text-sm font-medium leading-7 text-slate-600">{answer}</p>}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-2 mb-8 lg:px-16">
        <div className="mx-auto max-w-[1540px]">
          <h2 className="text-center text-xl font-bold uppercase tracking-[-0.02em]">What Clients Say</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {testimonials.map(([quote, name, role]) => (
              <article key={name} className="rounded-xl border border-slate-200 p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
                <div className="flex gap-1 text-[#f5b301]" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Icon key={index} name="spark" className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm font-medium leading-6 text-slate-700">{quote}</p>
                <div className="mt-5 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-slate-900 text-xs font-black text-white">
                    {name.split(' ').map((part) => part[0]).join('')}
                  </span>
                  <div>
                    <p className="text-sm font-black">{name}</p>
                    <p className="text-xs font-bold text-slate-500">{role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section> */}

      <Footer />
    </main>
  )
}

export default Services
