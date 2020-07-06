import styled, { createGlobalStyle } from 'styled-components';

export const StyleGlobal = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #f5f7fb;
  }
  p {
    margin: 0;
    padding: 0;
  }
  button {
    margin: 0;
    padding: 0;
    border: 0ch;
    background: transparent;
    cursor: pointer;
  }

  #app {
    height: 100%;
  }
`;

const baseFontStyle = {
  fontSize: '14px',
  lineHeight: '22px',
  color: '#9aa0ac',
};

export const StyleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
`;

export const StyleHeader = styled.div`
  border-bottom: 1px solid rgba(0, 40, 100, 0.12);
  background-color: #fff;

  .top {
    border-bottom: 1px solid rgba(0, 40, 100, 0.12);

    .inner {
      width: 100%;
      max-width: 1200px;
      margin: 20px auto;
    }
    .logo {
      margin: 0;
      padding: 0;

      img {
        vertical-align: top;
      }
    }
  }
  nav {
    position: relative;
    left: -4px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        display: inline-block;
        margin-right: 25px;

        a {
          display: inline-block;
          padding: 12px 4px 11px;
          font-size: 16px;
          line-height: ${baseFontStyle.lineHeight};
          color: ${baseFontStyle.color};
          text-decoration: none;
          vertical-align: top;
          cursor: pointer;
          border-bottom: 1px solid transparent;

          &:hover {
            border-color: #6e7687;
            color: #6e7687;
          }
          &.active {
            border-color: #467fcf;
            color: #467fcf;
          }
        }
      }
    }
  }
`;

export const StyleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  box-sizing: border-box;
`;

export const StyleFooter = styled.div`
  border-top: 1px solid rgba(0, 40, 100, 0.12);
  font-size: ${baseFontStyle.fontSize};
  line-height: ${baseFontStyle.lineHeight};
  color: ${baseFontStyle.color};
  background-color: #fff;

  .inner {
    overflow: hidden;
    width: 100%;
    max-width: 1200px;
    margin: 16px auto;

    .linkList {
      float: left;
      width: 65%;
      margin: 0;
      padding: 0;
      list-style: none;

      li {
        float: left;
        width: 25%;
      }
      a {
        font-size: ${baseFontStyle.fontSize};
        line-height: ${baseFontStyle.lineHeight};
        color: ${baseFontStyle.color};
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  .summary {
    float: right;
    width: 35%;
    font-size: ${baseFontStyle.fontSize};
    line-height: ${baseFontStyle.lineHeight};
  }
  .copyright {
    width: 100%;
    border-top: 1px solid rgba(0, 40, 100, 0.12);

    p {
      display: block;
      width: 100%;
      max-width: 1200px;
      margin: 20px auto;

      b {
        color: #6e7687;
      }
    }
  }
`;
