const menuItems = [
  { id: 1, label: "Personal", href: "#personal" },
  { id: 2, label: "Business", href: "#business" },
  { id: 3, label: "Partners", href: "#partners" },
  { id: 4, label: "Useful Info", href: "#help" },
];

function NavMenu() {
  return (
    <nav className="nav-menu">
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavMenu;