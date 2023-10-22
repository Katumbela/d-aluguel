import '../App.css';
// Bootstrap CSS
// Bootstrap Bundle JS
import Header from '../components/header';
import bb from '../imgs/logo.png';
import aro from '../imgs/arobott.png';
import Footer from '../components/footer';
import Cursos from '../components/academia/cursos_disponiveis';
import { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import { NavLink } from 'react-router-dom';
import { db } from './firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import Grafico from '../components/grafico';
import DonutChart from '../components/grafico';

function MeusC({ nomee, emaill, cart }) {
    document.title = 'Meu Dashboard | AROTEC';
    const [use, setUser] = useState([]);

    const [ph, setPh] = useState('')



    useEffect(() => {
        // Adicione um listener para o estado da autenticação
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (!user) {
                // Se não houver usuário autenticado, redirecione para a página de login

                const userData = {
                    name: '',
                    email: '',
                    pictureUrl: '',
                    tel: '',
                    uid: '',
                }

                localStorage.setItem('users', JSON.stringify(userData));

            }
        });


        // Retorne uma função de limpeza para remover o listener quando o componente for desmontado
        return unsubscribe;
    }, []);


    useEffect(() => {
        // Obtém o valor de 'users' do local storage quando o componente for montado
        const userString = localStorage.getItem('users');
        if (userString) {
            const user = JSON.parse(userString);
            setUser(user);
            setPh(user.photo);
        }
        else {
            const userData = {
                name: '',
                email: '',
                pictureUrl: '',
                tel: '',
                uid: '',
            }
            setUser(userData);
        }
    }, []);


    const [cursos, setCursos] = useState([]);

    useEffect(() => {
        const getProjetos = async () => {
            try {
                const projetosCollection = collection(db, 'inscricao');
                const projetosQuery = query(projetosCollection, where('email', '==', 'ja3328173@gmail.com'));
                const projetosSnapshot = await getDocs(projetosQuery);
                const projetosData = projetosSnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setCursos(projetosData);

            } catch (error) {
                console.error(error);
            }
        };

        getProjetos();
    }, []);


    const aproveitamento = 75; // Porcentagem de aproveitamento do estudante



    return (
        <div className="bg-light w-100">

           
      < Header style={{marginBottom:'5rem'}} nomee={nomee} emaill={emaill} cart={cart} />
      <br />
      <br />
            <br />

            <div className="container">
                <div className="bg-white rounded-4 p-3">
                    <div className="row">
                        <div className="col-12 col-sm-3 col-md-2">
                            <img src={use.photo} className='rounded-circle' alt="" />
                        </div>
                        <div className="col-12 text-start col-sm-9 col-md-10">
                            <h1 className="text-primary">  {use.name}</h1>
                            <h5 className="text-secondary">{use.email}</h5>
                            <h5 className="text-secondary">{use.tel}</h5>
                            <span className="text-secondary f-12">ID: {use.uid}</span>
                        </div>
                    </div>
                </div>
                <br />


            </div>

            {cursos &&

                <div className='container'>
                    <hr />
                    <b>Cursos em que está Incrito</b>
                    <br />
                    <br />
                    {Object.keys(cursos).length > 0 ? (
                        <div className="row">
                            {
                                cursos.map((curso) => (
                                    <div className='col-12 col-sm-6 col-lg-4 col-xxl-2 col-xl-3' key={curso.id}>
                                        <div className="course rounded-3 shadow-lg bg-primary text-center p-2">
                                            <div className="head py-3">
                                                <img src={aro} className='' style={{ height: '6em' }} alt="" />
                                            </div>
                                            <div className="corp text-white">
                                                <b>{curso.curso}</b>
                                            </div>
                                            <br />
                                            {/* to={'/pt/aulas/'+curso.id_curso} */}
                                            {
                                                curso.curso == 'Curso de Pequeno Engenheiro' ?
                                            <NavLink to={'/pt/cursos/daluguel/pequeno_engenheiro'} className="btn rounded-3 border-white text-white ">Acessar às Aulas</NavLink>
                                            :
                                            <button className="btn rounded-3 border-white text-white ">Curso Presencial</button>
                                            
                                        }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                    ) : (
                        <center>
                            <i className="bi bi-exclamation-circle text-secondary" style={{ fontSize: '80px' }}></i> <br />
                            <span className="text-secondary">Não se inscreveu em um curso ainda !</span>
                            <br />
                            <br />
                            <br />
                            
                            <NavLink disabled className="btn btn-outline-secondary">Ir Para Academia <i className="bi bi-arrow-short"></i> </NavLink>
                        </center>
                    )}
                </div>
            }
            <br />
            <br />
            {/* <center className='container'>
                <div className="text-start">
                    <b>Seu Aproveitamento</b>
                </div>

                {Object.keys(cursos).length > 0 &&
                    <DonutChart className='mx-auto' style={{ height: '10em' }}
                        data={[
                            { name: 'A', value: 100, color: '#0d09098b' },
                            { name: 'B', value: 1, color: '#0066be' },
                        ]}
                        width={400}
                        height={400}
                    />
                }
            </center> */}
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            < Footer />

        </div>
    );
}

export default MeusC;
