import React, { useState, useEffect, useContext } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import { UserContext } from './userContext';




import { NavLink } from 'react-router-dom';
import '../css/login.css';
import logo from '../imgs/icone.png'
import logo2 from '../imgs/logo-d.png'
import axios from 'axios';
import Header from '../components/header';
import Footer from '../components/footer';


const Login = ({ setNomee, setEmaill , cart, nomee, emaill}) => {

    const { handleLogin, push } = useContext(UserContext);


    const [user, setUser] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            setUser(user);
        });
    }, []);

    const handleLoginWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                // login bem-sucedido, faça algo aqui
                setUser(result.user);

                setEmaill(result.user.email)


                const userData = {
                    name: result.user.displayName,
                    email: result.user.email,
                    pictureUrl: result.user.pictureUrl,
                    photo: result.user.photoURL,
                    uid: result.user.uid,
                    tel: result.user.phoneNumber,
                }

                localStorage.setItem('users', JSON.stringify(userData));
                setNomee(result.user.displayName)
                handleLogin(result)
                window.location.href = '/pt';

            })
            .catch((error) => {
                // erro no login, faça algo aqui
            });
    };


    const handleLogout = () => {
        firebase.auth().signOut()
            .then(() => {
                setUser(null);

                setEmaill('')
                setNomee('')
                const userData = {
                    name: '',
                    email: '',
                    pictureUrl: '',
                    tel: '',
                }

                localStorage.setItem('users', JSON.stringify(userData));

            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
         < Header style={{ marginBottom: '5rem' }} nomee={nomee} emaill={emaill} cart={cart} />
           <div className="c mx-auto body">
                <div className="row ">
                    <div className="col-12 autoo col-md-6 col-xl-6 col-xxl-6 luanda">
                        <div className="">
                            <img src={logo} style={{ height: '5em' }} alt="Logo Arotec" /> <br />
                            {/* <span className="text-white">Angola Robotica e Tecnologia</span> */}
                        </div>
                    </div>
                    <div className="col-12 col-md-6 autoo col-xl-6 col-xxl-6 ">
                        <div className="container my-auto form">
                            <center> <img src={logo2} style={{ height: '2.5em' }} alt="Logo DA" /></center>

                            <br />
                            <center>
                                {user ? (
                                    <div>
                                        <p className='text-primary'>Você já está logado como <b> {user.displayName}</b> <br />

                                            <span className="text-secondary">
                                                Email: {user.email}
                                            </span>
                                        </p>

                                        <button className='btn btn-danger' onClick={handleLogout}>Sair</button>
                                    </div>
                                ) : (
                                    <>
                                        <b className='text-secondary'>Faça login com Google</b>
                                        <br />
                                        <br />
                                        <button className='d-flex btn-google btn btn-primary' onClick={handleLoginWithGoogle}>
                                            <i className="bi bi-google text- me-2"> </i><span>Login com o Google</span>
                                        </button>

                                    </>)}
                            </center>

                        </div>
                        <br />
                        <center>

                            <NavLink className={'btn btn-outline-secondary'} to={'/pt'} >Pagina Inicial <i className="bi bi-house"></i></NavLink>
                        </center>
                    </div>
                </div>
            </div>
            {/* <Footer/> */}
        </>
    )
}

export default Login;