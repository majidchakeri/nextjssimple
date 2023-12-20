'use client'

import React from "react";
import store from "@/store/store";
import { Provider } from 'react-redux';
import Link from 'next/link';


const Index : React.FC = () => {
  return(
    <Provider store={store}>
      <h1>It is home page.</h1>
      <div>
      <Link href="/verification">verification page</Link><br/>
      <Link href="/users">users page</Link><br/>
      <Link href="/products">products page</Link><br/>
      </div>
    </Provider>
  )
}

export default Index;