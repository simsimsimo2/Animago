//Importation des styles
import { useRouter } from 'next/router'
import styles from '../styles/Menu.module.css'
import Image from 'next/image';
import Logo from '../public/img/AnimagoLogo.png'

export default function Menu() {
    const router = useRouter()
    return (
        <div className={styles.menu}>
            <div>
                <div> <a onClick={() => router.push('/Accueil')}>
                <Image src={Logo} alt='lien pour Accueil' className={styles.imgLogo} />
                </a></div>
            </div>

            <div className={styles.menuProduct}>
                <div className={styles.menuProductList} onClick={() => router.push('/toutMagasiner')}>TOUT MAGASINER</div>
                <div className={styles.menuProductList} onClick={() => router.push('/chien')}>CHIENS</div>
                <div className={styles.menuProductList} onClick={() => router.push('/chat')}>CHATS</div>
                <div className={styles.menuProductList} onClick={() => router.push('/oiseau')}>OISEAUX</div>
                <div className={styles.menuProductList} onClick={() => router.push('/aquatique')}>AQUATIQUE</div>
                <div className={styles.menuProductList} onClick={() => router.push('/petitanimaux')}>PETIT ANIMAUX</div>
            </div>
        </div>
    )
}