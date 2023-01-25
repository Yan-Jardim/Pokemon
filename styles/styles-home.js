import styled from "styled-components";

export const Header = styled.div`
   background-color: #d20001;
display: flex;
align-items: center;
height: 100px;
width: 100%;
@media (max-width:490px) {
    display: flex;
    flex-direction: column;
    background-color: #d20001;
 }
`
export const BtnAll = styled.button`
border: 1px solid #ccc;
border-radius: 25px;
width: 200px;
height: 30px;
cursor: pointer;
@media (max-width: 490px){
    width: 200px;
    margin-top: 10px;
}
`
export const CampoPesquisa = styled.div`
@media (max-width: 490px){
margin-top:20px;
}`

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
cursor: pointer;
`
export const Main = styled.div`
display: flex;
justify-content: center;
`
export const Img_Main = styled.img`
width: 100%;
height: 775px;
@media (max-width: 490px){
    display:none ;
}
`
export const MobaImg = styled.img`
width: 100%;
height: 775px;
@media (min-width: 490px){
 display: none;
}
`
