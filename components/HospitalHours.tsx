const hospitals = [
  {
    name: "City General Hospital",
    location: "Mumbai, Maharashtra",
    department: "Internal Medicine / OPD",
    schedule: [
      { day: "Monday", time: "9:00 AM – 12:00 PM" },
      { day: "Wednesday", time: "9:00 AM – 12:00 PM" },
      { day: "Friday", time: "9:00 AM – 1:00 PM" },
    ],
    phone: "+91 22 1234 5678",
    emergency: false,
  },
  {
    name: "Sunshine Multispecialty Hospital",
    location: "Pune, Maharashtra",
    department: "Cardiology Consultations",
    schedule: [
      { day: "Tuesday", time: "3:00 PM – 6:00 PM" },
      { day: "Thursday", time: "3:00 PM – 6:00 PM" },
      { day: "Saturday", time: "10:00 AM – 2:00 PM" },
    ],
    phone: "+91 20 9876 5432",
    emergency: true,
  },
  {
    name: "Apollo Clinic",
    location: "Thane, Maharashtra",
    department: "General Practice",
    schedule: [
      { day: "Monday", time: "4:00 PM – 7:00 PM" },
      { day: "Saturday", time: "8:00 AM – 11:00 AM" },
    ],
    phone: "+91 22 8765 4321",
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

        <div className="grid md:grid-cols-3 gap-8">
          {hospitals.map((h, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition"
            >
              {/* Header */}
              <div className="bg-blue-700 px-6 py-5">
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
                <p className="text-blue-200 text-sm mt-1">📍 {h.location}</p>
                <p className="text-blue-100 text-xs mt-0.5 italic">
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
                    <span className="text-blue-700 font-semibold">
                      {s.time}
                    </span>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="px-6 pb-5">
                <a
                  href={`tel:${h.phone}`}
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-700 transition"
                >
                  📞 <span>{h.phone}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-gray-400 mt-10">
          ⚠️ Schedules may change due to hospital events or emergencies. Please
          call ahead to confirm availability.
        </p>
      </div>
    </section>
  );
}
