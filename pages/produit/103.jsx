import styles from '/styles/ProduitDescription.module.css';
import { useRouter } from 'next/router'
import ProduitData from "/components/ProduitData.jsx";
import ProductDetails from "/components/ProduitDetails.jsx";

export default function Produit103() {
    const productId = 103;
    const productDescription  = "Litière agglomérante ARM & HAMMER à formule avancée anti-odeurs protection double pour chats."
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