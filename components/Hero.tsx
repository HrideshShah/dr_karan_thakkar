import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-amber-50 via-white to-red-50 pt-20"
    >
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <span className="inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
            Physician | Rheumatology Interest
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
            Dr. Karan <span className="text-red-700">Thakkar</span>
          </h1>
          <p className="text-lg text-gray-500 mb-8 max-w-xl">
            MD (General Medicine), DNB (General Medicine), physician and
            echocardiographer with a special interest in rheumatology care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#hours"
              className="bg-red-700 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-red-800 transition"
            >
              View Hospital Hours
            </a>
            <a
              href="#about"
              className="border border-amber-600 text-amber-700 px-6 py-3 rounded-lg text-sm font-semibold hover:bg-amber-50 transition"
            >
              Learn More
            </a>
          </div>
          <div className="mt-6 text-sm text-gray-600 space-y-1">
            <p>
              Phone:{" "}
              <a className="text-red-700 font-semibold" href="tel:+917066738510">
                +91 70667 38510
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                className="text-red-700 font-semibold"
                href="mailto:drkaranthakkar@gmail.com"
              >
                drkaranthakkar@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Photo */}
        <div className="flex-shrink-0">
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-amber-200 shadow-xl relative">
            <Image
              src="/doctor.jpeg"
              alt="Dr. Karan Thakkar"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 224px, 288px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
