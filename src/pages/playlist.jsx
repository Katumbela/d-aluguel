import '../App.css';
// Bootstrap CSS
// Bootstrap Bundle JS
import Header from '../components/header';
import bb from '../imgs/logo.png';
import a1 from '../imgs/1.png';
import a2 from '../imgs/2.png';
import n from '../imgs/n.png';
import esc from '../imgs/escola.png';
import Footer from '../components/footer';
import Cursos from '../components/academia/cursos_disponiveis';
import { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import { NavLink } from 'react-router-dom';
import { db } from './firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import Grafico from '../components/grafico';
import DonutChart from '../components/grafico';

function PlayList({ nomee, emaill, cart }) {
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


      < Header style={{ marginBottom: '5rem' }} nomee={nomee} emaill={emaill} cart={cart} />


      <main className="container">
        <br />
        <a href="/pt/meus_cursos"> <i className="bi bi-arrow-left-short"></i> Voltar</a>
        <br />
        <br />
        <br />
        <br />


        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2">
            <div className="card-cur">
              <NavLink to={'/pt/equipement/daluguel/watch/aula/1'} style={{textDecoration:'none'}} className="card w-100">
                <img src={a1} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">
                    <h5 style={{textDecoration:'underline'}} >Introdução ao curso</h5>
                  </p>
                  <span className="text-secondary f-12">Aula de introdução ao curso de pequenos engenheiros</span>
                </div>
              </NavLink>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2">
            <div className="card-cur">
              <NavLink to={'/pt/equipement/daluguel/watch/aula/2'} style={{textDecoration:'none'}} className="card w-100">
                <img src={a2} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">
                    <h5 style={{textDecoration:'underline'}} >Lição 1: Tecnologia e Robootica</h5>
                  </p>
                  <span className="text-secondary f-12">----------------</span>
                </div>
              </NavLink>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2">
            <div className="card-cur">
              <NavLink to={'/pt/equipement/daluguel/watch/aula/3'} style={{textDecoration:'none'}} className="card w-100">
                <img src={n} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">
                    <h5 style={{textDecoration:'underline'}} >Aula 3: Introdução ao curso</h5>
                  </p>
                  <span className="text-secondary f-12">Aula de introdução ao curso de pequenos engenheiros</span>
                </div>
              </NavLink>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2">
            <div className="card-cur">
              <NavLink to={'/pt/equipement/daluguel/watch/aula/4'} style={{textDecoration:'none'}} className="card w-100">
                <img src={n} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">
                    <h5 style={{textDecoration:'underline'}} >Aula 4: Introdução ao curso</h5>
                  </p>
                  <span className="text-secondary f-12">Aula de introdução ao curso de pequenos engenheiros</span>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
        <br />
        <br />

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

      </main>
      < Footer />

    </div>
  );
}

export default PlayList;
