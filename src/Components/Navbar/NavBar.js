import gym from "../../images/gym.jfif";
import { RiMenu3Line } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";
import { useState } from "react";

const NavBar = ({ home, fitness, nutrition, keto }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((nav) => !nav);
  };

  const style = {
    header: "p-6 z-30 bg-[#1f1c26] fixed top-0 w-full h-[10rem]",
    container:
      "px-5 flex justify-between items-center md:px16 lg:px-24 text-[1.6rem]",
    icon_wrapper: "lg:hidden",
    icon: "text-5xl cursor-pointer font-bold",
    img: "h-[35px] w-[35px]",
    link: "cursor-pointer hover:text-[#f24b88]",
    nav: `${
      showMenu ? "translate-x-0" : "translate-x-[-100%]"
    } transform  absolute flex flex-col gap-10 top-0 bg-[#1f1c26] text-white w-[50%] pl-22 left-0 p-12 pt-36 transition sm:pl-10 lg:translate-x-0 lg:relative lg:flex-row lg:bg-transparent lg:w-auto lg:items-center lg:text-center lg:p-0 lg:pt-0 lg:h-0 h-[100vh]`,
  };
  return (
    <header className={style.header}>
      <section className={style.container}>
        <a href="/">
          <img src={gym} alt="Gym" className={style.img} />
        </a>
        <nav className={style.nav}>
          <section className={style.link}>Home</section>
          <section className={style.link}>Fitness</section>
          <section className={style.link}>Nutrition</section>
          <section className={style.link}>Keto Diet</section>
        </nav>
        <section onClick={toggleMenu} className={style.icon_wrapper}>
          {showMenu ? (
            <RiCloseFill className={style.icon} />
          ) : (
            <RiMenu3Line className={style.icon} />
          )}
        </section>
      </section>
    </header>
  );
};

export default NavBar;
