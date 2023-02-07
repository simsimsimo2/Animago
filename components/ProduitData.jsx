import ProduitCard from "./ProduitCard";

export default function ProduitData({ categorie }) {
    const defaultWidth = 400;
    const defaultHeight = 400;
    const images = [
        { _id: 100, categorie: "aquatique", stock: 50, price: 50.99, name: 'Aquarium Coral Fish Tank', src: '/img/produits/AquariumCoralFishTank.png', alt: 'Aquarium Coral Fish Tank', width: defaultWidth, height: defaultHeight },
        { _id: 101, categorie: "oiseaux", stock: 40, price: 50.99, name: 'Bird House', src: '/img/produits/birdHouse.png', alt: 'Bird House', width: defaultWidth, height: defaultHeight },
        { _id: 102, categorie: "chat", stock: 20, price: 50.99, name: 'Catfish Toy', src: '/img/produits/catfishtoy.png', alt: 'Catfish Toy', width: defaultWidth, height: defaultHeight },
        { _id: 103, categorie: "chat", stock: 30, price: 50.99, name: 'Cat Litter', src: '/img/produits/catlLitter.png', alt: 'Cat Litter', width: defaultWidth, height: defaultHeight },
        { _id: 104, categorie: "chat", stock: 50, price: 50.99, name: 'Cat Scratch Toy', src: '/img/produits/catScratchToy.png', alt: 'Cat Scratch Toy', width: defaultWidth, height: defaultHeight },
        { _id: 105, categorie: "chien", stock: 100, price: 50.99, name: 'Dog Biscuit', src: '/img/produits/dogBiscuit.png', alt: 'Dog Biscuit', width: defaultWidth, height: defaultHeight },
        { _id: 106, categorie: "chien", stock: 80, price: 50.99, name: '16kg Dog Food Bag', src: '/img/produits/dogfoodbag16kg.png', alt: '16kg Dog Food Bag', width: defaultWidth, height: defaultHeight },
        { _id: 107, categorie: "oiseaux", stock: 90, price: 50.99, name: 'Black Oil for Birds', src: '/img/produits/Huile noire pour oiseaux.png', alt: 'Black Oil for Birds', width: defaultWidth, height: defaultHeight },
        { _id: 108, categorie: "chien", stock: 110, price: 50.99, name: 'Dog Mattress', src: '/img/produits/Matelas pour chien.png', alt: 'Dog Mattress', width: defaultWidth, height: defaultHeight },
        { _id: 109, categorie: "petit animaux", stock: 1500, price: 50.99, name: 'Hamster Cage', src: '/img/produits/hansterCage.jpg', alt: 'Hamster Cage', width: defaultWidth, height: defaultHeight },
        { _id: 110, categorie: "reptile", stock: 1500, price: 50.99, name: 'Reptile Growth Terrarium', src: '/img/produits/ReptileGrowthTerrarium.jpg', alt: 'Reptile Growth Terrarium', width: defaultWidth, height: defaultHeight },
        { _id: 111, categorie: "reptile", stock: 1500, price: 50.99, name: 'Reptile Mister System', src: '/img/produits/ReptileAutomaticMisterSystem.jpg', alt: 'Reptile Automatic Mister System', width: defaultWidth, height: defaultHeight },
        { _id: 112, categorie: "reptile", stock: 1500, price: 50.99, name: 'ReptiSand Terrarium Sand', src: '/img/produits/ReptiSand Terrarium Sand.jpg', alt: 'ReptiSand Terrarium Sand', width: defaultWidth, height: defaultHeight },
        { _id: 113, categorie: "petit animaux", stock: 1500, price: 50.99, name: 'BUCATSTATE Sand Bath', src: '/img/produits/BUCATSTATE Sand Bath.jpg', alt: 'BUCATSTATE Sand Bath', width: defaultWidth, height: defaultHeight },
        { _id: 114, categorie: "oiseaux", stock: 1500, price: 50.99, name: 'Bird Feeder with Camera', src: '/img/produits/Bird Feeder with Camera.jpg', alt: 'Bird Feeder with Camera', width: defaultWidth, height: defaultHeight },
        { _id: 115, categorie: "aquatique", stock: 1500, price: 199.99, name: 'Aqueon Aquarium Fish Tank', src: '/img/produits/aquarium1.png', alt: 'Aqueon Aquarium Fish Tank', width: defaultWidth, height: defaultHeight },
        { _id: 116, categorie: "aquatique", stock: 1500, price: 4.99, name: 'Tetra Fin Goldfish Pellets', src: '/img/produits/FishFood2.png', alt: 'Tetra Fin Goldfish Pellets', width: defaultWidth, height: defaultHeight },
        { _id: 117, categorie: "petit animaux", stock: 1500, price: 10.99, name: 'Wild Harvest Hamster Food', src: '/img/produits/hamsterFood1.png', alt: 'Wild Harvest Hamster Food', width: defaultWidth, height: defaultHeight },
    ];

    let filteredImages;
    if (!categorie) {
        filteredImages = images;
    } else {
        filteredImages = images.filter(({ categorie: imageCategorie }) => imageCategorie === categorie);
    }
    
    
return (
    <main>
        <ProduitCard images={filteredImages} />
    </main>
);
}
