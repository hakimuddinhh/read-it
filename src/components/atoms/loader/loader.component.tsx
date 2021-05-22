import styled, { css } from "styled-components";
import loader from "../../../images/loader.png";

const width = "100px";
const height = "150px";

export const LoaderEvolution = styled.div(
  ({ color }) => css`
    background-image: url(${loader});
    position: absolute;
    left: calc(50% - ${width} / 2);
    top: calc(50% - ${height} / 2);
    transform: scale(0.5);
    width: ${width};
    height: ${height};
    background-size: inherit;
    background-position: 0;
    animation-duration: 5s;
    animation-name: loaderEvolution;
    animation-iteration-count: infinite;

    @keyframes loaderEvolution {
      from {
        background-position: 0%;
      }

      20% {
        background-position: 19%;
      }

      40% {
        background-position: 39%;
      }

      60% {
        background-position: 57%;
      }

      80% {
        background-position: 77%;
      }

      to {
        background-position: 96%;
      }
    }
  `
);

const StyledLoaderSpinner = styled.div(
  () => css`
    margin: 0 auto;
    width: 40px;
    height: 40px;
    position: relative;
    text-align: center;

    -webkit-animation: sk-rotate 2s infinite linear;
    animation: sk-rotate 2s infinite linear;

    & > :first-child,
    & > :last-child {
      width: 60%;
      height: 60%;
      display: inline-block;
      position: absolute;
      top: 0;
      background-color: #333;
      border-radius: 100%;

      -webkit-animation: sk-bounce 2s infinite ease-in-out;
      animation: sk-bounce 2s infinite ease-in-out;
    }

    & > :last-child {
      top: auto;
      bottom: 0;
      -webkit-animation-delay: -1s;
      animation-delay: -1s;
    }

    @-webkit-keyframes sk-rotate {
      100% {
        -webkit-transform: rotate(360deg);
      }
    }
    @keyframes sk-rotate {
      100% {
        transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
      }
    }

    @-webkit-keyframes sk-bounce {
      0%,
      100% {
        -webkit-transform: scale(0);
      }
      50% {
        -webkit-transform: scale(1);
      }
    }

    @keyframes sk-bounce {
      0%,
      100% {
        transform: scale(0);
        -webkit-transform: scale(0);
      }
      50% {
        transform: scale(1);
        -webkit-transform: scale(1);
      }
    }
  `
);

export const LoaderSpinner  = () => (
  <StyledLoaderSpinner>
    <div></div>
    <div></div>
  </StyledLoaderSpinner>
)
