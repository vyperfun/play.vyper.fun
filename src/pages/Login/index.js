import React, { Fragment } from "react";
import { onboard } from "../../utils/onboard";
import { login } from "../../redux/actions/app";
import Footer from "../../components/Footer";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

function Login(props) {
  const { user, login } = props;
  const history = useHistory();

  if (!user) {
    startLogin(login, history);
  } else {
    history.push("/my-pokemons");
  }

  return (
    <Fragment>
      <br />
      <h2>Login with any wallet and connect with RINKEBY testnet.</h2>
      <div style={{ position: "absolute", bottom: "30px", width: "100%" }}>
        <Footer />
      </div>
    </Fragment>
  );
}

const startLogin = async (login, history) => {
  await onboard.walletSelect();
  await onboard.walletCheck();
  login({ user: onboard.getState(), history: history });
};

const mapStateToProps = (state) => ({
  user: state.app.user,
});

const mapDispatchToProps = (dispatch) => ({
  login: (payload) => dispatch(login(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
