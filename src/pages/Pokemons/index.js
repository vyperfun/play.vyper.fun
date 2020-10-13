import React, { Fragment } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { listPokemonsByAddress } from "../../redux/actions/app";
import { Row, Col } from "react-simple-flex-grid";
import "react-simple-flex-grid/lib/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { Card, CardTitle, CardImg, CardBody, Button } from "shards-react";

import BuiltBy from "../../components/BuiltBy";

import { pokemonIndex } from "../constants";

import Fire from "../../assets/flame.png";
import Dark from "../../assets/dark.png";
import Dragon from "../../assets/dragon.png";
import Fairy from "../../assets/fairy.png";
import Fighting from "../../assets/fighting.png";
import Ghost from "../../assets/ghost.png";
import Psychic from "../../assets/ghost.png";
import Ice from "../../assets/ice.png";
import Grass from "../../assets/leaf.png";
import Poison from "../../assets/poison.png";
import Rock from "../../assets/rock.png";
import Steel from "../../assets/steel.png";
import Electric from "../../assets/thunder.png";
import Water from "../../assets/water.png";
import Bug from "../../assets/bug.png";
import Flying from "../../assets/wing.png";
import Ground from "../../assets/ground.png";
import Loading from "../../assets/loading.gif";

import Web3 from "web3";
import {
  POKEMON_TRAINER_ABI,
  POKEMON_TRAINER_ADDRESS,
} from "../../utils/blockchain/contract";

function MyPokemons(props) {
  const {
    user,
    pokemonCount,
    pokemons,
    loading,
    listPokemonsByAddress,
    startBattle,
  } = props;
  const history = useHistory();

  const typeToIcon = {
    Fire: Fire,
    Dark: Dark,
    Dragon: Dragon,
    Fairy: Fairy,
    Fighting: Fighting,
    Ghost: Ghost,
    Psychic: Psychic,
    Ice: Ice,
    Grass: Grass,
    Poison: Poison,
    Rock: Rock,
    Steel: Steel,
    Electric: Electric,
    Water: Water,
    Bug: Bug,
    Flying: Flying,
    Ground: Ground,
  };

  if (pokemons.length == 0) {
    let web3 = new Web3(
      new Web3.providers.WebsocketProvider(
        "wss://rinkeby.infura.io/ws/v3/2cf3ec9bd42d4099b8620c2a6ee8c51a"
      )
    );
    let contract = new web3.eth.Contract(
      POKEMON_TRAINER_ABI,
      POKEMON_TRAINER_ADDRESS
    );
    listPokemonsByAddress({
      contract: contract,
      address: window.location.pathname.split("/")[1],
    });
  }

  return (
    <Fragment>
      <br />
      <br />
      <h1>My Pokémons</h1>
      <br />
      <Button
        onClick={() => {
          window.open(`https://play.vyper.fun?ref=play`, "_blank");
        }}
      >
        Play CryptoPokémons
      </Button>
      <br />
      <br />
      {loading ? (
        <img src={Loading} />
      ) : (
        <Row gutter={40}>
          {pokemons.map((pokemon, index) => (
            <Col key={index} span={4} xs={12} sm={6} md={6} lg={4} xl={3}>
              <Card style={{ maxWidth: "300px" }}>
                <CardImg src={pokemonIndex[pokemon.name].url} />
                <CardBody>
                  <CardTitle>{pokemon.name}</CardTitle>
                  <p>
                    <h5>HP: {pokemon.HP}</h5>
                    {pokemonIndex[pokemon.name].types.map((type, index) => {
                      return <img key={index} src={typeToIcon[type.trim()]} />;
                    })}
                  </p>
                </CardBody>
              </Card>
              <br />
            </Col>
          ))}
        </Row>
      )}
      <br />
      <Button
        onClick={() => {
          window.open(`https://vyper.fun?ref=play`, "_blank");
        }}
      >
        Learn How You Can Build This Game
      </Button>
      <br />
      <br />
      <br />
      <BuiltBy />
      <br />
      <br />
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  user: state.app.user,
  pokemons: state.app.pokemons,
  pokemonCount: state.app.pokemonCount,
  loading: state.app.loading,
});

const mapDispatchToProps = (dispatch) => ({
  listPokemonsByAddress: (payload) => dispatch(listPokemonsByAddress(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyPokemons);
