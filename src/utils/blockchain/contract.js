const POKEMON_TRAINER_ABI = [
  {
    name: "NewPokemonCreated",
    inputs: [
      { type: "bytes32", name: "name", indexed: false },
      { type: "uint256", name: "dna", indexed: false },
      { type: "uint256", name: "HP", indexed: false },
    ],
    anonymous: false,
    type: "event",
  },
  {
    name: "NewTrainerCreated",
    inputs: [{ type: "bytes32", name: "name", indexed: false }],
    anonymous: false,
    type: "event",
  },
  {
    name: "NewBattle",
    inputs: [
      { type: "bytes32", name: "trainerPokemonName", indexed: false },
      { type: "bytes32", name: "wildPokemonName", indexed: false },
      { type: "uint256", name: "trainerPokemonHP", indexed: false },
      { type: "uint256", name: "wildPokemonHP", indexed: false },
      { type: "bool", name: "battleResult", indexed: false },
    ],
    anonymous: false,
    type: "event",
  },
  {
    name: "battleWildPokemon",
    outputs: [],
    inputs: [{ type: "uint256", name: "pokemonIndex" }],
    stateMutability: "nonpayable",
    type: "function",
    gas: 438889,
  },
  {
    name: "createTrainer",
    outputs: [],
    inputs: [
      { type: "bytes32", name: "trainerName" },
      { type: "bytes32", name: "pokemonName" },
    ],
    stateMutability: "nonpayable",
    type: "function",
    gas: 467363,
  },
  {
    name: "listTrainerPokemon",
    outputs: [
      { type: "bytes32", name: "name" },
      { type: "uint256", name: "dna" },
      { type: "uint256", name: "HP" },
      { type: "uint256", name: "matches" },
      { type: "uint256", name: "wins" },
    ],
    inputs: [{ type: "uint256", name: "pokemonIndex" }],
    stateMutability: "view",
    type: "function",
    gas: 7606,
  },
  {
    name: "trainerPokemonCount",
    outputs: [{ type: "uint256", name: "" }],
    inputs: [{ type: "address", name: "arg0" }],
    stateMutability: "view",
    type: "function",
    gas: 1455,
  },
  {
    name: "totalPokemonCount",
    outputs: [{ type: "uint256", name: "" }],
    inputs: [],
    stateMutability: "view",
    type: "function",
    gas: 1331,
  },
];

const POKEMON_BATTLE_ABI = [
  {
    name: "NewBattle",
    inputs: [
      { type: "bytes32", name: "trainerPokemonName", indexed: false },
      { type: "bytes32", name: "wildPokemonName", indexed: false },
      { type: "uint256", name: "trainerPokemonHP", indexed: false },
      { type: "uint256", name: "wildPokemonHP", indexed: false },
      { type: "bool", name: "battleResult", indexed: false },
    ],
    anonymous: false,
    type: "event",
  },
  {
    outputs: [],
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    name: "battle",
    outputs: [
      { type: "bool", name: "" },
      { type: "bytes32", name: "" },
      { type: "uint256", name: "" },
      { type: "uint256", name: "" },
    ],
    inputs: [
      {
        type: "tuple",
        name: "pokemon",
        components: [
          { type: "bytes32", name: "name" },
          { type: "uint256", name: "dna" },
          { type: "uint256", name: "HP" },
          { type: "uint256", name: "matches" },
          { type: "uint256", name: "wins" },
        ],
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
    gas: 43112,
  },
];

const POKEMON_TRAINER_ADDRESS = "0x663cA8C20Edfe469fD0E8785e202b8db07FB019C";
const POKEMON_BATTLE_ADDRESS = "0xcBCB471168893317055be87eADc0f08A4Abb49ee";

module.exports = {
  POKEMON_TRAINER_ABI,
  POKEMON_BATTLE_ABI,
  POKEMON_TRAINER_ADDRESS,
  POKEMON_BATTLE_ADDRESS,
};
