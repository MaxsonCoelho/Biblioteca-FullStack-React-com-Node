import React, { useState, useEffect } from 'react';
import * as S from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CategoryIconsAuthor from '../../utils/categorysAuthor';
import api from '../../services/api';
import { Redirect } from 'react-router-dom';


function Books({match}) {

    const [redirect, setRedirect] = useState(false);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [category, setCategory] = useState();


    function attributeValidation(){
        if(!title)
            return alert("Por favor informe um título")
        else if(!description)
            return alert("Por favor informe uma descrição detalhada")
        else if(!category)
            return alert("Por favor selecione uma categoria")
    }


    async function save() {
        attributeValidation()
        if(match.params.id){
            await api.put(`/books/${match.params.id}`, {
                title,
                description,
                category
            }).then(() => {
                setRedirect(true)
                alert('Livro atualizado com sucesso!')
            })
            .catch(e => console.log(e))

        }else {
            await api.post(`/books`, {
                title,
                description,
                category
            }).then(() => {
                setRedirect(true)
                alert('Livro adicionado com sucesso!')
            })
            .catch(e => console.log(e))
        }
    }


    async function remove() {
        const res = window.confirm('Deseja realmente remover este livro?')
        if(res === true){
            await api.delete(`/books/${match.params.id}`)
            .then(() => setRedirect(true));
        }
    }


    useEffect(() => {
        async function loadBooksDetails(){
            await api.get(`/books/${match.params.id}`)
            .then(response => {
                setTitle(response.data.title)
                setDescription(response.data.description)
                setCategory(response.data.category)
            })
            .catch(e => console.log(e))
        }
        loadBooksDetails();
    },[])


  return (
    <S.Container>
        { redirect && <Redirect to="/" /> }
        <Header />

        <S.Form>
            <S.CategoryIcons>
                {
                    CategoryIconsAuthor.map((icon, index) => (
                        index > 0 &&
                        <button type="button" onClick={() => setCategory(index)}>
                            <img src={icon} alt="Categoria do livro" 
                            className={category && category !== index && 'inative'} />
                            {index === 1 && 'Romance'} {index === 2 && 'Ação'} {index === 3 && 'Aventura'}
                            {index === 4 && 'Autoajuda'} {index === 5 && 'Gospel'} {index === 6 && 'Motivação'}
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
                <button type="button" onClick={remove} alt="deletar autor">Excluir Livro</button>
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
