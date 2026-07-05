import "./Header.css";

function Header({ title, subtitle }) {
  return (
    <header className="hero-header">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
}

export default Header;