import type { ReactElement } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import heroImage from '../assets/hero-img.png'

type IconName =
  | 'code'
  | 'ui'
  | 'chart'
  | 'users'
  | 'profile'
  | 'briefcase'
  | 'building'
  | 'clock'
  | 'pin'
  | 'target'
  | 'eye'
  | 'star'
  | 'shield'
  | 'light'
  | 'book'
  | 'heart'
  | 'search'
  | 'plan'
  | 'rocket'
  | 'bank'
  | 'school'
  | 'truck'
  | 'brain'
  | 'cart'
  | 'store'
  | 'gear'
  | 'cloud'
  | 'home'
  | 'package'
  | 'phone'
  | 'mail'
  | 'globe'

function Icon({ name, className = 'h-7 w-7' }: { name: IconName; className?: string }) {
  const shared = {
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }

  const icons: Record<IconName, ReactElement> = {
    code: <><path d="m8 9-4 3 4 3" {...shared} /><path d="m16 9 4 3-4 3" {...shared} /><path d="m13.5 6-3 12" {...shared} /></>,
    ui: <><rect x="4" y="5" width="16" height="12" rx="2" {...shared} /><path d="M8 20h8M12 17v3M7 9h5M7 12h9" {...shared} /></>,
    chart: <><path d="M4 19V5" {...shared} /><path d="M4 19h16" {...shared} /><path d="m7 15 3-4 3 2 4-6" {...shared} /></>,
    users: <><path d="M16 19c0-2.2-1.8-4-4-4s-4 1.8-4 4" {...shared} /><circle cx="12" cy="9" r="3" {...shared} /><path d="M20 18c0-1.7-1.1-3.1-2.7-3.7M16.5 6.4a2.5 2.5 0 0 1 0 5" {...shared} /></>,
    profile: <><circle cx="12" cy="8" r="3" {...shared} /><path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" {...shared} /></>,
    briefcase: <><rect x="4" y="7" width="16" height="12" rx="2" {...shared} /><path d="M9 7V5h6v2M4 12h16" {...shared} /></>,
    building: <><path d="M5 20V5l9-2v17" {...shared} /><path d="M14 9h5v11M8 8h2M8 12h2M8 16h2" {...shared} /></>,
    clock: <><circle cx="12" cy="12" r="8" {...shared} /><path d="M12 7v5l3 2" {...shared} /></>,
    pin: <><path d="M12 21s6-5.3 6-11a6 6 0 1 0-12 0c0 5.7 6 11 6 11Z" {...shared} /><circle cx="12" cy="10" r="2" {...shared} /></>,
    target: <><circle cx="12" cy="12" r="8" {...shared} /><circle cx="12" cy="12" r="4" {...shared} /><path d="m12 12 5-5" {...shared} /></>,
    eye: <><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" {...shared} /><circle cx="12" cy="12" r="3" {...shared} /></>,
    star: <path d="m12 3 2.7 5.7 6.3.8-4.6 4.4 1.2 6.1-5.6-3-5.6 3 1.2-6.1L3 9.5l6.3-.8L12 3Z" {...shared} />,
    shield: <><path d="M12 3 5 6v5c0 4.4 2.9 8.4 7 10 4.1-1.6 7-5.6 7-10V6l-7-3Z" {...shared} /><path d="m8.8 12 2.1 2.1 4.3-4.3" {...shared} /></>,
    light: <><path d="M9 18h6M10 22h4M8 14a6 6 0 1 1 8 0c-.8.7-1 1.6-1 2H9c0-.4-.2-1.3-1-2Z" {...shared} /></>,
    book: <><path d="M5 4h10a4 4 0 0 1 4 4v12H9a4 4 0 0 0-4-4V4Z" {...shared} /><path d="M5 16V4" {...shared} /></>,
    heart: <path d="M12 20s-7-4.4-8.6-9.2C2.2 7.2 4.9 4.5 8.1 4.5c1.8 0 3.1.9 3.9 2 .8-1.1 2.1-2 3.9-2 3.2 0 5.9 2.7 4.7 6.3C19 15.6 12 20 12 20Z" {...shared} />,
    search: <><circle cx="10.5" cy="10.5" r="5.5" {...shared} /><path d="m15 15 4.5 4.5" {...shared} /></>,
    plan: <><rect x="5" y="4" width="14" height="16" rx="2" {...shared} /><path d="M9 8h6M9 12h6M9 16h3" {...shared} /></>,
    rocket: <><path d="M14 4c3.3.5 5.5 2.7 6 6l-5.5 5.5-4-4L14 4Z" {...shared} /><path d="m10.5 11.5-4 1-2.5 4 4-2.5 1-4" {...shared} /></>,
    bank: <><path d="M3 9 12 4l9 5" {...shared} /><path d="M5 10v8M9 10v8M15 10v8M19 10v8M3 20h18" {...shared} /></>,
    school: <><path d="m3 8 9-4 9 4-9 4-9-4Z" {...shared} /><path d="M7 10v5c2 2 8 2 10 0v-5" {...shared} /></>,
    truck: <><path d="M3 7h11v10H3zM14 11h4l3 3v3h-7" {...shared} /><circle cx="7" cy="18" r="2" {...shared} /><circle cx="17" cy="18" r="2" {...shared} /></>,
    brain: <><path d="M12 3v18M8 5c-2 .7-3.5 2.6-3.5 5 0 3.3 2.5 5.8 6 6M16 5c2 .7 3.5 2.6 3.5 5 0 3.3-2.5 5.8-6 6" {...shared} /><path d="M8 10h8M8 14h8" {...shared} /></>,
    cart: <><path d="M4 5h2l2 11h9l2-7H8" {...shared} /><circle cx="10" cy="20" r="1.5" {...shared} /><circle cx="17" cy="20" r="1.5" {...shared} /></>,
    store: <><path d="M4 10h16l-1-5H5l-1 5Z" {...shared} /><path d="M6 10v10h12V10M9 20v-6h6v6" {...shared} /></>,
    gear: <><circle cx="12" cy="12" r="3" {...shared} /><path d="M19 12a7 7 0 0 0-.1-1l2-1.6-2-3.4-2.4 1a7 7 0 0 0-1.8-1L14.4 3h-4.8L9.3 6a7 7 0 0 0-1.8 1l-2.4-1-2 3.4L5.1 11a7 7 0 0 0 0 2l-2 1.6 2 3.4 2.4-1a7 7 0 0 0 1.8 1l.3 3h4.8l.3-3a7 7 0 0 0 1.8-1l2.4 1 2-3.4-2-1.6c.1-.3.1-.7.1-1Z" {...shared} /></>,
    cloud: <><path d="M7 18h10a4 4 0 0 0 .8-7.9A6 6 0 0 0 6.5 8.4 4.8 4.8 0 0 0 7 18Z" {...shared} /></>,
    home: <><path d="m3 11 9-7 9 7" {...shared} /><path d="M5 10v10h14V10M10 20v-6h4v6" {...shared} /></>,
    package: <><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" {...shared} /><path d="M4 7.5 12 12l8-4.5M12 12v9" {...shared} /></>,
    phone: <><rect x="7" y="3.5" width="10" height="17" rx="2" {...shared} /><path d="M10.5 17.5h3" {...shared} /></>,
    mail: <><rect x="4" y="6" width="16" height="12" rx="2" {...shared} /><path d="m5 8 7 5 7-5" {...shared} /></>,
    globe: <><circle cx="12" cy="12" r="8" {...shared} /><path d="M3.8 12h16.4M12 3.5c2.2 2.4 3.3 5.2 3.3 8.5s-1.1 6.1-3.3 8.5M12 3.5C9.8 5.9 8.7 8.7 8.7 12s1.1 6.1 3.3 8.5" {...shared} /></>,
  }

  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      {icons[name]}
    </svg>
  )
}

