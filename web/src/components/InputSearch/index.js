import React from 'react';
import * as S from './styles';


function InputSearch({ txtPlaceholder }) {


  return (
      <S.AreaInput>
          <input onChange={e => setSearch(e.target.value)}  
          value={search} type="text" placeholder={txtPlaceholder} />
          <button>Buscar</button>
      </S.AreaInput>
    );
  }
  
  export default InputSearch;