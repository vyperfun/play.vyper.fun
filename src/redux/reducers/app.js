import types from "../constants";

const initialState = {
  user: null,
  pokemons: [],
  pokemonCount: 0,
  loading: false,
  battleResult: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return { ...state, user: action.payload, loading: false };
    case types.ADD_POKEMON:
      return {
        ...state,
        pokemons: [...state.pokemons, action.payload.pokemon],
        pokemonCount: action.payload.pokemonCount,
        loading: false,
      };
    case types.SET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        loading: false,
      };
    case types.SET_POKEMON_COUNT:
      return { ...state, pokemonCount: action.payload };
    case types.LOADING:
      return { ...state, loading: true };
    case types.BATTLE:
      return { ...state, battleResult: action.payload, loading: false };
    default:
      return state;
  }
};
