import styles from '/styles/Cart.module.css';
import { useRouter } from 'next/router'

export default function PanierVideMessage() {
    const router = useRouter()
    return (
        <h3 className={styles.emptyCartMessage}>
            <p>Vous n'avez encore rien ajouté à votre panier!</p>
            <span className={styles.shocked} role="img" aria-label="shocked">😱</span>
         <div className={styles.container}>
         <button className={`${styles.button} ${styles.h1}`} onClick={() => router.back()}><h1>← Aller a Accueil</h1></button>
        </div>
        </h3>
    )
};