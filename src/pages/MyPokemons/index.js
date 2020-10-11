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
import { Card, CardTitle, CardImg, CardBody, Button } from "shards-react";
import { TwitterShareButton } from "react-twitter-embed";
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

function MyPokemons(props) {
  const {
    user,
    pokemonCount,
    pokemons,
    loading,
    sendToLoginPage,
    getTrainerPokemons,
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

  if (!user) {
    sendToLoginPage({ history });
  } else if (user && pokemons.length == 0) {
    getTrainerPokemons({ address: user.address, pokemonCount: pokemonCount });
  }

  return (
    <Fragment>
      <br />
      <br />
      <h1>My Pokémons</h1>
      {loading ? (
        <img src={Loading} />
      ) : (
        <Fragment>
          <br />
          <h5>Tweet Your Pokémon Collection</h5>
          <br />

          <TwitterShareButton
            url={`https://play.vyper.fun/${user.address}`}
            options={{
              text: `Check out my Collection of ${pokemonCount} Pokémons in a Game built using @vyperlang`,
              via: "VyperFun",
              size: "large",
            }}
          />
          <br />
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
                        return (
                          <img key={index} src={typeToIcon[type.trim()]} />
                        );
                      })}
                    </p>
                    <Button
                      onClick={() => {
                        startBattle({
                          address: user.address,
                          pokemonIndex: pokemon.pokemonIndex,
                          history: history,
                        });
                      }}
                    >
                      Battle &rarr;
                    </Button>
                  </CardBody>
                </Card>
                <br />
              </Col>
            ))}
          </Row>
        </Fragment>
      )}
      <br />
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
  getTrainerPokemons: (payload) => dispatch(getTrainerPokemons(payload)),
  sendToLoginPage: (payload) => dispatch(sendToLoginPage(payload)),
  startBattle: (payload) => dispatch(startBattle(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyPokemons);
