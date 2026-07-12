import { useMemo, useState } from 'react'
import type { ReactElement } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import aboutImage from '../assets/about-img.png'
import heroImage from '../assets/hero-img.png'
import myCv from '../assets/my-cv.pdf'
import edvesLogo from '../assets/logos/edves.png'
import gigLogo from '../assets/logos/giglogistics.png'
import healthtrackaLogo from '../assets/logos/healthtracka.png'
import interswitchLogo from '../assets/logos/interswitch.png'
import kudaLogo from '../assets/logos/kuda.png'
import paystackLogo from '../assets/logos/paystack.png'
import ulessonLogo from '../assets/logos/ulesson.png'
import { filterProjectTitles, projectFilters, projects } from '../data/projects'
import type { Project } from '../data/projects'

type IconName =
  | 'code'
  | 'web'
  | 'mobile'
  | 'ui'
  | 'server'
  | 'ai'
  | 'search'
  | 'plan'
  | 'design'
  | 'test'
  | 'launch'

const blue = '#1557ff'

function LineIcon({ name, className = 'h-9 w-9' }: { name: IconName; className?: string }) {
  const shared = {
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }

  const icons: Record<IconName, ReactElement> = {
    code: (
      <>
        <path d="m8 9-4 3 4 3" {...shared} />
        <path d="m16 9 4 3-4 3" {...shared} />
        <path d="m13.5 6-3 12" {...shared} />
      </>
    ),
    web: (
      <>
        <circle cx="12" cy="12" r="8.5" {...shared} />
        <path d="M3.8 12h16.4M12 3.5c2.2 2.4 3.3 5.2 3.3 8.5s-1.1 6.1-3.3 8.5M12 3.5C9.8 5.9 8.7 8.7 8.7 12s1.1 6.1 3.3 8.5" {...shared} />
      </>
    ),
    mobile: (
      <>
        <rect x="7" y="3.5" width="10" height="17" rx="2" {...shared} />
        <path d="M10.5 17.5h3" {...shared} />
      </>
    ),
    ui: (
      <>
        <rect x="4" y="5" width="16" height="12" rx="1.8" {...shared} />
        <path d="M8 20h8M12 17v3M7 9h5M7 12h9" {...shared} />
      </>
    ),
    server: (
      <>
        <ellipse cx="12" cy="6" rx="7" ry="3" {...shared} />
        <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" {...shared} />
        <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" {...shared} />
      </>
    ),
    ai: (
      <>
        <path d="M12 3v18M7.5 5.2C5 6.1 3.5 8.4 3.5 11c0 3.8 3.1 6.5 7 6.5M16.5 5.2c2.5.9 4 3.2 4 5.8 0 3.8-3.1 6.5-7 6.5" {...shared} />
        <path d="M8 9h8M8 13h8M10 17h4" {...shared} />
      </>
    ),
    search: (
      <>
        <circle cx="10.5" cy="10.5" r="5.5" {...shared} />
        <path d="m15 15 4.5 4.5" {...shared} />
      </>
    ),
    plan: (
      <>
        <rect x="5" y="4" width="14" height="16" rx="2" {...shared} />
        <path d="M9 8h6M9 12h6M9 16h3" {...shared} />
      </>
    ),
    design: (
      <>
        <path d="m4 16 4 4 12-12-4-4L4 16Z" {...shared} />
        <path d="m13 7 4 4M4 16l-1 5 5-1" {...shared} />
      </>
    ),
    test: (
      <>
        <path d="M12 3 5 6v5c0 4.4 2.9 8.4 7 10 4.1-1.6 7-5.6 7-10V6l-7-3Z" {...shared} />
        <path d="m8.8 12 2.1 2.1 4.3-4.3" {...shared} />
      </>
    ),
    launch: (
      <>
        <path d="M14 4c3.3.5 5.5 2.7 6 6l-5.5 5.5-4-4L14 4Z" {...shared} />
        <path d="m10.5 11.5-4 1-2.5 4 4-2.5 1-4M14 15.5l-1 4-4 2.5 2.5-4 4-1" {...shared} />
      </>
    ),
  }

  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      {icons[name]}
    </svg>
  )
}

