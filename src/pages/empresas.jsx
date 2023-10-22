import '../App.css';
// Bootstrap CSS
// Bootstrap Bundle JS
import Header from '../components/header';
import Footer from '../components/footer';
import Banners from '../components/banners';
import BannerPreto from '../components/banner_preto';
import aro from '../imgs/aro.jpg';
import un1 from '../imgs/unitel10.jpg';
import un from '../imgs/unitel.png';
import cat from '../imgs/cat.jpg';
import cat1 from '../imgs/cat-logo.jpeg';
import r from '../imgs/robm2.png';
import unitel from '../imgs/unitel.png'
import ggpn from '../imgs/ggpn.png'
import sfa from '../imgs/sfa.png'
import hub from '../imgs/hub.jpeg'
import rema from '../imgs/rema.jpeg'

const Empresas = ({nomee, emaill, cart}) => {
    document.title='Empresas | AROTEC';
  return (
    <div className="w-100">
      
      < Header  nomee={nomee} emaill={emaill} cart={cart} />
      <BannerPreto>
        PARA EMPRESAS
      </BannerPreto>
<br /><br />

<div className="container">

<div className="row border bg-light">
        <div  style={{display: 'grid', placeContent: 'center'}} className="col-12 col-xl-6 py-4 col-lg-7 col-sm-7">
          <div className='my-auto px-2'>
            <h1>Desde dispositivos inteligentes, softwares e IA</h1>
            <p className='f-14'>
            A Arotec é composta por engenheiros especialistas em hardware e softwares inteligentes. Oferecemos soluções para design, fabricação e desenvolvimento de hardware e softwares.
            </p>
          </div>
        </div>
        <div className="col-12 col-sm-5 text-end col-xl-6 col-lg-5 p-2">
          <img src={aro} className='w-100' style={{height:'22em'}} alt="" />
          </div>
      </div>
      <br />
<br /><br />
      <div className="">
        <div className="row">
          <div className="col-12 col-sm-6">
            <h5>A AROTEC oferece soluções educacionais personalizados</h5>

            <p className='text-secondary f-14'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate doloribus dolores rem tenetur numquam exercitationem laborum consectetur.
            </p>
          </div>
          <div className="col-12 col-sm-6">
            <p className="d-flex gap-2">
              <div className="bg-light rounded-circle " style={{display: 'grid', height:'2em', width:'2em', placeContent: 'center'}}>
                 <i className="bi my-auto bi-check f-26 mx-1 text-primary"></i>
              </div>
              <b className="f-16 my-auto">Responsabilidade social empresas</b>
            </p>
            <p className="d-flex gap-2">
              <div className="bg-light rounded-circle " style={{display: 'grid', height:'2em', width:'2em', placeContent: 'center'}}>
                 <i className="bi my-auto bi-check f-26 mx-1 text-primary"></i>
              </div>
              <b className="f-16 my-auto">Aulas de robótica para escolas</b>
            </p>
            <p className="d-flex gap-2">
              <div className="bg-light rounded-circle " style={{display: 'grid', height:'2em', width:'2em', placeContent: 'center'}}>
                 <i className="bi my-auto bi-check f-26 mx-1 text-primary"></i>
              </div>
              <b className="f-16 my-auto">Consultoria e criação de laboratórios</b>
            </p>
          </div>
        </div>
      </div>
      <br /><br />

      <div className="deved">
        <h3 className='text-primary'>Soluções Desenvolvidas</h3>
      
        <div className="row">
          <div className="col-12 my-4 col-sm-4">
            <div className="mx-"   >
            <img src={un1}  className='w-100' alt="" />
            <h4 className="mt-2 text-primary">
            Responsabilidade social empresas
            </h4>
            <p className="text-secondary f-14">
            A arotec oferece formações especializadas para as áreas de responsabilidades das empresas. Formações nas áreas de ctem (ciência, tecnologia, engenharia e matemática).
            </p>
            <br />
            <img src={un} className='' style={{width: '6rem', height:''}} alt="unitel" />
            </div>
          </div>

          <div className="col-12 my-4 col-sm-4">
            <div className="mx-"   >
            <img src={cat}  className='w-100' alt="" />
            <h4 className="mt-2 text-primary">
            Aulas de robótica para escolas
            </h4>
            <p className="text-secondary f-14">
            Oferecemos tutores e programas para ensino de robótica nas escolas, programas extras curriculares e inserção da robótica no currículo escolar.
            </p>
            <br />
            <div className="d-flex gap-3">
            <img src={cat1} className='rounded-pill' style={{width: '5rem', height:'4em'}} alt="unitel" />
            <img src={sfa} className='rounded' style={{width: '5rem', height:'4em'}} alt="unitel" />
            </div>
            </div>
          </div>

          <div className="col-12 my-4 col-sm-4">
            <div className="mx-"   >
            <img src={r} className='w-100' alt="" />
            <h4 className="mt-2 text-primary">
            Consultoria e criação de laboratórios
            </h4>
            <p className="text-secondary f-14">
            Consultoria e criação de laboratórios nas áreas de ctem (ciência, tecnologia, engenharia e matemática). Oferecemos desde a concepção, fornecimento de equipamentos instalação e treinamentos dos devidos técnicos.</p>
            </div>
          </div>
        </div>
      </div>

<br /><br />
<hr />
<br /><br />
<div className="">
  <h3 className="text-primary">Parceiros</h3>
  <br />
       <div className="row mt-4">
        <div className="col-6 my-2 text-center col-sm-4 col-md-3 col-lg-2">
          <img src={rema} alt="Parceiria" style={{height: '2.5em'}}/>
        </div>
        <div className="col-6 my-2 text-center col-sm-4 col-md-3 col-lg-2">
          <img src={ggpn} alt="Parceiria" style={{height: '2.5em'}}/>
        </div>
        <div className="col-6 my-2 text-center col-sm-4 col-md-3 col-lg-2">
          <img src={hub} alt="Parceiria" style={{height: '2.5em'}}/>
        </div>
      </div>
      <br />
</div>

</div>


<br /><br /><br />

      < Footer />
      
    </div>
  );
}

export default Empresas;
