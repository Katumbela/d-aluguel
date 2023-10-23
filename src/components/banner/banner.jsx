import React, { useEffect, useState } from "react";
import "./banner.css";
import { NavLink } from "react-router-dom";
import arobot from "../../imgs/bann_kit.gif";
import play from "../../imgs/play.png";
import v2 from "../../video/v1.mp4";
import v1 from "../../video/v2.mp4";
import { Fade } from "react-awesome-reveal";
import CardCurso from "../card_serv/card_serv";
import getCursosData from "../../pages/lista_cursos";

const Banner = () => {
  const [load, setLoad] = useState(false);
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCursosData();
      setCursos(data);
    };

    fetchData();
  }, []); // o segundo argumento do useEffect é um array de dependências, coloque aqui qualquer dependência necessária

  const [searchTerm, setSearchTerm] = useState("");
  function handleSearchInputChange(e) {
    setSearchTerm(e.target.value);
  }
  const [searchTerm2, setSearchTerm2] = useState("");
  function handleSearchInputChange2(e) {
    setSearchTerm2(e.target.value);
  }

  const filteredEquipements = cursos.filter(
    (curso) =>
      curso.nome.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (searchTerm2 === "" ||
        curso.endereco.toLowerCase().includes(searchTerm2.toLowerCase()))
  );

  const listarTudo = () => {
    setSearchTerm("");
  };

  return (
    <>
      <div className="banner">
        <div className="body-banner  container w-75">
          <h2 className="text-white titulo">
            Alugue equipamentos e diversos para o seu próximo projecto
          </h2>
          <div className="controllers d-flex">
            <div
              data-bs-toggle="modal"
              data-bs-target="#modal2"
              className="homeowner d-flex"
            >
              <img src={play} alt="" /> <span>Apresentação </span>
            </div>
          </div>
        </div>
        <div className="input-search">
          <div className="input-form">
            <i className="bi my-auto bi-search"></i>
            <input
              type="search"
              name=""
              value={searchTerm}
              onChange={handleSearchInputChange}
              placeholder="O que procura ?"
              id="pesquisar"
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="container-fluid container-lg">
        <div className="row">
          <div className="col-12 col-md-4 col-xl-3 col-xxl-2 pt-1">
            <div className="shadow-md card-opt p-3">
              <button
                onClick={() => listarTudo()}
                className="btn btn-primary w-100"
              >
                Listar tudo
              </button>

              <button className="btn my-3 btn-secondary w-100">
                Ver por Categoria
              </button>
              <br />
              <b>Endereço</b>
              <div className="search-by">
                <label htmlFor="d" className="">
                  Buscar por endereço
                </label>
                <input
                  type="text"
                  value={searchTerm2}
                  onChange={handleSearchInputChange2}
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="col-12 container-xxl container-fluid col-md-8 col-xl-9 col-xxl-10">
            {(searchTerm.length > 0 || searchTerm2.length > 0) && (
              <div className="row">
                {filteredEquipements.map((item) => (
                  <CardCurso key={item.id} c={item} />
                ))}
              </div>
            )}

            {/* || filteredEquipements == 0 */}

            {filteredEquipements == 0 && (
              <center>
                <span className="mx-auto text-secondary">
                  Não foi encontrado um outro resultado para o que procura!
                </span>
              </center>
            )}

            {searchTerm.length == "" && searchTerm2.length == "" && (
              <div className="row mx-2">
                {cursos.map((item) => (
                  <CardCurso key={item.id} c={item} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="modal2"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <video width="640" height="360" controls>
              <source src={v2} type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
