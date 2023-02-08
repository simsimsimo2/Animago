import styles from '/styles/ProduitDescription.module.css';
import { useRouter } from 'next/router'
import ProduitData from "/components/ProduitData.jsx";
import ProductDetails from "/components/ProduitDetails.jsx";

export default function Produit112() {
    const productId = 112;
    const productDescription  = "ReptiSand est disponible en deux couleurs naturelles sans colorants ni produits chimiques ajoutés. Il stimule le comportement naturel de creuser et de creuser et est un excellent conducteur de chaleur. ReptiSand crée un environnement très naturel et attrayant pour les espèces de reptiles du désert. Idéal pour les dragons barbus, boas de sable, tortues à coquillage souple, etc."
    const router = useRouter();
    const product = ProduitData({categorie: null}).props.children.props.images.find(({_id}) => _id === productId);

    return <>
        <div className={styles.container}>
            <ProductDetails product={product} />
            <p className={styles.p}>Description du produit: {productDescription }</p>      
            <div className={styles.containerCartButton} >
                <button className={styles.button}>Ajouter au panier</button> <button className={styles.button}>Enlever du panier</button>
            </div>
            <button className={styles.button} onClick={() => router.back()}>← Retour aux produits</button>
        </div>
    </>
}