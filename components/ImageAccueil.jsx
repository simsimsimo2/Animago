import Gallerie from './Gallerie'


export default function Image(){
    const images = [
        { src: '/img/Chien.jpg', alt: 'Chien', width: 300, height: 400, categorie: "Chien" },
        { src: '/img/Chat.jpg', alt: 'Chat' , width: 300, height: 400, categorie: "Chat"},
        { src: '/img/Oiseaux.jpg', alt: 'Oiseaux', width: 300, height: 400 , categorie: "Oiseaux"},
        { src: '/img/Petit_animaux.jpg', alt: 'Petit animaux', width: 300, height: 400, categorie: "Petit animaux" },
        { src: '/img/Poisson.jpg', alt: 'Poisson' , width: 300, height: 400, categorie: "Poisson"},
        { src: '/img/Reptile.jpg', alt: 'Reptile' , width: 300, height: 400, categorie: "Reptile"}
    ];
    return<>
    <Gallerie images={images}/>
    </>
}