import Logo from './Logo';
import BestPokemon from './BestPokemon';
import CaughtPokemon from './CaughtPokemon';
// import PokemonMoves from './PokemonMoves';
import PokemonMovesSelector from './PokemonMovesSelector';
import PokemonCity from './PokemonCity';

const App = () => {

  // const state = useState()
  // const appName = state[0];
  // const setAppName = state[1];
  // const [appName, setAppName] = useState('Pokedex')
  // const [pokemonName, setPokemonName] = useState('Charmander')

  // const changeAppname = () => {
  //   console.log(`appName was ${appName}`);
  //   setAppName('OmarDex')
  //   console.log(`appName NOW is ${appName}`);
  // }

  return (
    <div>
      <Logo appName={'Pokedex'} />
      <BestPokemon name={'Charmander'} abilities={['Anticipation', 'Adaptability', 'Run-Away', 'Fire', 'Fire']} />
      <CaughtPokemon date={new Date().toLocaleDateString()} />
      <PokemonMovesSelector />
      <PokemonCity />
    </div>
  );
}

export default App;
