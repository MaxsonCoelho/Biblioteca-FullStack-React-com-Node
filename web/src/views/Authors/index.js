import React, { useState, useEffect } from 'react';
import * as S from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CategoryIconsAuthor from '../../utils/categorysAuthor';
import api from '../../services/api';
import { Redirect } from 'react-router-dom';
import { format } from 'date-fns';


function Authors({match}) {

    const [redirect, setRedirect] = useState(false);
    const [name, setName] = useState();
    const [date, setDate] = useState();
    const [email, setEmail] = useState();
    const [category, setCategory] = useState();


    function attributeValidation(){
        if(!name)
            return alert("Por favor informe um nome")
        else if(!date)
            return alert("Por favor informe uma data de nascimento")
        else if(!email)
            return alert("Por favor informe um email válido")
        else if(!category)
            return alert("Por favor selecione uma categoria")
    }


    async function save() {

        attributeValidation()
        if(match.params.id){
            await api.put(`/author/${match.params.id}`, {
                name,
                date: `${date}`,
                email,
                category
            }).then(() => {
                setRedirect(true)
                alert('Autor atualizado com sucesso!')
            })
            .catch(e => console.log(e))

        }else {
            await api.post(`/author`, {
                name,
                date: `${date}`,
                email,
                category
            }).then(() => {
                setRedirect(true)
                alert('Autor adicionado com sucesso!')
            })
            .catch(e => console.log(e))
        }
    }


    async function remove() {
        const res = window.confirm('Deseja realmente remover este autor?')
        if(res === true){
            await api.delete(`/author/${match.params.id}`)
            .then(() => setRedirect(true));
        }
    }


    useEffect(() => {
        async function loadAuthorsDetails(){
            await api.get(`/author/${match.params.id}`)
            .then(response => {
                setName(response.data.name)
                setDate(format(new Date(response.data.date), 'yyyy-MM-dd'))
                setEmail(response.data.email)
                setCategory(response.data.category)
            })
            .catch(e => console.log(e))
        }
        loadAuthorsDetails();
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
                            <img src={icon} alt="Categoria do autor" 
                            className={category && category !== index && 'inative'} />
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
                { match.params.id && <button type="button" onClick={remove} 
                alt="deletar autor">Excluir Autor</button> }
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
