import { FC, ReactNode } from "react";
import { PageHeaderWrap } from "./page-header.s";
import Styles, { Typography } from "@/styles";
import { motion } from "framer-motion";

interface IPageHeaderProps {
  title: string;
  description?: string;
  links?: ReactNode;
}

export const PageHeader: FC<IPageHeaderProps> = ({
  title,
  description,
  links,
}) => {
  return (
    <PageHeaderWrap
      as={motion.section}
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
    >
      <Styles.Container>
        <Typography.H1 color="white">{title}</Typography.H1>
        <Typography.LEAD_TEXT color="white">{description}</Typography.LEAD_TEXT>
        {links}
      </Styles.Container>
    </PageHeaderWrap>
  );
};
