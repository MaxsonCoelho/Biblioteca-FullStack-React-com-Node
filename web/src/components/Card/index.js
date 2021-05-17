import React from 'react';
import * as S from './styles';
import photo from '../../assets/cury.png';


function Card() {
    return (
      <S.Container>
        <S.TopCard>
          <h3>Auguto cury</h3>
          <img src={photo} alt="Imagem do autor" />
        </S.TopCard>
  
        <S.BottomCard>
          <span>idade: 54 anos</span>
          <span>Categoria: Autoajuda</span>
        </S.BottomCard>
      </S.Container>
    );
  }
  
  export default Card;