import type { ReactElement } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import skillsImage from '../assets/skills-img.png'

type IconName =
  | 'ai'
  | 'badge'
  | 'briefcase'
  | 'check'
  | 'cloud'
  | 'code'
  | 'collaboration'
  | 'database'
  | 'design'
  | 'desktop'
  | 'gear'
  | 'layers'
  | 'learn'
  | 'lock'
  | 'phone'
  | 'rocket'
  | 'shield'
  | 'stack'
  | 'target'
  | 'time'
  | 'tool'
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
    badge: <><path d="M12 3 5 6v5c0 4.4 2.9 8.4 7 10 4.1-1.6 7-5.6 7-10V6l-7-3Z" {...shared} /><path d="m8.8 12 2.1 2.1 4.3-4.3" {...shared} /></>,
    briefcase: <><rect x="4" y="7" width="16" height="12" rx="2" {...shared} /><path d="M9 7V5h6v2M4 12h16" {...shared} /></>,
    check: <path d="m5 12 4 4L19 6" {...shared} />,
    cloud: <path d="M7 18h10a4 4 0 0 0 .8-7.9A6 6 0 0 0 6.5 8.4 4.8 4.8 0 0 0 7 18Z" {...shared} />,
    code: <><path d="m8 9-4 3 4 3" {...shared} /><path d="m16 9 4 3-4 3" {...shared} /><path d="m13.5 6-3 12" {...shared} /></>,
    collaboration: <><circle cx="8" cy="9" r="3" {...shared} /><circle cx="16" cy="9" r="3" {...shared} /><path d="M3.5 20c.6-3 2.3-4.5 4.5-4.5s3.9 1.5 4.5 4.5M11.5 20c.6-3 2.3-4.5 4.5-4.5s3.9 1.5 4.5 4.5" {...shared} /></>,
    database: <><ellipse cx="12" cy="6" rx="7" ry="3" {...shared} /><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" {...shared} /><path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" {...shared} /></>,
    design: <><path d="M5 4h14v10H5z" {...shared} /><path d="M8 20h8M12 14v6" {...shared} /></>,
    desktop: <><rect x="4" y="5" width="16" height="11" rx="2" {...shared} /><path d="M8 20h8M12 16v4" {...shared} /></>,
    gear: <><circle cx="12" cy="12" r="3" {...shared} /><path d="M19 12a7 7 0 0 0-.1-1l2-1.6-2-3.4-2.4 1a7 7 0 0 0-1.8-1L14.4 3h-4.8L9.3 6a7 7 0 0 0-1.8 1l-2.4-1-2 3.4L5.1 11a7 7 0 0 0 0 2l-2 1.6 2 3.4 2.4-1a7 7 0 0 0 1.8 1l.3 3h4.8l.3-3a7 7 0 0 0 1.8-1l2.4 1 2-3.4-2-1.6c.1-.3.1-.7.1-1Z" {...shared} /></>,
    layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z" {...shared} /><path d="m3 13 9 5 9-5" {...shared} /><path d="m3 17 9 5 9-5" {...shared} /></>,
    learn: <><path d="M5 4h10a4 4 0 0 1 4 4v12H9a4 4 0 0 0-4-4V4Z" {...shared} /><path d="M5 16V4" {...shared} /></>,
    lock: <><rect x="5" y="10" width="14" height="10" rx="2" {...shared} /><path d="M8 10V7a4 4 0 0 1 8 0v3" {...shared} /></>,
    phone: <><rect x="7" y="3.5" width="10" height="17" rx="2" {...shared} /><path d="M10.5 17.5h3" {...shared} /></>,
    rocket: <><path d="M14 4c3.3.5 5.5 2.7 6 6l-5.5 5.5-4-4L14 4Z" {...shared} /><path d="m10.5 11.5-4 1-2.5 4 4-2.5 1-4" {...shared} /></>,
    shield: <><path d="M12 3 5 6v5c0 4.4 2.9 8.4 7 10 4.1-1.6 7-5.6 7-10V6l-7-3Z" {...shared} /><path d="m8.8 12 2.1 2.1 4.3-4.3" {...shared} /></>,
    stack: <><path d="m12 3 9 5-9 5-9-5 9-5Z" {...shared} /><path d="m5 12 7 4 7-4M5 16l7 4 7-4" {...shared} /></>,
    target: <><circle cx="12" cy="12" r="8" {...shared} /><circle cx="12" cy="12" r="4" {...shared} /><path d="m12 12 5-5" {...shared} /></>,
    time: <><circle cx="12" cy="12" r="8" {...shared} /><path d="M12 8v5l3 2" {...shared} /></>,
    tool: <><path d="M14.7 6.3a4 4 0 0 0 5 5L11 20l-4-4 8.7-9.7Z" {...shared} /><path d="m7 16 1 1" {...shared} /></>,
    users: <><path d="M16 19c0-2.2-1.8-4-4-4s-4 1.8-4 4" {...shared} /><circle cx="12" cy="9" r="3" {...shared} /><path d="M20 18c0-1.7-1.1-3.1-2.7-3.7" {...shared} /></>,
  }

  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      {icons[name]}
    </svg>
  )
}


