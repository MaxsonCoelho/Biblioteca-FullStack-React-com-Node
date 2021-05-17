import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;
`


export const Form = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
`

export const CategoryIcons = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    
    .inative{
        opacity: 0.5;
    }
    

    button{
        border: none;
        background: none;

    }

    img{
        height: 50px;
        width: 50px;
        margin: 10px;
        cursor: pointer;

        &:hover{
            opacity: 0.5;
        }
    }
`

export const Input = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0;

    span{
        color: #707070;
        margin-bottom: 5px;
    }

    input{
        font-size: 16px;
        padding: 15px;
        border: none;
        border-bottom: 1px solid #610B21;
    }

    textarea{
        width: 100%;
        border: 1px solid #610B21;
    }

`

export const Delete = styled.div`
    display: flex;
    justify-content: flex-end;


    button{
        font-weight: bold;
        color: #610B21;
        border: none;
        background: none;
        font-size: 17px;
        cursor: pointer;

        &:hover{
            opacity: 0.5;
        }
    }

`

export const Save = styled.div`
    width: 100%;
    margin-top: 20px;

    button{
        width: 100%;
        background: #610B21;
        border: none;
        font-size: 20px;
        color: #FFF;
        font-weight: bold;
        padding: 20px;
        border-radius: 30px;
        cursor: pointer;

        &:hover{
            opacity: 0.7;
        }
    }


`
