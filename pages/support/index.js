import { Fragment } from 'react'
import Contact from '../../components/global/contact'
import SectionOne from '../../components/pages/supportpage/sectionone'
import Head from 'next/head';

export default function Supportepage() {
  return (
    <Fragment>
        <Head>
        <title>Viol | Support</title>
        <meta name="description" content="Need help? Reach us out" />
      </Head>   
      <SectionOne />
    </Fragment>
  )
}
