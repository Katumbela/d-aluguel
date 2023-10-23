import React, { useEffect } from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './card_serv.css';


const CardCurso = ({ c }) => {

    const { docId, nome, ano, imagens,modelo, marca, minimo, idUser, userName, categoria, review, preco, duracao, lastUpdate, img1 } = c;

    return (
        <NavLink style={{textDecoration:'none'}} title={'Clique para ver'+docId} className=" py-3 cc navlink col-12 my-3 col-xxl-6 shadow" to={"/pt/platform/equipement/daluguel/" + docId}>
            <div className=" d-flex w-100">
                <div className="serv_img">
                    <img  style={{height: '12em', width: '15em'}} src={imagens[0].url} alt="pequeno engenheiro" />
                </div>
                <div className="px-2 ms-2 w-100 text-secondary text-start">
                    <h4 className=' text-dark'>{nome}</h4>
                    <div className="row linhas-d">
                        <div className="col-6">
                            <span className="">Marca </span>
                        </div>
                        <div className="col-6">
                            <span className="">{marca}</span>
                        </div>
                    </div>
                    <div className="row linhas-d">
                        <div className="col-6">
                            <span className="">Ano</span>
                        </div>
                        <div className="col-6">
                            <span className="">{ano}</span>
                        </div>
                    </div>
                    <div className="row linhas-d">
                        <div className="col-6">
                            <span className="">Modelo</span>
                        </div>
                        <div className="col-6">
                            <span className="">{modelo}</span>
                        </div>
                    </div>
                    <div className="row linhas-d">
                        <div className="col-6">
                            <span className="">Apartir de</span>
                        </div>
                        <div className="col-6">
                            <span className="">{preco} Kz</span>
                        </div>
                    </div>
                </div>
            </div>
        </NavLink>
    );
}

export default CardCurso;


