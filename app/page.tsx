export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Education Tech
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Score Student Engagement<br />
          <span className="text-[#58a6ff]">in Virtual Classes</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Analyze Zoom meeting recordings and live sessions using AI — detecting facial expressions, audio participation, and chat activity to generate real-time engagement scores for every student.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $10/mo
        </a>
        <div className="mt-10 grid grid-cols-3 gap-4 text-center">
          {[
            ["Video Analysis", "Facial expression & attention detection"],
            ["Audio Scoring", "Participation & response tracking"],
            ["Chat Insights", "Sentiment & activity patterns"]
          ].map(([title, desc]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <p className="text-white font-semibold text-sm mb-1">{title}</p>
              <p className="text-[#8b949e] text-xs">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$10</p>
          <p className="text-[#8b949e] text-sm mb-6">/month per educator</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited meeting analysis",
              "Real-time engagement dashboard",
              "Per-student & class-wide scores",
              "AI sentiment & attention models",
              "Export reports as CSV or PDF"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg text-sm transition-colors"
          >
            Start Free Trial
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "How does the engagement scoring work?",
              "Our AI analyzes video frames for facial expressions and attention cues, measures audio participation frequency, and processes chat messages for sentiment — combining these signals into a 0–100 engagement score per student."
            ],
            [
              "Does it work with recorded meetings or only live sessions?",
              "Both. You can upload Zoom cloud recordings for post-session analysis, or connect via Zoom's SDK for real-time scoring during live classes."
            ],
            [
              "Is student data kept private?",
              "Yes. All processing is ephemeral — we do not store video or audio data after analysis. Only aggregated engagement scores and anonymized metrics are retained."
            ]
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <p className="text-white font-semibold text-sm mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} Engagement Scorer. All rights reserved.
      </footer>
    </main>
  );
}
