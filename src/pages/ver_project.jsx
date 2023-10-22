import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import BannerPreto from '../components/banner_preto';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

import YouTube from 'react-youtube';
import { db } from './firebase';

// Configurar o Firebase com suas credenciais

// Inicializar o Firebase

function SeeP({ nomee, emaill, cart }) {
  const { id } = useParams();

  const [projeto, setProjeto] = useState(null);
  useEffect(() => {
    // Criar uma referência para a coleção de projetos no Firebase Firestore
    const projetosRef = firebase.firestore().collection('projetos');
  
    // Consultar o projeto com base no ID fornecido
    projetosRef
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          // Se o documento existir, salvar os dados do projeto no estado
          setProjeto(doc.data());
          incrementarVisualizacoes(doc.id); // Chamar a função aqui, após obter o documento com sucesso
        } else {
          // Se o documento não existir, exibir uma mensagem de erro
          console.log('Project not found.');
        }
      })
      .catch((error) => {
        // Em caso de erro, exibir uma mensagem de erro
        console.log('Erro ao obter projeto:', error);
      });
  }, [id]);
  
  const incrementarVisualizacoes = (projetoId) => {
    const projetoRef = db.collection('projetos').doc(projetoId);
    
    projetoRef.update({
      visualizacoes: firebase.firestore.FieldValue.increment(1)
    })
    .then(() => {
      console.log('Contador de visualizações atualizado com sucesso.');
    })
    .catch((error) => {
      console.error('Erro ao atualizar contador de visualizações:', error);
    });
  };
  

  if (!projeto) {
    return <center>
        <p>Searching Project...</p>
    </center>;
  }

  document.title = `See Project ${projeto.titulo} | AROTEC`;

  const youtubeVideoId = getYoutubeVideoId(projeto.link);

  // Função para extrair o ID do vídeo do YouTube a partir do link
  function getYoutubeVideoId(link) {
    const regex = /[?&]v=([^?&]+)/;
    const match = link.match(regex);
    if (match) {
      return match[1];
    } else {
      return null;
    }
  }
  
  const youtubePlayerOptions = {
    playerVars: {
      controls: 0, // Oculta os controles do player
      modestbranding: 1, // Oculta o logotipo do YouTube
      disablekb: 1, // Desabilita o controle por teclado
      rel: 0, // Desabilita os vídeos relacionados ao final do vídeo
      showinfo: 0, // Oculta as informações do vídeo (título, autor, etc.)
      fs: 0, // Oculta o botão de tela cheia
    },
  };
  


  return (
    <>
      <div className='destaque'>
        <Header nomee={nomee} emaill={emaill} cart={cart} />
        <br />
        <br />
        <div className='container text-start'>
            <div className="row">
                <div className="col-12 col-xxl-8 col-sm-7">
        <YouTube videoId={youtubeVideoId} opts={youtubePlayerOptions} />
                </div>
                <div className="col-12 col-xxl-4 col-sm-5 text-start">
                    <h2>{projeto.titulo}</h2>
                    <hr />
                   <p>Video de: <b className='ms-2'>{projeto.nome}</b> <br />
                   E-mail: <b className='ms-2'>{projeto.email}</b>
                   </p>
                   <br />
                   <p>
                    <span style={{textDecoration:'underline'}}>Sobre o projecto:</span> <br />
                    {projeto.descricao}
                   </p>
                   <br />
                   <br />
                   <span style={{textDecoration:'underline'}}>Visualizacoes:</span> <i className="bi bi-eye"></i> <br />
                   <h2>{projeto.visualizacoes}</h2> 

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
        <Footer />
      </div>
    </>
  );
}

export default SeeP;
