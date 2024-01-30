import { FC } from "react";
import { HeaderWraper, LinkRow } from "./contactSectionHeader.s";
import Styles, { Typography } from "@/styles";
import Icons from "@/assets/icons";
import Link from "next/link";

interface IProps {}

export const ContactSectionHeader: FC<IProps> = ({}) => {
  return (
    <HeaderWraper>
      <Styles.Row
        size={{ xs: 12, lg: 12 }}
        difference={{ xs: 0, md: 20 }}
        align_items={'center'}
        content={'center'}
        gap={16}
      >
        <Link href={"mailto:info@aenergy.uz"}>
          <LinkRow
            align_items={"center"}
            size={{ lg: 12 }}
            difference={{ xs: 0 }}
            gap={16}
          >
            <Icons.callCalling.Broken />
            <Typography.LEAD_TEXT color="white">
              info@aenergy.uz
            </Typography.LEAD_TEXT>
          </LinkRow>
        </Link>
        <Link href={"tel:+998951455555"}>
          <LinkRow
            align_items={"center"}
            size={{ lg: 12 }}
            difference={{ xs: 0 }}
            gap={16}
          >
            <Icons.sms.Broken />
            <Typography.LEAD_TEXT color="white">
              +99895 145 55 55
            </Typography.LEAD_TEXT>
          </LinkRow>
        </Link>
      </Styles.Row>
    </HeaderWraper>
  );
};
