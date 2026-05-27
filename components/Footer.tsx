export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-400 py-12 text-sm">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <p className="text-white font-semibold text-base">
            Dr. Karan Thakkar, MD
          </p>
          <p className="mt-1">
            Physician · General Medicine · Rheumatology Interest ·
            Echocardiographer
          </p>
        </div>

        <div className="text-center">
          <p>
            📧{" "}
            <a
              href="mailto:drkaranthakkar@gmail.com"
              className="hover:text-white transition"
            >
              drkaranthakkar@gmail.com
            </a>
          </p>
          <p className="mt-1">
            📞{" "}
            <a href="tel:+917066738510" className="hover:text-white transition">
              +91 70667 38510
            </a>
          </p>
          <p className="mt-1">
            📷{" "}
            <a
              href="https://instagram.com/drkaranthakkar"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              instagram.com/drkaranthakkar
            </a>
          </p>
        </div>

        <p className="text-xs text-gray-600">
          © {new Date().getFullYear()} Dr. Karan Thakkar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
