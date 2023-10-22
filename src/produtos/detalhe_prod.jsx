
import React, { useState } from 'react';
import '../css/header.css';
import '../css/destaque.css'
import { NavLink, useParams } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import BannerPreto from '../components/banner_preto';
import produtos from '../pages/lista_prods';
import '../css/detalhe.css';

function Arobot (props) {
    const {id} = useParams();
    const {cart,nomee, emaill, handleClick, adicionar, remover} = props;

    const pp = produtos.filter((p) => p.id == id);
    const [hoveredImage, setHoveredImage] = useState(null);


    function handleMouseEnter(e) {
        setHoveredImage(e.target.src);
      }

      function handleMouseLeave(e) {
        setHoveredImage(null);
      }
            
document.title =`Encomenda de ${pp[0].tit}`
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

        <NavLink to={'/pt/loja'}><i className="bi bi-arrow-left"></i> Voltar</NavLink>
        </div>
        <br />
        <br />
        
<div className="container">

     
        <div className="row prods-set">
            <div className="col-12 text-start py-3 col-sm-6 col-md-8 col-lg-6">
                <h3 style={{textTransform: 'uppercase'}}> {pp[0].tit} &middot; AROTEC</h3>
                <p className="text-secondary">
                {pp[0].desc} 
                </p>
                <br />
              <div className="row">
                    <div className="d-flex my-2 col-12 col-md-6">
                        <button  style={{borderRight: '1px solid white'}} className="btn btn-dark">
                        {pp[0].preco} Kz
                        </button>
                        <button onClick={() => handleClick(pp[0])} className="btn btn-dark" style={{borderLeft: '1px solid white'}}>
                        Adicionar <i className="bi ms-2 bi-cart"></i>
                        </button>
                    </div>
                    <div className="my-2 col-12 col-md-6">
                        <NavLink to={'/pt/comprar_agora/'+id} className="btn btn-outline-primary" >
                        Comprar agora <i className="bi ms-2 bi-cart"></i>
                        </NavLink>
                    </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 position-relative col-md-4 col-lg-6">
                <img 
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave} src={pp[0].img} alt="Banner Arobot" className="w-100" />
        <div
  className={`zoom-square ${hoveredImage ? 'show' : ''}`}
  style={{
    backgroundImage: `url(${hoveredImage})`
  }}
></div>


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

export default Arobot;
