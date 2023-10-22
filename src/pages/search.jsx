import { useEffect, useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import produtos from './lista_prods';
import Card from '../components/loja/card';
import cursos from './lista_cursos';
import CardCurso from '../components/card_serv/card_serv';

const Search = (props) => {

  const { cart, nomee, emaill, adicionar, remover, handleClick } = props;
  const [searchTerm, setSearchTerm] = useState('');
  function handleSearchInputChange(e) {
    setSearchTerm(e.target.value);

  }

  const filteredItems = produtos.filter(item => item.tit.toString().toLowerCase().indexOf(searchTerm.toString().toLowerCase()) !== -1);
  const filteredCursos = cursos.filter(curso => curso.nome.toString().toLowerCase().indexOf(searchTerm.toString().toLowerCase()) !== -1);

  return (
    <div className='bg-light'>
      <Header nomee={nomee} emaill={emaill} cart={cart} />
      <div className="container">
        <br />
        <br />
        <br />
        <br />
        <br />
        <h4 className='mb-3'>Procura por algo ?</h4>
        <div className="d-flex">
          <input type="search" name="" value={searchTerm} onChange={handleSearchInputChange} id="" placeholder='Faça uma pesquisa' className=" form-control" />
          <button className="btn btn-primary">
            <i className="bi bi-search"></i>
          </button>
        </div>
        <br />

        {
          searchTerm.length > 1 && (
            <>
              <div className="row">

                {filteredCursos.map(item => (
                  <CardCurso key={item.id} c={item} />
                ))}

                {filteredItems.map(item => (
                  <Card key={item.id} item={item} handleClick={handleClick} />
                ))}

              </div>
            </>
          )
        }
        {/* || filteredCursos == 0 */}

        {filteredItems == 0 && <center><span className='mx-auto text-secondary'>Não foi encontrado um outro resultado</span></center>}

        {searchTerm.length == '' && <center><span className='mx-auto text-secondary'>
          <br />
          <center><span className='mx-auto text-primary'>Olá, faça uma pesquisa!</span></center>
          <br /><br /><br /><br /><br /><br /><br /><br /><br />
        </span></center>}





      </div>

      <Footer />

    </div>
  );
};
export default Search;