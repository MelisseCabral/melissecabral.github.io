import { MenuItem, Navbar } from './styles';

function Header() {

  return (
    <Navbar>
      <MenuItem>Skills</MenuItem>
      <MenuItem onClick={()=> window.open("#experiences", "_self")}>Experience</MenuItem>
      <MenuItem>Publications</MenuItem>
      <MenuItem>Portfolio</MenuItem>
      <MenuItem>Contact</MenuItem>
    </Navbar>
  );
}

export default Header;