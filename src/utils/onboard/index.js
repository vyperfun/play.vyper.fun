import Onboard from "bnc-onboard";
import Web3 from "web3";
import {
  POKEMON_BATTLE_ABI,
  POKEMON_TRAINER_ABI,
  POKEMON_BATTLE_ADDRESS,
  POKEMON_TRAINER_ADDRESS,
} from "./contract";

export const onboard = Onboard({
  dappId: "32dedbdd-255e-4e93-a66f-7e558c24893a", // [String] The API key created by step one above
  networkId: 4, // [Integer] The Ethereum network ID your Dapp uses.
  subscriptions: {
    wallet: (wallet) => {
      window.web3 = new Web3(wallet.provider);
      window.pokemonTrainerContract = new window.web3.eth.Contract(
        POKEMON_TRAINER_ABI,
        POKEMON_TRAINER_ADDRESS
      );
      window.pokemonBattleContract = new window.web3.eth.Contract(
        POKEMON_BATTLE_ABI,
        POKEMON_BATTLE_ADDRESS
      );
    },
  },
  walletSelect: {
    wallets: [
      { walletName: "coinbase", preferred: true },
      { walletName: "trust" },
      { walletName: "metamask", preferred: true },
      {
        walletName: "portis",
        apiKey: "7b9fd280-7ebd-4c62-a59f-9f6504906584",
        preferred: true,
        label: "Portis",
      },
      { walletName: "dapper", preferred: true },
      /* {
      walletName: "trezor",
      appUrl: APP_URL,
      email: CONTACT_EMAIL,
      rpcUrl: "https://rinkeby.infura.io/v3/2cf3ec9bd42d4099b8620c2a6ee8c51a",
    }, */
      {
        walletName: "ledger",
        rpcUrl: "https://rinkeby.infura.io/v3/2cf3ec9bd42d4099b8620c2a6ee8c51a",
      },
      {
        walletName: "fortmatic",
        apiKey: "pk_test_27DFAEDF186A9394",
        preferred: true,
      },
      {
        walletName: "squarelink",
        apiKey: "0d839d14070173707470",
      },
      { walletName: "authereum" },
      {
        walletName: "walletConnect",
        infuraKey: "2cf3ec9bd42d4099b8620c2a6ee8c51a",
      },
      { walletName: "opera" },
      { walletName: "operaTouch" },
      { walletName: "torus" },
      { walletName: "status" },
      /* { walletName: "unilogin" }, */
      {
        walletName: "imToken",
        rpcUrl: "https://tokenlon-core-market.tokenlon.im/rpc",
      },
    ],
  },
});
