import React from 'react';
import * as S from './styles';
import logo from '../../assets/library.png';
import InputSearch from '../InputSearch';
import { Link } from 'react-router-dom';

function Header() {
    return (
      <S.Container>
        <S.LeftSide>
          <img src={logo} alt="logo" />
        </S.LeftSide>
        
        <S.RightSide>
          <InputSearch txtPlaceholder={'Buscar por autores e titulos'}/>
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