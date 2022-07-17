import style from "./navitem.module.css";

const NavItem = ({ link, text }) => {
  // let location = useLocation(link);
  //let match = useMatch({ path: location.pathname, end: true });

  return (
    <li className={style.navlink}>
      <a href={link}>{text}</a>
    </li>
  );
};

export default NavItem;
