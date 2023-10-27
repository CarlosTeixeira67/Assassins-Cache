import style from './Componente01.css';
import Ass3 from '../Assets/Assassin_s_Creed_III_Cover.jpg';
import Ass4 from '../Assets/Assassin_s_Creed_IV_Black_Flag.jpg';
import Assv from '../Assets/EDtkdijFRwbmGKk1G9lrDoEF.jpg';

const Componente01 = () => {
    return (
        <div className="conteudo">
            <div className="cards Ass3">
                <img src={Ass3} alt="#" />
                <p>
                    Assassin's Creed III é um jogo de ação que se passa na Revolução Americana do século XVIII. Os jogadores controlam Connor Kenway, um Assassino em busca de vingança e liberdade. O jogo oferece um vasto mundo aberto com batalhas emocionantes e uma narrativa que mistura história real com ficção. Com jogabilidade dinâmica e exploração de ambientes históricos, o jogo oferece uma experiência envolvente que combina ação, história e sigilo.
                </p>
                <button className="comprar">Comprar</button>
            </div>

            <div className="cards Ass4">
                <img src={Ass4} alt="#" />
                <p>
                Assassin's Creed IV: Black Flag é um jogo de ação e aventura que se desenrola na Era de Ouro dos Piratas no Caribe do século XVIII. Os jogadores assumem o papel de Edward Kenway, um pirata que acidentalmente se envolve com os Assassinos. O jogo oferece um vasto mundo aberto com batalhas navais espetaculares, exploração de ilhas tropicais e missões cativantes. Combinando elementos de pirataria e a tradição dos Assassinos, Black Flag oferece uma narrativa envolvente e ação emocionante em alto mar, proporcionando uma experiência única para os fãs da série.
                </p>
                <button className="comprar">Comprar</button>
            </div>

            <div className="cards AssV">
                <img src={Assv} alt="#" />
                <p>
                Assassin's Creed Valhalla é um jogo de ação e aventura que transporta os jogadores para a Era Viking, explorando a história dos invasores nórdicos na Inglaterra do século IX. Os jogadores controlam Eivor, um guerreiro Viking que lidera seu clã em busca de um novo lar. O jogo oferece um vasto mundo aberto com cenários deslumbrantes, batalhas épicas, construção de assentamentos e uma narrativa que explora conflitos culturais e alianças políticas. Com elementos de combate aprimorados e a oportunidade de moldar o destino de Eivor, Assassin's Creed Valhalla oferece uma experiência imersiva e cativante que mergulha na rica mitologia Viking.
                </p>
                <button className="comprar">Comprar</button>
            </div>
        </div>
    );
};

export default Componente01;
