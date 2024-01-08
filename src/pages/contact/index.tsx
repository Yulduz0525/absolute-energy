import React from 'react'
import Sections from "@/components/section"
import { ContactWrap } from './contact.s';

const contact = Sections.contact;
type Props = {}

export default function Contact({}: Props) {
  return (
    <ContactWrap>
      <contact.ContactBanner />
      <contact.ContactForm />
    </ContactWrap>
  )
}