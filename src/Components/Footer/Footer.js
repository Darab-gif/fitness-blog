import { GrFacebookOption } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import style from "./footer.module.css";
import logo from "../../images/logo.png";
import NavItem from "../NavItem/NavItem";

const Footer = () => {
  return (
    <footer className={style.footer_container}>
      <section className={style.mainFooter_container}>
        <div className={style.footer_details}>
          <div className={style.logo_container}>
            <img src={logo} alt="logo" />
          </div>

          <p>
            Lorem Ipsum is simply dummy text of the printing <br /> and
            typesetting industry. Lorem Ipsum.
          </p>

          <div className={style.socialIcon_container}>
            <span>
              <GrFacebookOption />
            </span>

            <span>
              <BsInstagram />
            </span>

            <span>
              <BsTwitter />
            </span>

            <span>
              <FaWhatsapp />
            </span>
          </div>
        </div>

        <div className={style.footer_links}>
          <h5>Info</h5>
          <ul>
            <NavItem text="About" link="/" />
            <NavItem text="Careers" link="/" />
            <NavItem text="Press" link="/" />
          </ul>
        </div>

        <div className={style.footer_links}>
          <h5>Get In Touch</h5>
          <ul>
            <NavItem text="About Us" link="/" />
            <NavItem text="Support" link="/" />
            <NavItem text="Contact" link="/" />
          </ul>
        </div>

        <div className={style.footer_links}>
          <h5>Categories</h5>
          <ul>
            <NavItem text="Fitness" link="/fitness" />
            <NavItem text="Nutrition" link="/nutrition" />
            <NavItem text="Keto Diet" link="/" />
          </ul>
        </div>
      </section>

      <section className={style.subfooter_container}>
        <p>Copyright &copy; 2022 | All right reserved</p>
        <p>Terms & Conditions</p>
      </section>
    </footer>
  );
};

export default Footer;
