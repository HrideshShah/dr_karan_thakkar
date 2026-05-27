export default function Mission() {
  return (
    <section
      id="mission"
      className="py-24 bg-gradient-to-br from-red-700 to-amber-600 text-white"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="inline-block bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
          Mission Statement
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
          Compassion in Practice, <br /> Precision in Medicine
        </h2>
        <blockquote className="text-amber-100 text-lg md:text-xl leading-relaxed italic border-l-4 border-amber-300 pl-6 text-left max-w-2xl mx-auto">
          "My mission is to provide every patient with compassionate,
          evidence-based care — treating not just the illness, but the whole
          person. As a physician with a special interest in rheumatology and
          echocardiography-informed assessment, I focus on accurate diagnosis,
          long-term disease control, and patient-centered treatment plans."
        </blockquote>
        <p className="mt-6 text-amber-100 font-semibold">
          — Dr. Karan Thakkar, MD
        </p>

        {/* Core values */}
        <div className="grid sm:grid-cols-3 gap-6 mt-14">
          {[
            {
              icon: "🩺",
              title: "Compassionate Care",
              desc: "Every patient is treated with empathy and full attention.",
            },
            {
              icon: "🔬",
              title: "Evidence-Based",
              desc: "Decisions grounded in the latest clinical research.",
            },
            {
              icon: "🤝",
              title: "Patient Partnership",
              desc: "Patients are active participants in their own health.",
            },
          ].map((v, i) => (
            <div
              key={i}
              className="bg-white/10 rounded-2xl p-6 text-left hover:bg-white/20 transition"
            >
              <div className="text-3xl mb-3">{v.icon}</div>
              <h3 className="font-semibold text-white mb-1">{v.title}</h3>
              <p className="text-sm text-amber-100">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
