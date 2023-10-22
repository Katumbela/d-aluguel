import '../App.css';
// Bootstrap CSS
// Bootstrap Bundle JS
import Header from '../components/header';
import Footer from '../components/footer';
import '../css/projectos.css';
import printt from '../imgs/print.gif';
import { NavLink } from 'react-router-dom';
import BannerPreto from '../components/banner_preto';
import { useEffect, useState } from 'react';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';
import firebase from 'firebase/compat/app';


function Projectos({ nomee, emaill, cart }) {
  document.title = 'Projectos DIY | AROTEC';

  const [use, setUser] = useState([]);



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
    }
    else {
      const userData = {
        name: '',
        email: '',
        pictureUrl: '',
        tel: '',
      }
      setUser(userData);
    }
  }, []);


  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    const getProjetos = async () => {
      const projetosCollection = collection(db, 'projetos');
      const projetosSnapshot = await getDocs(projetosCollection);
      const projetosData = projetosSnapshot.docs.map((doc) => ({
        refId: doc.ref.id,
        ...doc.data(),
      }));
      setProjetos(projetosData);
    };
    
    getProjetos();
  }, []);


  return (
    <div className="w-100">

     
      < Header style={{marginBottom:'5rem'}} nomee={nomee} emaill={emaill} cart={cart} />
     
      <BannerPreto>
        PROJECTOS DIY | AROTEC
      </BannerPreto>

      <div className="container">
        <br />
        <br />
        <div className="bg-light row ">

          <div className="col-3 text-start bg-white col-sm-3">
            <img src={printt} alt="printing pub" className="w-100" />
          </div>
          <div className="col-9 col-sm-9 printing py-1">
            <b className="proj-tit d1">Serviço de impressão 3D</b><br />
            <p className="text-secondary d2 proj-f">Crie os seus projectos com AROTEC, consulte o orçamento para o seu projeto clicando no botão abaixo.</p>
            <NavLink to={'/pt/contactar'} className="btn d3 btn-outline-primary proj-f">Solicitar orçamento</NavLink>
          </div>

        </div>
      </div>
      <br />
      <br /><br />
      <div className="d-flex justify-content-between container" >
        <p className="text-secondary f-14"> Você tambem pode adicionar seu projecto aqui</p>

        {
          use.name == '' ?
            <NavLink className="f-14" to="/pt/login">Faça login para adicionar</NavLink>
            :
            <NavLink className="f-14 btn btn-outline-dark" to="/pt/adicionar_projecto">Adicione seu projecto <i className="bi bi-arrow-right-short"></i></NavLink>
        }

      </div>

      <br />
      <div className="container">
        <h2>Projectos disponíveis, faça você mesmo</h2>



        <br />
        <br />
        <br />
        <div className="container">

          {/* <center>
            <i className="bi bi-exclamation-triangle text-warning " style={{ fontSize: '70px' }}></i>
            <br />
            <p className="text-warning">Em construção!</p>
          </center> */}

          <div className="row">
            {projetos.map((projeto) => (
              <div key={projeto.id} className=" col-12 col-sm-6 col-md-4 col-ls-3 col-xxl-2 my-2 my-4">
                <div className="col-12">
                  <img className='w-100' style={{height:'15em'}} src={`https://firebasestorage.googleapis.com/v0/b/arotec-374911.appspot.com/o/projectos%2F${projeto.fotoUrl}?alt=media`} />
                </div>
                <div className="col-12 mt-2">
                  <h3 className='f-16'>{projeto.titulo}</h3>
                  <p className='f-12'>{projeto.descricao} <br />
                    De: <span className="text-primary">{projeto.nome}</span>
                  </p>
                  <p>
                    <NavLink className="btn f-12 btn-outline-dark" to={'/pt/ver_projecto/'+ projeto.refId}>Ver projecto</NavLink>
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>


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

export default Projectos;
