import mock from "@/mock";
import Icons from "@/assets/icons";
import Link from "next/link";
import Image from "next/image";
import Styles, { Typography } from "@/styles";
import { FC } from "react";
import { LogoLink, MenuButton, NavItem, NavList, NavbarWrap } from "./navbar.s";
import { useRouter } from "next/router";
import { Sidebar } from "../sidebar";
import { useCycle } from "framer-motion";

interface INavbarProps {}

export const Navbar: FC<INavbarProps> = ({}) => {
  const [menuOpen, setMenuOpen] = useCycle(false, true);

  const { pathname, route } = useRouter();

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
              <NavItem key={index} active={route === url}>
                <Link href={url}>
                  <Typography.H6 color="dark500">{text}</Typography.H6>
                </Link>
              </NavItem>
            ))}
          </NavList>
          <MenuButton onClick={() => setMenuOpen()}>
            <Icons.menu.Broken />
          </MenuButton>
        </Styles.Container>
        <Sidebar open={menuOpen} onClose={() => setMenuOpen()} />
      </NavbarWrap>
    </>
  );
};