const profileItems = [
  ['Name', 'Nsikan Essoh', 'profile'],
  ['Position', 'Software Engineer', 'briefcase'],
  ['Company', 'Founder & Lead Developer, Genesia Technologies Ltd', 'building'],
  ['Specialization', 'Full-Stack Software Development', 'code'],
  ['Experience', '5+ Years', 'clock'],
  ['Location', 'Nigeria', 'pin'],
  ['Availability', 'Available for Freelance, Contract, Consulting, and Full-Time Opportunities', 'rocket'],
] satisfies Array<[string, string, IconName]>

const professionalStats = [
  ['5+', 'Years of Experience', 'plan'],
  ['80+', 'Projects Delivered', 'briefcase'],
  ['30+', 'Happy Clients', 'heart'],
  ['15+', 'Modern Technologies', 'gear'],
  ['Multiple Industries Served', '', 'globe'],
  ['End-to-End Product Development', '', 'package'],
] satisfies Array<[string, string, IconName]>

const values = [
  ['Excellence', 'I strive for quality in every line of code, every design decision, and every solution I deliver.', 'star', 'text-blue-500'],
  ['Integrity', 'Building trust through transparency, honesty, and accountability in every project.', 'shield', 'text-teal-500'],
  ['Innovation', 'Exploring modern technologies and creative approaches to solve complex challenges.', 'light', 'text-amber-500'],
  ['Continuous Learning', 'Technology evolves rapidly, and I am committed to learning, improving, and staying ahead.', 'book', 'text-blue-500'],
  ['Collaboration', 'Great software is built through teamwork, communication, and shared vision.', 'users', 'text-purple-500'],
  ['Impact', 'Every project should create measurable value for users, businesses, and communities.', 'heart', 'text-rose-500'],
] satisfies Array<[string, string, IconName, string]>

