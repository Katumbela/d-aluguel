
import React, { useState } from 'react';
import '../css/header.css';
import '../css/destaque.css'
import { NavLink, useParams } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import BannerPreto from '../components/banner_preto';
import produtos from '../pages/lista_prods';
import '../css/detalhe.css';

function BuyNow (props) {
    const {id} = useParams();
    const {cart, nomee, emaill, handleClick, adicionar, remover} = props;

    const pp = produtos.filter((p) => p.id == id);
    const [hoveredImage, setHoveredImage] = useState(null);


    function handleMouseEnter(e) {
        setHoveredImage(e.target.src);
      }

      function handleMouseLeave(e) {
        setHoveredImage(null);
      }
            

    return (
        <>
  <div className='destaque '>
    
  < Header  nomee={nomee} emaill={emaill} cart={cart} />
        <BannerPreto >
            {pp[0].tit}
        </BannerPreto>
        <br />
        <br />
        <div className="container text-start">

</div>
        <br />
        
<div className="container">

     
        <div className="row prods-set">
            <div className="col-12 text-start py-3 col-sm-6 col-md-8 col-lg-6">
                <h5 className='text-primary' style={{textTransform: 'uppercase'}}>Compra Instantânea de  {pp[0].tit} </h5>
                <p className="text-secondary">
                    <div className="row">
                        <div className="col-12 my-2 col-md-6">
                            <label htmlFor="" className="text-secondary f-12">Insira seu nome completo <span className="text-danger">*</span></label>
                            <input type="text" placeholder='Digite seu nome' name="" id="" className="form-control" />
                        </div>
                        <div className="col-12 my-2 col-md-6">
                            <label htmlFor="" className="text-secondary f-12">Insira seu email <span className="text-danger">*</span></label>
                            <input type="text" name="" placeholder='E-mail' id="" className="form-control" />
                        </div>
                        <div className="col-12 my-2 col-md-6">
                            <label htmlFor="" className="text-secondary f-12">Contacto <span className="text-danger">*</span></label>
                            <input type="text" name="" placeholder='Seu telefone' id="" className="form-control" />
                        </div>
                        <div className="col-12 my-2 col-md-6">
                            <label htmlFor="" className="text-secondary f-12">Seu endereço <span className="text-danger">*</span></label>
                            <input type="text" name="" placeholder='Residencia actual' id="" className="form-control" />
                        </div>
                        <div className="col-12 my-2 col-md-12">
                            <label htmlFor="" className="text-secondary f-12">Informação Adicional (opcional) </label>
                            <textarea name="" id="" cols="30" rows="2" className="form-control w-100" placeholder='Informação adicional'></textarea>
                        </div>
                        <div className="col-12 my-3 col-md-12">
                            
                            <p className="f-12">Actualmente não fazemos entregas dos kits, o cliente terá que pegar no laboratorio</p>
                        </div>
                    </div>
                </p>
              <div className="row">
                    <div className="col-12 col-md-12">
                        {/* <button className="btn w-100 btn-outline-primary" >
                        Finalizar Compra <i className="bi ms-2 bi-cart"></i>
                        </button> */}
                        <center>
                            <i className="bi bi-exclamation-triangle f-50 text-secondary "></i>
                            <br />
                            <span className="text-secondary f-14">As compras estão temporariamente suspensas!</span>
                        </center>
                    </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-6">
                <img  src={pp[0].img} alt="" className="w-100 my-auto" />
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

export default BuyNow;
