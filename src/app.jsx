export default function SalmanovMediaSite() {
  const brand = {
    carbonBlack: "#0A0A0A",
    powerRed: "#DC2626",
    eliteCrimson: "#B91C1C",
    platinumWhite: "#FAFAFA",
    steelGray: "#525252",
  };

  const Section = ({ id, title, kicker, children }) => (
    <section id={id} className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
      {kicker && (
        <div className="mb-4 text-xs tracking-widest uppercase" style={{ color: brand.powerRed }}>{kicker}</div>
      )}
      {title && (
        <h2 className="text-2xl md:text-4xl font-semibold mb-6" style={{ fontFamily: 'Space Grotesk, Inter, system-ui' }}>{title}</h2>
      )}
      {children}
    </section>
  );

  const Button = ({ children, href = '#', variant = 'primary' }) => {
    const styles =
      variant === 'primary'
        ? { backgroundColor: brand.powerRed, color: brand.carbonBlack }
        : { backgroundColor: 'transparent', color: brand.platinumWhite, border: `1px solid ${brand.eliteCrimson}` };
    return (
      <a href={href} className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5" style={styles}>
        {children}
      </a>
    );
  };

  const Stat = ({ label, value }) => (
    <div className="p-5 rounded-xl border border-white/10 bg-white/5">
      <div className="text-2xl md:text-3xl font-semibold" style={{ fontFamily: 'Space Grotesk, Inter, system-ui' }}>{value}</div>
      <div className="text-sm text-white/60">{label}</div>
    </div>
  );

  const Case = ({ title, result, note }) => (
    <div className="rounded-2xl border border-white/10 overflow-hidden">
      <div className="p-6 bg-white/5">
        <div className="text-xs tracking-widest uppercase mb-2" style={{ color: brand.powerRed }}>Case study</div>
        <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Space Grotesk, Inter, system-ui' }}>{title}</h3>
        <p className="text-white/70 text-sm">{note}</p>
      </div>
      <div className="p-6" style={{ backgroundColor: brand.powerRed, color: brand.carbonBlack }}>
        <div className="text-sm uppercase tracking-widest mb-1">Result</div>
        <div className="text-2xl font-bold">{result}</div>
      </div>
    </div>
  );

  const FAQ = ({ q, a }) => (
    <details className="group border-b border-white/10 py-4">
      <summary className="cursor-pointer list-none flex items-center justify-between">
        <span className="font-medium">{q}</span>
        <span className="transition-transform group-open:rotate-45" style={{ color: brand.powerRed }}>+</span>
      </summary>
      <p className="mt-2 text-white/70 text-sm">{a}</p>
    </details>
  );

  return (
    <div style={{ backgroundColor: brand.carbonBlack, color: brand.platinumWhite, fontFamily: 'Inter, system-ui' }}>
      {/* Load fonts (JetBrains Mono, Inter, Space Grotesk) */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=Inter:wght@400;600;700&family=Space+Grotesk:wght@600;700&display=swap');`}</style>

      {/* NAV */}
      <nav className="sticky top-0 z-40 border-b border-white/10" style={{ background: 'linear-gradient(180deg, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.6) 100%)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-lg" style={{ fontFamily: 'JetBrains Mono, ui-monospace' }}>
            <span style={{ color: brand.platinumWhite }}>&lt;</span>
            <span style={{ color: brand.powerRed }}>SALMANOV</span>
            <span style={{ color: brand.platinumWhite }}>/&gt;</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#work">Work</a>
            <a href="#consulting">Consulting</a>
            <a href="#examples">Examples</a>
            <a href="#videos">Videos</a>
            <a href="#process">Process</a>
            <a href="#proof">Proof</a>
            <a href="#about">About</a>
            <Button href="#call">Book Content Strategy Call</Button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <Section kicker="Founder-led · AI-powered" title={<><span className="block">Content that makes you</span><span className="block" style={{ color: brand.powerRed }}>the authority.</span></>}>
        <p className="text-white/70 max-w-2xl">Weekly long-form. Daily shorts. Smart distribution. We turn busy founders into category voices—without the bloat.</p>
        <div className="flex gap-3 mt-6">
          <Button href="#call">Book Content Strategy Call</Button>
          <Button href="#reel" variant="ghost">Watch 60‑second Video</Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          <Stat value="315M+" label="Views driven" />
          <Stat value="6 years" label="Making content" />
          <Stat value="$100K+" label="Personal content revenue" />
          <Stat value="NYC & Remote" label="Where we operate" />
        </div>
        <div className="mt-6 text-sm text-white/60"><strong style={{ color: brand.powerRed }}>Limited capacity:</strong> organic content requires immense focus to actually work. We only take on a few founders at a time.</div>
      </Section>

      {/* SHOWREEL */}
      <Section id="reel" kicker="Showreel" title="60 seconds: how we build authority & pipeline">
        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5">
          <div className="aspect-video w-full grid place-items-center">
            <iframe
              title="Watch 60-second Video"
              src="https://www.youtube.com/embed/4dD8GxFjM9c?si=PchfGeRGWPG_JUnK"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{ border: 0 }}
            />
          </div>
        </div>
      </Section>

      {/* SERVICES */}
      <Section id="work" kicker="What we do" title="The Founder‑Led Content Engine">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { h: 'Weekly Long‑Form', p: 'You talk. We extract POV, write beats, edit premium. Podcast/YouTube ready.' },
            { h: 'Short‑Form Machine', p: '5–15 clips per long form. Hooks, retention, share rate. Platform‑native.' },
            { h: 'Distribution & Repurposing', p: 'LinkedIn, X, YouTube, TikTok, IG, newsletter, site. One source—everywhere.' },
            { h: 'Ghost Strategy', p: 'Narrative arcs, POV docs, topic maps, offer‑to‑content bridge.' },
            { h: 'Creative Direction', p: 'On‑camera coaching, set/audio, thumbnail systems, motion templates.' },
            { h: 'Analytics', p: 'View‑through, watch‑time heatmaps, content ROI snapshots.' },
          ].map((item, i) => (
            <div key={i} className="rounded-2xl border border-white/10 p-6 bg-white/5 hover:border-white/20 transition-colors">
              <div className="text-xs tracking-widest uppercase mb-2" style={{ color: brand.powerRed }}>Service</div>
              <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Space Grotesk, Inter, system-ui' }}>{item.h}</h3>
              <p className="text-white/70 text-sm">{item.p}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PROCESS / AI STACK */}
      <Section id="process" kicker="How it works" title="Capture → Cut → Classify → Distribute → Learn">
        <div className="grid md:grid-cols-5 gap-4">
          {[
            'Topic mining & hook testing with LLMs',
            'Auto transcripts, cut detection, silence trims',
            'AI titles, descriptions, chapters, thumbnail drafts',
            'Posting calendar + channel formatting',
            'Feedback loop flags hits → we double down',
          ].map((step, i) => (
            <div key={i} className="rounded-xl p-4 border border-white/10 bg-white/5">
              <div className="text-xs text-white/60 mb-2">Step {i + 1}</div>
              <div className="text-sm">{step}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* PROOF */}
      <Section id="proof" kicker="Proof" title="Selected wins">
        <div className="grid md:grid-cols-3 gap-6">
          <Case title="From 0 → 100K in 6 months" result="Authority built + inbound deal‑flow" note="Founder brand acceleration in SaaS." />
          <Case title="5× inbound demos in 90 days" result="Content → pipeline" note="Clipped insights + POV long‑form." />
          <Case title="$100K+ personal revenue from content" result="Systemized creation" note="Adam’s own results operating the playbook." />
        </div>
      </Section>

      {/* EXAMPLE CLIENT CONTENT (Carousel) */}
      <Section id="examples" kicker="Client Work" title="Example content we've shipped">
        <div className="overflow-x-auto no-scrollbar">
          <div className="flex gap-6 snap-x snap-mandatory">
            {[
              { tag: 'THREAD 1/7', title: '7 SECRETS TO BUILD', accent: 'AUTHORITY', variant: 'outline' },
              { tag: 'SECRET #1', title: 'CONSISTENCY BEATS', accent: 'PERFECTION', variant: 'dark' },
              { tag: 'SECRET #2', title: '500% MORE', accent: 'ENGAGEMENT', variant: 'solid' },
              { tag: 'CTA', title: 'GET YOUR FREE', accent: 'CONTENT AUDIT', variant: 'cta' },
            ].map((c, i) => (
              <a key={i} href="#" className="snap-start min-w-[280px] md:min-w-[360px] rounded-2xl border p-6 transition-transform hover:-translate-y-1"
                 style={{
                   borderColor: c.variant==='outline' ? brand.powerRed : 'rgba(255,255,255,0.1)',
                   backgroundColor: c.variant==='solid' ? brand.powerRed : c.variant==='dark' ? 'rgba(255,255,255,0.05)' : 'transparent',
                   color: c.variant==='solid' ? brand.carbonBlack : brand.platinumWhite
                 }}
                 aria-label="Open example content"
              >
                <div className="text-[10px] tracking-widest uppercase mb-4" style={{ color: c.variant==='solid' ? brand.carbonBlack : brand.eliteCrimson }}>{c.tag}</div>
                <div className="text-2xl font-semibold leading-tight" style={{ fontFamily: 'Space Grotesk, Inter, system-ui' }}>{c.title}<br/><span style={{ color: c.variant==='solid' ? brand.carbonBlack : brand.powerRed }}>{c.accent}</span></div>
                <div className="mt-4 text-xs text-white/60">Tap to view post</div>
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* INFORMATIONAL VIDEOS (Clickable Thumbnails) */}
      <Section id="videos" kicker="Education" title="Informational videos">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Headlines That Hook (3 rules)', dur: '4:21' },
            { title: 'Long→Short: our slicing method', dur: '3:05' },
            { title: 'Distribution that actually moves pipeline', dur: '5:12' },
          ].map((v, i) => (
            <a key={i} href="#" className="group rounded-2xl border border-white/10 overflow-hidden bg-white/5" aria-label="Play video">
              <div className="aspect-video relative grid place-items-center" style={{ background: 'radial-gradient(ellipse at center, rgba(220,38,38,0.15), transparent 70%)' }}>
                <div className="w-14 h-14 rounded-full grid place-items-center transition-transform group-hover:scale-110" style={{ backgroundColor: brand.powerRed, color: brand.carbonBlack }}>&#9658;</div>
              </div>
              <div className="p-4 flex items-center justify-between">
                <div className="text-sm" style={{ fontFamily: 'Space Grotesk, Inter, system-ui' }}>{v.title}</div>
                <span className="text-xs text-white/60">{v.dur}</span>
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* ABOUT (with photo slot) */}
      <Section id="about" kicker="About Adam" title="Grit over gloss">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <p className="text-white/80">I’m Adam Salmanov — 16‑year‑old high‑school dropout, six years in content. I build founder systems that ship every week. No bloated decks. No endless approvals. Output wins.</p>
            <ul className="text-white/70 text-sm list-disc pl-5 space-y-2">
              <li>315M+ views across client + personal content</li>
              <li>Hands‑on operator: scripting → edit notes → analytics</li>
              <li>NYC mindset: fast, accountable, hungry</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-dashed border-white/20 p-6 bg-white/5 grid place-items-center text-center">
            <div>
              <div className="text-sm uppercase tracking-widest mb-2" style={{ color: brand.powerRed }}>Add Photo</div>
              <p className="text-white/60 text-sm">Drop a portrait of Adam here (auto‑fit). 1200×1500 recommended.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* PRICING */}
      <Section id="pricing" kicker="Pricing" title="Operator model — limited availability">
        <div className="grid md:grid-cols-4 gap-6">
          {/* Retainer */}
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <div className="text-xs tracking-widest uppercase mb-2" style={{ color: brand.powerRed }}>Minimum Retainer</div>
            <div className="text-3xl font-semibold" style={{ fontFamily: 'Space Grotesk, Inter, system-ui' }}>$3,000 / month</div>
            <p className="text-white/70 text-sm mt-2">Baseline for the content engine. Pricing increases based on deliverables and revenue impact.</p>
          </div>

          {/* Scale */}
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <div className="text-xs tracking-widest uppercase mb-2" style={{ color: brand.powerRed }}>Scope Scales Up</div>
            <ul className="text-white/80 text-sm list-disc pl-5 space-y-2">
              <li>More episodes, more shorts, more distribution</li>
              <li>Deeper strategy, offers, landing pages</li>
              <li>Aggressive analytics & iteration cycles</li>
            </ul>
          </div>

          {/* Media Arm */}
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <div className="text-xs tracking-widest uppercase mb-2" style={{ color: brand.powerRed }}>Your Media Arm</div>
            <p className="text-white/80 text-sm">We create and handle your entire content team — editors, thumbnail design, distribution, calendars. We basically build out your <strong>media arm</strong>.</p>
          </div>

          {/* Consulting & Team Placement — Setup Fee */}
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <div className="text-xs tracking-widest uppercase mb-2" style={{ color: brand.powerRed }}>Consulting & Team Placement</div>
            <div className="text-2xl font-semibold mb-1" style={{ fontFamily: 'Space Grotesk, Inter, system-ui' }}>Discovery‑quoted setup fee</div>
            <p className="text-white/70 text-sm">Quoted after discovery. Covers org design, role scoping, hiring pipeline, onboarding, training, and governance.</p>
            <ul className="text-white/80 text-sm list-disc pl-5 mt-3 space-y-2">
              <li>Recruit & place editors/strategists/lead</li>
              <li>Playbooks, SOPs, templates, KPIs</li>
              <li>30–60 day ramp with oversight</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 text-sm text-white/60">Capacity is intentionally small. Organic content that converts requires deep focus.</div>
        <div className="mt-6"><Button href="#call">Book Content Strategy Call</Button></div>
      </Section>

      {/* CTA */}
      <Section id="call" kicker="Let’s build" title="Ready to install your content engine?">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Button href="#call" variant="primary">Book Content Strategy Call</Button>
          <span className="text-white/60 text-sm">Very limited — hands‑on operator model.</span>
        </div>
      </Section>

      {/* FAQ */}
      <Section kicker="FAQ">
        <div className="max-w-3xl">
          <FAQ q="How fast do I see results?" a="You’ll have assets week 1. Audience traction varies by niche; most founders see measurable lift in 30–60 days." />
          <FAQ q="Do you work with in‑house teams?" a="Yes. We can lead strategy and integrate with your editors/designers or run fully end‑to‑end." />
          <FAQ q="What platforms do you cover?" a="LinkedIn, X, YouTube (long + shorts), TikTok, IG, newsletter/blog repurposing." />
          <FAQ q="Commitment?" a="Month‑to‑month, 3‑month recommended to compound signal and iterate on hits." />
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2" style={{ fontFamily: 'JetBrains Mono, ui-monospace' }}>
            <span style={{ color: brand.platinumWhite }}>&lt;</span>
            <span style={{ color: brand.powerRed }}>SALMANOV</span>
            <span style={{ color: brand.platinumWhite }}>/&gt;</span>
          </div>
          <div className="text-white/50">© {new Date().getFullYear()} Salmanov Media. Built fast, with grit.</div>
        </div>
      </footer>
    </div>
  );
}
