import { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LogoLink, MenuButton, NavItem, NavList, NavbarWrap } from "./navbar.s";
import Styles from "@/styles";
import mock from "@/mock";
import { Sidebar } from "../sidebar";
import Icons from "@/assets/icons";

interface INavbarProps {}

export const Navbar: FC<INavbarProps> = ({}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
    <NavbarWrap>
      <Styles.Container>
        <LogoLink href="/">
          <Image
            height={48}
            width={48}
            src="/images/Logo.png"
            alt="Brand logo"
          />
          ABSOLUTE ENERGY
        </LogoLink>
        <NavList>
          {mock.navItems.map(({ text, url }, index) => (
            <NavItem key={index}>
              <Link href={url}>{text}</Link>
            </NavItem>
          ))}
        </NavList>
        <MenuButton onClick={() => setMenuOpen(true)}>
            <Icons.menu.Linear />
        </MenuButton>
      </Styles.Container>
    </NavbarWrap>
    <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};
