import '../App.css';
// Bootstrap CSS
// Bootstrap Bundle JS
import Header from '../components/header';
import Footer from '../components/footer';
import DivLoja from '../components/loja/div_prods';
import BannerPreto from '../components/banner_preto';

const Loja = ({handleClick,nomee, emaill, cart}) => {

    document.title='Loja Arotec | AROTEC';
  
    return (
    <div className=" bg-light">
      
      < Header  nomee={nomee} emaill={emaill} cart={cart} />
      <BannerPreto>
        LOJA AROTEC
      </BannerPreto>
      <br />
      <br />
      <DivLoja cart={cart} handleClick={handleClick}/>
      <br />
      <br />
      < Footer />
      
    </div>
  );
}

export default Loja;
