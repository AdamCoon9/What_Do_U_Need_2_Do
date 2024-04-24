import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/home" activeStyle={{ color: 'red' }}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/todos" activeStyle={{ color: 'red' }}>
            Todos
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeStyle={{ color: 'red' }}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
