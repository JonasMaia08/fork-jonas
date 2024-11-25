import { CustomSidebarTrigger } from '../ui/custom-trigger'
import { useIsMobile } from "../../hooks/use-mobile";
import useNavigateTo from "../../hooks/useNavigateTo";


const navLinks = [
  { href: "#", text: "Modalidades" },
  { href: "#", text: "Professores" },
  { href: "#", text: "Galeria" },
];


const HeaderBasic = () => {
  const GoTo = useNavigateTo();
  const isMobile = useIsMobile();

  if (!isMobile) {

      <nav className="bg-gray-100 py-4 shadow-md bg-white">
        <div className="flex items-center justify-between w-full px-4">
          <div className="flex items-center space-x-2">
            <CustomSidebarTrigger />


            <img
              src="https://lh3.googleusercontent.com/proxy/X-B99B9HsP3Lo4ae0nDQMozyMHTcxxdcPINH959IZlOUhqK7j0tdAK-sz09ISiS2c0ew2N4wyhXsHyR5EZ1vqwJKbh0VhZBj7gEfvT4DeFZkKw"
              alt="Logo"
              className="h-10"
            />
          </div>


          <button
            onClick={() => GoTo("/profile-select")}
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          >
            Entrar
          </button>
        </div>
      </nav>

  }

  return (
    
      <nav className="bg-gray-100 py-4 shadow-md bg-white">
        <div className="flex items-center justify-between w-full px-4">
          <div className="flex items-center space-x-2">
            <CustomSidebarTrigger />


            <img
              src="https://lh3.googleusercontent.com/proxy/X-B99B9HsP3Lo4ae0nDQMozyMHTcxxdcPINH959IZlOUhqK7j0tdAK-sz09ISiS2c0ew2N4wyhXsHyR5EZ1vqwJKbh0VhZBj7gEfvT4DeFZkKw"
              alt="Logo"
              className="h-10"
            />
          </div>

          <ul className="hidden md:flex flex-1 justify-center space-x-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="text-gray-700 hover:text-orange-500">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => GoTo("/profile-select")}
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          >
            Entrar
          </button>
        </div>
      </nav>
   
  );
};
export default HeaderBasic;