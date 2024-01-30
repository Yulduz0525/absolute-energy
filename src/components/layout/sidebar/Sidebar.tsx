import mock from "@/mock";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";
import {
  LogoLink,
  NavItem,
  NavsList,
  SidebarBgClose,
  SidebarCloseIcon,
  SidebarWrap,
} from "./sidebar.s";
import Styles, { Typography } from "@/styles";
import Icons from "@/assets/icons";
import { useRouter } from "next/router";

interface ISidebarProps {
  open: boolean;
  onClose: () => void;
}

export const Sidebar: FC<ISidebarProps> = ({ open, onClose }) => {
  const sidebarVariants = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 79% 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(0px at 79% 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const closeIconVariants = {
    open: {
      opacity: 1,
    },
    closed: {
      opacity: 0,
      transition: {
        delay: 0.5,
      },
    },
  };

  return (
    <motion.nav initial={false} animate={open ? "open" : "closed"}>
      <SidebarWrap variants={sidebarVariants}>
        <SidebarCloseIcon variants={closeIconVariants}>
          <Styles.Column
            width="100%"
            content={"space-between"}
            direction={"row"}
            onClick={onClose}
          >
            <LogoLink>
              <Typography.H5 color="gradient">ABSOLUTE ENERGY</Typography.H5>
              <Icons.closeCircle.Broken />
            </LogoLink>
          </Styles.Column>
        </SidebarCloseIcon>
        <Navigations />
      </SidebarWrap>

      <AnimatePresence>
        {open && (
          <SidebarBgClose
            onClick={onClose}
            open={open}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.5 } }}
          />
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

interface INavigationProps {}

const Navigations: FC<INavigationProps> = () => {
  const fatherVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const childVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  const { pathname, route } = useRouter();

  return (
    <Styles.Row
      as={motion.div}
      size={12}
      align_items={"center"}
      difference={10}
      variants={fatherVariants}
      content="center"
      style={{ width: "100%" }}
    >
      <NavsList>
        {mock.navItems.map(({ text, url }, index) => (
          <NavItem
            key={index}
            variants={childVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            active={route === url}
          >
            <Link href={url}>
              <Typography.H5>{text}</Typography.H5>
            </Link>
          </NavItem>
        ))}
      </NavsList>
    </Styles.Row>
  );
};
