import React from 'react';
import * as S from './styles';
import photo from '../../assets/cury.png';


function CardAuthor({name, email, category}) {
    return (
      <S.Container>
        <S.TopCard>
          <h3>{name}</h3>
          <img src={photo} alt="Imagem do autor" />
        </S.TopCard>
        <S.BottomCard>
          <span>{email}</span>
          <span>Categoria: {category}</span>
        </S.BottomCard>
      </S.Container>
    );
  }
  
  export default CardAuthor;