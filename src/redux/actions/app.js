import types from "../constants";
import {
  battle,
  createTrainer,
  trainerPokemonCount,
  listTrainerPokemons,
} from "../../utils/blockchain";

export const sendToLoginPage = (payload) => (dispatch) => {
  payload.history.push("/");
};

export const setLoadingGif = (payload) => (dispatch) => {
  dispatch({
    type: types.LOADING,
  });
};

export const login = (payload) => (dispatch) => {
  trainerPokemonCount(payload.user.address).then((count) => {
    if (count > 0) {
      dispatch({
        type: types.SET_POKEMON_COUNT,
        payload: count,
      });
      dispatch({
        type: types.LOGIN,
        payload: payload.user,
      });
    } else {
      dispatch({
        type: types.LOGIN,
        payload: payload.user,
      });
      payload.history.push("/pick-a-pokemon");
    }
  });
};

export const choosePokemon = (payload) => (dispatch) => {
  dispatch({
    type: types.LOADING,
  });
  createTrainer(payload.address, payload.trainerName, payload.pokemonName).then(
    (data) => {
      console.log("Choose Pokemon: ", data);
      dispatch({
        type: types.ADD_POKEMON,
        payload: {
          pokemon: { ...data, pokemonIndex: 0 },
          pokemonCount: 1,
        },
      });
      payload.history.push("/my-pokemons");
    }
  );
};

export const startBattle = (payload) => (dispatch) => {
  payload.history.push("/battle");

  dispatch({
    type: types.LOADING,
  });

  battle(payload.address, payload.pokemonIndex).then((battleResult) => {
    dispatch({
      type: types.BATTLE,
      payload: battleResult,
    });
    trainerPokemonCount(payload.address).then((count) => {
      listTrainerPokemons(payload.address, count).then((pokemons) => {
        dispatch({
          type: types.SET_POKEMONS,
          payload: pokemons,
        });
      });
    });
  });
};

export const getTrainerPokemonCount = (payload) => (dispatch) => {
  trainerPokemonCount(payload.address).then((data) => {
    console.log("getTrainerPokemonCount: ", data);
  });
};

export const getTrainerPokemons = (payload) => (dispatch) => {
  dispatch({
    type: types.LOADING,
  });
  listTrainerPokemons(payload.address, payload.pokemonCount).then(
    (pokemons) => {
      console.log(pokemons);
      dispatch({
        type: types.SET_POKEMONS,
        payload: pokemons,
      });
    }
  );
};

export const listPokemonsByAddress = (payload) => (dispatch) => {
  dispatch({
    type: types.LOADING,
  });
  trainerPokemonCount(payload.address, payload.contract).then((count) => {
    listTrainerPokemons(payload.address, count, payload.contract).then(
      (pokemons) => {
        console.log(pokemons);
        dispatch({
          type: types.SET_POKEMONS,
          payload: pokemons,
        });
      }
    );
  });
};
