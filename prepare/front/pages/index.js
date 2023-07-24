import React, { useState } from 'react';
import AppLayout from '../components/AppLayout';
import PostForm from '../components/PostForm';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return(
    <AppLayout>
      {isLoggedIn && <PostForm/>}
    </AppLayout>
    
  )
}

export default Home;