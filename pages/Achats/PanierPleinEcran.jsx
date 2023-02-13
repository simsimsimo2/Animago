import React, { useEffect } from 'react';
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Cart from '../../components/AchatPanier/PanierPleinEcran/PanierPleinEcranContenu';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from '/styles/Cart.module.css'

export default function PanierPleinEcran() {

    return( <>
      <Header/>
      <Cart/>
        <main>
        
      </main>
      
      <Footer/>
    </>
    )
  }