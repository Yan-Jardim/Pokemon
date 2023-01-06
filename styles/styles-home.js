import styled from "styled-components";

export const Header = styled.div`
background-color: #f85800;
display: flex;
align-items: center;
height: 50px;
width: 100%;
@media (max-width:406px) {
    display: flex;
    flex-direction: column-reverse;
    height: 20%;
 }
`
export const BtnAll = styled.button`
border: 1px solid #ccc;
border-radius: 25px;
width: 200px;
height: 30px;
color: #120a7f;
cursor: pointer;
@media (max-width: 360px){
    margin-left: 15%;
}
`
export const CampoPesquisa = styled.div``

export const Input = styled.input`
height: 30px;
border: 1px solid #ccc;
border-radius: 25px;
text-align: center;
cursor: pointer;
`

export const BtnInput = styled.button`
height: 30px;
width: 70px ;
margin-left: 10px;
border: 1px solid #ccc;
border-radius: 25px;
color: #120a7f;
cursor: pointer;
`
export const Main = styled.div`
display: flex;
justify-content: center;
`
export const Img_Main = styled.img`
width: 1200px;
height: 585px;
@media (max-width: 1200px){
    width: 100%;
}
`