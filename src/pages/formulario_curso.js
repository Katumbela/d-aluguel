import React, { useEffect } from 'react'
import { useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import mascote from '../imgs/r2.png'
import '../css/form.css'

export default function Formulario({emaill, nomee,cart}) {


    return (
      <>
      < Header  nomee={nomee} emaill={emaill} cart={cart} />
      <br />
      <br />
      <br />
     <div className="container">
        <div className="row">
            <div className="col-12 t-center col-md-6 col-lg-4">
                <img src={mascote} alt="Mascote IMG" className='w-100 w50 mx-auto my-3' />
            </div>
            <div className="col-12 col-md-6 col-lg-8">
                <center>
                    <h3>Inscrição para o curso de Eletrônica</h3>
                    <span className="f-14 text-secondary">Preencha os seus dados abaixo</span>
                </center>
                <hr />
                <div className="row">
                    <div className="col-12 my-2 col-sm-6">
                        <label htmlFor="n" className="f-12 text-secondary label">Nome</label>
                        <input type="text" className="form-control" placeholder='Joao' />
                    </div>
                    <div className="col-12 my-2 col-sm-6">
                        <label htmlFor="n" className="f-12 text-secondary label">Sobrenome</label>
                        <input type="text" className="form-control" placeholder='Afonso Katombela' />
                    </div>
                    <div className="col-12 my-2 col-sm-6">
                        <label htmlFor="n" className="f-12 text-secondary label">Telefone</label>
                        <input type="tel" className="form-control" placeholder='999 000 000' />
                    </div>
                    <div className="col-12 my-2 col-sm-6">
                        <label htmlFor="n" className="f-12 text-secondary label">E-mail</label>
                        <input type="email" className="form-control" placeholder='exemplo@email.com' />
                    </div>
                    <div className="col-12 my-2 col-sm-6">
                        <label htmlFor="n" className="f-12 text-secondary label">Endereço</label>
                        <input type="email" className="form-control" placeholder='Provincia, mun...' />
                    </div>
                    <div className="col-12 my-2 col-sm-6">
                        <label htmlFor="n" className="f-12 text-secondary label">Modalidade</label><br />
                        <div className="d-flex justify-content-between">
                            <label htmlFor="rr" className="f-12 mt-3 text-secondary label"> 
                                <input type="radio" name="" className='me-2' id="rr" />
                                <span>Online</span>
                            </label>

                            <label htmlFor="rr" className="f-12 mt-3 text-secondary label"> 
                                <input checked type="radio" name="" className='me-2' id="rr" />
                                <span>Presencial</span>
                            </label>
                        </div>
                    </div>

                    <div className="col-12 my-2 col-sm-12">
                        <label htmlFor="n" className="f-12 text-secondary label">Crie uma senha</label>
                        <input type="password" className="form-control" placeholder='--------' />
                    </div>

                    <div className="col-12 my-3 col-sm-12">
                        <button className="btn btn-primary w-100">Finalizar</button>
                    </div>
                </div>

            </div>
        </div>
     </div>
      <br />
      <br />
      <br />
      <br />
      <br />



      <Footer />
      </>  
    );
}
