import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/ProduitItem.module.css';
import logo from '../public/img/produits/redbone.png'
import ProduitCarte from './ProduitCarte';
import ProduitImages from "./ProduitImages";

export default function ProduitItem({images, item}) {
  return (
    <>
        <ProduitImages />
        
        <ProduitCarte/>
    </>
  );
}
