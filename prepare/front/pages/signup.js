import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';


const signup = () => {
  return(
    <AppLayout>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      회원가입
    </AppLayout>
  )
}

export default signup;