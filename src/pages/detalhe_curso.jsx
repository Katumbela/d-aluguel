import React, { useEffect, useState } from 'react';
import '../css/destaque.css'
import { NavLink, useParams } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import BannerPreto from '../components/banner_preto';
import '../css/detalhe.css';

import logo from '../imgs/icone.png';
import Accordion from '../components/accordion';
import getCursosData from './lista_cursos';

function DetalheCurso({ nomee, emaill, cart }) {
  const { id } = useParams();
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCursosData();
      setCursos(data);
    };

    fetchData();
  }, []); // o segundo argumento do useEffect é um array de dependências, coloque aqui qualquer dependência necessária


  const cc = cursos.filter(p => p.docId == id);
  console.log(cc);
  return (
    <>
      <div className='destaque '>

        < Header nomee={nomee} emaill={emaill} cart={cart} />
        {/* <BannerPreto >
            {cc[0]?.nome}
        </BannerPreto> */}

        <br />
        <br />
        <div className="d-flex flex-wrap justify-content-between container-fluid container-lg">

          <div>
            <h2>{cc[0]?.nome}</h2>
            <p className="text-secondary f-12">Postado Internamente</p>
          </div>
          <div className='d-flex my-auto'>
            <a className='text-dark' href="#">Enviar Mensagem</a>
          </div>
        </div>
        <div className="container text-start">
        </div>
        <br />

        <div className="container">


          <div className="row ">
            <div className="col-12 text-start py-3 col-md-7 col-xxl-7">

              <div className="row">

                <div className="col-6 col-sm-4 col-md-3">
                  <b>Marca</b>
                  <p className="text-secondary f-12">{cc[0]?.marca}</p>
                </div>
                <div className="col-6 col-sm-4 col-md-3">
                  <b>Modelo</b>
                  <p className="text-secondary f-12">{cc[0]?.modelo}</p>
                </div>
                <div className="col-6 col-sm-4 col-md-3">
                  <b>Localização</b>
                  <p className="text-secondary f-12">{cc[0]?.endereco}</p>

                </div>
              </div>

              <br />
              <hr />

              <div className="detalhes">

                <b>DESCRIÇÃO</b>
                <p className='text-secondary'>
                  {cc[0]?.descricao}
                </p>

                <br />
                <br />
                <b className='mb-2'>INFORMAÇÃO ADICIONAL</b>
                <br />
                <br />
                <fieldset >
                  <div>

                    <table className=" table table-striped">
                      <thead>
                        <tr>
                          <th>Hora/tempo</th>
                          <th>Preço ( AOA )</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>8h</td>
                          <td>{cc[0]?.oitoh}</td>
                        </tr>
                        <tr>
                          <td>1 dia</td>
                          <td>{cc[0]?.dia}</td>
                        </tr>
                        <tr>
                          <td>1 semana</td>
                          <td>{cc[0]?.semana}</td>
                        </tr>
                        <tr>
                          <td>1 mês</td>
                          <td>{cc[0]?.ummes}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </fieldset>

              </div>
            </div>

            <div className="col-12 col-md-5 col-xxl-5">
              <div className="scroll d-flex" style={{ overflowX: 'auto' }}>
                {cc[0]?.imagens.map((imagem, index) => (
                  <a key={index} href={imagem.url}>
                    <img
                      src={imagem.url}
                      style={{ height: '20em', margin: index === 1 ? '0 3rem' : '0' }}
                      alt=""
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

        <br />
        <br />
        <br />
        <br />


        <Footer />
      </div>
    </>
  )
}

export default DetalheCurso;
