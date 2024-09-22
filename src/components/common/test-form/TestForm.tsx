import { FC } from "react";
import { FormBtnWrapper, FormItemWrapper, FormWrapper, ImgTitleWrapper, InputWrapper, InternalWrapperForm, ItemsWrapper, TestIconWrapper, TestPageWrap } from "./testForm.s";
import CustomIcon from "@/assets/custom-icons";
import Styles, { Typography } from "@/styles";
import { TestWhatsapp } from "@/components/section/about/reposibilaty/reposibilaty.s";
import Img from "../../../assets/img/Test-whatsapp.jpg"
import { FormInput, FormItem } from "@/components/section/contact/contact-form/contact-form.s";
import { FormButton } from "@/components/section/home/apply-form/apply-form.s";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
export const TestForm = () => {
    return (
        <TestPageWrap>
            <TestIconWrapper>
                <CustomIcon.TestSvg1 width={"250px"} height={"250px"} />
            </TestIconWrapper>
            <Styles.Container>
                <FormWrapper>
                    <InternalWrapperForm direction="column">
                        <ImgTitleWrapper>
                            <TestWhatsapp src={Img} alt="test whatsapp image" />
                            <Typography.H3 align="center" spanColor="primary_500">Send Message On <Styles.Subtext>WhatsApp</Styles.Subtext> Without Saving Number</Typography.H3>
                        </ImgTitleWrapper>
                        <InputWrapper>
                        <FormItem htmlFor="">
                            <Styles.Subtext align="center">Phone number</Styles.Subtext>
                            <PhoneInput />
                        </FormItem>
                        <FormItem>
                            <ItemsWrapper>
                                <FormItemWrapper>
                                    <FormInput type="checkbox" />
                                </FormItemWrapper>
                                <Typography.PARAGRAPH>
                                    Send using WhatsApp Desktop
                                </Typography.PARAGRAPH>
                            </ItemsWrapper>
                        </FormItem>
                        </InputWrapper>
                        <FormBtnWrapper>
                            <FormButton>Send message</FormButton>
                        </FormBtnWrapper>
                    </InternalWrapperForm>
                </FormWrapper>
            </Styles.Container>
        </TestPageWrap>
    )
}