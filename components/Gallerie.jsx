import Image from 'next/image';
import styles from '../styles/Gallerie.module.css';
import React, { useState, useEffect } from 'react';


export default function Gallerie({ images }) {
  const [averageWidth, setAverageWidth] = useState(0);
  const [averageHeight, setAverageHeight] = useState(0);
  const categorieNameSelectionne  = "";

    useEffect(() => {
    setAverageWidth(images.reduce((acc, image) => Math.max(acc, image.width), 0));
    setAverageHeight(images.reduce((acc, image) => Math.max(acc, image.height), 0));
  }, [images]);

  return (
    <div className={styles.gallerie}>
      {images.map((imgData) => (
        imgData.categorie !== categorieNameSelectionne  && (<div className={styles.product}>
        
        <Image
          src={imgData.src}
          alt={imgData.alt}
          width={averageWidth}
          height={averageHeight}
          id={imgData._id}
          price={imgData.price}
          className={imgData.name}
        />
        <div>Categorie: {imgData.categorie}</div>
        <div>Produit# {imgData._id}</div>
          <p>{imgData.name}</p>
          <p>C${imgData.price}</p>
        <div>
          
        </div>
        <div>En stock: {imgData.stock}</div>
        <button className={styles.button}>Ajouter au Panier</button>
      </div>) 
      ))}
     
    </div>
  );
}
