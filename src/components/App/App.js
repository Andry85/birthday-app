import React from 'react';
import styles from './App.module.scss';


import Header from "../Header";
import Panel from "../Panel";
import Footer from "../Footer";



function App() {


  return (
    <div className={styles.App}>
      <Header />
      <Panel/>
      <Footer text="Copyright 2021 © Birthday App. All Rights Reserved." />
    </div>
  );
}

export default App;
