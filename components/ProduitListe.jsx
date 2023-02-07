
import styles from '../styles/ProduitListe.module.css';
import ProduitCard from "./ProduitCard";

export default function ProduitListe(categorieNameSelectionne) {
    return (
    <>
        <div className={styles.container}>
                <ProduitCard />
        </div>
    </>
    );
    }
