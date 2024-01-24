import { FC, useEffect, useRef } from "react";
import {
  CloseButton,
  Content,
  LogoLink,
  NavItem,
  NavsList,
  SidebarWrap,
} from "./sidebar.s";
import Styles, { Typography } from "@/styles";
import Icons from "@/assets/icons";
import Link from "next/link";
import mock from "@/mock";
import Image from "next/image";
import { useRouter } from "next/router";

interface ISidebarProps {
  open: boolean;
  onClose: () => void;
}

export const Sidebar: FC<ISidebarProps> = ({ onClose, open }) => {
  const contentRef = useRef<null | HTMLDivElement>(null);
  const { route } = useRouter();

  useEffect(() => {
    if (open) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        contentRef.current &&
        !contentRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <SidebarWrap open={open}>
      <Content ref={contentRef} open={open}>
        <Styles.Column width="100%" content={"space-between"}>
          <LogoLink href="/">
            <Image
              height={48}
              width={48}
              src="/images/Logo.png"
              alt="Brand logo"
            />
            <Typography.H5 color="gradient">ABSOLUTE ENERGY</Typography.H5>
          </LogoLink>

          <CloseButton onClick={onClose}>
            <Icons.closeCircle.Linear />
          </CloseButton>
        </Styles.Column>
        <NavsList>
          {mock.navItems.map(({ text, url }, index) => (
            <NavItem key={index} active={route === url} onClick={onClose}>
              <Link href={url}>
                <Typography.H5>{text}</Typography.H5>
              </Link>
            </NavItem>
          ))}
        </NavsList>
      </Content>
    </SidebarWrap>
  );
};
