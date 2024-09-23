import Banner from '@/components/Banner'
import React from 'react'
import BookingForm from './BookingForm'
import Main from './main'
import Heading from '@/components/Heading'

type Props = {}

const Page = (props: Props) => {
  return (
   <>
   <Banner />
   <BookingForm />
   <Main />
   <Heading />
   </>
  )
}

export default Page