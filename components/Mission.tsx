export default function Mission() {
  return (
    <section
      id="mission"
      className="py-24 bg-gradient-to-br from-blue-700 to-blue-900 text-white"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="inline-block bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
          Mission Statement
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
          Medicine with Empathy, <br /> Science with Purpose
        </h2>
        <blockquote className="text-blue-100 text-lg md:text-xl leading-relaxed italic border-l-4 border-blue-400 pl-6 text-left max-w-2xl mx-auto">
          "My mission is to provide every patient with compassionate,
          evidence-based care — treating not just the illness, but the whole
          person. I believe healthcare is a partnership built on trust, clear
          communication, and respect for individual dignity. I am committed to
          staying at the forefront of medical knowledge so that every patient
          receives the best possible outcome."
        </blockquote>
        <p className="mt-6 text-blue-200 font-semibold">
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
              <p className="text-sm text-blue-200">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
