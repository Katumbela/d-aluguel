import '../App.css';
import { useContext, useEffect, useState } from 'react';
import ok from '../imgs/okupalenda.png';
import firebase from 'firebase/compat/app';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Jogos = ({ cart, nomee, emaill }) => {
  document.title = 'Okupalenda Online | AROTEC';

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



  const [countryInfo, setCountryInfo] = useState(null);

  useEffect(() => {
    const getCountryInfo = async () => {
      try {
        const response = await axios.get('http://ip-api.com/json');
        setCountryInfo({
          countryCode: response.data.countryCode,
          countryName: response.data.country,
        });
      } catch (error) {
        console.error('Erro ao obter informações do país:', error);
      }
    };

    getCountryInfo();
  }, []);

  const countryName = countryInfo?.countryName || 'Nome do País Desconhecido';



  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      setShowModal(true);
      localStorage.setItem('hasVisited', true);
    }
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleClose = () => setShowModal(false);

  return (
    <div className="w-100">
      <svg style={{ position: 'absolute', zIndex: '-1', top: '0' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#a2d9ff" fillOpacity="1" d="M0,192L11.4,170.7C22.9,149,46,107,69,96C91.4,85,114,107,137,128C160,149,183,171,206,176C228.6,181,251,171,274,144C297.1,117,320,75,343,64C365.7,53,389,75,411,101.3C434.3,128,457,160,480,176C502.9,192,526,192,549,181.3C571.4,171,594,149,617,122.7C640,96,663,64,686,74.7C708.6,85,731,139,754,160C777.1,181,800,171,823,154.7C845.7,139,869,117,891,112C914.3,107,937,117,960,117.3C982.9,117,1006,107,1029,128C1051.4,149,1074,203,1097,229.3C1120,256,1143,256,1166,250.7C1188.6,245,1211,235,1234,224C1257.1,213,1280,203,1303,176C1325.7,149,1349,107,1371,112C1394.3,117,1417,171,1429,197.3L1440,224L1440,0L1428.6,0C1417.1,0,1394,0,1371,0C1348.6,0,1326,0,1303,0C1280,0,1257,0,1234,0C1211.4,0,1189,0,1166,0C1142.9,0,1120,0,1097,0C1074.3,0,1051,0,1029,0C1005.7,0,983,0,960,0C937.1,0,914,0,891,0C868.6,0,846,0,823,0C800,0,777,0,754,0C731.4,0,709,0,686,0C662.9,0,640,0,617,0C594.3,0,571,0,549,0C525.7,0,503,0,480,0C457.1,0,434,0,411,0C388.6,0,366,0,343,0C320,0,297,0,274,0C251.4,0,229,0,206,0C182.9,0,160,0,137,0C114.3,0,91,0,69,0C45.7,0,23,0,11,0L0,0Z"></path>
      </svg>
      <center className="py-5 my-auto" style={{ zIndex: '99999999' }}>

        <img src={ok} className='mt-5' alt="" />
        {/* {
            user != '' ? 
            <div>

            </div>
            : 
            <div>

            </div>
        } */}
        <br /><br />
        {

          use.name != '' ?
          
          <div>
            <button className="btn rounded-3 btn-outline-info"><NavLink to={'/pt/okupalenda/game'} className={'navlink text-dark'}>Start The Game</NavLink>
            </button> 
            <br />
            <span className="text-info">
              Vamos começar o jogo <span style={{textDecoration:'underline'}} >{use.name}</span>
            </span>
            <br />
            {countryInfo ? (
        <div>
          <span>País onde se encontra: {countryName}</span>
          {/* Renderizar a bandeira aqui */}
        </div>
      ) : (
        <h1>Obtendo informações do país...</h1>
      )}
            {/* <span>Detectamos que seu país é {countryName} </span> */}
          </div>
            : 
            <p >
              <center>
                <i className="bi bi-exclamation-triangle fs-2 text-info"></i>
              </center>
              Faça <a href="/login"> {use.name} login</a> para continuar o jogo online
            </p> 
            

        }
      </center>

      {/* Parte do svg do footer */}

      <svg style={{ position: 'absolute', zIndex: '-1', bottom: '0' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#a2d9ff" fillOpacity="1" d="M0,32L34.3,37.3C68.6,43,137,53,206,96C274.3,139,343,213,411,224C480,235,549,181,617,138.7C685.7,96,754,64,823,74.7C891.4,85,960,139,1029,181.3C1097.1,224,1166,256,1234,245.3C1302.9,235,1371,181,1406,154.7L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
      </svg>
    </div>
  );
}

export default Jogos;
