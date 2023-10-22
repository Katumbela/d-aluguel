import '../App.css';
// Bootstrap CSS
// Bootstrap Bundle JS
import Header from '../components/header';
import Footer from '../components/footer';
import Banners from '../components/banners';
import BannerPreto from '../components/banner_preto';
import { NavLink } from 'react-router-dom';
import vagas from './vagas_list';

const Carreiras = ({ emaill, nomee, cart }) => {
  document.title = 'Carreiras & Estagios | AROTEC';
  return (
    <div className="w-100">

     
      < Header style={{marginBottom:'5rem'}} nomee={nomee} emaill={emaill} cart={cart} />
    
      <BannerPreto >
        CARREIRAS & ESTÁGIOS
      </BannerPreto>
      <br />
      <div className="container">

        <h3 className="text-primary">Vagas de estágio (Não Remunerado) </h3>
        <hr />
        <span className="text-secondary f-12">Abertas em 31 Jan. 2023</span>
        <br />
        <br />
        <div className="row">
          {
            vagas.map((vg) => (
              <div key={vg.id} className="col-12 my-2 col-sm-6 col-md-4 col-lg-3">
                <div className="shadow rounded-3 bg-light px-3 pt-2">
                  <NavLink to={'/pt/application/submit/'+vg.id} className={'navlink p-1 '} >
                    <b className="text-primary" style={{ textDecoration: 'underline' }}>{vg.vaga}</b>
                    <span className="text-secondary d-flex flex-column">
                      <span className='f-10'><i className="bi bi-geo"></i>{vg.tipo}</span>
                      <span className='f-10'><i className="bi bi-watch"></i>{vg.time}</span>
                    </span>
                  </NavLink>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <br />
      <br /><br /><br />
      <br />
      < Footer />

    </div>
  );
}

export default Carreiras;
