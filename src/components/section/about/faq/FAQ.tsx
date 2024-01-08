import React from 'react'
import { FAQWrap } from './faq.s'

type Props = {}


const text = `
With the Job Board you have access to one job posting and you can easily swap out listings as many times as you need to. If you’d like to have multiple postings up at the same time, you are able to purchase multiple Job Board subscriptions.
`;

const items = [
  {
    key: "0",
    label: "You asked, we answered! ✋",
    children: <p>{text}</p>,
  },
  {
    key: "1",
    label: "What features come with Designer Search?",
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: "What features come with the Job Board?",
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: "How many jobs can I post with the Job Board?",
    children: <p>{text}</p>,
  },
  {
    key: "4",
    label: "What comes with the Job Board and Designer Search bundle?",
    children: <p>{text}</p>,
  },
  {
    key: "5",
    label: "Is this a monthly subscription?",
    children: <p>{text}</p>,
  },
  {
    key: "6",
    label: "How do I make a purchase?",
    children: <p>{text}</p>,
  },
];

export default function FAQ({}: Props) {
  return (
    <FAQWrap></FAQWrap>
  )
}