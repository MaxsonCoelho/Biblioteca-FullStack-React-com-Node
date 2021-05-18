import React, { useState, useEffect } from 'react';
import * as S from './styles';
import api from '../../services/api';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CardAuthor from '../../components/CardAuthor';
// import CardBook from '../../components/CardBook';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Link } from 'react-router-dom';


function Home() {

  const [author, setAuthor] = useState([]);
  // const [book, setBook] = useState([]);
  const [scrollXAuthor, setscrollXAuthor] = useState(0);
  // const [scrollXBook, setscrollXBook] = useState(0);


  // async function loadBooks() {
  //   await api.get('/books/filter/all')
  //   .then(response => {
  //     setBook(response.data.results)
  //   })
  // }

  function handleLeftArrowLeftAuthor() {
    let x = scrollXAuthor + Math.round(window.innerWidth / 2);
    if(x > 0) {
      x = 0;
    }
    setscrollXAuthor(x);
  }

  async function handleRightArrowRightAuthor() {
    
    let x = scrollXAuthor - Math.round(window.innerWidth / 2);
      let listW = author.length * 240;
      if((window.innerWidth - listW) > x) {
        await api.get(`/author/filter/all/?page=1&limit=${author}`)
      .then(response => {
        setAuthor(response.data.results)
      })
      x = (window.innerWidth - listW) - 60;
      }
      setscrollXAuthor(x);  
    
  }

  // function handleLeftArrowLeftBook() {
  //   let x = scrollXBook + Math.round(window.innerWidth / 2);
  //   if(x > 0) {
  //     x = 0;
  //   }
  //   setscrollXBook(x);
  // }

  // function handleRightArrowRightBook() {
  //   let x = scrollXBook - Math.round(window.innerWidth / 2);
  //   let listW = book.length * 150;
  //   if((window.innerWidth - listW) > x) {
  //     x = (window.innerWidth - listW) - 60;
  //   }
  //   setscrollXBook(x);
  // }


  useEffect(() => {

    async function loadAuthors() {
      await api.get('/author/filter/all')
      .then(response => {
        setAuthor(response.data.results)
      })
    }
    loadAuthors();
  },[])
  

  return (
    <S.Container>
        <Header />
        <S.Title>
          <h3>Autores</h3>
        </S.Title>
        <S.IconMovieRowLeft onClick={handleLeftArrowLeftAuthor}>
          <NavigateBeforeIcon style={{fontSize: 50}} />
        </S.IconMovieRowLeft>
        <S.IconMovieRowRight onClick={handleRightArrowRightAuthor}>
          <NavigateNextIcon style={{fontSize: 50}} />
        </S.IconMovieRowRight>
        <S.Content>
          <S.RowList style={{
            marginLeft: scrollXAuthor, 
            width: author.length * 250}}>
          {
            author.map(a => (
              <Link to={`/author/${a._id}`} >
                <CardAuthor name={a.name} email={a.email} category={a.category} />
              </Link>
            ))
          }
          </S.RowList>
        </S.Content>
        <S.Title>
          <h3>Livros</h3>
        </S.Title>
        {/* <S.IconMovieRowLeft onClick={handleLeftArrowLeftBook}>
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
            <CardBook title={b.title} description={b.description} category={b.category} />
          ))}
          </S.RowList>
        </S.Content> */}
        <Footer />
        {author.length <= 0 && (
          <S.Loading>
            <img src="https://i.gifer.com/ZZ5H.gif" alt="loading" />
          </S.Loading>
        )}
    </S.Container>
  );
}

export default Home;