const stats = [
  { value: '5+', label: 'Years Experience', icon: 'web' },
  { value: '80+', label: 'Projects Delivered', icon: 'plan' },
  { value: '30+', label: 'Happy Clients', icon: 'test' },
  { value: '15+', label: 'Technologies', icon: 'code' },
] satisfies Array<{ value: string; label: string; icon: IconName }>

const trustedBrands = [
  { name: 'Paystack', logo: paystackLogo },
  { name: 'Kuda', logo: kudaLogo },
  { name: 'Interswitch', logo: interswitchLogo },
  { name: 'uLesson', logo: ulessonLogo },
  { name: 'Healthtracka', logo: healthtrackaLogo },
  { name: 'GIG Logistics', logo: gigLogo },
  { name: 'Edves', logo: edvesLogo },
]

const services = [
  {
    icon: 'code',
    title: 'Custom Software Development',
    description: 'Designing scalable software solutions tailored to unique business requirements.',
  },
  {
    icon: 'web',
    title: 'Web Application Development',
    description: 'Building fast, secure, and responsive web applications using modern technologies.',
  },
  {
    icon: 'mobile',
    title: 'Mobile App Development',
    description: 'Creating intuitive Android and iOS applications with exceptional user experiences.',
  },
  {
    icon: 'ui',
    title: 'UI Implementation',
    description: 'Transforming professional designs into pixel-perfect, responsive interfaces.',
  },
  {
    icon: 'server',
    title: 'Backend Development',
    description: 'Developing secure APIs, databases, authentication systems, and business logic.',
  },
  {
    icon: 'ai',
    title: 'AI Integration',
    description: 'Integrating artificial intelligence into products to automate workflows and improve decisions.',
  },
] satisfies Array<{ icon: IconName; title: string; description: string }>

const techIconBase = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'
const techIconMap: Record<string, string> = {
  React: `${techIconBase}/react/react-original.svg`,
  'Next.js': `${techIconBase}/nextjs/nextjs-original.svg`,
  TypeScript: `${techIconBase}/typescript/typescript-original.svg`,
  'Tailwind CSS': `${techIconBase}/tailwindcss/tailwindcss-original.svg`,
  HTML5: `${techIconBase}/html5/html5-original.svg`,
  CSS3: `${techIconBase}/css3/css3-original.svg`,
  'Node.js': `${techIconBase}/nodejs/nodejs-original.svg`,
  'Express.js': `${techIconBase}/express/express-original.svg`,
  Java: `${techIconBase}/java/java-original.svg`,
  PHP: `${techIconBase}/php/php-original.svg`,
  GraphQL: `${techIconBase}/graphql/graphql-plain.svg`,
  'React Native': `${techIconBase}/react/react-original.svg`,
  Expo: `${techIconBase}/expo/expo-original.svg`,
  PostgreSQL: `${techIconBase}/postgresql/postgresql-original.svg`,
  MongoDB: `${techIconBase}/mongodb/mongodb-original.svg`,
  MySQL: `${techIconBase}/mysql/mysql-original.svg`,
  Firebase: `${techIconBase}/firebase/firebase-plain.svg`,
  Docker: `${techIconBase}/docker/docker-original.svg`,
  Git: `${techIconBase}/git/git-original.svg`,
  GitHub: `${techIconBase}/github/github-original.svg`,
  Linux: `${techIconBase}/linux/linux-original.svg`,
  Vercel: `${techIconBase}/vercel/vercel-original.svg`,
  Netlify: `${techIconBase}/netlify/netlify-original.svg`,
  Figma: `${techIconBase}/figma/figma-original.svg`,
  Postman: `${techIconBase}/postman/postman-original.svg`,
  'VS Code': `${techIconBase}/vscode/vscode-original.svg`,
  'Adobe XD': `${techIconBase}/xd/xd-plain.svg`,
}

