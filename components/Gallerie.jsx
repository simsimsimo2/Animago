import styles from '../styles/Gallerie.module.css'
import Image from 'next/image'

export default function Gallerie({images}) {
    return <div className={`${styles.gallerie}`}>
        {images.map((abc, index) => 
            <Image 
            src={abc.src} 
            alt={abc.alt} 
            width={abc.width} 
            height={abc.height}/>
        )}
    </div>
}