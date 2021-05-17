import React, { useState, useEffect } from 'react';
import * as S from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CategoryIconsAuthor from '../../utils/categorysAuthor';


function Authors() {
  

  return (
    <S.Container>
        <Header />

        <S.Form>
            <S.CategoryIcons>
                {
                    CategoryIconsAuthor.map(icon => (
                        <img src={icon} alt="Tipo da Tarefa" />
                    ))
                }
            </S.CategoryIcons>
        </S.Form>

        <Footer />
    </S.Container>
  );
}

export default Authors;
