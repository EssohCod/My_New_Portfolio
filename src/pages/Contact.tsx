import { useState } from 'react'
import type { FormEvent, ReactElement } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

type IconName =
  | 'arrow'
  | 'briefcase'
  | 'building'
  | 'calendar'
  | 'check'
  | 'clock'
  | 'location'
  | 'mail'
  | 'message'
  | 'phone'
  | 'rocket'
  | 'shield'
  | 'user'
  | 'whatsapp'

function Icon({ name, className = 'h-5 w-5' }: { name: IconName; className?: string }) {
  const shared = {
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }

  const icons: Record<IconName, ReactElement> = {
    arrow: <path d="M5 12h14M14 7l5 5-5 5" {...shared} />,
    briefcase: <><rect x="3" y="7" width="18" height="12" rx="2" {...shared} /><path d="M8 7V5h8v2M3 12h18M10 12v2h4v-2" {...shared} /></>,
    building: <><path d="M5 21V4h10v17M15 9h4v12M8 8h2M8 12h2M8 16h2M18 13h.01M18 17h.01M3 21h18" {...shared} /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" {...shared} /><path d="M7 3v4M17 3v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" {...shared} /></>,
    check: <path d="m5 12 4 4L19 6" {...shared} />,
    clock: <><circle cx="12" cy="12" r="9" {...shared} /><path d="M12 7v5l3 2" {...shared} /></>,
    location: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" {...shared} /><circle cx="12" cy="10" r="2.5" {...shared} /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" {...shared} /><path d="m3 7 9 6 9-6" {...shared} /></>,
    message: <><path d="M21 12a8 8 0 0 1-8 8H5l-3 2 1-5a8.5 8.5 0 1 1 18-5Z" {...shared} /><path d="M8 11h.01M12 11h.01M16 11h.01" {...shared} /></>,
    phone: <><path d="M8 3H5a2 2 0 0 0-2 2c0 8.8 7.2 16 16 16a2 2 0 0 0 2-2v-3l-4-1-2 2c-3.9-1.7-6.3-4.1-8-8l2-2-1-4Z" {...shared} /></>,
    rocket: <><path d="M14 4c3.3.5 5.5 2.7 6 6l-5.5 5.5-4-4L14 4Z" {...shared} /><path d="m10.5 11.5-4 1-2.5 4 4-2.5 1-4M14 15.5l-1 4-4 2.5 2.5-4 4-1" {...shared} /></>,
    shield: <><path d="M12 3 5 6v5c0 4.4 2.9 8.4 7 10 4.1-1.6 7-5.6 7-10V6l-7-3Z" {...shared} /><path d="m8.8 12 2.1 2.1 4.3-4.3" {...shared} /></>,
    user: <><circle cx="12" cy="8" r="4" {...shared} /><path d="M4 21c.7-4.2 3.4-6 8-6s7.3 1.8 8 6" {...shared} /></>,
    whatsapp: <><path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.7a8.5 8.5 0 1 1 16.2-4.1Z" {...shared} /><path d="M8.2 7.6c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.8 1.8c.1.3 0 .5-.2.7l-.7.8c.8 1.7 2 2.8 3.8 3.5l.7-.9c.2-.2.4-.3.7-.2l1.9.9c.3.1.4.3.4.6 0 1.2-.8 2.1-2.1 2.3-2.8.3-7.7-2.4-9.1-6.6-.4-1.2.1-2.3 1.1-2.9Z" {...shared} /></>,
  }

  return <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">{icons[name]}</svg>
}

