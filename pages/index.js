import Head from 'next/head'
import * as S from "../styles/styles-home"
import router from 'next/router';
import { useState } from 'react';
import axios from "axios";
import Modal from '../components/Modal';

export default function Home() {

  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false)

  const pokemonLegends = (id) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => {
        setData(response.data);
        setIsOpen(true);
      })
      .catch((response) => (
        alert("Por favor verifique o nome do pokemon pesquisado")
      ))
  };

  return (
    <div>
      <Head>
        <title>Pokedex</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <S.Header>
        <S.BtnAll onClick={() => { router.push("/pokemon") }}>
          Buscar Todos os Pokemons
        </S.BtnAll>
        <S.CampoPesquisa>
          <S.Input onChange={(e) => setData(e.target.value)} placeholder='Pokemon' type={'text'} />
          <S.BtnInput onClick={() => pokemonLegends(data)}>Pesquisar</S.BtnInput>
        </S.CampoPesquisa>
      </S.Header>

      <S.Main>
        <S.Img_Main src='/element.png' />
        <S.MobaImg src='/moba.png' />
      </S.Main>
      {isOpen &&
        <Modal data={data} setIsOpen={setIsOpen} />
      }

    </div>
  )
}