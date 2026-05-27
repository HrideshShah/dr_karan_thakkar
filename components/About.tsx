const education = [
  {
    degree: "MBBS",
    institution: "Grant Medical College, Mumbai",
    year: "200X",
  },
  {
    degree: "MD — Internal Medicine",
    institution: "B.J. Medical College, Pune",
    year: "200X",
  },
  {
    degree: "Fellowship in Cardiology",
    institution: "AIIMS, New Delhi",
    year: "20XX",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Education & Qualifications
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Trained at some of India's most prestigious medical institutions,
            Dr. Thakkar brings over{" "}
            <strong>15+ years of clinical expertise</strong> to his practice.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((item, i) => (
            <div
              key={i}
              className="bg-blue-50 rounded-2xl p-6 border border-blue-100 hover:shadow-md transition"
            >
              <div className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-sm mb-4">
                {i + 1}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {item.degree}
              </h3>
              <p className="text-sm text-gray-600">{item.institution}</p>
              <p className="text-xs text-blue-600 font-medium mt-2">
                {item.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
