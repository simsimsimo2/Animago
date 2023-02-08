import styles from '../styles/Gallerie.module.css'
import Image from 'next/image'

export default function Gallerie({images}) {
    return <div className={`${styles.gallerie}`}>
        {images.map((imageData, index) => 
        <div className={`${styles.container}`}>

            <Image 
            src={imageData.src} 
            alt={imageData.alt} 
            width={imageData.width} 
            height={imageData.height}
            /*onClick={() => router.push(`/produit/${_id}`)}*/
            />
            <p className={`${styles.text}`}>{imageData.categorie}</p>
            <button className={`${styles.button}`}>Achetez maintenant</button>
        </div>
            
        )}
    </div>
}