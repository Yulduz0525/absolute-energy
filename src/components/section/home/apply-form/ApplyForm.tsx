import { FC } from "react";
import {
  ApplyFormWrap,
  CustomInput,
  Description,
  FormButton,
  FormText,
  Title,
} from "./apply-form.s";
import Styles from "@/styles";

interface IApplyFormProps {}

export const ApplyForm: FC<IApplyFormProps> = (props) => {
  return (
    <ApplyFormWrap>
      <Styles.Container>
        <Styles.Row size={6} difference={16} gap={16}>
          <Title>Хотите посмотреть?</Title>
          <Description>
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и
            вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
            латинице с начала XVI века. В то время некий безымянный печатник
            создал большую коллекцию размеров и форм шрифтов, используя Lorem
            Ipsum для распечатки образцов.
          </Description>
        </Styles.Row>
        <Styles.Row size={6} difference={16}>
          <Styles.Column width="100%" gap={24}>
            <Styles.Row size={6} difference={12}>
              <CustomInput placeholder="Ваше имя" />
            </Styles.Row>
            <Styles.Row size={6} difference={12}>
              <CustomInput placeholder="Ваше имя" />
            </Styles.Row>
            <Styles.Row size={6} difference={12}>
              <FormText>
                *Мы никому не передаем ваши данные. И не сохраняем ваш номер в
                базу.
              </FormText>
            </Styles.Row>
            <Styles.Row size={6} difference={12}>
              <FormButton>Посмотреть район</FormButton>
            </Styles.Row>
          </Styles.Column>
        </Styles.Row>
      </Styles.Container>
    </ApplyFormWrap>
  );
};
