import React, { useState, useEffect } from 'react';
import * as S from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CategoryIconsAuthor from '../../utils/categorysAuthor';


function Authors() {
  
    const [category, setCategory] = useState();

  return (
    <S.Container>
        <Header />

        <S.Form>
            <S.CategoryIcons>
                {
                    CategoryIconsAuthor.map((icon, index) => (
                        index > 0 &&
                        <button type="button" onClick={() => setCategory(index)}>
                            <img src={icon} alt="Categoria do autor" 
                            className={category && category != index && 'inative'} />
                        </button>
                    ))
                }
            </S.CategoryIcons>
            <S.Input>
                <span>Nome</span>
                <input type="text" placeholder="Insira nome completo"></input>
            </S.Input>
            <S.Input>
                <span>E-mail</span>
                <input type="email" placeholder="Insira um e-mail"></input>
            </S.Input>
            <S.Input>
                <span>E-mail</span>
                <input type="date" placeholder="Insira uma data de aniversário"></input>
            </S.Input>
            <S.Delete>
                <button type="button" alt="deletar autor">Excluir Autor</button>
            </S.Delete>
            <S.Save>
                <button type="button" >Salvar</button>
            </S.Save>
        </S.Form>

        <Footer />
    </S.Container>
  );
}

export default Authors;
