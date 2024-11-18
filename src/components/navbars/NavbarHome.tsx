import useNavigateTo from "../../hooks/useNavigateTo";

const Navbar = () => {
    const GoTo = useNavigateTo();


    return (
      <nav className="bg-gray-100 py-4 shadow-md bg-white">
        <div className="container mx-auto flex justify-between items-center ">
        <img src="https://lh3.googleusercontent.com/proxy/X-B99B9HsP3Lo4ae0nDQMozyMHTcxxdcPINH959IZlOUhqK7j0tdAK-sz09ISiS2c0ew2N4wyhXsHyR5EZ1vqwJKbh0VhZBj7gEfvT4DeFZkKw" alt="" className="h-10"/>
          <ul className="flex space-x-6">
            <li><a href="#" className="text-gray-700 hover:text-orange-500">Modalidades</a></li>
            <li><a href="#" className="text-gray-700 hover:text-orange-500">Professores</a></li>
            <li><a href="#" className="text-gray-700 hover:text-orange-500">Galeria</a></li>
          </ul>
          <button
          onClick={()=>GoTo("/profile-select")}
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">Entrar</button>
        </div>
      </nav>
    );
  };
  export default Navbar;