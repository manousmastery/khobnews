import React, { useState } from 'react';
import Head from 'next/head';
import { nousContacter } from '../services';

const NousJoindre = () => {

    const [formData, setFormData] = useState({ nom: '', email: '', message: '' });
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        nousContacter(formData).then((result) => console.log(result));
    }

    return (
        <>
            <Head>
                <title>Pa'pyrus mag | Nous contacter</title>
                <link rel='icon' href='/logo-feuille.png' />
            </Head>
            {/* <div className='app__nousJoindre'>
                <span className='app__nousJoindre--titre'>Contactez-nous</span> */}
                {/* <div className='app__nousJoindre--form'>
                    <input type="text" name="nom" placeholder="Votre nom.." onChange={handleChangeInput} />
                    <input type="text" name="email" placeholder="Votre email.." onChange={handleChangeInput} />
                    <textarea name="message" placeholder="Votre message.." onChange={handleChangeInput} cols={30} rows={10} />
                    <button type='button' onClick={handleSubmit}> {loading ? 'Envoi...' : 'Envoyer message'} </button>
                </div> */}
            {/* </div> */}

            <div>À venir...</div>
        </>
    )
};

export default NousJoindre;