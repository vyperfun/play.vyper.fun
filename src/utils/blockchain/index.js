import { POKEMON_TRAINER_ABI, POKEMON_TRAINER_ADDRESS } from "./contract";
const ethers = require("ethers");
const utils = ethers.utils;

export const createTrainer = async (userAddress, trainerName, pokemonName) => {
  const pokemonTrainerContract = window.pokemonTrainerContract;

  trainerName = utils.formatBytes32String(trainerName);
  pokemonName = utils.formatBytes32String(pokemonName);

  let result = {};

  await pokemonTrainerContract.methods
    .createTrainer(trainerName, pokemonName)
    .send({ from: userAddress })
    .then(async (logs) => {
      let res = logs.events.NewPokemonCreated.returnValues;
      result = {
        name: utils.parseBytes32String(res.name),
        dna: res.dna,
        HP: res.HP,
      };
      console.log(
        "Create Trainer: " +
          JSON.stringify(logs.events.NewPokemonCreated.returnValues)
      );
    });

  return result;
};

export const battle = async (userAddress, pokemonIndex) => {
  const pokemonTrainerContract = window.pokemonTrainerContract;

  var result;

  await pokemonTrainerContract.methods
    .battleWildPokemon(pokemonIndex)
    .send({ from: userAddress })
    .then(async (logs) => {
      let res = logs.events.NewBattle[0].returnValues;
      result = {
        trainerPokemonName: utils.parseBytes32String(res.trainerPokemonName),
        wildPokemonName: utils.parseBytes32String(res.wildPokemonName),
        trainerPokemonHP: res.trainerPokemonHP,
        wildPokemonHP: res.wildPokemonHP,
        battleResult: res.battleResult,
        battleHash: logs.transactionHash,
      };
    });

  return result;
};

export const trainerPokemonCount = async (userAddress, contract) => {
  const pokemonTrainerContract = window.pokemonTrainerContract || contract;

  let result;

  await pokemonTrainerContract.methods
    .trainerPokemonCount(userAddress)
    .call({ from: userAddress })
    .then(async (logs) => {
      console.log("Trainer Pokemon Count: " + logs);
      result = logs;
    });
  return result;
};

export const listTrainerPokemons = async (
  userAddress,
  pokemonCount,
  contract
) => {
  const pokemonTrainerContract = window.pokemonTrainerContract || contract;
  var promiseArr = [];
  for (let i = 0; i < pokemonCount; i++) {
    promiseArr.push(
      pokemonTrainerContract.methods
        .listTrainerPokemon(i)
        .call({ from: userAddress })
    );
  }

  var result = [];

  var pokemons = await Promise.all(promiseArr);
  console.log(pokemons);
  pokemons.map((pokemon, index) => {
    result.push({
      name: utils.parseBytes32String(pokemon.name),
      dna: pokemon.dna,
      HP: pokemon.HP,
      pokemonIndex: index,
    });
  });

  return result;
};
