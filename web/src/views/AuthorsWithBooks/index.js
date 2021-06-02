import React, { useState, useEffect } from 'react';
import * as S from './styles';
import api from '../../services/api';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CardAuthor from '../../components/CardAuthor';
import CardBook from '../../components/CardBook';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Link } from 'react-router-dom';


function AuthorsWithBooks() {

  const [author, setAuthor] = useState([]);
  const [book, setBook] = useState([]);
  const [scrollXBook, setscrollXBook] = useState(0);



  function handleLeftArrowLeftBook() {
    let x = scrollXBook + Math.round(window.innerWidth / 2);
    if(x > 0) {
      x = 0;
    }
    setscrollXBook(x);
  }
  

  async function handleRightArrowRightBook() {
    let x = scrollXBook - Math.round(window.innerWidth / 2);
    let listW = book.length * 240;
    if((window.innerWidth - listW) > x) {
      await api.get(`/books/filter/all/?page=1&limit=${book}`)
    .then(response => {
      setBook(response.data.results)
    })
      x = (window.innerWidth - listW) - 60;
    }
    setscrollXBook(x);  
  }

  async function loadAuthors() {
    await api.get('/author/filter/all')
    .then(response => {
      const result = response.data.results
      setAuthor(result.name)
    })
  }

  useEffect(() => {
    loadAuthors();
  },[])


  async function loadBooks() {
    await api.get('/books/filter/all')
    .then(response => {
      setBook(response.data.results)
    })
  }

  useEffect(() => {
    loadBooks();
  },[])
  

  return (
    <S.Container>
        <Header />
        <h3>Livros do autor: </h3>
        <S.Title>
          <h3>Livros</h3>
        </S.Title>
          {book.length <= 0 && (
            <S.Loading>
              <img src="https://i.gifer.com/ZZ5H.gif" alt="loading" />
              <h2>Não existem registros</h2>
            </S.Loading>
          )
          }
        <S.IconMovieRowLeft onClick={handleLeftArrowLeftBook}>
          <NavigateBeforeIcon style={{fontSize: 50}} />
        </S.IconMovieRowLeft>
        <S.IconMovieRowRight onClick={handleRightArrowRightBook}>
          <NavigateNextIcon style={{fontSize: 50}} />
        </S.IconMovieRowRight>
        <S.Content>
          <S.RowList style={{
            marginLeft: scrollXBook, 
            width: book.length * 250}}>
          {book.map(b => (
            <Link to={`/book/${b._id}`} >
              <CardBook title={b.title} description={b.description} category={b.category} />
            </Link>
          ))}
          </S.RowList>
        </S.Content>
        <Footer />
        
    </S.Container>
  );
}

export default AuthorsWithBooks;