const problemSteps = [
  ['Understand the Business', 'I begin by understanding your goals, users, challenges, and long-term vision before proposing technical solutions.', 'search'],
  ['Plan the Architecture', 'Designing scalable system architecture, workflows, databases, and APIs that support future growth.', 'plan'],
  ['Build with Precision', 'Developing maintainable, secure, and high-performance applications using modern technologies and best practices.', 'code'],
  ['Deliver Continuous Value', 'Launching reliable products while providing ongoing improvements, optimization, and technical support.', 'rocket'],
] satisfies Array<[string, string, IconName]>

const industries = [
  ['Financial Technology (FinTech)', 'bank', 'text-blue-500'],
  ['Education Technology (EdTech)', 'school', 'text-slate-500'],
  ['Healthcare', 'heart', 'text-rose-500'],
  ['Logistics & Transportation', 'truck', 'text-emerald-500'],
  ['Artificial Intelligence', 'brain', 'text-fuchsia-500'],
  ['E-Commerce', 'cart', 'text-slate-500'],
  ['Enterprise Software', 'building', 'text-blue-500'],
  ['Marketplace Platforms', 'store', 'text-purple-500'],
  ['Business Automation', 'gear', 'text-blue-500'],
  ['Human Resource Systems', 'users', 'text-blue-500'],
  ['Customer Relationship Management (CRM)', 'profile', 'text-slate-500'],
  ['Software as a Service (SaaS)', 'cloud', 'text-sky-500'],
] satisfies Array<[string, IconName, string]>

const highlights = [
  ['Full-Stack Development', 'Designed and developed complete web and mobile applications from concept to deployment.', 'home'],
  ['Enterprise Solutions', 'Built scalable software platforms that support complex business operations and multiple user roles.', 'package'],
  ['Mobile Applications', 'Developed responsive cross-platform mobile apps with seamless user experiences.', 'phone'],
  ['AI Solutions', 'Integrated artificial intelligence into software products to automate workflows and enhance decision-making.', 'brain'],
  ['API Development', 'Designed secure and scalable RESTful APIs for modern digital ecosystems.', 'code'],
  ['UI Engineering', 'Translated professional UI/UX designs into responsive, accessible, and pixel-perfect interfaces.', 'ui'],
] satisfies Array<[string, string, IconName]>

const quickFacts = [
  ['I enjoy solving challenging technical problems.', 'target'],
  ['I am constantly experimenting with emerging technologies.', 'light'],
  ['Continuous learning is part of my daily routine.', 'book'],
  ['I enjoy transforming ideas into real products.', 'rocket'],
  ['I value simplicity, performance, and user experience.', 'target'],
  ['I aspire to build software with global impact.', 'globe'],
] satisfies Array<[string, IconName]>

