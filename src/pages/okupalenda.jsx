import React, { useEffect, useState } from 'react';
import ok from "../imgs/okupalenda.png"
import firebase from 'firebase/compat/app';
import img from '../imgs/icone.png'
import questoes from './questions';
import { db } from './firebase';
import _ from 'lodash';
import axios from 'axios';
import { WorldFlag } from 'react-world-flags';
import Bandeira from '../components/bandeira';
import { NavLink } from 'react-router-dom';


const niveis = [
  { nome: 'Bolo fofo', acertosMinimos: 0, acertosMaximos: 40 },
  { nome: 'Nível Intermediário', acertosMinimos: 41, acertosMaximos: 75 },
  { nome: 'Pai Grande', acertosMinimos: 76, acertosMaximos: 100 },
];

function Quiz() {

  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  const [use, setUser] = useState([]);

  const [ph, setPh] = useState('')

  const [players, setPlayers] = useState([]);



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

  const shuffleQuestions = () => {
    const shuffled = _.shuffle(questoes);
    setShuffledQuestions(shuffled);
  };


  useEffect(() => {

    // embaralhar as perguntas



    const shuffleQuestions = () => {
      const shuffled = _.shuffle(questoes);
      setShuffledQuestions(shuffled);
    };


    shuffleQuestions();



    // Função para buscar os jogadores ordenados por pontuação
    const fetchPlayers = async () => {
      try {
        const snapshot = await db.collection('players').orderBy('pontos', 'desc').get();
        const playerData = snapshot.docs.map((doc) => doc.data());
        setPlayers(playerData);
      } catch (error) {
        console.error('Erro ao buscar os jogadores:', error);
      }
    };

    fetchPlayers();
  }, []);


  const [currentQuestion, setCurrentQuestion] = useState(-1);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(3);
  const [selectedOption, setSelectedOption] = useState(null);
  const [nivel, setNivel] = useState('');

  const handleStartGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setAttempts(3);
    setSelectedOption(null);
    setNivel('');
    shuffleQuestions(); // Chama a função para embaralhar as perguntas
  };

  const handleAnswer = (selectedOption) => {
    const question = shuffledQuestions[currentQuestion];

    if (selectedOption === question.answer) {
      setScore(score + 1);
    } else {
      setAttempts(attempts - 1);
    }

    setSelectedOption(selectedOption);

    if (attempts === 1) {
      terminarJogo();
    } else {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      }, 1000);
    }
  };


  const terminarJogo = () => {
    const porcentagemAcertos = (score / shuffledQuestions.length) * 100;

    for (let i = 0; i < niveis.length; i++) {
      if (
        porcentagemAcertos >= niveis[i].acertosMinimos &&
        porcentagemAcertos <= niveis[i].acertosMaximos
      ) {
        setNivel(niveis[i].nome);
        break;
      }
    }

    savePlayerData(); // Chamada da função savePlayerData

    setCurrentQuestion(shuffledQuestions.length); // Encerra o jogo
  };


  const handleRestart = () => {
    handleStartGame();
  };

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

  const countryName = countryInfo?.countryName || 'País Desconhecido';
  const countryCode = countryInfo?.countryCode || 'ISO do País Desconhecido';
  const savePlayerData = () => {
    let playerData = {
      name: use.name,
      level: null, // Defina um valor padrão para a propriedade level
      score: score,
    };
  
    // Obtenha as informações do país com base no IP (use a lógica que você possui)
  
    let nivelEncontrado = null; // Crie uma nova variável para armazenar o nível encontrado
  
    for (const nivel of niveis) {
      if (score >= nivel.acertosMinimos && score <= nivel.acertosMaximos) {
        nivelEncontrado = nivel.nome; // Atribua o valor do nível encontrado à nova variável
        break;
      }
    }
  
    // Atualize a propriedade level do objeto playerData com o valor do nível encontrado
    playerData.level = nivelEncontrado;
  
    // Verifique se o nome do jogador já existe no banco de dados
    db.collection('players')
      .where('nome', '==', use.name)
      .get()
      .then((snapshot) => {
        if (snapshot.empty) {
          // Se não existir um jogador com o mesmo nome, salve os dados do jogador no Firestore
          db.collection('players')
            .add({
              nome: use.name,
              pontos: score,
              iso: countryCode,
              pais: countryName,
            })
            .then(() => {
              console.log('Dados do jogador salvos com sucesso!');
            })
            .catch((error) => {
              console.error('Erro ao salvar dados do jogador:', error);
            });
        } else {
          // Se existir um jogador com o mesmo nome, verifique se a pontuação é maior que a atual
          const jogadorExistente = snapshot.docs[0].data();
          const pontuacaoAtual = jogadorExistente.pontos;
          
          if (score > pontuacaoAtual) {
            // Atualize a pontuação do jogador existente no Firestore
            db.collection('players')
              .doc(snapshot.docs[0].id)
              .update({ pontos: score })
              .then(() => {
                console.log('Pontuação do jogador atualizada com sucesso!');
              })
              .catch((error) => {
                console.error('Erro ao atualizar pontuação do jogador:', error);
              });
          }
        }
      })
      .catch((error) => {
        console.error('Erro ao verificar o jogador existente:', error);
      });
  };
  

  const [countryFlagUrl, setCountryFlagUrl] = useState(null);

  useEffect(() => {
    const fetchCountryFlag = async () => {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/alpha/${countryCode}`
        );
        const countryData = response.data[0];
        const countryFlagUrl = countryData.flags.png;
        setCountryFlagUrl(countryFlagUrl);
      } catch (error) {
        console.error('Erro ao obter a bandeira do país:', error);
      }
    };

    fetchCountryFlag();
  }, [countryCode]);

  const renderQuestion = () => {
    if (currentQuestion === -1) {
      return (
        <div>

          <svg style={{ position: 'absolute', zIndex: '-1', top: '0' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#a2d9ff" fillOpacity="1" d="M0,192L11.4,170.7C22.9,149,46,107,69,96C91.4,85,114,107,137,128C160,149,183,171,206,176C228.6,181,251,171,274,144C297.1,117,320,75,343,64C365.7,53,389,75,411,101.3C434.3,128,457,160,480,176C502.9,192,526,192,549,181.3C571.4,171,594,149,617,122.7C640,96,663,64,686,74.7C708.6,85,731,139,754,160C777.1,181,800,171,823,154.7C845.7,139,869,117,891,112C914.3,107,937,117,960,117.3C982.9,117,1006,107,1029,128C1051.4,149,1074,203,1097,229.3C1120,256,1143,256,1166,250.7C1188.6,245,1211,235,1234,224C1257.1,213,1280,203,1303,176C1325.7,149,1349,107,1371,112C1394.3,117,1417,171,1429,197.3L1440,224L1440,0L1428.6,0C1417.1,0,1394,0,1371,0C1348.6,0,1326,0,1303,0C1280,0,1257,0,1234,0C1211.4,0,1189,0,1166,0C1142.9,0,1120,0,1097,0C1074.3,0,1051,0,1029,0C1005.7,0,983,0,960,0C937.1,0,914,0,891,0C868.6,0,846,0,823,0C800,0,777,0,754,0C731.4,0,709,0,686,0C662.9,0,640,0,617,0C594.3,0,571,0,549,0C525.7,0,503,0,480,0C457.1,0,434,0,411,0C388.6,0,366,0,343,0C320,0,297,0,274,0C251.4,0,229,0,206,0C182.9,0,160,0,137,0C114.3,0,91,0,69,0C45.7,0,23,0,11,0L0,0Z"></path>
          </svg>
          <div className='text-center pt-3 pb-5 my-5'>
            <br />
            <img src={ok} className='' style={{ height: '9em' }} alt="" />
            <h2 >Bem-vindo ao <b className="text-info">Okupalenda Online</b>!</h2>
            <p className='w-75 mx-auto mt-3 fs-6 fw-normal'>Agora já podes jogar Online e estar no Ranking dos jogadores do Okupalenda, teste e aprimore suas habilidades em CTEM, o <b className="text-info">Okupalenda</b> irá sugerir ou lhe ajudar a melhorar</p>
            <button className='btn rounded-0 btn btn-outline-info mt-3' onClick={handleStartGame}>Iniciar Jogo</button>
            <br />
            <span>
              Detectamos que seu país é {countryName} <br /><br />
              <img src={countryFlagUrl} style={{height:'1.7em'}} alt={countryName} />
            </span>
          </div>
        </div>
      );
    }
    if (currentQuestion < shuffledQuestions.length) {
      const question = shuffledQuestions[currentQuestion];
      const isAnswered = selectedOption !== null;

      return (
        <div className='jogo  max-w pt-3 pt-sm-5'>

          <svg style={{ position: 'absolute', zIndex: '-1', top: '0' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#a2d9ff" fillOpacity="1" d="M0,192L11.4,170.7C22.9,149,46,107,69,96C91.4,85,114,107,137,128C160,149,183,171,206,176C228.6,181,251,171,274,144C297.1,117,320,75,343,64C365.7,53,389,75,411,101.3C434.3,128,457,160,480,176C502.9,192,526,192,549,181.3C571.4,171,594,149,617,122.7C640,96,663,64,686,74.7C708.6,85,731,139,754,160C777.1,181,800,171,823,154.7C845.7,139,869,117,891,112C914.3,107,937,117,960,117.3C982.9,117,1006,107,1029,128C1051.4,149,1074,203,1097,229.3C1120,256,1143,256,1166,250.7C1188.6,245,1211,235,1234,224C1257.1,213,1280,203,1303,176C1325.7,149,1349,107,1371,112C1394.3,117,1417,171,1429,197.3L1440,224L1440,0L1428.6,0C1417.1,0,1394,0,1371,0C1348.6,0,1326,0,1303,0C1280,0,1257,0,1234,0C1211.4,0,1189,0,1166,0C1142.9,0,1120,0,1097,0C1074.3,0,1051,0,1029,0C1005.7,0,983,0,960,0C937.1,0,914,0,891,0C868.6,0,846,0,823,0C800,0,777,0,754,0C731.4,0,709,0,686,0C662.9,0,640,0,617,0C594.3,0,571,0,549,0C525.7,0,503,0,480,0C457.1,0,434,0,411,0C388.6,0,366,0,343,0C320,0,297,0,274,0C251.4,0,229,0,206,0C182.9,0,160,0,137,0C114.3,0,91,0,69,0C45.7,0,23,0,11,0L0,0Z"></path>
          </svg>
          <br />
          <center>
            <img src={ok} className='' style={{ height: '9em' }} alt="" />
          </center>
          <div className="container max-w">
            <h2>Pergunta {currentQuestion + 1}</h2>
            <p>Tentativas restantes: {attempts} <br />
              Pontuação: {score} <br />
              Nível: --------{nivel}</p>
            <hr />
            <h3>{question.question}</h3>
            <div className='d-flex flex-column text-start'>
              {question.options.map((option, index) => {
                let optionStyle = {};

                if (isAnswered) {
                  if (index === question.answer) {
                    optionStyle.backgroundColor = selectedOption === index ? 'green' : 'inherit';
                  } else if (selectedOption === index) {
                    optionStyle.backgroundColor = 'red';
                    optionStyle.color = 'white';
                  }
                }

                return (
                  <button className='my-2 my-md-3 my-lg-4 border-info px-2 border-1 py-1 text-start btn-outline-info rounded-0'
                    key={index}
                    onClick={() => handleAnswer(index)}
                    style={optionStyle}
                    disabled={isAnswered || attempts === 0}
                  >
                    {option}
                  </button>

                );
              })}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>

          <svg style={{ position: 'absolute', zIndex: '-1', top: '0' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#a2d9ff" fillOpacity="1" d="M0,192L11.4,170.7C22.9,149,46,107,69,96C91.4,85,114,107,137,128C160,149,183,171,206,176C228.6,181,251,171,274,144C297.1,117,320,75,343,64C365.7,53,389,75,411,101.3C434.3,128,457,160,480,176C502.9,192,526,192,549,181.3C571.4,171,594,149,617,122.7C640,96,663,64,686,74.7C708.6,85,731,139,754,160C777.1,181,800,171,823,154.7C845.7,139,869,117,891,112C914.3,107,937,117,960,117.3C982.9,117,1006,107,1029,128C1051.4,149,1074,203,1097,229.3C1120,256,1143,256,1166,250.7C1188.6,245,1211,235,1234,224C1257.1,213,1280,203,1303,176C1325.7,149,1349,107,1371,112C1394.3,117,1417,171,1429,197.3L1440,224L1440,0L1428.6,0C1417.1,0,1394,0,1371,0C1348.6,0,1326,0,1303,0C1280,0,1257,0,1234,0C1211.4,0,1189,0,1166,0C1142.9,0,1120,0,1097,0C1074.3,0,1051,0,1029,0C1005.7,0,983,0,960,0C937.1,0,914,0,891,0C868.6,0,846,0,823,0C800,0,777,0,754,0C731.4,0,709,0,686,0C662.9,0,640,0,617,0C594.3,0,571,0,549,0C525.7,0,503,0,480,0C457.1,0,434,0,411,0C388.6,0,366,0,343,0C320,0,297,0,274,0C251.4,0,229,0,206,0C182.9,0,160,0,137,0C114.3,0,91,0,69,0C45.7,0,23,0,11,0L0,0Z"></path>
          </svg>
          <br />
          <center>
            <img src={ok} className='mt-3' style={{ height: '10em' }} alt="" />
          </center>
          <div className="container max-w">
            <br />
            <h2>Parabéns {use.name.split(" ")[0]}! Você terminou o jogo.</h2>
            <p>Sua pontuação final: <b className='text-info'>{score}</b> <br />
              Nível alcançado: <b className='text-info'>{nivel}</b></p> <br />
            <center>
              <button className='btn btn-outline-info' onClick={handleRestart}>Recomeçar</button>
            </center>
            <hr />
            <br />
            <div className=''>
              <h4>Ranking Top 5 vencedores</h4>
              <br />

              <table className='table table-striped'>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Pontuação</th>
                  </tr>
                </thead>
                <tbody>
                {players.map((player, index) => (
                    <tr key={index}>
                      <td><Bandeira altura={'23em'} countryCode={player.iso} /></td>
                      <td>  {player.nome}</td>
                      <td><b>{player.pontos}</b> Pts</td>
                    </tr>
                  ))}
                </tbody>
              </table>

            </div>
          </div>
        </div>
      );
    }
  };

  return <div>
    {renderQuestion()}
    <br /><br />
    <div className='text-start d-flex justify-content-between' style={{ position: 'absolute', top: '1rem', left: '1rem', right: '1rem' }}>
     <NavLink to={'/pt'}> <img src={img} height={'18em'} alt="" /></NavLink>

      <b className=''>{use.name}</b>
    </div>
  </div>;
}

export default Quiz;
