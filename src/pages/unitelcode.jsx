import '../App.css';
// Bootstrap CSS
// Bootstrap Bundle JS
import Header from '../components/header';
import Footer from '../components/footer';
import '../css/unitecode.css'
import BannerPreto from '../components/banner_preto';
import { toast } from 'react-toastify';
import { db } from './firebase';
import { useState } from 'react';
import Loader from '../components/loader';
import { NavLink } from 'react-router-dom';

const UnitelCode = ({nomee, emaill,  cart }) => {
  document.title = 'Unitel Code Robotica Inscricao | AROTEC';


  const [nomeCompleto, setNC] = useState('');
  const [foi, setFoi] = useState(false);
  const [telefone, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [enc, setMEnc] = useState('');
  const [resi, setR] = useState('');
  const [idade, setIdade] = useState('');
  const [hora, setH] = useState('');
  const [local, setL] = useState('');
  const [load, setLoad] = useState(false);


  const salvar = () => {
    setLoad(true)
    db.collection('unitel_code').doc(nomeCompleto).set({
      nome: nomeCompleto,
      telefone: telefone,
      email: email,
      endereco: resi,
      hora: hora,
      idade: idade,
      encarregado: enc,
      local: local,
      dataEnvio: new Date(),
    })
      .then(() => {
        setEmail('');
        setTel('');
        setNC('');
        setLoad(false);
        setFoi(true);
        toast.success('Recebemos a sua candidatura com sucesso!');
      })
      .catch((error) => {
        setLoad(false);
        toast.error('Erro ao enviar mensagem!');
      });
  }


  return (
    <div className="w-100">

      < Header  nomee={nomee} emaill={emaill} cart={cart} />
      <BannerPreto>
        Unitel Code Robotica III edição
      </BannerPreto>
      <br />
      <br />
      <div className='container '>
        <div class="row form-unitel justify-content-center align-items-center g-2">
          {
            foi == false ? 
            <div class="col-12 b-form my-1 col-md-6 col-lg-7">
            <h3 className=' f-20 text-primary'>
              Preencha o formulário de inscrição
            </h3>

            <div className="row ">
              <div className="col-12 my-1 col-sm-6">
                <label htmlFor="" className="text-secondary f-12">Nome Completo </label>
                <input value={nomeCompleto} onChange={(e) => setNC(e.target.value)} type="text" className="form-control" placeholder='Nome do formando' />
              </div>
              <div className="col-12 my-1 col-sm-6">
                <label htmlFor="" className="text-secondary f-12">Encarregado</label>
                <input value={enc} onChange={(e) => setMEnc(e.target.value)} type="text" className="form-control" placeholder='Nome do encarregado' />
              </div>
              <div className="col-12 my-1 col-sm-6">
                <label htmlFor="" className="text-secondary f-12">Telefone</label>
                <input value={telefone} onChange={(e) => setTel(e.target.value)} type="text" className="form-control" placeholder='999 000 000' />
              </div>
              <div className="col-12 my-1 col-sm-6">
                <label htmlFor="" className="text-secondary f-12">E-mail</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" placeholder='exemplo@email.com' />
              </div>
              <div className="col-12 my-1 col-sm-6">
                <label htmlFor="" className="text-secondary f-12">Endereço actual</label>
                <input value={resi} onChange={(e) => setR(e.target.value)} type="text" className="form-control" placeholder='Sua residencia actual' />
              </div>
              <div className="col-12 my-1 col-sm-6">
                <label htmlFor="" className="text-secondary f-12">Idade</label>
                <select value={idade} onChange={(e) => setIdade(e.target.value)} name="" id="" className="form-control">
                  <option value="7 anos">7 anos</option>
                  <option value="8 anos">8 anos</option>
                  <option value="9 anos">9 anos</option>
                  <option value="10 anos">10 anos</option>
                  <option value="11 anos">11 anos</option>
                  <option value="12 anos">12 anos</option>
                  <option value="13 anos">13 anos</option>
                  <option value="14 anos">14 anos</option>
                  <option value="15 anos">15 anos</option>
                  <option value="16 anos">16 anos</option>
                </select>
              </div>
              <div className="col-12 my-1 col-sm-6">
                <label htmlFor="" className="text-secondary f-12">Local para Formação</label>
                <select value={local} onChange={(e) => setL(e.target.value)} name="" id="" className="form-control">
                  <option value="">Selecione</option>
                  <option value="Luanda - Viana">Luanda - Viana</option>
                  <option value="Luanda - Belas">Luanda - Belas</option>
                  <option value="Luanda - Cazenga">Luanda - Cazenga</option>
                  <option value="Luanda - Nova Vida">Luanda - Nova Vida</option>
                  <option value="Kwanza Sul">Kwanza Sul</option>
                  <option value="Uíge">Uíge</option>
                </select>
              </div>
              <div className="col-12 my-1 col-sm-6">
                <label htmlFor="" className="text-secondary f-12">Hora da Formação</label>
                <select value={hora} onChange={(e) => setH(e.target.value)} name="" id="" className="form-control">
                  <option value="">Selecione</option>
                  <option value="10h - 12h">10h - 12h</option>
                  <option value="14h - 16h">14 - 16h</option>
                </select>
              </div>

              <div className="col-12 mt-5 mt-md-5 ">
                <button disabled={!nomeCompleto || !resi || !telefone || !enc || !hora || !local || !idade} onClick={() => salvar()} className="btn w-100 btn btn-primary">
                  {load == false ? <span>Enviar <i className="bi bi-send"></i></span> : <Loader />}
                </button>
              </div>
            </div>
          </div>
          : <div>
              <center className='w-75 mx-auto'>
                <i className="bi bi-check2-circle f-50 text-primary"></i>
                <h4 className="text-primary">Sua candidatura foi recebida com sucesso !</h4>
                <span className="text-secondary f-14">vâ para a pagina inicial ou recarregue a pagina para fazer outra candidatura! </span>
                <br />
                <br />
                <NavLink to={'/pt'} className="btn btn-outline-primary">OK</NavLink>
              </center>
            </div>
          }
          <div class="col-12 my-1 unitelBanner col-md-6 col-lg-5">

          </div>
        </div>
      </div>
      <br />
      <br />
      < Footer />

    </div>
  );
}

export default UnitelCode;
