import styled from "styled-components";

export const Header = styled.div`
background-color:  #f85800;
display: flex;
align-items: center;
height:  100px;
max-width: 1900px;
min-width: 300px;
@media (max-width:406px) {
    display: flex;
    flex-direction: column-reverse;
 }
`
export const BtnVoltar = styled.button`
width: 70px;
height: 30px;
max-width: 1350px;
cursor: pointer;
color: #120a7f;
border-radius: 25px;
border: 1px solid #ccc;
`
export const Logo = styled.img`
width: 250px;
height: 100px;
`
export const Main = styled.div`
margin-top: 50px;
`
export const CardsPosition = styled.div`
display: flex;
flex-wrap: wrap;
max-width: 1350px;
`
export const Cards = styled.div`
display: flex;
flex-direction: column;
border: 1px solid #ccc;
border-radius: 10%;
margin-top: 10px;
width: 200px;
height: 200px;
`
export const Img = styled.img`
width: 150px;
height: 150px;
`
export const Name = styled.p`
color: white;
font-weight: bold;
font-size: 20px;
margin-top: 25px;
`
export const BtnF = styled.button`
color: #120a7f;
cursor: pointer;
padding: 5px;
border: none;
border-radius: 5px;
`