function About() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-950">
      <Navbar />

      <section className="relative mx-auto grid min-h-[calc(100vh-64px)] max-w-[1720px] items-end gap-10 px-6 pt-12 lg:grid-cols-[0.98fr_1.02fr] lg:px-16 lg:pt-8">
        <div className="absolute inset-y-0 left-1/2 hidden w-screen -translate-x-1/2 bg-[radial-gradient(circle_at_76%_40%,rgba(21,87,255,0.16),transparent_34%),linear-gradient(90deg,#ffffff_0%,#ffffff_46%,#f3f7ff_100%)] lg:block" />

        <div className="relative z-10 self-center pb-12 lg:max-w-[680px] lg:pb-20">
          <p className="text-sm font-black uppercase tracking-[0.08em] text-[#1557ff]">About Me</p>
          <h1 className="mt-7 text-[32px] font-bold leading-[1.14] tracking-[-0.045em] text-slate-950 sm:text-[46px] lg:text-[48px] xl:text-[54px]">
            Engineering Digital Solutions That Make a Difference
          </h1>
          <p className="mt-5 max-w-[660px] text-base font-medium leading-8 text-slate-700">
            I&apos;m Nsikan Essoh, a Full-Stack Software Engineer, Technology Consultant,
            and Founder of Genesia Technologies Ltd. I specialize in building scalable
            web applications, mobile apps, enterprise software, and AI-powered digital
            products that help businesses simplify operations, improve customer
            experiences, and unlock new growth opportunities.
          </p>
          <p className="mt-5 max-w-[660px] text-base font-medium leading-8 text-slate-700">
            With a passion for innovation and a commitment to engineering excellence, I
            work with startups, organizations, and established businesses to transform
            ambitious ideas into reliable, high-performing software.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="/projects" className="inline-flex items-center justify-center gap-3 rounded-md bg-[#1557ff] px-7 py-4 text-sm font-black text-white shadow-[0_14px_28px_rgba(21,87,255,0.24)]">
              View My Projects
              <span aria-hidden="true">◇</span>
            </a>
            <a href="/contact" className="inline-flex items-center justify-center gap-3 rounded-md border border-[#1557ff] bg-white px-7 py-4 text-sm font-black text-slate-950">
              Contact Me
              <Icon name="mail" className="h-4 w-4 text-[#1557ff]" />
            </a>
          </div>
        </div>

        <div className="relative z-10 mx-auto flex min-h-[540px] w-full max-w-[780px] items-end justify-end self-end lg:min-h-[700px]">
          <div className="absolute bottom-0 right-5 h-[500px] w-[560px] rounded-[55%_45%_55%_45%] bg-[#e8f1ff]" />
          <div className="absolute right-0 top-6 hidden h-56 w-56 bg-[radial-gradient(#1557ff_1.5px,transparent_1.5px)] opacity-45 [background-size:18px_18px] md:block" />
          <div className="absolute left-[8%] top-[28%] hidden rounded-xl bg-white p-7 text-[#1557ff] shadow-[0_18px_40px_rgba(15,23,42,0.12)] md:block">
            <Icon name="code" />
          </div>
          <div className="absolute right-[7%] top-[28%] hidden rounded-lg bg-white p-6 text-[#1557ff] shadow-[0_18px_45px_rgba(15,23,42,0.12)] md:block">
            <Icon name="chart" />
          </div>
          <div className="absolute bottom-[6%] right-[4%] z-20 hidden rounded-xl bg-white p-7 text-[#1557ff] shadow-[0_18px_45px_rgba(15,23,42,0.12)] md:block">
            <Icon name="users" />
          </div>
          <img
            src={heroImage}
            alt="Nsikan Essoh"
            className="relative z-10 h-[570px] w-auto max-w-[96%] object-contain object-bottom drop-shadow-[0_28px_45px_rgba(15,23,42,0.18)] sm:h-[650px] lg:h-[760px]"
          />
        </div>
      </section>

      <section className="px-6 py-10 lg:px-16">
        <div className="mx-auto">
          <article>
            <h2 className="text-3xl font-bold tracking-[-0.04em] text-slate-950">My Journey</h2>
            <span className="mt-3 block h-1 w-9 rounded-full bg-[#1557ff]" />
            <div className="mt-7 space-y-6 text-base font-medium leading-8 text-slate-700">
              <p>
                My journey into software engineering began with a deep curiosity about
                how technology solves real-world problems. Coming from an engineering
                background, I developed a strong analytical mindset that naturally
                evolved into a passion for designing and building software systems.
              </p>
              <p>
                Over the years, I&apos;ve worked on products across industries including
                financial technology, education, logistics, healthcare, business
                automation, artificial intelligence, and enterprise software. Each
                project has strengthened my ability to architect scalable systems,
                build intuitive user experiences, and deliver solutions that create
                measurable business value.
              </p>
              <p>
                For me, software development goes beyond writing code. It&apos;s about
                understanding people, identifying challenges, and creating digital
                experiences that improve the way businesses operate and users interact
                with technology.
              </p>
            </div>
          </article>

          <article className="rounded-xl mt-4 border border-slate-200 bg-white p-7 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
            <h2 className="text-2xl font-bold tracking-[-0.035em]">Professional Profile</h2>
            <div className="mt-7 grid gap-7 md:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-5">
                {profileItems.map(([label, value, icon]) => (
                  <div key={label} className="grid grid-cols-[32px_1fr] gap-4">
                    <Icon name={icon} className="h-6 w-6 text-slate-700" />
                    <div>
                      <p className="text-xs font-bold text-slate-500">{label}</p>
                      <p className="text-sm font-bold leading-6 text-slate-950">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-slate-200 pt-6 md:border-l md:border-t-0 md:pl-7 md:pt-0">
                <h3 className="mb-5 text-lg font-bold">Professional Statistics</h3>
                <div className="space-y-5">
                  {professionalStats.map(([value, label, icon]) => (
                    <div key={`${value}-${label}`} className="grid grid-cols-[32px_1fr] gap-4">
                      <Icon name={icon} className="h-6 w-6 text-[#1557ff]" />
                      <div>
                        <p className="text-xl font-bold leading-none text-[#1557ff]">{value}</p>
                        {label && <p className="mt-1 text-sm font-bold text-slate-700">{label}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="px-6 py-8 lg:px-16">
        <div className="mx-auto grid max-w-[1540px] gap-6 lg:grid-cols-2">
          <article className="flex gap-6 rounded-xl bg-[#f1f5ff] p-7">
            <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-white text-[#1557ff]">
              <Icon name="target" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1557ff]">My Mission</h3>
              <p className="mt-3 text-sm font-medium leading-7 text-slate-700">
                My mission is to empower businesses through innovative technology by
                building software that is reliable, scalable, secure, and easy to use.
                I believe that great software should solve meaningful problems while
                delivering exceptional experiences for the people who use it every day.
              </p>
            </div>
          </article>
          <article className="flex gap-6 rounded-xl bg-[#f8f1ff] p-7">
            <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-white text-purple-600">
              <Icon name="eye" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1557ff]">My Vision</h3>
              <p className="mt-3 text-sm font-medium leading-7 text-slate-700">
                To become a globally recognized software engineer and technology leader
                known for building innovative digital products that improve lives,
                transform businesses, and inspire the next generation of developers.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="px-6 py-8 lg:px-16">
        <div className="mx-auto max-w-[1540px] text-center">
          <h2 className="text-2xl font-bold tracking-[-0.035em]">Values That Guide My Work</h2>
          <span className="mx-auto mt-3 block h-1 w-9 rounded-full bg-[#1557ff]" />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {values.map(([title, description, icon, color]) => (
              <article key={title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0_16px_38px_rgba(15,23,42,0.04)]">
                <Icon name={icon} className={`mx-auto h-9 w-9 ${color}`} />
                <h3 className="mt-5 text-base font-bold">{title}</h3>
                <p className="mt-3 text-sm font-medium leading-6 text-slate-700">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-8 lg:px-16">
        <div className="mx-auto max-w-[1540px] text-center">
          <h2 className="text-2xl font-bold tracking-[-0.035em]">How I Solve Problems</h2>
          <span className="mx-auto mt-3 block h-1 w-9 rounded-full bg-[#1557ff]" />
          <div className="relative mt-10 grid gap-8 lg:grid-cols-4">
            <div className="absolute left-[10%] right-[10%] top-8 hidden border-t border-dashed border-[#8fb0ff] lg:block" />
            {problemSteps.map(([title, description, icon]) => (
              <article key={title} className="relative">
                <div className="relative z-10 mx-auto grid h-20 w-20 place-items-center rounded-full bg-[#eaf1ff] text-[#1557ff] shadow-[0_12px_28px_rgba(21,87,255,0.12)]">
                  <Icon name={icon} />
                </div>
                <h3 className="mt-3 text-lg font-bold">{title}</h3>
                <p className="mx-auto mt-3 max-w-[280px] text-sm font-medium leading-7 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-8 lg:px-16">
        <div className="mx-auto max-w-[1540px] text-center">
          <h2 className="text-2xl font-bold tracking-[-0.035em]">Industry Experience</h2>
          <span className="mx-auto mt-3 block h-1 w-9 rounded-full bg-[#1557ff]" />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
            {industries.map(([title, icon, color]) => (
              <article key={title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0_14px_32px_rgba(15,23,42,0.04)]">
                <Icon name={icon} className={`mx-auto h-9 w-9 ${color}`} />
                <h3 className="mt-4 text-sm font-bold leading-5 text-slate-950">{title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-8 lg:px-16">
        <div className="mx-auto grid max-w-[1540px] gap-6 lg:grid-cols-2">
          <article className="flex gap-6 rounded-xl bg-[#f1f5ff] p-7">
            <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-white text-[#1557ff]">
              <Icon name="code" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1557ff]">Engineering Principles</h3>
              <p className="mt-3 text-sm font-medium leading-7 text-slate-700">
                I believe successful software is built on strong foundations. Every
                solution should be scalable enough to grow with the business, secure
                enough to protect users, performant enough to deliver seamless
                experiences, and maintainable enough for long-term evolution.
              </p>
              <p className="mt-4 text-sm font-medium leading-7 text-slate-700">
                I prioritize clean architecture, readable code, thoughtful user
                experiences, and modern development practices to ensure every project
                remains valuable long after its initial launch.
              </p>
            </div>
          </article>
          <article className="flex gap-6 rounded-xl bg-[#eefaf5] p-7">
            <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-white text-emerald-600">
              <Icon name="profile" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-emerald-700">More Than a Developer</h3>
              <p className="mt-3 text-sm font-medium leading-7 text-slate-700">
                Outside of writing code, I enjoy exploring emerging technologies,
                mentoring aspiring developers, contributing ideas to innovative digital
                products, and continually learning about software architecture,
                artificial intelligence, cloud technologies, and product strategy.
              </p>
              <p className="mt-4 text-sm font-medium leading-7 text-slate-700">
                I believe that the best engineers never stop learning and that
                curiosity is one of the most valuable tools in technology.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="px-6 pb-16 pt-8 lg:px-16">
        <div className="mx-auto">
          <div>
            <h2 className="text-2xl text-center font-bold tracking-[-0.035em]">Professional Highlights</h2>
            <span className="mx-auto mt-3 block h-1 w-9 rounded-full bg-[#1557ff]" />
            <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-6">
              {highlights.map(([title, description, icon]) => (
                <article key={title} className="text-center">
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#eef4ff] text-[#1557ff]">
                    <Icon name={icon} className="h-7 w-7" />
                  </div>
                  <h3 className="mt-4 text-sm font-bold">{title}</h3>
                  <p className="mt-3 text-xs font-medium leading-6 text-slate-600">{description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl text-center font-bold tracking-[-0.035em]">A Few Things About Me</h2>
            <span className="mx-auto mt-3 block h-1 w-9 rounded-full bg-[#1557ff]" />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {quickFacts.map(([fact, icon]) => (
                <article key={fact} className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-[0_12px_28px_rgba(15,23,42,0.04)]">
                  <Icon name={icon} className="h-6 w-6 text-[#1557ff]" />
                  <p className="text-sm font-bold leading-6 text-slate-700">{fact}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default About
