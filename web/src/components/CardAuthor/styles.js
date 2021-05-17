import styled from 'styled-components';


export const Container = styled.div`
    width: 180px;
    height: 330px;
    flex-direction: column;
    box-shadow: 12px -10px 55px -21px rgba(0,0,0,0.75);
    display: flex;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    margin: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-block;

    img{
        width: 100%;
        height: 210px;
        transform: scale(0.9);
        transition: all ease 0.2s;

        &:hover{
            transform: scale(1);
        }
    }

    &:hover{
        opacity: 0.5;
    }
    
`


export const TopCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`


export const BottomCard = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;

    span{
        margin: 5px;
    }
    
`