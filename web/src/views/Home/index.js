import React from 'react';
import * as S from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Card from '../../components/Card';


function Home() {
  return (
    <S.Container>
        <Header />
        <S.Title>
          <h3>Autores</h3>
        </S.Title>
        <S.Content>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </S.Content>
        <Footer />
    </S.Container>
  );
}

export default Home;
