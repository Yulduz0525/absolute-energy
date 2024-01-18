import { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LogoLink, MenuButton, NavItem, NavList, NavbarWrap } from "./navbar.s";
import Styles, { Typography } from "@/styles";
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
          <Link href="/">
            <Styles.Column align_items="center" gap={12}>
              <Image
                height={48}
                width={48}
                src="/images/Logo.png"
                alt="Brand logo"
              />
              <Typography.H5 color="gradient">ABSOLUTE ENERGY</Typography.H5>
            </Styles.Column>
          </Link>
          <NavList>
            {mock.navItems.map(({ text, url }, index) => (
              <NavItem key={index}>
                <Link href={url}>
                  <Typography.H6 color="dark500">{text}</Typography.H6>
                </Link>
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
