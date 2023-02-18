import styles from '/styles/NotFound.module.css';
import { useRouter } from 'next/router'

export default function PanierPleinEcranContenu() {
  const router = useRouter()
  return (
    <main>
      <div className={styles.container}>
        <h1 className={styles.h1}>Vous n'avez encore rien ajouté à votre panier!</h1>
        <h1 className={styles.emoji} role="img" aria-label="shocked"> 😱</h1>
        <div className={styles.container}>
         <button className={`${styles.button} ${styles.h1}`} onClick={() => router.back()}><h1>← Aller a Accueil</h1></button>
        </div>
      </div>
    </main>
  );
}