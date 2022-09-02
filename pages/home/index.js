import { Fragment } from 'react'
import Contact from '../../components/global/contact'
import Section_01 from '../../components/pages/homepage/section_01'
import Section_02 from '../../components/pages/homepage/section_02'
import Section_03 from '../../components/pages/homepage/section_03'
import Section_04 from '../../components/pages/homepage/section_04'
import Capabilities from '../../components/global/capabilities'
import Head from 'next/head';

export default function Homepage() {
  return (
    <Fragment>
            <Head>
        <title>Viol: A global full-service digital agency</title>
        <link rel="canonical" href="http://violtech.com/" />
        <meta name="description" content="Specializing in web design & development, application design & development, and digital marketing." />      
        {/* Home Page */}
      </Head>   
      <Section_01 />
      <Capabilities className={'plain'} /> 
      <Section_02 />
      <Section_03 />
      <Section_04 />
      <Contact />
    </Fragment>
  )
}
