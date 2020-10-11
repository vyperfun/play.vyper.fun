import React from "react";
import Blocknative from "../../assets/blocknative.png";
import Fleek from "../../assets/fleek.png";
import GitHubButton from "react-github-btn";
//require("react-github-button/assets/style.css");

export default function Footer() {
  return (
    <div>
      <h5>Built Using</h5>
      <img src={Blocknative} width="100" />
      &nbsp;&nbsp;&nbsp;
      <img src={Fleek} width="70" />
      <br />
      <br />
      <GitHubButton
        href="https://github.com/vyperfun/play.vyper.fun"
        data-size="large"
        data-show-count="true"
        aria-label="Star play.vyper.fun on GitHub"
      >
        Star
      </GitHubButton>
    </div>
  );
}
