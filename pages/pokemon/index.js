import axios from "axios";
import { useRef, useEffect, useState } from "react";
import * as S from "./styles.pokemon";
import Modal from '../../components/Modal';

export default function pokemon() {
    const [resposta, setResposta] = useState([]);
    const [isOpen, setIsOpen] = useState(false)
    const [data, setData] = useState([]);

    const pokemonLegends = (id) => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((response) => {
                setData(response.data);
                setIsOpen(true);
            });
    };

    useEffect(() => {
        getPokemons();
    }, [])

    const getPokemons = () => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon?limit=251")
            .then((res) => setResposta(res.data.results))

    }

    const Voltar = () => {
        window.location.href = "/";
    };

    const [house, setHouse] = useState();
    const ref = useRef(null)

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsOpen(false)

        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true)
        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        }
    }, [])


    return (
        <>
            <S.Header>
                <S.BtnVoltar onClick={Voltar}>Voltar</S.BtnVoltar>
                <S.Logo src="/logo.png" />
            </S.Header>
            <S.Main>
                <S.CardsPosition>
                    {resposta && resposta.map((item, index) => (
                        <div onClick={() => pokemonLegends(item.name)}>
                            <S.Cards>
                                <S.Img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${index + 1}.png`} />
                                <S.Name>{item.name}</S.Name>
                            </S.Cards>
                        </div>
                    ))}
                </S.CardsPosition>
            </S.Main>
            <div ref={ref} onClick={handleClickOutside}>
            {isOpen &&
                <Modal data={data} setIsOpen={setIsOpen} />
            }
            </div>
        </>
    )
}
