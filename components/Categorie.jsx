import { useRouter } from 'next/router'
import styles from '../styles/Categorie.module.css'

export default function Categorie(props) {
    const router = useRouter()
    return (
        <div className={styles.menuCategorie}>
            <button className={styles.button} onClick={() => router.push('/toutMagasiner')}>TOUT MAGASINER</button>
            <button className={styles.button} onClick={() => router.push('/chien')}>CHIENS</button>
            <button className={styles.button} onClick={() => router.push('/chat')}>CHATS</button>
            <button className={styles.button} onClick={() => router.push('/oiseau')}>OISEAUX</button>
            <button className={styles.button} onClick={() => router.push('/aquatique')}>AQUATIQUE</button>
            <button className={styles.button} onClick={() => router.push('/petitanimaux')}>PETIT ANIMAUX</button>
            <button className={styles.button} onClick={() => router.push('/reptile')}>REPTILES</button>
        </div>
    );
}