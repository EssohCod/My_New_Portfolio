function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#123fc2] px-6 py-14 text-white lg:px-16">
      <div className="absolute left-0 top-0 h-full w-48 border-r border-white/10 bg-[radial-gradient(circle,rgba(255,255,255,0.35)_1px,transparent_1px)] opacity-40 [background-size:14px_14px]" />
      <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full border border-white/20" />
      <div className="absolute -right-10 bottom-0 h-72 w-72 rounded-full border border-white/10" />
      <div className="absolute right-0 top-0 h-full w-1/2 opacity-20 [background-image:repeating-radial-gradient(circle_at_75%_20%,transparent_0_10px,rgba(255,255,255,0.45)_11px_12px)]" />

      <div className="relative z-10 mx-auto flex max-w-[1540px] flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <div className="grid h-28 w-28 shrink-0 place-items-center rounded-2xl bg-[#12358f] shadow-[0_24px_55px_rgba(0,0,0,0.22)]">
            <svg viewBox="0 0 24 24" className="h-14 w-14" fill="none" aria-hidden="true">
              <path
                d="m21 3-8.4 18-2.9-8.4L1 9.4 21 3Z"
                fill="white"
                opacity="0.98"
              />
              <path
                d="m10 13 4.7-4.7"
                stroke="#12358f"
                strokeLinecap="round"
                strokeWidth="1.7"
              />
            </svg>
          </div>

          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-[-0.035em] lg:text-3xl">
              Let&apos;s Build Something Meaningful Together
            </h2>
            <p className="mt-4 max-w-2xl text-sm font-medium leading-7 text-white/90">
              Whether you&apos;re launching a startup, scaling an existing platform, or
              looking for an experienced software engineer to join your team, I&apos;d be
              excited to learn about your goals. Let&apos;s work together to create
              technology that delivers lasting value.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row lg:shrink-0">
          <a
            href="projects"
            className="inline-flex items-center justify-center gap-3 rounded-md bg-white px-8 py-4 text-sm font-black text-[#123fc2] shadow-[0_18px_34px_rgba(0,0,0,0.16)] transition hover:-translate-y-0.5 hover:bg-[#eef4ff]"
          >
            View My Projects
            <span aria-hidden="true">-&gt;</span>
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-3 rounded-md border border-white/80 px-8 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/10"
          >
            Contact Me
            <span aria-hidden="true">□</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
