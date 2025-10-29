import Link from "next/link";
import ImageComponent from "./ImageComponent";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 pt-5">
        <div className="grid gap-10 md:grid-cols-3 mb-10">
          <div>
            <ImageComponent
                src="/images/logo.jpg" 
                alt="Cnwhyte Logo"
                width={120} 
                height={40}
                className="h-8 w-auto object-contain"
            />
            <p className="text-gray-400 leading-relaxed">
              Frontend Developer passionate about creating amazing web
              experiences.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#00c4e6] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#00c4e6] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-[#00c4e6] transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#00c4e6] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/cnwhytenwamah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00c4e6] transition-colors"
              >
                GitHub
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00c4e6] transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com/cnwhyte"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00c4e6] transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Cnwhyte. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;