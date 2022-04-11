import React from "react";
import { Global, css } from "@emotion/react";

export default function GlobalStyles({backGroundColor}: {backGroundColor: string}) {
  return (
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700&family=Lovers+Quarrel&display=swap");
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
          background-color: ${backGroundColor};
          font-family: "Orbitron", sans-serif;
          margin: 0;
        }
      `}
    />
  );
}
