

import '../App.css';
// Bootstrap CSS
// Bootstrap Bundle JS
import Header from '../components/header';
import bb from '../imgs/logo.png';
import Footer from '../components/footer';
import Cursos from '../components/academia/cursos_disponiveis';
import BannerPreto from '../components/banner_preto';
import cursos from './lista_cursos';
import { NavLink, useParams } from 'react-router-dom';
import vid from '../imgs/video.png'


function PlayLis({ nomee, emaill, cart }) {

    const { curso } = useParams();
    const cc = cursos.filter(p => p.id == curso);

    document.title = `PlayList do curso de ${cc[0].curso} | AROTEC`;

    return (
        <div className="bg-light w-100">

           
      < Header style={{marginBottom:'5rem'}} nomee={nomee} emaill={emaill} cart={cart} />
      <br />
      <br />
            <BannerPreto>
                {cc[0].curso}
            </BannerPreto>
            <br />

            <div className="container">
                <center>
                    <h1 className="text-primary">
                        PlayList do Curso
                    </h1>
                    <hr />
                    <br />
                </center>
                <div className="row">
                    <div className="col-12 col-sm-4 col-md-3 col-xl-2">
                        <NavLink to={'/ptw/'} style={{ background: '', padding: '.5em' }} className="vid-car navlink rounded-3 border-primary text-center">
                            <div className="img">
                                <img src={vid} style={{ height: '4em' }} alt="" />
                            </div>
                            <div className="corp">
                                <b>Aula 1: Introdução ao curso</b>
                            </div>
                        </NavLink>
                    </div>
                    <div className="col-12 col-sm-4 col-md-3 col-xl-2">
                        <div style={{ border: '1px solid #0066be', padding: '.5em' }} className="vid-car rounded-3 border-primary text-center">
                            <div className="img">
                                <img src={vid} style={{ height: '4em' }} alt="" />
                            </div>
                            <div className="corp">
                                <b>Aula 1: Introdução ao curso</b>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <br />
            <br />

            < Footer />

        </div>
    );
}

export default PlayLis;
