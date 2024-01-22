import { FC } from "react";
import { PageHeaderWrap } from "./page-header.s";
import Styles, { Typography } from "@/styles";

interface IPageHeaderProps {
  title: string;
  description: string;
}

export const PageHeader: FC<IPageHeaderProps> = ({ title, description }) => {
  return (
    <PageHeaderWrap>
      <Styles.Container>
        <Typography.H1 color="white">{title}</Typography.H1>
        <Typography.LEAD_TEXT color="white">{description}</Typography.LEAD_TEXT>
      </Styles.Container>
    </PageHeaderWrap>
  );
};