const skillGroups = [
  {
    title: 'Frontend Development',
    icon: 'desktop',
    color: 'bg-blue-500 text-white',
    description: 'Creating fast, responsive, accessible, and engaging user interfaces using modern frontend technologies.',
    tech: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    title: 'Backend Development',
    icon: 'cloud',
    color: 'bg-emerald-500 text-white',
    description: 'Building scalable server-side applications, APIs, authentication systems, and business logic.',
    tech: ['Node.js', 'Express.js', 'Java', 'Spring Boot', 'REST APIs', 'GraphQL', 'Socket.IO'],
    skills: ['API Design', 'Authentication & Authorization', 'Payment Gateway Integration', 'File Storage', 'Background Jobs', 'Microservices', 'Business Logic Implementation'],
  },
  {
    title: 'Mobile Development',
    icon: 'phone',
    color: 'bg-violet-600 text-white',
    description: 'Developing high-performance cross-platform mobile applications.',
    tech: ['React Native', 'Expo', 'Android', 'iOS'],
    skills: ['Mobile UI Development', 'Push Notifications', 'Device APIs', 'Offline Storage', 'Deep Linking', 'App Store Deployment', 'Google Play Deployment'],
  },
  {
    title: 'Database Technologies',
    icon: 'database',
    color: 'bg-amber-500 text-white',
    description: 'Designing efficient, secure, and scalable database systems.',
    tech: ['PostgreSQL', 'MongoDB', 'MySQL', 'Firebase', 'Redis'],
    skills: ['Database Design', 'Query Optimization', 'Data Modeling', 'Indexing', 'Backup & Recovery', 'Data Security'],
  },
  {
    title: 'Cloud & DevOps',
    icon: 'cloud',
    color: 'bg-sky-500 text-white',
    description: 'Deploying, monitoring, and maintaining reliable cloud-hosted applications.',
    tech: ['Docker', 'Git', 'GitHub', 'GitHub Actions', 'AWS', 'Vercel', 'Netlify', 'Linux'],
    skills: ['CI/CD Pipelines', 'Version Control', 'Deployment Automation', 'Containerization', 'Server Configuration', 'Monitoring', 'Performance Optimization'],
  },
  {
    title: 'UI Engineering',
    icon: 'design',
    color: 'bg-rose-500 text-white',
    description: 'Turning designs into clean, polished, responsive, and production-ready interfaces.',
    tech: ['Figma', 'Adobe XD'],
    skills: ['Pixel-Perfect Implementation', 'Responsive Layouts', 'Design Systems', 'Component Libraries', 'UI Animation', 'Design-to-Code Workflow'],
  },
  {
    title: 'Artificial Intelligence',
    icon: 'ai',
    color: 'bg-purple-600 text-white',
    description: 'Adding intelligent product features that automate tasks and improve decisions.',
    tech: ['OpenAI APIs', 'AI Assistants', 'Prompt Engineering', 'AI Workflow Automation'],
    skills: ['AI Integration', 'Chatbots', 'Intelligent Automation', 'Recommendation Systems', 'AI-Powered Features', 'Workflow Optimization'],
  },
] satisfies Array<{
  title: string
  icon: IconName
  color: string
  description: string
  tech: string[]
  skills?: string[]
}>

