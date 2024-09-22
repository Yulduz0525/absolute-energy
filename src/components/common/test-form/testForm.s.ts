import Styles from "@/styles";
import styled from "styled-components";
import TestBg from "@/assets/img/test_img.png"
export const TestPageWrap = styled.div`
    &&{
        width:100%;
        background-image:url(TestBg);
        background-repeat: no-repeat;
        background-size: cover;
    }
`

export const  FormWrapper = styled.div`
    &&{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
`

export const InternalWrapperForm = styled(Styles.Column)`
    &&{
        // display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        box-shadow: 0px 100px 80px 0px #3131311A;
        padding: 30px 45px;
        border: 1px solid #2326381A;
        border-radius:6px;
        max-width:700px;
    }
`
export const FormItemWrapper = styled.div`
    &&{
        width:20px;
    }
    &>input{
    width:100%;
    outline:none;
    }
`
export const ItemsWrapper = styled.div`
    &&{
    display:flex;
    align-items:center;
    gap:10px;
    }
`
export const TestIconWrapper = styled.div`
    &&{
    position:absolute;
    top:2px;
    left:0px;
    }
`
export const ImgTitleWrapper = styled.div`
    &&{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:15px;
    }
`
export const InputWrapper = styled.div`
    &&{
        display:flex;
        flex-direction:column;
        justify-content:start;
        align-items:start;
        padding:15px 0 0 0;
        // width:100%;
    }
`
export const FormBtnWrapper = styled.div`
    &&{
        padding:20px 0 10px 0;
    }
`