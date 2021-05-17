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
    const [date, setDate] =useState();
    const [email, setEmail] = useState();
    const [category, setCategory] =useState();


    async function save() {
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
            .catch(e => alert(`Falta escolher ou preencher alguma opção${e}`))

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
            .catch(e => alert(`Falta escolher ou preencher alguma opção${e}`))
        }
    }

    async function loadAuthorsDetails(){
        await api.get(`/author/${match.params.id}`)
        .then(response => {
            console.log(response)
            setName(response.data.name)
            setDate(format(new Date(response.data.date), 'yyyy-MM-dd'))
            setEmail(response.data.email)
            setCategory(response.data.category)
        })
        .catch(e => console.log(e))
    }

    useEffect(() => {
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
