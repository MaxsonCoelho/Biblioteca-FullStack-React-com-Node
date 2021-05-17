import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    height: 70px;
    background-color: #610B21;
    border-bottom: 5px solid #B43104;

    display: flex;
`

export const LeftSide = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 10px;

    img{
        width: 50px;
        height:: 70px;
    }
`

export const RightSide = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;

    .dividir::after{
        content: "|";
        margin: 0 10px;
        color: #fff;
    }

    a{
        color: #fff;
        font-weight: bold;
        text-decoration: none;
        margin: 0 10px;

        &:hover{
            color: #088A29;
        }
    }
`