import React from 'react'
import Sections from "@/components/section"
import { AboutWrap } from './about.s';

const about = Sections.about;

type Props = {};

export default function About({}: Props) {
  return (
    <AboutWrap>
      <about.Banner />
      <about.AboutUs />
      <about.Reposibilaty />
      <about.FAQ />
    </AboutWrap>
  )
}