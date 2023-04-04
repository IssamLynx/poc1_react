import Logo from "../assets/images/zenika_logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-16 flex items-center space-x-4">
      <Link to="/Home">
        <img
          src={Logo}
          alt="Zenika Logo"
          className="h-full aspect-auto w-[90px]"
        />
      </Link>
      <Link to="/Valeurs">Valeurs</Link>
      <Link to="/Offres">Offres</Link>
      <Link to="/GreenIT">Green IT</Link>
      <Link to="/Securite">Sécurité</Link>
    </div>
  );
};

export default Header;
