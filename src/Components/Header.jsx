import {Navbar} from "./Navbar"
export const Header = () => {
    return (
      <header>
        <div className="nav-area">
          <a href="/" className="logo">
            Logo
          </a>
          <Navbar />
        </div>
      </header>
    );
  };