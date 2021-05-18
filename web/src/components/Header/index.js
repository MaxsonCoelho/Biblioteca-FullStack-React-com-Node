import React, { useState } from 'react';
import * as S from './styles';
import logo from '../../assets/library.png';
import { Link } from 'react-router-dom';

function Header() {

  const [search, setSearch] = useState();

  return (
      <S.Container>
        <S.LeftSide>
          <img src={logo} alt="logo" />
        </S.LeftSide>
        
        <S.RightSide>
          <S.Container>
            <S.AreaInput>
              <input onChange={e => setSearch(e.target.value)}  
              value={search} type="text" placeholder="busca por título ou autor" />
              <button>Buscar</button>
            </S.AreaInput>
          </S.Container>
          <Link to="/">Início</Link>
          <span className="dividir"/>
          <Link to="/book">Livros</Link>
          <span className="dividir"/>
          <Link to="/author">Autores</Link>
        </S.RightSide>
      </S.Container>
    );
  }
  
  export default Header;