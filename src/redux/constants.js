const ABI = [
  {
    outputs: [],
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    name: "battle",
    outputs: [
      {
        type: "bool",
        name: "",
      },
      {
        type: "string",
        name: "",
      },
      {
        type: "uint256",
        name: "",
      },
      {
        type: "uint256",
        name: "",
      },
    ],
    inputs: [
      {
        type: "tuple",
        name: "pokemon",
        components: [
          {
            type: "string",
            name: "name",
          },
          {
            type: "uint256",
            name: "dna",
          },
          {
            type: "uint256",
            name: "HP",
          },
          {
            type: "uint256",
            name: "matches",
          },
          {
            type: "uint256",
            name: "wins",
          },
        ],
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
    gas: 45575,
  },
];

const ADDRESS = "0x66f4804E06007630e1aF0a7B0b279e6F27A3FdE5";

module.exports = {
  ABI,
  ADDRESS,
};
