import b from '../imgs/icone.png';
import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes } from 'firebase/storage';
import { NavLink, useParams } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import BannerPreto from '../components/banner_preto';
import vagas from './vagas_list';
import Loader from '../components/loader';
import { db } from './firebase';
import { storage } from './firebase';
import { toast } from 'react-toastify';
import { updateDoc } from 'firebase/firestore';
import { ToastContainer } from 'react-bootstrap';

function AppVaga(props) {
    const { id } = useParams();
    const { cart, nomee, emaill, handleClick, adicionar, remover } = props;

    const vaga = vagas.filter((p) => p.id == id);
    const [hoveredImage, setHoveredImage] = useState(null);
    const [load, setLoad] = useState(false);
    const [nomeCompleto, setNomeCompleto] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [arquivoSelecionado, setArquivoSelecionado] = useState(null);

    function handleMouseEnter(e) {
        setHoveredImage(e.target.src);
    }

    function handleMouseLeave(e) {
        setHoveredImage(null);
    }

    const [sent, setSent] = useState(false)

    const send = async () => {
        try {
            setLoad(true);

            // Verifique se os campos obrigatórios estão preenchidos
            if (!nomeCompleto || !telefone || !email) {
                toast.error('Preencha todos os campos obrigatórios!');
                setLoad(false);
                return;
            }

            // Obtenha uma referência para a coleção 'candidaturas'
            const candidaturasCollection = collection(db, 'candidaturas');

            // Crie um objeto com os dados da candidatura
            const candidaturaData = {
                nome: nomeCompleto,
                telefone: telefone,
                email: email,
                vaga: vaga[0].vag,
            };

            // Adicione a candidatura ao Firestore
            const candidaturaRef = await addDoc(candidaturasCollection, candidaturaData);
            toast.success('Candidatura adicionada com sucesso', nomeCompleto);

            // Verifique se um arquivo de currículo ou carta de apresentação foi selecionado
            if (arquivoSelecionado) {
                // Crie uma referência para o arquivo no Firebase Storage
                const storageRef = ref(storage, `arquivos/${nomeCompleto}/${arquivoSelecionado.name}`);

                // Faça o upload do arquivo para o Firebase Storage
                await uploadBytes(storageRef, arquivoSelecionado);
                console.log('Arquivo enviado com sucesso!');
            }

           setSent(true)
         
        } catch (error) {
            console.error('Erro ao enviar candidatura:', error);
        } finally {
            setLoad(false);
        }
    };


    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setArquivoSelecionado(file);
    };

    return (
        <>
            <ToastContainer />
            <div className='destaque '>
                <Header style={{ marginBottom: '5rem' }} nomee={nomee} emaill={emaill} cart={cart} />
                <BannerPreto>
                    {vaga[0].vaga}
                </BannerPreto>
                <br />
                <br />
                <div className="container text-start">
                    <NavLink to={'/pt/carreiras'}><i className="bi bi-arrow-left"></i> Voltar</NavLink>
                </div>
                <br />
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <h5 className="text-primary">
                                Aplicar para vaga de {vaga[0].vaga}
                            </h5>
                            <hr />
                            {id == '9014' ? (
                                <div className="">
                                    {sent == true ?
                                        <div>
                                            <center>
                                                <br />
                                                <i className="bi bi-check2-circle text-primary " style={{fontSize:'70px'}}></i>
                                                <br />
                                                <h3>Sua candidatura foi enviada com sucesso {nomeCompleto}</h3>
                                            </center>
                                        </div>
                                        :
                                        <div>
                                            <span>Sobre esta vaga</span>
                                            <br />
                                            <br />
                                            <b>Competências: </b>
                                            <br />
                                            <ul>
                                                <li>Design</li>
                                                <li>Marketing</li>
                                                <li>UI / UX</li>
                                                <li>Edição de Vídeos</li>
                                            </ul>
                                            <br />
                                            <b>Tarefas:</b>
                                            <ul>
                                                <li>Tratar da imagem e mídias da arotec</li>
                                                <li>Trabalhar com design e UI do website da arotec</li>
                                                <li>Edição de vídeos</li>
                                            </ul>
                                            <br />
                                            <hr />
                                            <br />
                                            <b>Preencha os seus dados</b>
                                            <div className="row">
                                                <div className="col-12 col-md-6 mt-2">
                                                    <label htmlFor="" className='text-secondary f-12'>Nome completo</label>
                                                    <input type="text" className='form-control' placeholder='Seu nome completo' value={nomeCompleto} onChange={(e) => setNomeCompleto(e.target.value)} />
                                                </div>
                                                <div className="col-12 col-md-6 mt-2">
                                                    <label htmlFor="" className='text-secondary f-12'>Telefone</label>
                                                    <input type="tel" className='form-control' placeholder='Seu telefone' value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                                                </div>
                                                <div className="col-12 col-md-6 mt-2">
                                                    <label htmlFor="" className='text-secondary f-12'>E-mail</label>
                                                    <input type="email" className='form-control' placeholder='Seu email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                                </div>
                                                <div className="col-12 col-md-6 mt-2">
                                                    <label htmlFor="" className='text-secondary f-12'>CV / Carta de apresentação</label>
                                                    <input type="file" className='form-control'  />
                                                </div>
                                                <div className="col-12 text-center mt-4">
                                                    <button onClick={send} className="btn mx-auto btn-primary">
                                                        {load === false ? <span> Enviar <i className="bi bi-send"></i></span> : <Loader />}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                    }
                                </div>
                            ) : (
                                <div>
                                    <span>Formulário indisponível</span>
                                    <center className='my-auto'>
                                        <i className="bi bi-exclamation-triangle text-warning f-50"></i>
                                        <br />
                                        <p className="text-warning">A vaga de {vaga[0].vaga} está temporariamente indisponível, volte mais tarde!</p>
                                    </center>
                                </div>
                            )}
                        </div>
                        <div className="col-12 col-sm-6">
                            <center className="my-auto">
                                <img src={b} className='w-50 mt-auto mx-auto' alt="" />
                            </center>
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
    );
}

export default AppVaga;
