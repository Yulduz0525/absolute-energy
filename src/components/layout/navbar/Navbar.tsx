import { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LogoLink, MenuButton, NavItem, NavList, NavbarWrap } from "./navbar.s";
import Styles, { Typography } from "@/styles";
import mock from "@/mock";
import Icons from "@/assets/icons";
import { useRouter } from "next/router";
import { Sidebar } from "../sidebar";

interface INavbarProps {}

export const Navbar: FC<INavbarProps> = ({}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { pathname } = useRouter();

  console.log(pathname);

  return (
    <>
      <NavbarWrap main={pathname === "/"}>
        <Styles.Container>
          <Link href="/">
            <LogoLink href="/">
              <Image
                height={48}
                width={48}
                src="/images/Logo.png"
                alt="Brand logo"
              />
              <Typography.H5 color="gradient">ABSOLUTE ENERGY</Typography.H5>
            </LogoLink>
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
