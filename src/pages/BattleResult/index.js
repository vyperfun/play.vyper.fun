import React, { Fragment } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  getTrainerPokemons,
  sendToLoginPage,
  startBattle,
} from "../../redux/actions/app";
import { Row, Col } from "react-simple-flex-grid";
import "react-simple-flex-grid/lib/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import {
  CardHeader,
  CardFooter,
  Card,
  CardTitle,
  CardImg,
  CardBody,
  Button,
} from "shards-react";

import { pokemonIndex } from "../constants";

import BuiltBy from "../../components/BuiltBy";

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

function Battle(props) {
  //const { user, battleResult, loading, sendToLoginPage } = props;
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

  /*     if (!user) {
        sendToLoginPage({ history });
    } */

  const battleResult = parseParameters();

  return (
    <Fragment>
      <br />
      <br />
      <h1>Battle Result</h1>
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
      {battleResult.battleResult ? (
        <h4>YOU WIN 🔥</h4>
      ) : (
        <h4>GOOD EFFORT 👏</h4>
      )}

      <Row gutter={40}>
        <Col key={0} span={4} xs={12} sm={6} md={6} lg={6} xl={6}>
          <Card style={{ maxWidth: "300px" }}>
            <CardHeader>MY POKÉMON</CardHeader>
            <CardImg src={pokemonIndex[battleResult.trainerPokemonName].url} />
            <CardBody>
              <CardTitle>{battleResult.trainerPokemonName}</CardTitle>
              <p>
                <h5>HP: {battleResult.trainerPokemonHP}</h5>
                {pokemonIndex[battleResult.trainerPokemonName].types.map(
                  (type, index) => {
                    return <img key={index} src={typeToIcon[type.trim()]} />;
                  }
                )}
              </p>
            </CardBody>
            <CardFooter>
              {battleResult.battleResult ? "WINNER" : "LOSER"}
            </CardFooter>
          </Card>
          <br />
        </Col>
        <Col key={1} span={4} xs={12} sm={6} md={6} lg={6} xl={6}>
          <Card style={{ maxWidth: "300px" }}>
            <CardHeader>WILD POKÉMON</CardHeader>
            <CardImg src={pokemonIndex[battleResult.wildPokemonName].url} />
            <CardBody>
              <CardTitle>{battleResult.wildPokemonName}</CardTitle>
              <p>
                <h5>HP: {battleResult.wildPokemonHP}</h5>
                {pokemonIndex[battleResult.wildPokemonName].types.map(
                  (type, index) => {
                    return <img key={index} src={typeToIcon[type.trim()]} />;
                  }
                )}
              </p>
            </CardBody>
            <CardFooter>
              {battleResult.battleResult ? "LOSER" : "WINNER"}
            </CardFooter>
          </Card>
          <br />
        </Col>
      </Row>

      <Button
        onClick={() => {
          window.open(
            `https://play.vyper.fun/${battleResult.address}`,
            "_blank"
          );
        }}
      >
        See Trainer's All Pokémons
      </Button>
      <br />
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

const parseParameters = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return {
    trainerPokemonName: urlParams.get("t"),
    wildPokemonName: urlParams.get("o"),
    trainerPokemonHP: urlParams.get("thp"),
    wildPokemonHP: urlParams.get("ohp"),
    battleResult: urlParams.get("thp") > urlParams.get("ohp"),
    address: urlParams.get("a"),
  };
};

const mapStateToProps = (state) => ({
  user: state.app.user,
  battleResult: state.app.battleResult,
  loading: state.app.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getTrainerPokemons: (payload) => dispatch(getTrainerPokemons(payload)),
  sendToLoginPage: (payload) => dispatch(sendToLoginPage(payload)),
  startBattle: (payload) => dispatch(startBattle(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Battle);
