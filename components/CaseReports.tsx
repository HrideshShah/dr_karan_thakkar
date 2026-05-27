const caseReports = [
  {
    title: "A Case of Nocardia Pneumonia",
    venue:
      "Golden Jubilee Annual Conference of the Research Society, BJGMC and Sassoon General Hospital, Pune",
    year: "2024",
    type: "Interesting Case Presentation",
  },
  {
    title: "Upper GI Endoscopy and Duodenal Biopsy in Anemia",
    venue:
      "Golden Jubilee Annual Conference of the Research Society, BJGMC and Sassoon General Hospital, Pune",
    year: "2024",
    type: "Oral Paper Presentation (First Prize)",
  },
  {
    title: "Clinicopathological Profile of Microcytic and Macrocytic Anemia",
    venue: "International Journal of Scientific Research",
    year: "2025",
    type: "Research Publication",
  },
];

export default function CaseReports() {
  return (
    <section id="case-reports" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Case Reports & Academic Work
          </h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
            Selected case presentations and research contributions that reflect
            clinical depth in internal medicine practice.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {caseReports.map((report) => (
            <article
              key={report.title}
              className="rounded-2xl border border-amber-200 bg-amber-50 p-6 hover:shadow-md transition"
            >
              <p className="text-xs uppercase tracking-wide text-red-700 font-semibold">
                {report.type}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-gray-900">
                {report.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{report.venue}</p>
              <p className="mt-4 text-sm font-medium text-amber-700">
                Year: {report.year}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
