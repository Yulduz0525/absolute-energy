import { FC } from "react";
import { ApplyFormWrap, CustomInput, FormButton } from "./apply-form.s";
import Styles, { Typography } from "@/styles";

interface IApplyFormProps {}

export const ApplyForm: FC<IApplyFormProps> = (props) => {
  return (
    <ApplyFormWrap>
      <Styles.Container>
        <Styles.Column width="100%" align_items="center" gap={32}>
          <Styles.Row
            size={{ xs: 12, md: 6, lg: 6 }}
            difference={{ xs: 0, md: 16, lg: 16 }}
            gap={16}
          >
            <Typography.H2 color="gradient">Хотите посмотреть?</Typography.H2>
            <Typography.PARAGRAPH color="white">
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и
              вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов
              на латинице с начала XVI века. В то время некий безымянный
              печатник создал большую коллекцию размеров и форм шрифтов,
              используя Lorem Ipsum для распечатки образцов.
            </Typography.PARAGRAPH>
          </Styles.Row>
          <Styles.Row
            size={{ xs: 12, md: 6, lg: 6 }}
            difference={{ xs: 0, md: 16, lg: 16 }}
          >
            <Styles.Column width="100%" gap={24}>
              <Styles.Row size={6} difference={12}>
                <CustomInput placeholder="Ваше имя" />
              </Styles.Row>
              <Styles.Row size={6} difference={12}>
                <CustomInput placeholder="Ваше имя" />
              </Styles.Row>
              <Styles.Row size={6} difference={12}>
                <Typography.TINY color="white">
                  *Мы никому не передаем ваши данные. И не сохраняем ваш номер в
                  базу.
                </Typography.TINY>
              </Styles.Row>
              <Styles.Row size={6} difference={12}>
                <FormButton>Посмотреть район</FormButton>
              </Styles.Row>
            </Styles.Column>
          </Styles.Row>
        </Styles.Column>
      </Styles.Container>
    </ApplyFormWrap>
  );
};
