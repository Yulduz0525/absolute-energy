import styled from "styled-components";

export const FAQWrap = styled.div`
  width: 100%;
`
export const SectionTitle = styled.h2`
  color: var(--dark-green-500, #061210);
  text-align: center;
  font-family: Montserrat;
  font: var(--typography4-700);
`

export const Question = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
` 

export const QuestionTitle = styled.h4`
  color: var(--dark-green-500, #061210);
  font: var(--typography5-500);
`

export const ExpandButton = styled.button<{expanded: boolean}>`
  border: none;
  outline-width: 0;

  svg {
    width: 35px;
    height: 35px;
    rotate: ${({expanded}) => expanded ? "180deg":"0"};
    /* transition: rotate 300ms; */
  }
`

export const QuestionContent = styled.p<{expanded: boolean}>`
&& {
  padding: 0 16px;
  color: var(--dark-green-500, #061210);
  font: var(--typography8-400);
  height: ${({expanded}) => expanded ? "auto":"0"};
  overflow-y: hidden;
}
`