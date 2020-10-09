import React, { Fragment } from "react";
import { onboard } from "../../utils/onboard";

export default function Login() {
  startLogin(/* login */);

  return (
    <Fragment>
      <h1>Login with any provider and connect with RINKEBY testnet.</h1>
    </Fragment>
  );
}

const startLogin = async (login) => {
  await onboard.walletSelect();
  await onboard.walletCheck();
  console.log(onboard.getState());
  //login({ ...onboard.getState() });
};
