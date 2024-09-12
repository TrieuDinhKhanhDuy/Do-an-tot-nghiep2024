import Banner from '@/components/Banner'
import React from 'react'
import BookingForm from './components/BookingForm'
import Main from './components/main'
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