const expertise = [
  ['System Architecture', 'Designing scalable and maintainable software architectures.', 'layers'],
  ['API Engineering', 'Building secure, well-documented, and efficient APIs.', 'code'],
  ['Authentication & Security', 'Implementing secure authentication, authorization, encryption, and data protection.', 'lock'],
  ['Performance Optimization', 'Improving application speed, scalability, and reliability.', 'rocket'],
  ['Problem Solving', 'Breaking down complex technical challenges into practical, maintainable solutions.', 'target'],
  ['Agile Development', 'Working efficiently within Agile and Scrum environments.', 'time'],
  ['Software Testing', 'Writing reliable, maintainable software supported by testing and debugging.', 'shield'],
  ['Code Quality', 'Following clean architecture, SOLID principles, reusable components, and industry best practices.', 'badge'],
] satisfies Array<[string, string, IconName]>

// const toolkit = [
//   ['IDEs', ['Visual Studio Code', 'IntelliJ IDEA', 'Android Studio']],
//   ['Design', ['Figma', 'Adobe XD']],
//   ['API Tools', ['Postman', 'Insomnia']],
//   ['Collaboration', ['GitHub', 'Jira', 'Trello', 'Notion', 'Slack']],
//   ['Deployment', ['Vercel', 'Netlify', 'Railway', 'Render']],
// ] satisfies Array<[string, string[]]>

// const toolLogos: Record<string, { label: string; className: string }> = {
//   'Visual Studio Code': { label: 'VS', className: 'bg-[#007acc] text-white' },
//   'IntelliJ IDEA': { label: 'IJ', className: 'bg-slate-950 text-white' },
//   'Android Studio': { label: 'AS', className: 'bg-[#3ddc84] text-slate-950' },
//   Figma: { label: 'Fi', className: 'bg-[#f24e1e] text-white' },
//   'Adobe XD': { label: 'XD', className: 'bg-[#470137] text-[#ff61f6]' },
//   Postman: { label: 'Po', className: 'bg-[#ff6c37] text-white' },
//   Insomnia: { label: 'In', className: 'bg-[#4000bf] text-white' },
//   GitHub: { label: 'Gh', className: 'bg-slate-950 text-white' },
//   Jira: { label: 'Ji', className: 'bg-[#0052cc] text-white' },
//   Trello: { label: 'Tr', className: 'bg-[#0079bf] text-white' },
//   Notion: { label: 'No', className: 'bg-white text-slate-950 ring-1 ring-slate-300' },
//   Slack: { label: 'Sl', className: 'bg-[#4a154b] text-white' },
//   Vercel: { label: 'Ve', className: 'bg-slate-950 text-white' },
//   Netlify: { label: 'Ne', className: 'bg-[#00ad9f] text-white' },
//   Railway: { label: 'Ra', className: 'bg-[#0b0d0e] text-white' },
//   Render: { label: 'Re', className: 'bg-[#46e3b7] text-slate-950' },
// }

// function ToolLogo({ name }: { name: string }) {
//   const logo = toolLogos[name] ?? { label: name.slice(0, 2), className: 'bg-slate-100 text-slate-900' }

//   return (
//     <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg text-[10px] font-black ${logo.className}`}>
//       {logo.label}
//     </span>
//   )
// }

const strengths = [
  ['Communication', 'Explaining technical concepts clearly to technical and non-technical stakeholders.', 'collaboration'],
  ['Leadership', 'Leading projects, mentoring developers, and making strategic technical decisions.', 'users'],
  ['Team Collaboration', 'Working effectively with designers, developers, product managers, and clients.', 'collaboration'],
  ['Critical Thinking', 'Evaluating challenges and selecting the best technical solutions.', 'target'],
  ['Time Management', 'Managing priorities and delivering projects on schedule.', 'time'],
  ['Adaptability', 'Quickly learning new technologies and adapting to changing needs.', 'learn'],
  ['Client Management', 'Understanding business requirements and maintaining strong client relationships.', 'users'],
  ['Continuous Learning', 'Staying current with emerging technologies and industry trends.', 'badge'],
] satisfies Array<[string, string, IconName]>

