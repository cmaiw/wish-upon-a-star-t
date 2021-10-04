import React from "react";
import { Global, css } from "@emotion/core";

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700&");
        *,
        *::after,
        *::before {
          box-sizing: border-box;
        }
        body {
          display: flex;
          padding: 0;
          height: 100vh;
          width: 100vw;
          background-color: ${(props) => props.theme.secondary};
          font-family: "Orbitron", sans-serif;
          margin: 0;
        }
      `}
    />
  );
}
