import { Button } from "@material-ui/core";
import "./Layout.css";

const Layout = ({ add, showButton, children }) => {
  return (
    <>
      <header className='header'>
        <a href='/contacts' className='logo'>
          Contacts
        </a>
        <Button onClick={add} style={{ display: showButton }}>
          Add new contact
        </Button>
      </header>
      <main className='main'>{children}</main>
      <footer>Contacts</footer>
    </>
  );
};

export default Layout;
