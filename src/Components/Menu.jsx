export default function Menu() {
  return (
    <>
      <nav className="menu">
        <a href="/" className="menu__item">
          Главная
        </a>
        <a href="/drift" className="menu__item">
          Дрифт-такси
        </a>
        <a href="/timeattack" className="menu__item">
          Time Attack
        </a>
        <a href="/forza" className="menu__item">
          Forza Karting
        </a>
      </nav>
    </>
  );
}
