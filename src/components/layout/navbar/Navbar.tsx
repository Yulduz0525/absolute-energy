import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavItem, NavList, NavbarWrap } from "./navbar.s";
import Styles from "@/styles";
import mock from "@/mock";

interface INavbarProps {}

export const Navbar: FC<INavbarProps> = ({}) => {
  return (
    <NavbarWrap>
      <Styles.Container>
        <Link href="/">
          <Image
            height={48}
            width={48}
            src="/images/Logo.png"
            alt="Brand logo"
          />
          ABSOLUTE ENERGY
        </Link>
        <NavList>
          {mock.navItems.map(({ text, url }, index) => (
            <NavItem key={index}>
              <Link href={url}>{text}</Link>
            </NavItem>
          ))}
        </NavList>
      </Styles.Container>
    </NavbarWrap>
  );
};
