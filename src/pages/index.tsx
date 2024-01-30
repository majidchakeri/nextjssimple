'use client'

import React from "react";
import Link from 'next/link';
import '../app/globals.css';

import Layout from '@/components/layouts/DefaultLayouts'


const Index : React.FC = () => {
  return(
    <Layout>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <h1 className="text-4xl">It is home page.</h1>
        <Link href="/login">verification page</Link>
      </div>
    </Layout>
  )
}

export default Index;