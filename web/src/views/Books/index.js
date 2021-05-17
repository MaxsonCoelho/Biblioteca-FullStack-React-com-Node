import React, { useState, useEffect } from 'react';
import * as S from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CategoryIconsAuthor from '../../utils/categorysAuthor';
import api from '../../services/api';


function Books() {

    const [title, setTitle] = useState();
    const [description, setDescription] =useState();
    const [category, setCategory] =useState();


    async function save() {
        await api.post(`/books`, {
            title,
            description,
            category
        }).then(() => {
            alert('Livro adicionado com sucesso!')
        })
        .catch(e => alert(`Falta escolher ou preencher alguma opção${e}`))
    }


  return (
    <S.Container>
        <Header />

        <S.Form>
            <S.CategoryIcons>
                {
                    CategoryIconsAuthor.map((icon, index) => (
                        index > 0 &&
                        <button type="button" onClick={() => setCategory(index)}>
                            <img src={icon} alt="Categoria do livro" 
                            className={category && category != index && 'inative'} />
                        </button>
                    ))
                }
            </S.CategoryIcons>
            <S.Input>
                <span>Título</span>
                <input type="text" placeholder="Insira o título"
                onChange={e => setTitle(e.target.value)} value={title}/>
            </S.Input>
            <S.Input>
                <span>Description</span>
                <textarea type="text" placeholder="Insira uma descrição detalhada"
                onChange={e => setDescription(e.target.value)} value={description}/>
            </S.Input>
            <S.Delete>
                <button type="button" alt="deletar autor">Excluir Livro</button>
            </S.Delete>
            <S.Save>
                <button type="button" onClick={save} >Salvar</button>
            </S.Save>
        </S.Form>

        <Footer />
    </S.Container>
  );
}

export default Books;
