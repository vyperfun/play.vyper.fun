import React, { Fragment } from "react";
import { Row, Col } from "react-simple-flex-grid";
import "react-simple-flex-grid/lib/main.css";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { choosePokemon, sendToLoginPage } from "../../redux/actions/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { Card, CardTitle, CardImg, CardBody, Button } from "shards-react";
import pokemons from "./pokemons";
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

function PickAPokemon(props) {
  const { loading, user, choosePokemon, sendToLoginPage } = props;
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
  }

  return (
    <Fragment>
      {loading ? (
        <Fragment>
          <img src={Loading} />
          <br />
          <h4>Adding Your New Pokemon...</h4>
        </Fragment>
      ) : (
        <Fragment>
          <br />
          <br />
          <h1>Choose Your Pokémon</h1>
          <br />
          <br />
          <Row gutter={40}>
            {pokemons.map((pokemon, index) => (
              <Col key={index} span={4} xs={12} sm={6} md={6} lg={4} xl={3}>
                <Card style={{ maxWidth: "300px" }}>
                  <CardImg src={pokemon.url} />
                  <CardBody>
                    <CardTitle>{pokemon.pokemonName}</CardTitle>
                    <p>
                      {pokemon.types.map((type, index) => {
                        return (
                          <img key={index} src={typeToIcon[type.trim()]} />
                        );
                      })}
                    </p>
                    <Button
                      onClick={() => {
                        choosePokemon({
                          address: user.address,
                          pokemonName: pokemon.pokemonName,
                          trainerName: user.address.substring(2, 33),
                          history: history,
                        });
                      }}
                    >
                      Choose &rarr;
                    </Button>
                  </CardBody>
                </Card>
                <br />
              </Col>
            ))}
          </Row>
        </Fragment>
      )}
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  user: state.app.user,
  loading: state.app.loading,
});

const mapDispatchToProps = (dispatch) => ({
  choosePokemon: (payload) => dispatch(choosePokemon(payload)),
  sendToLoginPage: (payload) => dispatch(sendToLoginPage(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PickAPokemon);
