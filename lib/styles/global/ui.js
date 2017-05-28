import React from 'react'
import {
  textColor,
  borderColor,
  focusColor,
  placeholderColor,
  linkColor,
  linkHoverColor,
  linkActiveColor,
  monospacedFontFamily,
  baseFontSize,
  buttonColor,
  buttonHoverColor,
  buttonActiveColor,
  primaryButtonColor,
  primaryButtonHoverColor,
  primaryButtonActiveColor
} from '../variables'

export default () => (<style jsx global>{`
  main, article, section, aside, nav, div, h1, h2, h3, h4, h5, p, blockquote, pre, code, a, input, textarea, select, button {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    color: ${textColor};
    font-family: ${monospacedFontFamily};
    font-size: ${baseFontSize};
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5 {
    font-family: ${monospacedFontFamily};
    font-weight: normal;
  }

  a {
    color: ${linkColor};
    border-bottom: 1px solid ${linkColor};
    text-decoration: none;
  }
  a:hover {
    color: ${linkHoverColor};
    border-color: ${linkHoverColor};
  }
  a:active {
    color: ${linkActiveColor};
    border-color: ${linkActiveColor};
  }

  .container {
    position: relative;
    width: 100%;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 20px;
  }

  ,container--fluid {
    max-width: none;
    padding-left: 0;
    padding-right: 0;
  }

  .markdown-body {
    h1, h2, h3, h4, h5 {
      font-family: inherit;
      font-weight: bold;
    }
  }

  ::-moz-selection { background: #B2D7FE; }
  ::selection { background: #B2D7FE; }

  input[type=text] {
    border: none;
    border-bottom: solid 1px ${borderColor};
    outline: none;
    height: 24px;
    padding: 0 10px;
    font-size: ${baseFontSize};
    font-family: ${monospacedFontFamily};
  }

  textarea {
    border: solid 1px ${borderColor};
    padding: 10px;
    min-height: 4em;
    outline: none;
    font-size: ${baseFontSize};
    font-family: ${monospacedFontFamily};
    resize: vertical;
  }

  input[type=text]:focus, textarea:focus {
    border-color: ${focusColor};
  }

  input::placeholder {
    color: ${placeholderColor};
  }

  select {
    background: transparent;
    color: ${textColor};
    border: none;
    outline: none;
    height: 24px;
    font-size: ${baseFontSize};
    padding: 5px 10px;
    font-family: ${monospacedFontFamily};
    cursor: pointer;
  }

  button {
    background-color: transparent;
    border: none;
    color: ${buttonColor};
    font-family: ${monospacedFontFamily};
    outline: none;
    padding: 5px 10px;
    font-size: ${baseFontSize};
    cursor: pointer;
  }
  button:hover {
    color: ${buttonHoverColor};
  }
  button:active, button.active {
    color: ${buttonActiveColor};
  }
  button.primary {
    color: ${primaryButtonColor};
  }
  button.primary:hover {
    color: ${primaryButtonHoverColor};
  }
  button.primary:active {
    color: ${primaryButtonActiveColor};
  }
  button:disabled,
  button:disabled:hover,
  button:disabled.primary,
  button:disabled:hover.primary {
    cursor: not-allowed;
    color: ${placeholderColor};
  }
`}</style>)
