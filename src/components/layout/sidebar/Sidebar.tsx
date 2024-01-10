import React, { useEffect, useRef } from "react";
import { CloseButton, Content, NavsList, SidebarWrap } from "./sidebar.s";
import Styles from "@/styles";
import Icons from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";

type Props = {
  open: boolean;
  onClose: () => void;
};

const links = [
  { text: "О компании", href: "#" },
  { text: "Наши услуги", href: "#" },
  { text: "Наши проекты", href: "#" },
  { text: "Наши партнёры", href: "#" },
];

export default function Sidebar({ onClose, open }: Props) {
  const contentRef = useRef<null | HTMLDivElement>(null);

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
          {/* <Image
            height={48}
            width={48}
            src="/images/Logo.png"
            alt="Brand logo"
          /> */}
          <CloseButton onClick={onClose}>
            <Icons.closeCircle.Linear />
          </CloseButton>
        </Styles.Column>
        <NavsList>
          {links.map(({ href, text }) => (
            <li key={text} onClick={() => onClose()}>
              <Link href={href}>{text}</Link>
            </li>
          ))}
        </NavsList>
      </Content>
    </SidebarWrap>
  );
}
