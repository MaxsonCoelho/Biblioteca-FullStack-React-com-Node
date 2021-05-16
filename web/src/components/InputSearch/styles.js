import styled from 'styled-components';

export const Container = styled.div`
    background-color:#E0EEEE;
    border:solid 2px #5F9EA0;
    border-radius:10px;
    width:350px;
    height:32px;
    display: flex;
    

    input{
        float:left;
        background-color:transparent;
        padding-left:5px;
        font-size:18px;
        border:none;
        height:32px;
        width:77%;
        display: flex;
    }

    button{
        border:none;
        float:right;
        height:32px;
        border-radius:0 7px 7px 0;
        width:30%;
        font-weight:bold;
        background:#5F9EA0;
        cursor: pointer
      }
      
}
`

