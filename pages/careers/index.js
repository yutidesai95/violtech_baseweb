import { Fragment } from 'react'
import SectionOne from '../../components/pages/careerpage/sectionone'
import Head from 'next/head';


export default function Careerpage() {
  return (
    <Fragment>
        <Head>
        <title>Viol | Careers</title>
        <meta name="description" content="Join Us, We like to spend our days merging minds." />    
      </Head>   
      <SectionOne />
    </Fragment>
  )
}
