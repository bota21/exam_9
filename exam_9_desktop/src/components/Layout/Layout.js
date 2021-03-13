import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Layout.css";

const Layout = ({ children }) => {
  const addButton = useSelector((state) => state.addButton);
  return (
    <>
      <header className='header'>
        <a href='/contacts' className='logo'>
          Contacts
        </a>
        <NavLink
          to='/contacts/add'
          style={{ display: addButton }}
          className='layout_link'>
          Add new contact
        </NavLink>
      </header>
      <main className='main'>{children}</main>
      <footer>Contacts</footer>
    </>
  );
};

export default Layout;
