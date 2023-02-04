import { Inter } from '@next/font/google'
import styles from '../styles/Expedition.module.css'
const inter = Inter({ subsets: ['latin'] })

export default function Expedition() {
  return <>
    <main className={styles.bodyExpedition}>
      <div className={styles.contenuExpedition}>
        <h1 className={styles.titreExpedition}>Expédition & Retours</h1>
        <a className={styles.soustitreExpedition}>Politique d'expédition</a>
        <a className={styles.contenuExpedition}>Si nous connaissons un volume élevé de commandes, les expéditions peuvent être retardées de quelques jours. S'il vous plaît
          prévoir des jours supplémentaires en transit pour la livraison. S'il y a un retard important dans l'expédition de votre
          commande, nous vous contacterons par e-mail ou par téléphone.</a>

        <a className={styles.soustitreExpedition}>Politique de retour et d'échange</a>
        <a className={styles.contenuExpedition}>Les clients peuvent engager une procédure de retour dans les 7 jours à compter de la date de réception.
          Si le client souhaite retourner ses achats, il est en droit de le faire sans nécessairement apporter de
          justification. Le site marchand ne peut le refuser.</a>

      </div>

    </main>
  </>
}