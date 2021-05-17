import React, { useState, useEffect } from 'react';
import * as S from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CategoryIconsAuthor from '../../utils/categorysAuthor';
import api from '../../services/api';


function Authors() {

    const [name, setName] = useState();
    const [date, setDate] =useState();
    const [email, setEmail] = useState();
    const [category, setCategory] =useState();


    async function save() {
        await api.post(`/author`, {
            name,
            date: `${date}`,
            email,
            category
        }).then(() =>
            alert('Autor adicionado com sucesso!')
        )
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
                            <img src={icon} alt="Categoria do autor" 
                            className={category && category != index && 'inative'} />
                        </button>
                    ))
                }
            </S.CategoryIcons>
            <S.Input>
                <span>Nome</span>
                <input type="text" placeholder="Insira nome completo"
                onChange={e => setName(e.target.value)} value={name}/>
            </S.Input>
            <S.Input>
                <span>E-mail</span>
                <input type="email" placeholder="Insira um e-mail"
                onChange={e => setEmail(e.target.value)} value={email}/>
            </S.Input>
            <S.Input>
                <span>Data de Nascimento</span>
                <input type="date" placeholder="Insira uma data de aniversário"
                onChange={e => setDate(e.target.value)} value={date}/>
            </S.Input>
            <S.Delete>
                <button type="button" alt="deletar autor">Excluir Autor</button>
            </S.Delete>
            <S.Save>
                <button type="button" onClick={save} >Salvar</button>
            </S.Save>
        </S.Form>

        <Footer />
    </S.Container>
  );
}

export default Authors;
