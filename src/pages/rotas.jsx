import { Route, BrowserRouter, Routes } from "react-router-dom";
import Arobot from "../produtos/detalhe_prod";
import Academia from "./academia";
import RoboticSchool from "./arotec_robotic_school";
import Carreiras from "./carreiras";
import Cart from "./carrinho";
import Contactar from "./contactar";
import CriarConta from "./criar_conta";
import DetalheCurso from "./detalhe_curso";
import Empresas from "./empresas";
import Formulario from "./formulario_curso";
import Home from "./home";
import Login from "./login";
import Loja from "./loja";
import Politicas from "./politicas";
import Projectos from "./projectos";
import Sobre from "./sobre";
import UnitelCode from "./unitelcode";
import { useEffect, useState } from "react";
import Search from "./search";
import LoginPage from "./eg_login";
import BuyNow from "./comprar_agora";
import Aplicar from "./aplicar_curso";
import { UserProvider } from "./userContext";
import AppVaga from "./submit_vaga";
import SubmitP from "./enviar_projecto";
import MeusC from "./meus_cursos";
import PlayList from "./playlist";
import Jogo from "./okupalenda";
import Jogos from "./jogo";
import Quiz from "./okupalenda";
import VerP from "./ver_project";
import NotFoundPage from "./notfound";
import Watch from "./watchList";
import Sinopec from "./sinopec_learn";
import SemanaEspacial from "./semana_espacial";
import Faqs from "./faqs";


const RotasPT = (props) => {

    const {emaill, setEmaill, nomee, setNomee, cart, adicionar, remover, handleClick } = props;

    return (
        <BrowserRouter>
            <UserProvider>
                <Routes >
                    <Route element={<Home nomee={nomee} emaill={emaill} cart={cart} />} path="/pt/" />
                    <Route element={<NotFoundPage/>} path="" />
                    <Route element={<Academia  nomee={nomee} emaill={emaill} cart={cart} />} path="/pt/academia" exact />
                    <Route element={<Sinopec  nomee={nomee} emaill={emaill} cart={cart} />} path="/pt/sinopec_learn_inscricao" exact />
                    <Route element={<SemanaEspacial  nomee={nomee} emaill={emaill} cart={cart} />} path="/pt/semana_mundial_do_espaco" exact />
                    <Route element={<Projectos  nomee={nomee} emaill={emaill} cart={cart} />} path="/pt/projectos" exact />
                    <Route element={<Empresas  nomee={nomee} emaill={emaill} cart={cart} />} path="/pt/empresas" exact />
                    <Route element={<Loja  nomee={nomee} emaill={emaill} cart={cart} handleClick={handleClick} />} path="/pt/loja" exact />
                    <Route element={<Arobot nomee={nomee} emaill={emaill} cart={cart} handleClick={handleClick} />} path="/pt/produtos/store/:id" exact />
                    <Route element={<Cart  nomee={nomee} emaill={emaill} adicionar={adicionar} remover={remover} handleClick={handleClick} cart={cart} />} path="/pt/cart" exact />
                    <Route element={<RoboticSchool  nomee={nomee} emaill={emaill} cart={cart} />} path="/pt/arotec_robotic_school" exact />
                    <Route element={<Contactar  nomee={nomee} emaill={emaill} cart={cart} />} path="/pt/contactar" exact />
                    <Route element={<Faqs  nomee={nomee} emaill={emaill} cart={cart} />} path="/pt/faqs" exact />
                    <Route element={<Sobre  nomee={nomee} emaill={emaill} cart={cart} />} path="/pt/sobre" exact />
                    <Route element={<Carreiras emaill={emaill} nomee={nomee} cart={cart} />} path="/pt/carreiras" exact />
                    <Route element={<UnitelCode  nomee={nomee} emaill={emaill} cart={cart} />} path="/pt/unitel_code_robotica_inscricao" exact />
                    <Route element={<PlayList  nomee={nomee} emaill={emaill} cart={cart} />} path="/pt/cursos/daluguel/pequeno_engenheiro" exact />
                    <Route element={<Watch  nomee={nomee} emaill={emaill} cart={cart} />} path="/pt/equipement/daluguel/watch/aula/:videoId" exact />
                    <Route element={<Login cart={cart}  emaill={emaill} setEmaill = {setEmaill} nomee={nomee} setNomee={setNomee}  />} path="/pt/login" exact />
                    <Route element={<MeusC cart={cart}  emaill={emaill} setEmaill = {setEmaill} nomee={nomee} setNomee={setNomee}  />} path="/pt/meus_cursos" exact />
                    <Route element={<LoginPage />} path="/pt/loginn" exact />
                    <Route element={<NotFoundPage/>}/>
                    <Route element={<BuyNow  nomee={nomee} emaill={emaill} cart={cart} handleClick={handleClick} />} path="/pt/comprar_agora/:id" exact />
                    <Route element={<Aplicar  nomee={nomee} emaill={emaill} cart={cart} handleClick={handleClick} />} path="/pt/aplicar/:id" exact />
                    <Route element={<SubmitP  nomee={nomee} emaill={emaill} cart={cart} handleClick={handleClick} />} path="/pt/add-artigo" exact />
                    <Route element={<CriarConta />} path="/pt/criar_conta" exact />
                    <Route element={<Jogos />} path="/pt/okupalenda" exact />
                    <Route element={<Quiz />} path="/pt/okupalenda/game" exact />
                    <Route element={<Search  nomee={nomee} emaill={emaill} adicionar={adicionar} remover={remover} handleClick={handleClick} cart={cart} />} path="/pt/s/" exact />
                    <Route element={<Politicas  nomee={nomee} emaill={emaill}cart={cart} />} path="/pt/politicas_de_privacidade" exact />
                    <Route element={<Formulario  nomee={nomee} emaill={emaill} cart={cart} />} path="/pt/formulario/equipement/:id" exact />
                    <Route element={<AppVaga  nomee={nomee} emaill={emaill} cart={cart} />} path="/pt/application/submit/:id" exact />
                    <Route element={<VerP  nomee={nomee} emaill={emaill} cart={cart} />} path="/pt/ver_projecto/:id" exact />
                    <Route element={<DetalheCurso  nomee={nomee} emaill={emaill} cart={cart} />} path="/pt/academia/equipement/daluguel/:id" exact />

                </Routes>
            </UserProvider>
        </BrowserRouter>
    )
}

export default RotasPT;