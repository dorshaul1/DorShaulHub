import { Icon } from "../Icon";
import { TIcon } from "../Icon/types";
import styles from "./Footer.module.scss";

type TSocialLink = {
  href: string;
  name: TIcon;
};

const socialLinks: TSocialLink[] = [
  { href: "https://www.instagram.com/dor_shaul22/", name: "instagram" },
  { href: "https://www.linkedin.com/in/dorshaul/", name: "linkedin" },
  { href: "https://github.com/dorshaul1", name: "github" },
  { href: "mailto:dorshaul2@gmail.com", name: "mail" },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.socials}>
          {socialLinks.map((link) => (
            <a target="_blank" key={link.name} href={link.href}>
              <Icon width={30} name={link.name} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