const contactMethods = [
  {
    label: 'Email Me',
    value: 'nessoh1007@gmail.com',
    note: 'Best for detailed project enquiries',
    href: 'mailto:nessoh1007@gmail.com?subject=Project%20Enquiry',
    icon: 'mail',
  },
  {
    label: 'Call Me',
    value: '+234 8089 6906 02',
    note: 'Monday to Friday, 9:00 AM–6:00 PM',
    href: 'tel:+2348089690602',
    icon: 'phone',
  },
  {
    label: 'Chat on WhatsApp',
    value: '+234 8039 8838 35',
    note: 'Quick questions and introductions',
    href: 'https://wa.me/2348039883835?text=Hello%20Nsikan%2C%20I%20would%20like%20to%20discuss%20a%20project.',
    icon: 'whatsapp',
  },
  {
    label: 'Location',
    value: 'Abuja FCT, Nigeria',
    note: 'Available for remote collaborations',
    href: 'https://www.google.com/maps/search/?api=1&query=Abuja+FCT+Nigeria',
    icon: 'location',
  },
] satisfies Array<{
  label: string
  value: string
  note: string
  href: string
  icon: IconName
}>

const projectTypes = [
  'Web Application',
  'Mobile Application',
  'Enterprise Software',
  'AI Integration',
  'UI Implementation',
  'Technical Consulting',
  'Existing Product Improvement',
  'Other',
]

const responseSteps = [
  ['Share your idea', 'Tell me about your goals, users, timeline, and the problem you want to solve.', 'message'],
  ['Get a clear response', 'I will review the brief and reply with questions, recommendations, and the best next step.', 'clock'],
  ['Plan the project', 'We align on scope, milestones, communication, and delivery before development begins.', 'rocket'],
] satisfies Array<[string, string, IconName]>

