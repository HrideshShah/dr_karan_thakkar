const hospitals = [
  {
    name: "Apex Hospitals (50 Beds)",
    location:
      "Vaishali Heights, Chandavarkar Road, Near Kotak Mahindra Bank, Borivali (W), Mumbai",
    department: "General Medicine OPD",
    schedule: [
      { day: "AMH OPD", time: "11:30 AM – 2:00 PM & 8:30 PM – 10:00 PM" },
      { day: "AHB OPD", time: "9:00 AM – 11:00 AM & 6:00 PM – 8:00 PM" },
      { day: "ASH OPD", time: "9:00 AM – 11:00 AM & 6:00 PM – 8:00 PM" },
    ],
    phone: "+91 22 4245 7000",
    emergency: false,
  },
  {
    name: "Apex Multispeciality Hospitals (50 Beds)",
    location:
      "Off Western Express Highway, Next to Suswagat Restaurant, Dattapada Road, Borivali (E), Mumbai",
    department: "General Medicine Consultation",
    schedule: [
      { day: "Helpline", time: "91366 65105 / 305" },
      { day: "Tel", time: "022 - 2870 3375 / 6 / 7 / 8" },
    ],
    phone: "+91 22 2870 3375",
    emergency: true,
  },
  {
    name: "Apex Hospitals Mulund (W) (100 Beds)",
    location:
      "Veena Nagar Phase II, Tulsi Pipe Line Road, Nr. Swapna Nagri Road, Mulund (W), Mumbai",
    department: "Physician OPD",
    schedule: [
      { day: "Telephone", time: "022 - 4162 4000 (100 Lines)" },
    ],
    phone: "+91 22 4162 4000",
    emergency: false,
  },
  {
    name: "Apex Super Speciality Hospitals (50 Beds)",
    location:
      "Next to Punjab & Sindh Bank, L.T. Road, Borivali (W), Mumbai",
    department: "Multispeciality Services",
    schedule: [{ day: "Telephone", time: "022 - 2898 667 / 2898 6646 / 47 / 48" }],
    phone: "+91 22 2898 6646",
    emergency: false,
  },
  {
    name: "Apex Hospitals Kandivali (50 Beds)",
    location:
      "Akurli Road, Next to Lodha Woods, Lokhandwala Township, Nr. Mahindra Gate No. 4, Kandivali (E), Mumbai",
    department: "General Medicine OPD",
    schedule: [{ day: "Telephone", time: "022 - 6274 7000 (100 Lines)" }],
    phone: "+91 22 6274 7000",
    emergency: false,
  },
  {
    name: "HCG Apex Cancer Center (120 Beds)",
    location:
      "Holy Cross Road, I.C. Colony, Off Borivali-Dahisar Link Road, Borivali (E), Mumbai",
    department: "Center for Oncology and Physician Referrals",
    schedule: [{ day: "Telephone", time: "022 - 6257 9999" }],
    phone: "+91 22 6257 9999",
    emergency: false,
  },
];

export default function HospitalHours() {
  return (
    <section id="hours" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Hospital Visiting Hours
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Dr. Thakkar visits multiple hospitals across the region. Find the
            nearest location and schedule that works for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {hospitals.map((h, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition"
            >
              {/* Header */}
              <div className="bg-red-700 px-6 py-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-white font-semibold text-lg leading-snug">
                    {h.name}
                  </h3>
                  {h.emergency && (
                    <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-medium whitespace-nowrap">
                      Emergency
                    </span>
                  )}
                </div>
                <p className="text-amber-100 text-sm mt-1">📍 {h.location}</p>
                <p className="text-amber-50 text-xs mt-0.5 italic">
                  {h.department}
                </p>
              </div>

              {/* Schedule */}
              <div className="px-6 py-5 space-y-3">
                {h.schedule.map((s, j) => (
                  <div
                    key={j}
                    className="flex justify-between items-center text-sm border-b border-gray-50 pb-2 last:border-0 last:pb-0"
                  >
                    <span className="font-medium text-gray-700">{s.day}</span>
                    <span className="text-red-700 font-semibold">
                      {s.time}
                    </span>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="px-6 pb-5">
                <a
                  href={`tel:${h.phone}`}
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-red-700 transition"
                >
                  📞 <span>{h.phone}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-gray-400 mt-10">
          ⚠️ OPD schedules may change based on hospital workflow. Please call
          before visiting.
        </p>
      </div>
    </section>
  );
}