const technologies = [
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'Java', 'PHP', 'REST APIs', 'GraphQL'],
  },
  {
    title: 'Mobile',
    items: ['React Native', 'Expo'],
  },
  {
    title: 'Database',
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Firebase'],
  },
  {
    title: 'Cloud & DevOps',
    items: ['Docker', 'Git', 'GitHub', 'Linux', 'Vercel', 'Netlify'],
  },
  {
    title: 'Design & Tools',
    items: ['Figma', 'Postman', 'VS Code', 'Adobe XD'],
  },
]

const processSteps = [
  {
    icon: 'search',
    title: 'Discovery',
    description: 'Understanding your business goals, users, and project requirements.',
  },
  {
    icon: 'plan',
    title: 'Planning',
    description: 'Creating architecture, workflows, timelines, and technical strategy.',
  },
  {
    icon: 'design',
    title: 'Design',
    description: 'Building intuitive user experiences and clean interfaces.',
  },
  {
    icon: 'code',
    title: 'Development',
    description: 'Writing maintainable, scalable, and secure code.',
  },
  {
    icon: 'test',
    title: 'Testing',
    description: 'Ensuring performance, security, and reliability through comprehensive testing.',
  },
  {
    icon: 'launch',
    title: 'Deployment',
    description: 'Launching your product with ongoing monitoring and optimization.',
  },
] satisfies Array<{ icon: IconName; title: string; description: string }>

