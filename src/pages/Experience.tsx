import type { ReactElement } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import heroImage from '../assets/hero-img.png'

type IconName =
  | 'briefcase'
  | 'users'
  | 'code'
  | 'heart'
  | 'target'
  | 'phone'
  | 'brain'
  | 'leader'
  | 'gear'
  | 'bank'
  | 'school'
  | 'truck'
  | 'cart'
  | 'building'
  | 'store'
  | 'profile'
  | 'cloud'
  | 'shield'
  | 'package'
  | 'award'
  | 'rocket'
  | 'book'
  | 'download'
  | 'calendar'
  | 'check'
  | 'star'

function Icon({ name, className = 'h-7 w-7' }: { name: IconName; className?: string }) {
  const shared = {
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }

  const icons: Record<IconName, ReactElement> = {
    briefcase: <><rect x="4" y="7" width="16" height="12" rx="2" {...shared} /><path d="M9 7V5h6v2M4 12h16" {...shared} /></>,
    users: <><path d="M16 19c0-2.2-1.8-4-4-4s-4 1.8-4 4" {...shared} /><circle cx="12" cy="9" r="3" {...shared} /><path d="M20 18c0-1.7-1.1-3.1-2.7-3.7" {...shared} /></>,
    code: <><path d="m8 9-4 3 4 3" {...shared} /><path d="m16 9 4 3-4 3" {...shared} /><path d="m13.5 6-3 12" {...shared} /></>,
    heart: <path d="M12 20s-7-4.4-8.6-9.2C2.2 7.2 4.9 4.5 8.1 4.5c1.8 0 3.1.9 3.9 2 .8-1.1 2.1-2 3.9-2 3.2 0 5.9 2.7 4.7 6.3C19 15.6 12 20 12 20Z" {...shared} />,
    target: <><circle cx="12" cy="12" r="8" {...shared} /><circle cx="12" cy="12" r="4" {...shared} /><path d="m12 12 5-5" {...shared} /></>,
    phone: <><rect x="7" y="3.5" width="10" height="17" rx="2" {...shared} /><path d="M10.5 17.5h3" {...shared} /></>,
    brain: <><path d="M12 3v18M8 5c-2 .7-3.5 2.6-3.5 5 0 3.3 2.5 5.8 6 6M16 5c2 .7 3.5 2.6 3.5 5 0 3.3-2.5 5.8-6 6" {...shared} /><path d="M8 10h8M8 14h8" {...shared} /></>,
    leader: <><path d="M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21c.8-4 3.6-6 8-6s7.2 2 8 6" {...shared} /></>,
    gear: <><circle cx="12" cy="12" r="3" {...shared} /><path d="M19 12a7 7 0 0 0-.1-1l2-1.6-2-3.4-2.4 1a7 7 0 0 0-1.8-1L14.4 3h-4.8L9.3 6a7 7 0 0 0-1.8 1l-2.4-1-2 3.4L5.1 11a7 7 0 0 0 0 2l-2 1.6 2 3.4 2.4-1a7 7 0 0 0 1.8 1l.3 3h4.8l.3-3a7 7 0 0 0 1.8-1l2.4 1 2-3.4-2-1.6c.1-.3.1-.7.1-1Z" {...shared} /></>,
    bank: <><path d="M3 9 12 4l9 5" {...shared} /><path d="M5 10v8M9 10v8M15 10v8M19 10v8M3 20h18" {...shared} /></>,
    school: <><path d="m3 8 9-4 9 4-9 4-9-4Z" {...shared} /><path d="M7 10v5c2 2 8 2 10 0v-5" {...shared} /></>,
    truck: <><path d="M3 7h11v10H3zM14 11h4l3 3v3h-7" {...shared} /><circle cx="7" cy="18" r="2" {...shared} /><circle cx="17" cy="18" r="2" {...shared} /></>,
    cart: <><path d="M4 5h2l2 11h9l2-7H8" {...shared} /><circle cx="10" cy="20" r="1.5" {...shared} /><circle cx="17" cy="20" r="1.5" {...shared} /></>,
    building: <><path d="M5 20V5l9-2v17" {...shared} /><path d="M14 9h5v11M8 8h2M8 12h2M8 16h2" {...shared} /></>,
    store: <><path d="M4 10h16l-1-5H5l-1 5Z" {...shared} /><path d="M6 10v10h12V10M9 20v-6h6v6" {...shared} /></>,
    profile: <><circle cx="12" cy="8" r="3" {...shared} /><path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" {...shared} /></>,
    cloud: <path d="M7 18h10a4 4 0 0 0 .8-7.9A6 6 0 0 0 6.5 8.4 4.8 4.8 0 0 0 7 18Z" {...shared} />,
    shield: <><path d="M12 3 5 6v5c0 4.4 2.9 8.4 7 10 4.1-1.6 7-5.6 7-10V6l-7-3Z" {...shared} /><path d="m8.8 12 2.1 2.1 4.3-4.3" {...shared} /></>,
    package: <><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" {...shared} /><path d="M4 7.5 12 12l8-4.5M12 12v9" {...shared} /></>,
    award: <><circle cx="12" cy="8" r="4" {...shared} /><path d="m9 12-1 8 4-2 4 2-1-8" {...shared} /></>,
    rocket: <><path d="M14 4c3.3.5 5.5 2.7 6 6l-5.5 5.5-4-4L14 4Z" {...shared} /><path d="m10.5 11.5-4 1-2.5 4 4-2.5 1-4" {...shared} /></>,
    book: <><path d="M5 4h10a4 4 0 0 1 4 4v12H9a4 4 0 0 0-4-4V4Z" {...shared} /><path d="M5 16V4" {...shared} /></>,
    download: <><path d="M12 4v11M8 11l4 4 4-4M5 20h14" {...shared} /></>,
    calendar: <><rect x="4" y="5" width="16" height="15" rx="2" {...shared} /><path d="M8 3v4M16 3v4M4 10h16" {...shared} /></>,
    check: <path d="m5 12 4 4L19 6" {...shared} />,
    star: <path d="m12 3 2.7 5.7 6.3.8-4.6 4.4 1.2 6.1-5.6-3-5.6 3 1.2-6.1L3 9.5l6.3-.8L12 3Z" {...shared} />,
  }

  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      {icons[name]}
    </svg>
  )
}

