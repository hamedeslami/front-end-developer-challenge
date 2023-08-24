import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <header className="top-header">
      <div className="container">
        <h1 className="logo">
          <a href="index.html">Fiber</a>
        </h1>
        <button
          className="nav-btn default-btn"
          aria-controls="main-nav"
          aria-expanded="true"
        >
          <span className="sr-only">Menu</span>
          <svg
            className="icon"
            aria-hidden="true"
            width="24"
            height="20"
            viewBox="0 0 24 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 4H0V0H24V4ZM24 8H0V12H24V8ZM24 16H0V20H24V16Z"
              fill="black"
            />
          </svg>
        </button>
        <nav className="navbar --active" aria-label="Main menu" id="main-nav">
          <ul className="navbar__list">
            <li className="navbar__item ml-auto">
              <a href="#" className="link">
                Community
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="link">
                Pricing
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="link">
                Features
              </a>
            </li>
            <li className="navbar__item ml-auto">
              <a href="#" className="link singin-link">
                Sing In
              </a>
            </li>
            <li className="navbar__item">
              <button onClick={handleSignUp} className="default-btn --bg-blue">
                Sing Up
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
