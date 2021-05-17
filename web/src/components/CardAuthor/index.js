import React from 'react';
import * as S from './styles';
import photo from '../../assets/cury.png';


function CardAuthor({name, age, category}) {
    return (
      <S.Container>
        <S.TopCard>
          <h3>{name}</h3>
          <img src={photo} alt="Imagem do autor" />
        </S.TopCard>
        <S.BottomCard>
          <span>idade: {age} anos</span>
          <span>Categoria: {category}</span>
        </S.BottomCard>
      </S.Container>
    );
  }
  
  export default CardAuthor;