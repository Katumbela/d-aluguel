import '../App.css';
// Bootstrap CSS
// Bootstrap Bundle JS
import Header from '../components/header';
import Footer from '../components/footer';
import Banners from '../components/banners';
import BannerPreto from '../components/banner_preto';

const RoboticSchool = ({nomee, emaill,cart}) => {
    document.title='Arotec Robotic School | AROTEC';
  return (
    <div className="w-100">
      
      < Header  nomee={nomee} emaill={emaill} cart={cart} />
      <BannerPreto>
        AROTEC ROBOTIC SCHOOL
      </BannerPreto>
      <div class="container py-4">
        <h2 className="text-primary">
          Cadastre sua instituição
        </h2>
        <p className='text-secondary'>Preencha os dados da instituição para posteriormente poder adicionar estudantes </p>
        <p className="text-secondary">
          Faça o cadastro da sua instituição na data desejada e aguarde pelo nosso feedback para posteriormente fazer o cadastro dos seus estudantes 
        </p>
        <hr />
        <div className="campo my-3"> 
          <label htmlFor="" className="f-12 text-secondary">
            Nome da Instituição <span className="text-danger">*</span>
          </label>
          <input type="text" placeholder='Nome da Escola' className="form-control" />
        </div>
        <div className="campo my-3"> 
          <label htmlFor="" className="f-12 text-secondary">
            Nome do Responsavel <span className="text-danger">*</span>
          </label>
          <input type="text" placeholder='Nome do Responsavel' className="form-control" />
        </div>
        <div className="campo my-3"> 
          <label htmlFor="" className="f-12 text-secondary">
            Contacto <span className="text-danger">*</span>
          </label>
          <input type="tel" placeholder='912345678' className="form-control" />
        </div>
        <div className="campo my-3"> 
          <label htmlFor="" className="f-12 text-secondary">
            E-mail <span className="text-danger">*</span>
          </label>
          <input type="email" placeholder='Ex: exemplo@mail.com' className="form-control" />
        </div>
        <div className="campo my-3"> 
          <label htmlFor="" className="f-12 text-secondary">
            Localizaçāo <span className="text-danger">*</span>
          </label>
          <input type="text" placeholder='Endereço da Instituição' className="form-control" />
        </div>
        <div className="campo my-3"> 
          <label htmlFor="" className="f-12 text-secondary">
            WebSite <span className="text-secondary">(Opcional)</span>
          </label>
          <input type="link" placeholder='Ex: www.arotec.com' className="form-control" />
        </div>
        <div className="campo my-3"> 
          <label htmlFor="" className="f-12 text-secondary">
            Data para Formaçāo <span className="text-danger">*</span>
          </label>
          <input type="date" placeholder='Ex: www.Arotec.com' className="form-control" />
        </div>
        <br />
        <button className="btn btn-outline-primary w-100">Enviar</button>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>

      < Footer />
      
    </div>
  );
}

export default RoboticSchool;