function Home() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const visibleProjects = useMemo(() => {
    const titles = filterProjectTitles[activeFilter]
    const matchedProjects = titles
      .map((title) => projects.find((project) => project.title === title))
      .filter((project): project is Project => Boolean(project))

    return matchedProjects.slice(0, 4)
  }, [activeFilter])

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter)
  }

  return (
    <main id="home" className="min-h-screen overflow-hidden bg-white text-slate-950">
      <Navbar />

      <section className="relative mx-auto grid min-h-[calc(100vh-64px)] max-w-[1720px] items-end gap-10 px-6 pt-12 lg:grid-cols-[0.98fr_1.02fr] lg:px-16 lg:pt-8">
        <div className="absolute inset-y-0 left-1/2 hidden w-screen -translate-x-1/2 bg-[radial-gradient(circle_at_76%_40%,rgba(21,87,255,0.16),transparent_34%),linear-gradient(90deg,#ffffff_0%,#ffffff_46%,#f3f7ff_100%)] lg:block" />

        <div className="relative z-10 self-center pb-12 lg:max-w-[680px] lg:pb-20">
          <p className="text-sm font-bold leading-tight text-[#1557ff]">
            Software Engineer   •   Full-Stack Developer   •   Technology Consultant
          </p>

          <h1 className="mt-7 text-[32px] font-bold leading-[1.14] tracking-[-0.045em] text-slate-950 sm:text-[46px] lg:text-[48px] xl:text-[54px]">
            Building Modern Digital Products That Solve Real Business Problems
          </h1>

          <p className="mt-4 max-w-[520px] text-base font-medium leading-8 text-slate-700">
            I&apos;m Nsikan Essoh, a Software Engineer passionate about designing and
            developing scalable web applications, mobile apps, enterprise software,
            AI-powered solutions, and digital platforms that help businesses innovate,
            grow, and operate more efficiently. I combine thoughtful user experience,
            robust architecture, and clean code to turn ambitious ideas into reliable
            products.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/projects"
              className="inline-flex items-center justify-center gap-3 rounded-md bg-[#1557ff] px-7 py-4 text-sm font-semibold text-white shadow-[0_14px_28px_rgba(21,87,255,0.24)] transition hover:-translate-y-0.5 hover:bg-[#0f46d8]"
            >
              View My Projects
              <span aria-hidden="true">-&gt;</span>
            </a>

            <a
              href={myCv}
              download="Nsikan-Essoh-CV.pdf"
              className="inline-flex items-center justify-center gap-3 rounded-md border border-[#1557ff] bg-white px-7 py-4 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-[#eef4ff]"
            >
              Download Portfolio
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#1557ff]" fill="none" aria-hidden="true">
                <path d="M12 3v12M7 10l5 5 5-5M5 21h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div className="mt-14 grid max-w-[760px] grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <span className="text-[#1557ff]">
                  <LineIcon name={stat.icon} className="h-7 w-7" />
                </span>
                <span>
                  <strong className="block text-3xl font-semibold leading-none text-slate-950">{stat.value}</strong>
                  <span className="mt-1 block text-xs font-bold text-slate-700">{stat.label}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 mx-auto flex min-h-[540px] w-full max-w-[780px] items-end justify-end self-end lg:min-h-[700px]">
          <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#e8f1ff] sm:h-[580px] sm:w-[580px] lg:h-[650px] lg:w-[650px]" />
          <div className="absolute bottom-44 left-[8%] hidden h-[190px] w-[190px] bg-[radial-gradient(#1557ff_1.5px,transparent_1.5px)] [background-size:18px_18px] md:block" />

          <div className="absolute left-[8%] top-[28%] hidden rounded-xl bg-white px-8 py-7 text-[#1557ff] shadow-[0_18px_40px_rgba(15,23,42,0.1)] md:block">
            <LineIcon name="code" className="h-8 w-8" />
          </div>

          <div className="absolute right-[4%] top-[18%] z-0 hidden w-[240px] rounded-lg bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.12)] md:block">
            <p className="text-xs font-black text-slate-600">Analytics</p>
            <svg viewBox="0 0 210 82" className="mt-5 h-20 w-full" fill="none" aria-hidden="true">
              <path d="M6 62 35 37l29 14 29-31 30 26 29-32 52 18" stroke="#7aa2ff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              {[6, 35, 64, 93, 123, 152, 204].map((cx, index) => (
                <circle key={cx} cx={cx} cy={[62, 37, 51, 20, 46, 14, 32][index]} r="5" fill={blue} />
              ))}
            </svg>
          </div>

          <div className="absolute right-0 top-[36%] z-20 hidden rounded-lg bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.12)] md:block">
            <p className="text-xs font-black text-slate-600">Performance</p>
            <strong className="mt-4 block text-3xl font-black text-slate-950">98%</strong>
            <span className="text-xs font-bold text-slate-500">Success Rate</span>
            <span className="mt-5 block h-2 w-28 rounded-full bg-[#1557ff]" />
          </div>

          <div className="absolute bottom-[18%] right-[4%] z-20 hidden rounded-xl bg-white p-7 text-[#1557ff] shadow-[0_18px_45px_rgba(15,23,42,0.12)] md:block">
            <LineIcon name="code" className="h-9 w-9" />
          </div>

          <img
            src={heroImage}
            alt="Nsikan Essoh"
            className="relative z-20 h-[570px] w-auto max-w-[96%] object-contain object-bottom drop-shadow-[0_28px_45px_rgba(15,23,42,0.18)] sm:h-[650px] lg:h-[760px]"
          />
        </div>
      </section>

      <section id="about" className="border-t border-slate-100 bg-white px-6 pb-16 pt-10 lg:px-16">
        <div className="mx-auto max-w-[1540px]">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl font-bold tracking-[-0.035em] text-slate-950 lg:text-3xl">
              Trusted by Businesses, Startups &amp; Organizations
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-slate-700">
              I&apos;ve had the opportunity to collaborate with startups, growing
              businesses, educational institutions, and organizations across different
              industries to build reliable digital solutions that create measurable
              impact.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 items-center gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-7">
            {trustedBrands.map((brand) => (
              <div key={brand.name} className="flex h-14 items-center justify-center">
                <img src={brand.logo} alt={brand.name} className="max-h-10 max-w-[140px] object-contain" />
              </div>
            ))}
          </div>

          <div className="mt-16 grid items-stretch gap-12 lg:grid-cols-[0.98fr_1.02fr]">
            <div className="overflow-hidden rounded-xl bg-[#eef4ff] shadow-[0_22px_55px_rgba(15,23,42,0.12)]">
              <img
                src={aboutImage}
                alt="Nsikan Essoh working on software"
                className="h-full min-h-[430px] w-full object-cover object-center"
              />
            </div>

            <div className="flex max-w-[720px] flex-col justify-center py-2">
              <p className="text-xs font-black uppercase leading-none text-[#1557ff]">
                About Me
              </p>
              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-[-0.04em] text-slate-950 lg:text-4xl">
                Turning Ideas Into Powerful Software
              </h2>
              <p className="mt-5 text-base font-medium leading-8 text-slate-700">
                Technology has always been more than a profession to me. It&apos;s a
                way to solve meaningful problems. Every project begins with
                understanding the people behind it, identifying the real challenge,
                and crafting solutions that are practical, scalable, and user-friendly.
              </p>
              <p className="mt-5 text-base font-medium leading-8 text-slate-700">
                My expertise spans full-stack web development, mobile application
                development, cloud technologies, UI/UX implementation, system
                architecture, API development, and AI integration. Whether building
                products from scratch or improving existing systems, I focus on
                creating software that delivers lasting value.
              </p>

              <a
                href="/about"
                className="mt-7 inline-flex w-fit items-center justify-center gap-3 rounded-md bg-[#1557ff] px-7 py-4 text-sm font-semibold text-white shadow-[0_14px_28px_rgba(21,87,255,0.22)] transition hover:-translate-y-0.5 hover:bg-[#0f46d8]"
              >
                Read More About Me
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white px-6 pb-10 lg:px-16">
        <div className="mx-auto max-w-[1540px]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-slate-950">
              How I Help Businesses
            </p>
            <p className="mt-3 text-sm font-medium text-slate-600">
              I provide end-to-end software development services tailored to startups,
              enterprises, and organizations.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="min-h-[260px] rounded-lg border border-slate-200 bg-white p-6 shadow-[0_16px_38px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(21,87,255,0.12)]"
              >
                <div className="mb-8 text-[#1557ff]">
                  <LineIcon name={service.icon} />
                </div>
                <h3 className="text-lg font-bold leading-tight text-slate-950">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-7 text-slate-600">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="bg-white px-6 py-10 lg:px-16">
        <div className="mx-auto max-w-[1540px]">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-xl font-black uppercase tracking-[0.08em] text-slate-950">
              Featured Projects
            </h2>
            <p className="mt-3 text-sm font-medium text-slate-600">
              A collection of software products I&apos;ve designed and developed across
              various industries.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {projectFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => handleFilterChange(filter)}
                className={`rounded-xl px-6 py-3 text-sm font-semibold transition ${
                  activeFilter === filter
                    ? 'bg-[#1557ff] text-white shadow-[0_12px_22px_rgba(21,87,255,0.22)]'
                    : 'bg-[#eef3fb] text-slate-800 hover:bg-[#dfeaff] hover:text-[#1557ff]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {visibleProjects.map((project) => (
              <article
                key={`${activeFilter}-${project.title}`}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)]"
              >
                <div className="m-4 overflow-hidden rounded-lg bg-[#eef4ff]">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className="h-52 w-full object-cover object-top transition duration-500 hover:scale-105"
                  />
                </div>

                <div className="px-6 pb-7">
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="rounded-md bg-[#eef4ff] px-3 py-1 text-xs font-semibold text-[#1557ff]">
                      {project.category}
                    </span>
                    {project.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="rounded-md bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-slate-950">{project.title}</h3>
                  <p className="mt-3 min-h-[48px] text-sm font-medium leading-6 text-slate-600">
                    {project.description}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="mt-6 inline-flex items-center gap-3 text-sm font-semibold text-[#1557ff]"
                  >
                    View Case Study
                    <span aria-hidden="true">-&gt;</span>
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-9 flex justify-center">
            <button
              type="button"
              onClick={() => {
                window.history.pushState({}, '', '/projects')
                window.dispatchEvent(new PopStateEvent('popstate'))
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="inline-flex items-center justify-center gap-3 rounded-md border border-[#1557ff] bg-white px-10 py-4 text-sm font-semibold text-[#1557ff] transition hover:-translate-y-0.5 hover:bg-[#eef4ff]"
            >
              View All Projects
              <span aria-hidden="true">↗</span>
            </button>
          </div>
        </div>
      </section>

      <section id="skills" className="bg-white px-6 py-10 lg:px-16">
        <div className="mx-auto max-w-[1540px]">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-xl font-bold uppercase tracking-[0.08em] text-slate-950">
              Technologies I Work With
            </h2>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {technologies.map((group) => (
              <article
                key={group.title}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-[0_16px_38px_rgba(15,23,42,0.04)]"
              >
                <h3 className="mb-5 text-lg font-semibold text-slate-900">{group.title}</h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                      {techIconMap[item] ? (
                        <span className="grid h-7 w-7 place-items-center rounded-md bg-slate-50">
                          <img src={techIconMap[item]} alt="" className="h-5 w-5 object-contain" />
                        </span>
                      ) : (
                        <span className="grid h-7 w-7 place-items-center rounded-md bg-[#eef4ff] text-[10px] font-black text-[#1557ff]">
                          API
                        </span>
                      )}
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-white px-6 pb-20 pt-10 lg:px-16">
        <div className="mx-auto max-w-[1540px]">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-xl font-bold uppercase tracking-[0.08em] text-slate-950">
              How I Work
            </h2>
          </div>

          <div className="relative mt-10 grid gap-8 md:grid-cols-3 xl:grid-cols-6">
            <div className="absolute left-[8%] right-[8%] top-8 hidden border-t border-dashed border-[#8fb0ff] xl:block" />
            {processSteps.map((step) => (
              <article key={step.title} className="relative text-center">
                <div className="relative z-10 mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#eaf1ff] text-[#1557ff] shadow-[0_12px_28px_rgba(21,87,255,0.12)]">
                  <LineIcon name={step.icon} className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-lg font-bold text-slate-950">{step.title}</h3>
                <p className="mx-auto mt-3 max-w-[210px] text-sm font-medium leading-7 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {selectedProject && (
        <div className="fixed inset-0 z-[80] overflow-y-auto bg-slate-950/70 p-4 backdrop-blur-sm">
          <div className="mx-auto my-8 max-w-4xl overflow-hidden rounded-2xl bg-white shadow-[0_30px_90px_rgba(0,0,0,0.25)]">
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={`${selectedProject.title} case study`}
                className="h-72 w-full object-cover object-top"
              />
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white text-xl font-black text-slate-950 shadow-lg"
                aria-label="Close case study"
              >
                x
              </button>
            </div>
            <div className="p-6 sm:p-8">
              <span className="rounded-md bg-[#eef4ff] px-3 py-1 text-xs font-black text-[#1557ff]">
                {selectedProject.category}
              </span>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-slate-950">
                {selectedProject.title} Case Study
              </h2>
              <p className="mt-3 text-base font-medium leading-7 text-slate-600">
                {selectedProject.description}
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-3">
                {[
                  ['Challenge', selectedProject.caseStudy.challenge],
                  ['Solution', selectedProject.caseStudy.solution],
                  ['Impact', selectedProject.caseStudy.impact],
                ].map(([heading, text]) => (
                  <article key={heading} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="text-sm font-black uppercase tracking-[0.08em] text-[#1557ff]">
                      {heading}
                    </h3>
                    <p className="mt-3 text-sm font-medium leading-7 text-slate-700">{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default Home
