'use client'

import React from 'react';
import store from "@/store/store";
import { Provider } from 'react-redux';

import Dialog from '../component/dialog';

const App: React.FC = () => {

  return (
    <Provider store={store}>
      <h1>React Dialog Example</h1>
      <Dialog />      
    </Provider>
  );
};

export default App;