import styled from "styled-components";
export const Container = styled.div`
  .background-modal {
    background-color: #1a1731;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100vh;
    opacity: 50%;
  }

  .error-fix-container {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
  }

  .error-modal-content {
    z-index: 10;
    background: hsl(100, 100%, 100%);
    position: relative;

    box-shadow: 0px 0px 8px 0px hsla(0, 0%, 0%, 0.2);
    border-radius: 10px;
    max-width: 700px;
    padding: 0.5rem 2rem 2rem 2rem;

    margin: 10rem auto;

    color: #00243f;

    /* ---- RESPONSIVE ---- */
    @media (min-width: 1800px) {
      padding: 1.3rem 2rem 2rem 2rem;
    }

    h3 {
      margin-bottom: 1.2rem;
      font-size: 1.7rem;

      /* ---- RESPONSIVE ---- */
      @media (min-width: 1800px) {
        font-size: calc(1.7rem * var(--huge-multiplier));
      }

      @media (max-width: 991px) {
        font-size: 1.5rem;
      }

      @media (max-width: 600px) {
        font-size: 1.3rem;
      }
    }

    /* ---- RESPONSIVE ---- */
    @media (min-width: 1800px) {
      max-width: calc(650px * var(--huge-multiplier));
    }

    @media (max-width: 991px) {
      max-width: 500px;
    }

    @media (max-width: 600px) {
      max-width: 280px;
    }

    button {
      width: 100%;

      i {
        margin-top: -5rem;
        margin-right: -41rem;
        color: #004e9c;

        @media (min-width: 1800px) {
          margin-right: -53rem;
        }

        @media (max-width: 991px) {
          margin-right: -29rem;
        }

        @media (max-width: 600px) {
          margin-right: -15rem;
        }
      }
    }
  }

  p {
    font-size: 1.5rem;

    @media (min-width: 1800px) {
      font-size: calc(1.5rem * var(--huge-multiplier));
    }

    @media (max-width: 991px) {
      font-size: 1.2rem;
    }

    @media (max-width: 600px) {
      font-size: 1rem;
    }
  }
`;
