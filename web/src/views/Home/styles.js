import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin-bottom: 100px;

`
export const Content = styled.div`
    overflow-x: hidden;
    padding-left: 30px;

    a{
        text-decoration: none;
        color: #000;
    }
`

export const RowList = styled.div`
    transition: all ease 0.5;
    display: inline-block;
    
`

export const IconMovieRowLeft = styled.button`
    border: none;
    position: absolute;
    width: 40px;
    height: 350px;
    background: none;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
    cursor: pointer;
    opacity: 0.5;
    transition: all ease 0.5s;

    &:hover{
        opacity:1;
    }
`

export const IconMovieRowRight = styled.button`
    border: none;
    position: absolute;
    width: 40px;
    height: 350px;
    background: none;
    z-index: 29;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 0;
    cursor: pointer;
    opacity: 0.5;
    transition: all ease 0.5s;

    &:hover{
        opacity:1;
    }
`

export const Title = styled.div`
    width: 100%;
    border-bottom: 1px solid #20295f;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;

    h3{
        color: #20295f;
        position: relative;
        top: 30px;
        background: #fff;
        padding: 0 20px;
    }
`


export const Loading = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    
`
