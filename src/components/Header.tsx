import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 rounded-md text-base font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
      isActive
        ? "bg-blue-600 text-white shadow-md"
        : "text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              ComConnect IA
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/services" className={navLinkClasses}>
                Services
              </NavLink>
              <NavLink to="/portfolio" className={navLinkClasses}>
                Portfolio
              </NavLink>
              <NavLink to="/a-propos" className={navLinkClasses}>
                À propos
              </NavLink>
              <NavLink to="/contact" className={navLinkClasses}>
                Contact
              </NavLink>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
                <a
                    href="tel:+221784066315"
                    className="bg-[#1C1C1C] text-white font-bold py-2 px-5 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1C1C1C] mr-4"
                >
                    +221 78 406 63 15
                </a>
                <Link
                    to="/contact"
                    className="bg-[#1C1C1C] text-white font-bold py-2 px-5 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1C1C1C]"
                >
                    Demander un devis
                </Link>
            </div>
          </div>
          {/* Un bouton pour le menu mobile pourrait être ajouté ici */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
