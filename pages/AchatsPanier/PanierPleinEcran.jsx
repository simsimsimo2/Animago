import React from 'react';
import { Inter } from '@next/font/google'
import PanierPleinEcranContenu from '../../components/AchatPanier/PanierPleinEcran/PanierPleinEcranContenu';

const inter = Inter({ subsets: ['latin'] });

export default function PanierPleinEcran() {
  return (
    <>
      <PanierPleinEcranContenu />
    </>
  );
}
