import React, { useState } from "react";
import { ExpandButton, FAQWrap, Question } from "./faq.s";
import Styles, { Typography } from "@/styles";
import { ChevronDown } from "@/assets/img/chevron-down";
import Animations from "@/animations";

type Props = {};

const questions = [
  {
    id: 1,
    title: "You asked, we answered! ✋",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo lorem Ipsum is simply dummy text of the printing and typesetting.",
    expanded: true,
  },
  {
    id: 2,
    title: "What features come with Designer Search?",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo lorem Ipsum is simply dummy text of the printing and typesetting.",
    expanded: false,
  },
  {
    id: 3,
    title: "What features come with the Job Board?",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo lorem Ipsum is simply dummy text of the printing and typesetting.",
    expanded: false,
  },
  {
    id: 4,
    title: "How many jobs can I post with the Job Board?",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo lorem Ipsum is simply dummy text of the printing and typesetting.",
    expanded: false,
  },
  {
    id: 5,
    title: "What comes with the Job Board and Designer Search bundle?",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo lorem Ipsum is simply dummy text of the printing and typesetting.",
    expanded: false,
  },
];

export default function FAQ({}: Props) {
  return (
    <FAQWrap>
      <Styles.Container>
        <Styles.Column width="100%" direction={"column"} gap={32}>
          <Animations.Title>
            <Styles.SectionTitle>
              “Часто задаваемые вопросы”
            </Styles.SectionTitle>
          </Animations.Title>
          <FAQColapse questions={questions} />
        </Styles.Column>
      </Styles.Container>
    </FAQWrap>
  );
}

interface IQuestion {
  title: string;
  text: string;
  expanded: boolean;
  id: number;
}

function FAQColapse({ questions }: { questions: IQuestion[] }) {
  const [items, setItems] = useState<IQuestion[]>(questions);

  const openQesution = (id: number, expanded: boolean) => {
    if (expanded)
      return setItems((item) =>
        item.map((item) => ({ ...item, expanded: false }))
      );

    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, expanded: true }
          : { ...item, expanded: false }
      )
    );
  };

  return (
    <Styles.Column width="100%">
      {items.map(({ title, text, expanded, id }, index) => (
        <Question key={index} expanded={expanded}>
          <div className="header" onClick={() => openQesution(id, expanded)}>
            <Typography.LEAD_TEXT>{title}</Typography.LEAD_TEXT>
            <ExpandButton>
              <ChevronDown />
            </ExpandButton>
          </div>
          <Typography.SMALL>{text}</Typography.SMALL>
        </Question>
      ))}
    </Styles.Column>
  );
}
