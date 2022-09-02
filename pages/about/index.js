import { Fragment } from 'react'
import Section_01 from '../../components/pages/aboutpage/section_01'
import Section_02 from '../../components/pages/aboutpage/section_02'
import Section_03 from '../../components/pages/aboutpage/section_03'
import Head from 'next/head';


export default function Aboutpage() {
  return (
    <Fragment>
        <Head>
        <title>Violtech</title>
        <meta name="description" content="We’re India-based, a global digital agency. Design, deploy development solutions universally over all platforms and digital marketing." />
      </Head>   
      <Section_01 />
      <Section_02 />
      <Section_03 />
    </Fragment>
  )
}
