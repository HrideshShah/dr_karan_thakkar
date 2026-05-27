import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-white pt-20"
    >
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
            Physician & Medical Doctor
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
            Dr. Karan <span className="text-blue-700">Thakkar</span>
          </h1>
          <p className="text-lg text-gray-500 mb-8 max-w-xl">
            Dedicated to compassionate, evidence-based medicine — helping
            patients lead healthier, fuller lives across multiple hospitals in
            the region.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#hours"
              className="bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-blue-800 transition"
            >
              View Hospital Hours
            </a>
            <a
              href="#about"
              className="border border-blue-700 text-blue-700 px-6 py-3 rounded-lg text-sm font-semibold hover:bg-blue-50 transition"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className="flex-shrink-0">
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-blue-200 shadow-xl relative">
            <Image
              src="/doctor.jpeg"
              alt="Dr. Karan Thakkar"
              className="object-cover"
              width={288}
              height={288}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