function Contact() {
  const [submissionStatus, setSubmissionStatus] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const phone = String(formData.get('phone') ?? '').trim()
    const company = String(formData.get('company') ?? '').trim()
    const projectType = String(formData.get('projectType') ?? '').trim()
    const budget = String(formData.get('budget') ?? '').trim()
    const timeline = String(formData.get('timeline') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()

    const subject = encodeURIComponent(`Project enquiry from ${name}${company ? ` — ${company}` : ''}`)
    const body = encodeURIComponent([
      `Hello Nsikan,`,
      '',
      `My name is ${name} and I would like to discuss a project with you.`,
      '',
      `Contact email: ${email}`,
      `Phone/WhatsApp: ${phone || 'Not provided'}`,
      `Company/Organization: ${company || 'Not provided'}`,
      `Project type: ${projectType}`,
      `Estimated budget: ${budget || 'To be discussed'}`,
      `Preferred timeline: ${timeline || 'Flexible'}`,
      '',
      'Project details:',
      message,
      '',
      'Thank you.',
    ].join('\n'))

    setSubmissionStatus('Your email application is opening with the complete enquiry ready to send.')
    window.location.href = `mailto:nessoh1007@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <main id="contact" className="min-h-screen overflow-hidden bg-white text-slate-950">
      <Navbar />

      <section className="relative border-b border-slate-100 bg-[radial-gradient(circle_at_82%_30%,rgba(21,87,255,0.17),transparent_34%),linear-gradient(110deg,#ffffff_0%,#ffffff_56%,#f2f6ff_100%)]">
        <div className="absolute right-[8%] top-16 hidden h-52 w-52 bg-[radial-gradient(circle,#8fb0ff_1.5px,transparent_1.5px)] opacity-55 [background-size:18px_18px] lg:block" />
        <div className="mx-auto grid max-w-[1720px] items-center gap-12 px-6 py-16 lg:grid-cols-[0.96fr_1.04fr] lg:px-16 lg:py-20">
          <div className="relative z-10">
            <p className="text-sm font-black uppercase tracking-[0.12em] text-[#1557ff]">Get in Touch</p>
            <h1 className="mt-5 max-w-4xl text-[42px] font-bold leading-[1.08] tracking-[-0.05em] sm:text-[58px] lg:text-[68px]">
              Let&apos;s Build Something <span className="text-[#1557ff]">Meaningful Together</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-slate-600 sm:text-lg">
              Have a product idea, a business challenge, or an existing platform that needs
              expert attention? Share the details and I&apos;ll help you identify the clearest path
              from idea to reliable digital product.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#project-enquiry" className="inline-flex items-center justify-center gap-3 rounded-md bg-[#1557ff] px-7 py-4 text-sm font-bold text-white shadow-[0_14px_30px_rgba(21,87,255,0.25)] transition hover:-translate-y-0.5 hover:bg-[#0f46d8]">
                Start a Conversation <Icon name="arrow" className="h-4 w-4" />
              </a>
              <a href="https://wa.me/2348039883835?text=Hello%20Nsikan%2C%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 rounded-md border-2 border-[#1557ff] bg-white px-7 py-4 text-sm font-bold text-[#1557ff] transition hover:-translate-y-0.5 hover:bg-[#eef4ff]">
                WhatsApp Me <Icon name="whatsapp" className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-xs font-bold text-slate-600">
              <span className="inline-flex items-center gap-2"><Icon name="check" className="h-4 w-4 text-[#1557ff]" /> Replies within 24 hours</span>
              <span className="inline-flex items-center gap-2"><Icon name="check" className="h-4 w-4 text-[#1557ff]" /> Confidential enquiries welcome</span>
              <span className="inline-flex items-center gap-2"><Icon name="check" className="h-4 w-4 text-[#1557ff]" /> Remote collaboration available</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[720px]">
            <div className="absolute -inset-5 rounded-[36px] bg-[#1557ff]/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[28px] bg-[#071c4f] p-6 text-white shadow-[0_30px_80px_rgba(6,28,79,0.28)] sm:p-9">
              <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_12%_15%,#6f96ff_1.2px,transparent_1.2px)] [background-size:18px_18px]" />
              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#8fb0ff]">Currently Available</p>
                    <h2 className="mt-2 text-2xl font-bold tracking-[-0.03em]">Let&apos;s discuss your next product</h2>
                  </div>
                  <span className="relative flex h-4 w-4 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-4 w-4 rounded-full bg-emerald-400" />
                  </span>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    ['Typical Response', 'Within 24 hours', 'clock'],
                    ['Project Focus', 'Web, mobile & AI', 'briefcase'],
                    ['Working Style', 'Clear & collaborative', 'message'],
                    ['Based In', 'Abuja, Nigeria', 'location'],
                  ].map(([label, value, icon]) => (
                    <article key={label} className="rounded-xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur-sm">
                      <Icon name={icon as IconName} className="h-5 w-5 text-[#8fb0ff]" />
                      <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.12em] text-white/45">{label}</p>
                      <p className="mt-1 text-sm font-bold text-white">{value}</p>
                    </article>
                  ))}
                </div>

                <div className="mt-5 rounded-xl bg-white p-5 text-slate-950">
                  <div className="flex items-start gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#eef4ff] text-[#1557ff]"><Icon name="shield" className="h-6 w-6" /></span>
                    <div>
                      <h3 className="text-sm font-bold">Your ideas stay private</h3>
                      <p className="mt-2 text-xs font-medium leading-6 text-slate-600">I&apos;m happy to sign an NDA and discuss sensitive project details through a secure, confidential process.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="project-enquiry" className="scroll-mt-24 px-6 py-16 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-[1540px]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1557ff]">Contact Options</p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] sm:text-4xl">Choose the Most Convenient Way to Reach Me</h2>
            <p className="mt-4 text-sm font-medium leading-7 text-slate-600 sm:text-base">Send a detailed brief through the form or contact me directly using any option below.</p>
          </div>

          <div className="mt-11 grid gap-8 xl:grid-cols-[0.78fr_1.22fr]">
            <div className="space-y-4">
              {contactMethods.map((method) => {
                const isExternal = method.href.startsWith('http')
                return (
                  <a key={method.label} href={method.href} target={isExternal ? '_blank' : undefined} rel={isExternal ? 'noreferrer' : undefined} className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_14px_35px_rgba(15,23,42,0.05)] transition hover:-translate-y-0.5 hover:border-[#1557ff]/40 hover:shadow-[0_20px_45px_rgba(15,23,42,0.09)]">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-[#eef4ff] text-[#1557ff] transition group-hover:bg-[#1557ff] group-hover:text-white"><Icon name={method.icon} className="h-6 w-6" /></span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs font-semibold uppercase tracking-[0.1em] text-slate-400">{method.label}</span>
                      <span className="mt-1 block break-words text-sm font-semibold text-slate-950 sm:text-base">{method.value}</span>
                      <span className="mt-1 block text-xs font-medium text-slate-500">{method.note}</span>
                    </span>
                    <Icon name="arrow" className="h-5 w-5 shrink-0 text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#1557ff]" />
                  </a>
                )
              })}

              <div className="rounded-2xl bg-[linear-gradient(135deg,#eef4ff,#f9fbff)] p-6">
                <h3 className="text-lg font-semibold tracking-[-0.02em]">Before you send your enquiry</h3>
                <p className="mt-3 text-sm font-medium leading-7 text-slate-600">The most useful briefs include your business goal, target users, essential features, preferred timeline, and any existing designs or product links.</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {['Goals', 'Users', 'Features', 'Timeline', 'Budget'].map((item) => <span key={item} className="rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-[#1557ff] shadow-sm">{item}</span>)}
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_24px_65px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
              <div className="flex flex-col gap-3 border-b border-slate-100 pb-7 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">Tell Me About Your Project</h2>
                  <p className="mt-2 text-sm font-medium text-slate-500">Complete the form and your email app will open with everything ready to send.</p>
                </div>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#eef4ff] text-[#1557ff]"><Icon name="mail" className="h-6 w-6" /></span>
              </div>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-xs font-medium text-slate-700">Your Name <span className="text-[#1557ff]">*</span></span>
                  <span className="relative block">
                    <Icon name="user" className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                    <input name="name" type="text" required autoComplete="name" placeholder="Enter your full name" className="w-full rounded-xl border border-slate-200 bg-[#fbfcff] py-3.5 pl-12 pr-4 text-sm font-medium outline-none transition placeholder:text-slate-400 focus:border-[#1557ff] focus:bg-white focus:ring-4 focus:ring-[#1557ff]/10" />
                  </span>
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-medium text-slate-700">Email Address <span className="text-[#1557ff]">*</span></span>
                  <span className="relative block">
                    <Icon name="mail" className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                    <input name="email" type="email" required autoComplete="email" placeholder="you@company.com" className="w-full rounded-xl border border-slate-200 bg-[#fbfcff] py-3.5 pl-12 pr-4 text-sm font-medium outline-none transition placeholder:text-slate-400 focus:border-[#1557ff] focus:bg-white focus:ring-4 focus:ring-[#1557ff]/10" />
                  </span>
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-medium text-slate-700">Phone / WhatsApp</span>
                  <span className="relative block">
                    <Icon name="phone" className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                    <input name="phone" type="tel" autoComplete="tel" placeholder="Include country code" className="w-full rounded-xl border border-slate-200 bg-[#fbfcff] py-3.5 pl-12 pr-4 text-sm font-medium outline-none transition placeholder:text-slate-400 focus:border-[#1557ff] focus:bg-white focus:ring-4 focus:ring-[#1557ff]/10" />
                  </span>
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-medium text-slate-700">Company / Organization</span>
                  <span className="relative block">
                    <Icon name="building" className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                    <input name="company" type="text" autoComplete="organization" placeholder="Company name" className="w-full rounded-xl border border-slate-200 bg-[#fbfcff] py-3.5 pl-12 pr-4 text-sm font-medium outline-none transition placeholder:text-slate-400 focus:border-[#1557ff] focus:bg-white focus:ring-4 focus:ring-[#1557ff]/10" />
                  </span>
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-medium text-slate-700">Project Type <span className="text-[#1557ff]">*</span></span>
                  <select name="projectType" required defaultValue="" className="w-full appearance-none rounded-xl border border-slate-200 bg-[#fbfcff] px-4 py-3.5 text-sm font-medium text-slate-700 outline-none transition focus:border-[#1557ff] focus:bg-white focus:ring-4 focus:ring-[#1557ff]/10">
                    <option value="" disabled>Select a project type</option>
                    {projectTypes.map((projectType) => <option key={projectType} value={projectType}>{projectType}</option>)}
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-medium text-slate-700">Estimated Budget</span>
                  <select name="budget" defaultValue="" className="w-full appearance-none rounded-xl border border-slate-200 bg-[#fbfcff] px-4 py-3.5 text-sm font-medium text-slate-700 outline-none transition focus:border-[#1557ff] focus:bg-white focus:ring-4 focus:ring-[#1557ff]/10">
                    <option value="">Select a budget range</option>
                    <option value="Under $2,500">Under $2,500</option>
                    <option value="$2,500–$5,000">$2,500–$5,000</option>
                    <option value="$5,000–$10,000">$5,000–$10,000</option>
                    <option value="$10,000–$25,000">$10,000–$25,000</option>
                    <option value="$25,000+">$25,000+</option>
                    <option value="To be discussed">To be discussed</option>
                  </select>
                </label>

                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-xs font-medium text-slate-700">Preferred Timeline</span>
                  <span className="relative block">
                    <Icon name="calendar" className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                    <input name="timeline" type="text" placeholder="For example: Launch within 3 months" className="w-full rounded-xl border border-slate-200 bg-[#fbfcff] py-3.5 pl-12 pr-4 text-sm font-medium outline-none transition placeholder:text-slate-400 focus:border-[#1557ff] focus:bg-white focus:ring-4 focus:ring-[#1557ff]/10" />
                  </span>
                </label>

                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-xs font-medium text-slate-700">Project Details <span className="text-[#1557ff]">*</span></span>
                  <textarea name="message" required rows={7} placeholder="Tell me what you want to build, the problem it should solve, important features, and any existing materials..." className="w-full resize-y rounded-xl border border-slate-200 bg-[#fbfcff] px-4 py-4 text-sm font-medium leading-7 outline-none transition placeholder:text-slate-400 focus:border-[#1557ff] focus:bg-white focus:ring-4 focus:ring-[#1557ff]/10" />
                </label>
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-md text-xs font-medium leading-5 text-slate-500">By continuing, you&apos;ll open your preferred email application. Review the prepared message, attach any files, and press send.</p>
                <button type="submit" className="inline-flex shrink-0 items-center justify-center gap-3 rounded-md bg-[#1557ff] px-7 py-4 text-sm font-semibold text-white shadow-[0_14px_28px_rgba(21,87,255,0.24)] transition hover:-translate-y-0.5 hover:bg-[#0f46d8]">
                  Open Email to Send <Icon name="arrow" className="h-4 w-4" />
                </button>
              </div>

              {submissionStatus && <p role="status" className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">{submissionStatus}</p>}
            </form>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-[#fbfcff] px-6 py-16 lg:px-16">
        <div className="mx-auto max-w-[1540px]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-[#1557ff]">What Happens Next</p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] sm:text-4xl">A Simple, Clear Start to Every Collaboration</h2>
          </div>
          <div className="relative mt-10 grid gap-5 md:grid-cols-3">
            <div className="absolute left-[17%] right-[17%] top-9 hidden border-t-2 border-dotted border-[#8fb0ff] md:block" />
            {responseSteps.map(([title, description, icon], index) => (
              <article key={title} className="relative rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-[0_14px_35px_rgba(15,23,42,0.05)]">
                <span className="relative z-10 mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#eef4ff] text-[#1557ff]"><Icon name={icon} className="h-7 w-7" /></span>
                <span className="mx-auto mt-3 grid h-6 w-6 place-items-center rounded-full bg-[#1557ff] text-[10px] font-black text-white">{index + 1}</span>
                <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em]">{title}</h3>
                <p className="mt-3 text-sm font-medium leading-7 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default Contact
