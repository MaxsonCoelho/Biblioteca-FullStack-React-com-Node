import React from 'react';
import * as S from './styles';


function InputSearch({ txtPlaceholder }) {
    return (
      <S.Container>
          <input type="text" placeholder={txtPlaceholder} />
          <button>Buscar</button>
      </S.Container>
    );
  }
  
  export default InputSearch;