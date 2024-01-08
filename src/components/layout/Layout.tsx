import { useRouter } from "next/router";
import { FC, ReactNode } from "react";
import { LayoutWrap } from "./layout.s";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

interface ILayoutProps {
  children: ReactNode;
}

export const Layout: FC<ILayoutProps> = ({ children }) => {
  const router = useRouter();
  return (
    <LayoutWrap>
      <Navbar />
      {children}
      <Footer />
    </LayoutWrap>
  );
};
