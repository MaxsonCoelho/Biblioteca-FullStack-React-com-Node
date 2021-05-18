import React from 'react';
import * as S from './styles';
import photo from '../../assets/cury.png';


function CardBook({title, description, category}) {
    return (
      <S.Container>
        <S.TopCard>
          <h3>{title}</h3>
          <img src={photo} alt="Imagem do autor" />
        </S.TopCard>
        <S.BottomCard>
          <span>{description}</span>
          <span>Categoria: {category}</span>
        </S.BottomCard>
      </S.Container>
    );
  }
  
  export default CardBook;