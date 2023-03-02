import styles from '/styles/Connexion.module.css'

import { useRouter } from 'next/router'

import React, { useState, useEffect } from 'react';

export default function Profil() {

    const router = useRouter()
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedin, setIsLoggedin] = useState(false);
    const users = [{ firstName: 'Bob', lastName: 'Gratton', email: "test@gmail.com", password: "test" }];
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        if(localStorage.getItem('token-info') !== null){
            const items = JSON.parse(localStorage.getItem('token-info'));
            if (items) {
                setItems(items);
            }
        }
     }, []);


    return <>
     <main>
        <div className={styles.container}>
            <div className={styles.promptWrapper}>
                <button className={styles.button} onClick={() => router.push('/Accueil')}>← Aller à l'accueil</button>
            </div>
            <div className={styles.title}>
                <h2>Bonjour </h2> <h2>{items.firstName} {items.lastName}</h2>
              </div>
        </div>
     </main>
    </>
  }