const heroStats = [
  ['5+', 'Years of Experience', 'calendar'],
  ['80+', 'Projects Delivered', 'briefcase'],
  ['30+', 'Happy Clients', 'heart'],
  ['15+', 'Technologies Mastered', 'gear'],
] satisfies Array<[string, string, IconName]>

const journey = [
  {
    years: '2023 - Present',
    label: 'Current Role',
    title: 'Lead Software Engineer',
    company: 'Genesia Technologies Ltd',
    icon: 'briefcase',
    summary: 'Leading the development of innovative software solutions for startups, businesses, and organizations. Responsible for product strategy, system architecture, software development, team/environmental leadership, and client collaboration from concept to deployment.',
    responsibilitiesTitle: 'Key Responsibilities',
    responsibilities: [
      'Leading full-stack software development projects.',
      'Designing scalable software architectures.',
      'Building enterprise web and mobile applications.',
      'Developing secure RESTful APIs and backend systems.',
      'Integrating AI capabilities into modern software products.',
      'Managing project planning and technical execution.',
      'Collaborating with clients and stakeholders.',
      'Mentoring junior developers and reviewing code.',
      'Deploying and maintaining production systems.',
    ],
    tech: ['React', 'Next.js', 'React Native', 'Node.js', 'Express.js', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Docker', 'GitHub', 'AWS', 'Tailwind CSS'],
  },
  {
    years: '2021 - 2023',
    label: 'Previous Experience',
    title: 'Senior Full-Stack Software Developer',
    company: 'Freelance & Contract Projects',
    icon: 'users',
    summary: 'Worked with startups and growing businesses to design and develop custom software products, business automation systems, SaaS platforms, and mobile applications.',
    responsibilitiesTitle: 'Responsibilities',
    responsibilities: [
      'Developed custom business applications.',
      'Built SaaS platforms.',
      'Designed scalable APIs.',
      'Created responsive frontend interfaces.',
      'Implemented authentication systems.',
      'Integrated payment gateways.',
      'Optimized application performance.',
      'Maintained production applications.',
    ],
    tech: ['React', 'Node.js', 'Express', 'PHP', 'MySQL', 'MongoDB', 'Firebase'],
  },
  {
    years: '2019 - 2021',
    label: 'Early Career',
    title: 'Software Developer',
    company: 'Technology Solutions Company',
    icon: 'code',
    summary: 'Participated in building internal business tools, management systems, and customer-facing web applications while gaining practical experience in software engineering and agile development.',
    responsibilitiesTitle: 'Responsibilities',
    responsibilities: [
      'Feature development.',
      'Bug fixing.',
      'Database management.',
      'API integration.',
      'Frontend implementation.',
      'Testing and debugging.',
      'Documentation.',
      'Deployment support.',
    ],
    tech: [],
  },
] satisfies Array<{
  years: string
  label: string
  title: string
  company: string
  icon: IconName
  summary: string
  responsibilitiesTitle: string
  responsibilities: string[]
  tech: string[]
}>

const whatIDo = [
  ['Software Architecture', 'Design scalable and maintainable software architectures for complex applications.', 'target'],
  ['Full-Stack Development', 'Develop complete web applications from frontend to backend.', 'code'],
  ['Mobile App Development', 'Build cross-platform Android and iOS applications.', 'phone'],
  ['API Engineering', 'Design secure, scalable, and well-documented APIs.', 'cloud'],
  ['Technical Leadership', 'Lead engineering teams, conduct code reviews, and establish development standards.', 'leader'],
  ['AI Integration', 'Build AI-powered features that automate processes and improve user experiences.', 'brain'],
] satisfies Array<[string, string, IconName]>

const impact = [
  ['80+', 'Software Projects Completed', 'briefcase'],
  ['30+', 'Happy Clients', 'heart'],
  ['10+', 'Industries Served', 'building'],
  ['Thousands', 'of End Users Reached', 'users'],
  ['Enterprise-Level', 'Applications Delivered', 'package'],
  ['Multiple', 'Startups Launched', 'rocket'],
] satisfies Array<[string, string, IconName]>

const industries = [
  ['Financial Technology (FinTech)', 'bank', 'text-blue-500'],
  ['Education Technology (EdTech)', 'school', 'text-emerald-500'],
  ['Healthcare', 'heart', 'text-rose-500'],
  ['Logistics & Transportation', 'truck', 'text-emerald-500'],
  ['Artificial Intelligence', 'brain', 'text-fuchsia-500'],
  ['E-Commerce', 'cart', 'text-blue-500'],
  ['Enterprise Software', 'building', 'text-blue-500'],
  ['Marketplace Platforms', 'store', 'text-purple-500'],
  ['Human Resource Systems', 'users', 'text-blue-500'],
  ['Customer Relationship Management (CRM)', 'profile', 'text-slate-500'],
  ['Business Automation', 'gear', 'text-purple-500'],
  ['Customer Management', 'cloud', 'text-slate-500'],
] satisfies Array<[string, IconName, string]>

const technologyStack = [
  ['Frontend', ['React', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5', 'CSS3']],
  ['Backend', ['Node.js', 'Express.js', 'Java', 'PHP', 'REST APIs', 'GraphQL']],
  ['Mobile', ['React Native', 'Expo']],
  ['Database', ['PostgreSQL', 'MongoDB', 'MySQL', 'Firebase', 'Redis']],
  ['Cloud & DevOps', ['Docker', 'Git', 'GitHub', 'AWS', 'Vercel', 'Netlify', 'Linux']],
] satisfies Array<[string, string[]]>

const education = [
  ['Bachelor of Engineering (B.Eng.) Electrical Engineering', 'A strong engineering foundation that developed my analytical thinking, systems approach, and problem-solving skills.', 'shield'],
  ['Bachelor’s Degree Computer Science', 'Expanded my knowledge of software development, algorithms, databases, operating systems, and computer engineering principles.', 'school'],
  ['Diploma Software Engineering', 'Specialized training focused on software design, application development, testing, deployment, and modern engineering practices.', 'bank'],
] satisfies Array<[string, string, IconName]>

const certifications = [
  ['Silicon Valley Software Engineering Certification', 'Advanced software engineering principles and modern product development.', 'target'],
  ['Full-Stack Web Development', 'Modern frontend and backend technologies.', 'rocket'],
  ['Backend Engineering', 'API development, database, authentication, and scalable architectures.', 'leader'],
  ['Cloud Technologies', 'Cloud deployment, DevOps fundamentals, and infrastructure.', 'cloud'],
  ['Artificial Intelligence', 'AI integration, automation, and intelligent application development.', 'brain'],
] satisfies Array<[string, string, IconName]>


function Experience() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-950">
      <Navbar />

      <section className="relative mx-auto grid min-h-[calc(100vh-64px)] max-w-[1720px] items-end gap-10 px-6 pt-12 lg:grid-cols-[0.98fr_1.02fr] lg:px-16 lg:pt-8">
        <div className="absolute inset-y-0 left-1/2 hidden w-screen -translate-x-1/2 bg-[radial-gradient(circle_at_76%_40%,rgba(21,87,255,0.16),transparent_34%),linear-gradient(90deg,#ffffff_0%,#ffffff_46%,#f3f7ff_100%)] lg:block" />
        
        <div className="relative z-10 self-center pb-12 lg:max-w-[680px] lg:pb-20">
          <p className="text-sm font-black uppercase tracking-[0.08em] text-[#1557ff]">My Experience</p>
          <h1 className="mt-7 text-[32px] font-bold leading-[1.14] tracking-[-0.045em] text-slate-950 sm:text-[46px] lg:text-[48px] xl:text-[54px]">
            Building Software. <br /> Solving Problems. <span className="text-[#1557ff]">Creating Impact.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-slate-700">
            Over the years, I&apos;ve collaborated with startups, businesses,
            educational institutions, and organizations to design, build, and scale
            digital products. Every project has strengthened my expertise in software
            engineering, system architecture, and product development while delivering
            measurable value to users and businesses.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="/projects" className="inline-flex items-center justify-center gap-3 rounded-md bg-[#1557ff] px-7 py-4 text-sm font-black text-white shadow-[0_14px_28px_rgba(21,87,255,0.24)]">
              View My Projects <span aria-hidden="true">↗</span>
            </a>
            <a href="/cv.pdf" className="inline-flex items-center justify-center gap-3 rounded-md border border-[#1557ff] bg-white px-7 py-4 text-sm font-black text-[#1557ff]">
              Download CV <Icon name="download" className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {heroStats.map(([value, label, icon]) => (
              <article key={label} className="flex items-center gap-4 rounded-lg bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
                <Icon name={icon} className="h-8 w-8 text-[#1557ff]" />
                <div>
                  <p className="text-3xl font-black text-slate-950">{value}</p>
                  <p className="text-xs font-bold text-slate-600">{label}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="relative z-10 mx-auto flex min-h-[540px] w-full max-w-[780px] items-end justify-end self-end lg:min-h-[700px]">
          <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-[55%_45%_55%_45%] bg-[#e8f1ff]" />
          <div className="absolute right-2 top-20 hidden h-56 w-56 bg-[radial-gradient(#1557ff_1.5px,transparent_1.5px)] opacity-45 [background-size:18px_18px] md:block" />
          <img src={heroImage} alt="Nsikan Essoh" className="relative z-10 h-[570px] w-auto max-w-[96%] object-contain object-bottom drop-shadow-[0_28px_45px_rgba(15,23,42,0.18)] sm:h-[650px] lg:h-[760px]" />
        </div>
      </section>

      <section className="px-6 py-10 lg:px-16">
        <div className="mx-auto max-w-[1540px]">
          <h2 className="text-3xl font-bold tracking-[-0.04em]">My Professional Journey</h2>
          <p className="mt-3 text-base font-medium text-slate-600">
            A timeline of the roles, responsibilities, and experiences that have shaped my career as a software engineer.
          </p>

          <div className="mt-8 space-y-6">
            {journey.map((role) => (
              <article key={role.title} className="grid gap-6 rounded-xl border border-slate-200 bg-white p-6 shadow-[0_16px_38px_rgba(15,23,42,0.04)] lg:grid-cols-[180px_1fr_1.05fr_0.75fr]">
                <div className="flex gap-4">
                  <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-[#1557ff] text-white">
                    <Icon name={role.icon} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-950">{role.years}</p>
                    <p className="mt-1 text-xs font-bold text-slate-500">{role.label}</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-950">{role.title}</h3>
                  <p className="mt-2 text-sm font-black text-[#1557ff]">{role.company}</p>
                  <p className="mt-4 text-sm font-medium leading-7 text-slate-700">{role.summary}</p>
                </div>
                <div className="lg:border-l lg:border-slate-200 lg:pl-6">
                  <h4 className="text-sm font-bold text-slate-950">{role.responsibilitiesTitle}</h4>
                  <ul className="mt-3 space-y-2">
                    {role.responsibilities.map((item) => (
                      <li key={item} className="flex gap-2 text-sm font-medium leading-6 text-slate-700">
                        <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-[#1557ff]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={role.tech.length ? 'lg:border-l lg:border-slate-200 lg:pl-6' : 'hidden lg:block'}>
                  {role.tech.length > 0 && (
                    <>
                      <h4 className="text-sm font-bold text-slate-950">Technologies Used</h4>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {role.tech.map((tech) => (
                          <span key={tech} className="rounded-full bg-slate-100 px-4 py-2 text-xs font-medium text-slate-700">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-8 lg:px-16">
        <div className="mx-auto max-w-[1540px]">
          <h2 className="text-center text-2xl font-bold tracking-[-0.035em]">Impact Delivered</h2>
          <div className="mx-auto mt-2 h-1 w-10 rounded-full bg-[#1557ff]" />
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {impact.map(([value, label, icon]) => (
              <article key={label} className="rounded-xl border border-slate-200 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
                <Icon name={icon} className="h-8 w-8 text-[#1557ff]" />
                <p className="mt-4 text-1xl font-bold text-[#1557ff]">{value}</p>
                <p className="mt-1 text-sm font-medium leading-5 text-slate-600">{label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-8 lg:px-16">
        <div className="mx-auto max-w-[1540px]">
          <h2 className="text-center text-2xl font-bold tracking-[-0.035em]">Industries I&apos;ve Worked With</h2>
          <div className="mx-auto mt-2 h-1 w-10 rounded-full bg-[#1557ff]" />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {industries.map(([title, icon, color]) => (
              <article key={title} className="rounded-xl border border-slate-200 p-4 text-center shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
                <Icon name={icon} className={`mx-auto h-8 w-8 ${color}`} />
                <h3 className="mt-3 text-xs font-bold leading-5">{title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-8 lg:px-16">
        <div className="mx-auto max-w-[1540px]">
          <h2 className="text-center text-2xl font-bold tracking-[-0.035em]">What I Do</h2>
          <div className="mx-auto mt-2 h-1 w-10 rounded-full bg-[#1557ff]" />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {whatIDo.map(([title, description, icon]) => (
              <article key={title} className="rounded-xl border border-slate-200 p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
                <Icon name={icon} className="h-8 w-8 text-[#1557ff]" />
                <h3 className="mt-4 text-base font-bold">{title}</h3>
                <p className="mt-3 text-sm font-medium leading-6 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-8 lg:px-16">
        <div className="mx-auto max-w-[1540px]">
          <h2 className="text-center text-2xl font-bold tracking-[-0.035em]">Technology Stack</h2>
          <div className="mx-auto mt-2 h-1 w-10 rounded-full bg-[#1557ff]" />
          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {technologyStack.map(([title, items]) => (
              <article key={title} className="rounded-xl border border-slate-200 p-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
                <h3 className="text-base font-bold">{title}</h3>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {items.map((item) => (
                    <span key={item} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                      <span className="h-2 w-2 rounded-full bg-[#1557ff]" />
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-8 lg:px-16">
        <div className="mx-auto max-w-[1540px]">
          <h2 className="text-center text-2xl font-bold tracking-[-0.035em]">Certifications</h2>
          <div className="mx-auto mt-2 h-1 w-10 rounded-full bg-[#1557ff]" />
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {certifications.map(([title, description, icon]) => (
              <article key={title} className="rounded-xl border border-slate-200 p-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
                <Icon name={icon} className="h-8 w-8 text-[#1557ff]" />
                <h3 className="mt-4 text-sm font-bold leading-5">{title}</h3>
                <p className="mt-3 text-xs font-medium leading-6 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-8 lg:px-16">
        <div className="mx-auto max-w-[1540px]">
          <h2 className="text-center text-2xl font-bold tracking-[-0.035em]">Academic Background</h2>
          <div className="mx-auto mt-2 h-1 w-10 rounded-full bg-[#1557ff]" />
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {education.map(([title, description, icon]) => (
              <article key={title} className="rounded-xl border border-slate-200 p-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
                <Icon name={icon} className="h-8 w-8 text-[#1557ff]" />
                <h3 className="mt-4 text-sm font-bold leading-5">{title}</h3>
                <p className="mt-3 text-xs font-medium leading-6 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>


      <Footer />
    </main>
  )
}

export default Experience
