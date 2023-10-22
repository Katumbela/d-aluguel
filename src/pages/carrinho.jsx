import { useEffect, useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import { NavLink } from 'react-router-dom';

const Cart = (props) => {

  const [preco, setPreco] = useState(0);
 const {cart, nomee, emaill, adicionar, remover, handleClick} = props;
let qnt = 0 ;


cart.map((item) => (qnt +=  item.qty ));

  const precos = () => {
    let ans = 0;
    cart.map((item) => (ans +=  item.preco * item.qty));
    setPreco(ans);
  }

  useEffect(() => {
    precos();
  })

    return (
      <div className='bg-white'>
      <Header  nomee={nomee} emaill={emaill} cart={cart} />
      <div className="container">
        <br />
        <br />
        <h2>Produtos no carrinho</h2>
        <hr />

<center>
  {cart.length == 0 && <div><span className="text-secondary">Seu carrinho está Vazio</span> <br />
  <NavLink to={'/pt/loja'} >
    <button className="btn-outline-primary mt-2 f-14 btn">Faça Compras <i className="bi bi-cart"></i></button>
  </NavLink>
  </div>}
</center> 
        <article >
          {cart.map((item) => (
            <div className="" key={item.id}>
              <div className='d-flex ' style={{borderBottom:'1px solid #d9d9d9', height:'8em'}}>
                <div className="im my-auto">
                  <img style={{height:'4em'}} src={item.img} alt="" />
                </div>
                <div className="my-auto w-100 ms-3">
                <h3>{item.tit}</h3>
                <div className="d-flex w-100 justify-content-between">
                <p className='mt-auto'>Preço: {item.preco} Kz</p>
                  <button className="btn d-flex f-12 btn-outline-primary" style={{height: '2em', lineHeight: '0', fontSize: '12px'}}>
                    <span onClick={()=>remover(item)} className='my-auto'>-</span><span className="my-auto mx-2">{item.qty}</span><span onClick={()=>adicionar(item)} className="my-auto">+</span>
                  </button>
                </div>
            </div>
             
      
            </div>
            </div>
          ))}
          
                  <br />

                {
                  cart.length !== 0 &&
                  <div className="row">
                    <div className="col-6 col-md-8">
                      <span className="f-14">Compra de {qnt} itens</span>
                       <h4>Total: {preco} Kz</h4>
                    </div>
                    <div className="col-6 col-md-4 text-end">
                       {/* We currently do not deliver the kits, the customer will have to pick them up at the laboratory<button className="btn btn-primary">Finalizar compra</button> */}
                       <center>
                            <i className="bi bi-exclamation-triangle f-50 text-secondary "></i>
                            <br />
                            <span className="text-secondary f-14">As compras estão temporariamente suspensas!</span>
                        </center>
                    </div>
                  </div>

                }
        
          <br />
          <br />

        </article>
      </div>

            <Footer />

      </div>
    );
  };
export default Cart;