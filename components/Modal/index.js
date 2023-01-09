import * as S from './styles'

const Modal = ({ data, setIsOpen }) => {
    console.log(data, 'modal');

    return (
        <S.OpacityModal onClick={() => setIsOpen(false)}>
            <S.Modal>

                <S.BtnF onClick={() => setIsOpen(false)}>fechar</S.BtnF>

                <S.Img src={data?.sprites?.other["official-artwork"]?.front_default} />
                <S.P>
                    <p>Nome: {data.name}</p>
                    <p>Altura: {data.height}</p>
                    <p>HP: {data?.stats[0].base_stat}</p>
                    <p>Ataque: {data?.stats[1].base_stat}</p>
                    <p>Defesa: {data?.stats[2].base_stat}</p>
                    <p>Ataque-Especial: {data?.stats[3].base_stat}</p>
                    <p>Defesa-Especial: {data?.stats[4].base_stat}</p>
                    <p>Velocidade: {data?.stats[5].base_stat}</p>
                </S.P>
            </S.Modal>
        </S.OpacityModal>
    )
}
export default Modal