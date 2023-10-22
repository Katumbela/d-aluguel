import React from 'react';
import '../css/destaque.css'
import { NavLink, useParams } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import { useEffect, useState } from 'react';
import bb from '../imgs/bb.jpeg'
import BannerPreto from '../components/banner_preto';
import '../css/detalhe.css';
import cursos from './lista_cursos';
import logo from '../imgs/icone.png';
import Accordion from '../components/accordion';
import Loader from '../components/loader';
import { toast } from 'react-toastify';
import { db } from './firebase';

function Aplicar({ emaill, nomee, cart }) {
    const { id } = useParams();
    const cc = cursos.filter(p => p.id == id);
    console.log(cc);
    const [d, setD] = useState(true)
    if (id === 2021) {
        setD(false)
    }

    const [showPassword, setShowPassword] = useState(false);
    const [load, setL] = useState(false);
    const [suc, setS] = useState(false);
    const [password, setPassword] = useState("");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [end, setEnd] = useState("");

    const handlePasswordChange = event => {
        setPassword(event.target.value);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };


    const [use, setUser] = useState([]);

    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const salvar = () => {
        setL(true)
        db.collection('inscricao').doc(nome).set({
            nome: nome,
            email: email,
            telefone: tel,
            endereco: end,
            senha: password,
            curso: cc[0].curso,
            modalidade: selectedOption,
            dataEnvio: new Date(),
        })
            .then(() => {
                setEmail('');
                setTel('');
                setNome('');
                setPassword('');
                setEnd('')
                setL(false);
                setS(true);
                toast.success('Recebemos a sua mensagem com sucesso!');
            })
            .catch((error) => {
                setL(false);
                toast.error('Erro ao enviar mensagem:');
            });
    }


    document.title = `Aplicar para o curso de ${cc[0].curso} | AROTEC`;

    useEffect(() => {
        // Obtém o valor de 'users' do local storage quando o componente for montado
        const userString = localStorage.getItem('users');
        if (userString) {
            const user = JSON.parse(userString);
            setUser(user);
            setNome(user.name)
            setEmail(user.email)
            setTel(user.tel)
        }
        else {
            const userData = {
                name: '',
                email: '',
                pictureUrl: '',
                tel: '',
            }
            setUser(userData);
        }
    }, []);

    return (
        <>
            <div className='destaque '>

               
      < Header style={{marginBottom:'5rem'}} nomee={nomee} emaill={emaill} cart={cart} />
     <BannerPreto >
                    {cc[0].curso}
                </BannerPreto>
                <br />
                <br />
                <div className="container text-start">
                </div>


                {
                    suc == true &&

                    <div>
                        <center>
                            <br />
                            <br />
                            <i className="bi bi-check2-circle text-primary " style={{ fontSize: '70px' }}></i>
                            <br />
                            <h2 className="text-primary">Candidatura Feita com sucesso</h2>

                            <div className=" w-75 container">
                                <span className="w-75 text-secondary">
                                    Caro {nome}, a sua inscrição foi submetida com sucesso, logo poderá acessar o seu painel de estudante
                                </span>
                                <br />
                                <br />
                                <NavLink to={'/pt/academia'} className="btn btn-outline-primary">OK</NavLink>
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />

                            </div>
                        </center>
                    </div>
                }


                <div className="container">

                    {/* <div className="alert alert-warning"> <i className="bi bi-exclamation-triangle me-2"></i> Algumas funcionalidades ainda estão sob manutenção!</div> */}

                    {
                        use.name != '' ?
                            <h3 className='text-primary'>Aplique para este curso {use.name}!</h3>
                            :
                            <h3 className='text-primary'>Aplicar para este curso</h3>

                    }
                    <hr />
                    <br />
                    <div className="">

                        <b className="text-dark">Preencha o formulário abaixo</b>
                        <div className="row  form-unitel justify-content-center align-items-center g-2">
                            <div className="col-12 col-md-6">
                                <div className="my-2">
                                    <label htmlFor="" className="text-secondary  f-12">Nome <span className="text-danger">*</span></label>
                                    <input value={nome} onChange={(e) => setNome(e.target.value)} type="text" placeholder='Nome completo' className="form-control" />
                                </div>
                                <div className="my-2">
                                    <label htmlFor="" className="text-secondary f-12">Telefone  <span className="text-danger">*</span></label>
                                    <input value={tel} onChange={(e) => setTel(e.target.value)} type="text" placeholder='900 000 000' className="form-control" />
                                </div>
                                <div className="my-2">
                                    <label htmlFor="" className="text-secondary f-12">Email <span className="text-danger">*</span></label>
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Seu email' className="form-control" />
                                </div>
                                <div className="my-2">
                                    <label htmlFor="" className="text-secondary f-12">Endereço </label>
                                    <input type="text" value={end} onChange={(e) => setEnd(e.target.value)} placeholder='Residência' className="form-control" />
                                </div>
                                <div className="my-2">
                                    <label htmlFor="" className="text-secondary f-12">Crie uma senha <span className="text-danger">*</span></label>
                                    <div className="d-flex">
                                        <input onChange={handlePasswordChange} value={password} type={showPassword ? "text" : "password"} placeholder='*******' className="form-control" />
                                        <button style={{ background: 'none', border: 'none' }} onClick={toggleShowPassword}>
                                            {showPassword ? <i className='bi bi-eye-slash f-26 text-danger'></i> : <i className='bi text-primary bi-eye f-26'></i>}
                                        </button>
                                    </div>
                                </div>

                                {
                                    id == 2021 ?

                                        <div className="col-12 my-2 col-sm-6">
                                            <label htmlFor="n" className="f-12 text-secondary label">Modalidade</label><br />
                                            <div className="d-flex justify-content-between">
                                                <label htmlFor="rr" className="f-12 mt-3 text-secondary label">
                                                    <input value="Online"
                                                        checked={selectedOption === 'Online'}
                                                        onChange={handleOptionChange} type="radio" name="mm" className='me-2  form-check-input' id="rr" />
                                                    <span>Online</span>
                                                </label>

                                                <label htmlFor="rer" className="f-12 mt-3 text-secondary label">
                                                    <input value="Presencial"
                                                        checked={selectedOption === 'Presencial'}
                                                        onChange={handleOptionChange} type="radio" name="mm" className='me-2 form-check-input' id="rer" />
                                                    <span>Presencial</span>
                                                </label>
                                            </div>
                                        </div>
                                        :

                                        <div className="col-12 my-2 col-sm-6">
                                            <label htmlFor="n" className="f-12 text-secondary label">Modalidade</label><br />
                                            <div className="d-flex justify-content-between">

                                                <label htmlFor="rer" className="f-12 mt-3 text-secondary label">
                                                    <input value="opcao1"
                                                        checked={selectedOption === 'Presencial'}
                                                        onChange={handleOptionChange} disabled type="radio" name="mm" className='me-2 form-check-input' id="rer" />
                                                    <span>Presencial</span>
                                                </label>
                                            </div>
                                        </div>
                                }
                                <div className="my-4">

                                    <button onClick={() => salvar()} disabled={!nome || !email || !end || !tel || !password || !selectedOption} className="btn w-100 btn-outline-primary">
                                        {
                                            load == false ? <span>Enviar</span> : <Loader />
                                        }
                                    </button>

                                </div>
                            </div>

                            <div className="col-12 applybanner col-md-6">
                                {/* <img src={bb} alt="" className="w-100" /> */}
                            </div>
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

export default Aplicar;
