import React from 'react';
import * as S from './styles';
import photo from '../../assets/cury.png';


function CardBook({title, description, category}) {
    return (
      <S.Container>
        <S.TopCard>
          <h4>{title}</h4>
          <img src={photo} alt="Imagem do autor" />
        </S.TopCard>
        <S.BottomCard>
          <span>Descrição: {description}</span>
          <span>Categoria: {category}</span>
        </S.BottomCard>
      </S.Container>
    );
  }
  
  export default CardBook;