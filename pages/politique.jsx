import { Inter } from '@next/font/google'
import styles from '../styles/Politique.module.css'
const inter = Inter({ subsets: ['latin'] })

export default function Politque() {
  return <>
    <main className={styles.bodyPolitique}>
      <div className={styles.contenuPolitique}>
        <h1 className={styles.titrePolitique}>Politique du Magasin</h1>
        <a className={styles.soustitrePolitique}>Service client</a>
        <a className={styles.contenuPolitique}>La Compagnie AnimaGo! a décidé d'offrir les meilleurs services de site Web
          d'Animal en restant connecté à leurs utilisateurs à tout moment de la journée et en créant une expérience unifiée
          entre leurs technologies et leurs utilisateurs à un tout autre niveau.</a>
        <a className={styles.contenuPolitique}> Nous pensons que chaque utilisateur de notre
          site Web à une histoire à partager et si vous additionnez tous ces différents utilisateurs du monde entier qui utiliseront
          nos services. Les expériences, les réflexions et les commentaires d'un utilisateur deviennent un livre, mais si vous connectez
          tout cela avec de nombreux utilisateurs, cela devient un AnimaGo!</a>

        <a className={styles.soustitrePolitique}>Confidentialité et sécurité</a>
        <a className={styles.contenuPolitique}>Chaque utilisateur qui veulent créer un compte avec ses informations de façon sécuritaire qui
          lui permettra plus tard voir l'historique des sélections qui ont été faites mais aussi de bénéficier des privilèges qui sont reliés
          aux utilisateurs inscrits.</a>

        <a className={styles.soustitrePolitique}>Plateforme de discussion</a>
        <a className={styles.contenuPolitique}>C'est un blogue qui permet à l'administrateur de partager des nouvelles en lien au site ou aux produits,
          ainsi qu'aux personnes de partager leurs opinions et recommandations sur les produits et de discuter à propos des animaux.</a>

        <a className={styles.soustitrePolitique}>Méthodes de paiement</a>
        <a>- Cartes de crédit/débit</a>
        <a>- PAYPAL</a>
        <a>- Paiements hors ligne</a>
      </div>
    </main>
  </>
}