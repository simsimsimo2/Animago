import styles from '/styles/ProduitDescription.module.css';
import ProduitParID from '/components/produit/filtration/ProduitParID';

export default function Produit109() {
  return (
    <div className={styles.container}>
      <ProduitParID productId={109} />
    </div>
  );
}
