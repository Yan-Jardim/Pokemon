import styled from "styled-components"

export const OpacityModal = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100vh;
position: fixed;
top: 0;
left: 0;
z-index: 10;
background-color: rgba(0,0,0,0.8);
`

export const Modal = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 50%;
height: 600px;
background-image: linear-gradient(180deg, red, white);
color: #000;
border-radius: 10px;
max-width: 1000px;
min-width: 500px;
@media (max-width:800px) and (min-width: 550px)  {
width: 100px;
height: 500px;
}
`
export const BtnF = styled.button`
color: #120a7f;
cursor: pointer;
padding: 5px;
border: none;
border-radius: 5px;
margin-top: 20px;
margin-right: 20px;
@media (max-width:500px) {
margin-left: 0;
}
`
export const Img = styled.img`
width: 300px;
height: 300px;
`
export const P = styled.div`
font-size: 23px;
`
