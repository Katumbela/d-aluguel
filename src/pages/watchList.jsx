import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { useParams } from 'react-router-dom';

function Watch({ nomee, emaill, cart }) {
    const { videoId } = useParams();

    document.title = 'Aula | AROTEC';

    const videos = [
        { id: 1, titulo: "Introdução ao curso de pequenos engenheiros", url: 'https://www.youtube.com/embed/2e_gCnLEogQ' },
        { id: 2,  titulo: "Lição 1: Tecnologia e Robootica", url: 'https://www.youtube.com/embed/NrFhfh5dTT0' },
        { id: 3, url: 'https://www.youtube.com/embed/xyz123456' },
        // Adicione mais vídeos aqui
    ];

    // Converta o videoId para número usando parseInt ou unary plus (+)
    const selectedVideoId = parseInt(videoId, 10); // ou +videoId

    // Encontre o vídeo com base no ID numérico
    const video = videos.find((video) => video.id === selectedVideoId);

    return (
        <div className="bg-light w-100">
            <Header style={{ marginBottom: '5rem' }} nomee={nomee} emaill={emaill} cart={cart} />
           
            <main className="container">
            <br />
        <a href="/pt/cursos/daluguel/pequeno_engenheiro"> <i className="bi bi-arrow-left-short"></i> Voltar</a>
        <br /> <br />

            <br />
                <br />
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-8 container-md col-xxl-7">
                        <iframe
                            title={`Video ${video.id}`}
                            width="560"
                            height="315"
                            src={video.url}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-xxl-5">
                        <h2>{video.titulo} </h2>
                    </div>
                </div>
                <br />
            </main>

            <br />
            <br />

            <Footer />
        </div>
    );
}

export default Watch;
