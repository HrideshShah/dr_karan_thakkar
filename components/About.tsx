const education = [
  {
    degree: "M.B.B.S.",
    institution:
      "MVP's Dr. Vasantrao Pawar Medical College, Hospital and Research Centre, Nashik",
    year: "February 2019",
    score: "69.81%",
  },
  {
    degree: "M.D. General Medicine",
    institution:
      "Byramjee Jeejeebhoy Government Medical College and Sassoon General Hospital, Pune",
    year: "March 2025",
    score: "60.00%",
  },
  {
    degree: "D.N.B. General Medicine",
    institution: "Advanced specialist physician training",
    year: "Clinical Practice Track",
    score: "General Medicine",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">UG / PG Details</h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Academic and postgraduate journey with a strong foundation in
            general medicine, research, and comprehensive patient care.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((item, i) => (
            <div
              key={i}
              className="bg-amber-50 rounded-2xl p-6 border border-amber-100 hover:shadow-md transition"
            >
              <div className="w-10 h-10 bg-red-700 text-white rounded-full flex items-center justify-center font-bold text-sm mb-4">
                {i + 1}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {item.degree}
              </h3>
              <p className="text-sm text-gray-600">{item.institution}</p>
              <p className="text-xs text-red-700 font-medium mt-2">{item.year}</p>
              <p className="text-xs text-gray-500 mt-1">{item.score}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-amber-200 bg-white p-6">
          <h3 className="text-xl font-semibold text-gray-900">Current Focus Areas</h3>
          <div className="mt-4 grid sm:grid-cols-2 gap-4 text-sm text-gray-700">
            <p className="rounded-xl bg-amber-50 px-4 py-3">
              Physician care with special interest in rheumatology.
            </p>
            <p className="rounded-xl bg-amber-50 px-4 py-3">
              Echocardiography-oriented clinical assessment in OPD practice.
            </p>
            <p className="rounded-xl bg-amber-50 px-4 py-3">
              Evidence-based management of complex internal medicine cases.
            </p>
            <p className="rounded-xl bg-amber-50 px-4 py-3">
              Holistic counseling and follow-up driven outpatient care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
