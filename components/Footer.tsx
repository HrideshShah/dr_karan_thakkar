export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-400 py-12 text-sm">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <p className="text-white font-semibold text-base">
            Dr. Karan Thakkar, MD
          </p>
          <p className="mt-1">Physician · Internal Medicine · Cardiology</p>
        </div>

        <div className="text-center">
          <p>
            📧{" "}
            <a
              href="mailto:contact@drkaranthakkar.com"
              className="hover:text-white transition"
            >
              contact@drkaranthakkar.com
            </a>
          </p>
          <p className="mt-1">
            📞 For appointments, contact individual hospitals above
          </p>
        </div>

        <p className="text-xs text-gray-600">
          © {new Date().getFullYear()} Dr. Karan Thakkar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
