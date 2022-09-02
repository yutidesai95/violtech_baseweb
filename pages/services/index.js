import { Fragment } from 'react'
import Section_01 from '../../components/pages/servicespage/section_01'
import Section_02 from '../../components/pages/servicespage/section_02'
import Section_03 from '../../components/pages/servicespage/section_03'
import Section_04 from '../../components/pages/servicespage/section_04'
import Capabilities from '../../components/global/capabilities'
import Contact from '../../components/global/contact'
import Head from 'next/head';


export default function Servicepage() {
  return (
    <Fragment>
        <Head>
        <title>Viol | Services</title>
        <meta name="description" content="Range of digital needs are covered thru our design, development and delivery services. A perfect full digital agency." />           
        </Head>
      <Section_01 />
      <Section_02 />
      <Section_03 />
      <Section_04 /> 
      <Capabilities /> 
      <Contact />
    </Fragment>
  )
}