const certifications = [
  ['Silicon Valley Software Engineering Certification', 'Focused on modern software engineering practices, product thinking, and scalable application development.', 'badge'],
  ['Software Engineering Diploma', 'Comprehensive training in software development, architecture, testing, and deployment.', 'shield'],
  ['Computer Science Degree', 'Advanced studies in algorithms, operating systems, databases, software engineering, and computer systems.', 'gear'],
] satisfies Array<[string, string, IconName]>

const atAGlance = [
  ['15+', 'Technologies Mastered', 'stack'],
  ['80+', 'Software Projects', 'briefcase'],
  ['5+', 'Years of Experience', 'users'],
  ['Multiple', 'Industries Served', 'shield'],
  ['Full-Stack', 'Development Expertise', 'desktop'],
  ['End-to-End', 'Product Delivery', 'layers'],
] satisfies Array<[string, string, IconName]>

const faqs = [
  'What technologies do you specialize in?',
  'Do you work across the full stack?',
  'Can you learn new technologies for a project?',
  'Do you build both web and mobile applications?',
  'What databases do you commonly use?',
  'Do you provide UI implementation from Figma?',
  'Can you integrate AI into existing software?',
  'Which cloud platforms have you worked with?',
]

function Skills() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-950">
      <Navbar />

      <section className="relative mx-auto grid min-h-[calc(100vh-64px)] max-w-[1720px] items-end gap-10 px-6 pt-12 lg:grid-cols-[0.98fr_1.02fr] lg:px-16 lg:pt-8">
        <div className="absolute inset-y-0 left-1/2 hidden w-screen -translate-x-1/2 bg-[radial-gradient(circle_at_76%_40%,rgba(21,87,255,0.16),transparent_34%),linear-gradient(90deg,#ffffff_0%,#ffffff_46%,#f3f7ff_100%)] lg:block" />
        <div className="relative z-10 py-8">
          <p className="text-sm font-black uppercase tracking-[0.08em] text-[#1557ff]">My Skills</p>
          <h1 className="mt-7 text-[32px] font-bold leading-[1.14] tracking-[-0.045em] text-slate-950 sm:text-[46px] lg:text-[48px] xl:text-[54px]">
            Building Reliable Software Through <span className="text-[#1557ff]">Modern Technologies</span>
          </h1>
          <p className="mt-4 max-w-[520px] text-base font-medium leading-8 text-slate-700">
            I combine technical expertise, engineering best practices, and continuous learning to build secure, scalable, and user-focused digital products. My experience spans full-stack development, mobile applications, cloud technologies, system architecture, and AI-powered solutions.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="/projects" className="inline-flex items-center justify-center gap-3 rounded-md bg-[#1557ff] px-7 py-4 text-sm font-black text-white shadow-[0_14px_28px_rgba(21,87,255,0.24)]">
              View My Projects <span aria-hidden="true">-&gt;</span>
            </a>
            <a href="/contact" className="inline-flex items-center justify-center gap-3 rounded-md border-2 border-[#1557ff] px-7 py-4 text-sm font-black text-[#1557ff] transition hover:bg-[#eef4ff]">
              Hire Me <Icon name="users" className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[820px]">
          <img src={skillsImage} alt="Software development workspace" className="relative z-10 w-full object-contain" />
        </div>

        {/* NEW HERO STAT */}
        <div className="relative z-10 mt-2 grid w-full gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3 xl:grid-cols-6">
          {atAGlance.map(([value, label, icon]) => (
            <article key={label} className="flex min-h-32 flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
              <Icon name={icon} className="h-8 w-8 text-[#1557ff]" />
              <div className="mt-5">
                <p className="text-2xl font-bold leading-tight tracking-[-0.03em]">{value}</p>
                <p className="mt-1 text-xs font-bold leading-5 text-slate-600">{label}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 py-12 lg:px-16">
        <div className="mx-auto max-w-[1540px] text-center">
          <h2 className="text-3xl font-bold tracking-[-0.04em] lg:text-4xl">Core Technical Skills</h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm font-medium leading-7 text-slate-600">
            The technologies and frameworks I use to design, build, deploy, and maintain modern software applications.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-[1540px] gap-5 lg:grid-cols-2 xl:grid-cols-4">
          {skillGroups.slice(0, 4).map((group) => (
            <article key={group.title} className="rounded-xl border border-slate-200 bg-white p-7 shadow-[0_14px_35px_rgba(15,23,42,0.04)]">
              <div className="flex items-center gap-4">
                <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${group.color}`}>
                  <Icon name={group.icon} className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold">{group.title}</h3>
              </div>
              <p className="mt-5 text-sm font-medium leading-7 text-slate-600">{group.description}</p>
              <h4 className="mt-7 text-xs font-bold uppercase text-slate-900">Technologies</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.tech.map((item) => (
                  <span key={item} className="rounded-md border border-slate-200 px-3 py-2 text-xs font-medium text-slate-700">{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-5 grid max-w-[1540px] gap-5 lg:grid-cols-3">
          {skillGroups.slice(4).map((group) => (
            <article key={group.title} className="rounded-xl border border-slate-200 bg-white p-7 shadow-[0_14px_35px_rgba(15,23,42,0.04)]">
              <div className="flex items-center gap-4">
                <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${group.color}`}>
                  <Icon name={group.icon} className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-black">{group.title}</h3>
              </div>
              <p className="mt-5 text-sm font-medium leading-7 text-slate-600">{group.description}</p>
              <h4 className="mt-7 text-xs font-black uppercase text-slate-900">Technologies</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.tech.map((item) => (
                  <span key={item} className="rounded-md border border-slate-200 px-3 py-2 text-xs font-black text-slate-700">{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 py-8 lg:px-16">
        <div className="mx-auto max-w-[1540px]">
          <h2 className="text-center text-3xl font-bold tracking-[-0.04em]">Engineering Expertise</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {expertise.map(([title, description, icon]) => (
              <article key={title} className="rounded-xl border border-slate-200 p-5 text-center shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
                <Icon name={icon} className="mx-auto h-8 w-8 text-[#1557ff]" />
                <h3 className="mt-4 text-sm font-bold leading-5">{title}</h3>
                <p className="mt-3 text-xs font-medium leading-6 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="px-6 py-8 lg:px-16">
        <div className="mx-auto max-w-[1540px]">
          <h2 className="text-center text-3xl font-bold tracking-[-0.04em]">Daily Development Toolkit</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {toolkit.map(([title, items]) => (
              <article key={title} className="rounded-xl border border-slate-200 p-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
                <h3 className="text-base font-black text-[#1557ff]">{title}</h3>
                <div className="mt-5 space-y-3">
                  {items.map((item) => (
                    <span key={item} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                      <ToolLogo name={item} />
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section> */}

      <section className="px-6 py-8 lg:px-16">
        <div className="mx-auto max-w-[1540px]">
          <h2 className="text-center text-3xl font-bold tracking-[-0.04em]">Professional Strengths</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {strengths.map(([title, description, icon]) => (
              <article key={title} className="rounded-xl border border-slate-200 p-5 text-center shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
                <Icon name={icon} className="mx-auto h-8 w-8 text-[#1557ff]" />
                <h3 className="mt-4 text-sm font-bold leading-5">{title}</h3>
                <p className="mt-3 text-xs font-medium leading-6 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-8 lg:px-16">
        <div className="mx-auto max-w-[1540px]">
          <h2 className="text-2xl text-center font-bold tracking-[-0.035em]">Professional Certifications</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {certifications.map(([title, description, icon]) => (
              <article key={title} className="rounded-xl border border-slate-200 p-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
                <Icon name={icon} className="h-8 w-8 text-[#1557ff]" />
                <h3 className="mt-4 text-sm font-bold leading-5">{title}</h3>
                <p className="mt-3 text-xs font-medium leading-6 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {['Backend Engineering', 'React Development', 'Node.js', 'Cloud Computing', 'Artificial Intelligence', 'DevOps Engineering'].map((course) => (
              <span key={course} className="rounded-full border border-slate-200 px-4 py-2 text-xs font-black text-slate-700">{course}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-8 lg:px-16">
        <div className="mx-auto max-w-[1540px]">
          <h2 className="text-2xl text-center font-bold tracking-[-0.035em]">Skills & Expertise FAQs</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <button key={faq} type="button" className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-5 py-4 text-left text-sm font-bold text-slate-900 shadow-[0_10px_24px_rgba(15,23,42,0.03)]">
                {faq}
                <span className="text-lg text-[#1557ff]" aria-hidden="true">+</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default Skills
