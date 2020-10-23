import styled from 'styled-components'
import overlay from './images/overlay.png'
import patternS1 from './images/pattern-size1.svg'

export const StyledSignUp = styled.div`

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

body {
  -webkit-text-size-adjust: none;
}

mark {
  background-color: transparent;
  color: inherit;
}

input::-moz-focus-inner {
  border: 0;
  padding: 0;
}

input,
select,
textarea {
  -moz-appearance: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
}

/* Basic */

@-ms-viewport {
  width: device-width;
}

body {
  -ms-overflow-style: scrollbar;
}

@media screen and (max-width: 360px) {
  html,
  body {
    min-width: 320px;
  }
}

html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  background: #ffffff;
}

body.is-preload *,
body.is-preload *:before,
body.is-preload *:after {
  -moz-animation: none !important;
  -webkit-animation: none !important;
  -ms-animation: none !important;
  animation: none !important;
  -moz-transition: none !important;
  -webkit-transition: none !important;
  -ms-transition: none !important;
  transition: none !important;
}

/* Type */

body {
  color: #999999;
}

html,
input,
select,
textarea {
  font-size: 16pt;
}

@media screen and (max-width: 1680px) {
  html,
  input,
  select,
  textarea {
    font-size: 13pt;
  }
}

@media screen and (max-width: 1280px) {
  html,
  input,
  select,
  textarea {
    font-size: 12pt;
  }
}

@media screen and (max-width: 360px) {
  html,
  input,
  select,
  textarea {
    font-size: 11pt;
  }
}

body,
input,
select,
textarea {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: normal;
  line-height: 1.5em;
  letter-spacing: -0.015em;
}

a {
  -moz-transition: color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out;
  -webkit-transition: color 0.2s ease-in-out,
    border-bottom-color 0.2s ease-in-out;
  -ms-transition: color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out;
  transition: color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out;
  text-decoration: none;
  border-bottom: dotted 1px;
}

a:hover {
  border-bottom-color: transparent !important;
}

strong,
b {
  font-weight: bold;
}

em,
i {
  font-style: italic;
}

p {
  margin: 0 0 2em 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
  line-height: 1em;
  margin: 0 0 1em 0;
  letter-spacing: -0.0125em;
}

h1 a,
h2 a,
h3 a,
h4 a,
h5 a,
h6 a {
  color: inherit;
  text-decoration: none;
  border-bottom: none;
}

@media screen and (max-width: 980px) {
  h1 br,
  h2 br,
  h3 br,
  h4 br,
  h5 br,
  h6 br {
    display: none;
  }
}

h2 {
  font-size: 1.75em;
  line-height: 1.5em;
}

h3 {
  font-size: 1.5em;
  line-height: 1.5em;
}

h4 {
  font-size: 1.1em;
  line-height: 1.5em;
}

h5 {
  font-size: 0.9em;
  line-height: 1.5em;
}

h6 {
  font-size: 0.7em;
  line-height: 1.5em;
}

@media screen and (max-width: 736px) {
  h2 {
    font-size: 1.25em;
  }

  h3 {
    font-size: 1.2em;
  }

  h4 {
    font-size: 1em;
  }
}

sub {
  font-size: 0.8em;
  position: relative;
  top: 0.5em;
}

sup {
  font-size: 0.8em;
  position: relative;
  top: -0.5em;
}

blockquote {
  border-left-style: solid;
  border-left-width: 4px;
  font-style: italic;
  margin: 0 0 2em 0;
  padding: 0.5em 0 0.5em 2em;
}

code {
  border-radius: 6px;
  border-style: solid;
  border-width: 1px;
  font-family: "Courier New", monospace;
  font-size: 0.9em;
  margin: 0 0.25em;
  padding: 0.25em 0.65em;
}

pre {
  -webkit-overflow-scrolling: touch;
  font-family: "Courier New", monospace;
  font-size: 0.9em;
  margin: 0 0 2em 0;
}

pre code {
  display: block;
  line-height: 1.75em;
  padding: 1em 1.5em;
  overflow-x: auto;
}

hr {
  border: 0;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  margin: 2em 0;
}

hr.major {
  margin: 3em 0;
}

.align-left {
  text-align: left;
}

.align-center {
  text-align: center;
}

.align-right {
  text-align: right;
}

input,
select,
textarea {
  color: #999999;
}

a {
  color: inherit;
  border-bottom-color: #d6d6d6;
}

a:hover {
  color: #4696e5;
}

strong,
b {
  color: #828282;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: #828282;
}

blockquote {
  border-left-color: #e6e6e6;
}

code {
  background: rgba(144, 144, 144, 0.075);
  border-color: #e6e6e6;
}

hr {
  border-bottom-color: #e6e6e6;
}

/* Button */

input[type="submit"],
input[type="reset"],
input[type="button"],
button,
.button {
  -moz-appearance: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
  -moz-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  -webkit-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  -ms-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  border-radius: 6px;
  border: 0;
  cursor: pointer;
  display: inline-block;
  font-weight: bold;
  height: 2.85em;
  line-height: 2.95em;
  padding: 0 1.75em;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
}

input[type="submit"].icon,
input[type="reset"].icon,
input[type="button"].icon,
button.icon,
.button.icon {
  padding-left: 1.35em;
}

input[type="submit"].icon:before,
input[type="reset"].icon:before,
input[type="button"].icon:before,
button.icon:before,
.button.icon:before {
  margin-right: 0.5em;
}

input[type="submit"].fit,
input[type="reset"].fit,
input[type="button"].fit,
button.fit,
.button.fit {
  width: 100%;
}

input[type="submit"].small,
input[type="reset"].small,
input[type="button"].small,
button.small,
.button.small {
  font-size: 0.8em;
}

input[type="submit"].large,
input[type="reset"].large,
input[type="button"].large,
button.large,
.button.large {
  font-size: 1.35em;
}

input[type="submit"].disabled,
input[type="submit"]:disabled,
input[type="reset"].disabled,
input[type="reset"]:disabled,
input[type="button"].disabled,
input[type="button"]:disabled,
button.disabled,
button:disabled,
.button.disabled,
.button:disabled {
  pointer-events: none;
  cursor: default;
  opacity: 0.25;
}

@media screen and (max-width: 480px) {
  input[type="submit"].icon,
  input[type="reset"].icon,
  input[type="button"].icon,
  button.icon,
  .button.icon {
    padding: 0;
  }
}

@media screen and (max-width: 480px) and (orientation: portrait) {
  input[type="submit"],
  input[type="reset"],
  input[type="button"],
  button,
  .button {
    padding: 0;
  }
}

input[type="submit"],
input[type="reset"],
input[type="button"],
button,
.button {
  background-color: transparent;
  color: #828282 !important;
  box-shadow: inset 0 0 0 2px #e6e6e6;
}

input[type="submit"]:hover,
input[type="reset"]:hover,
input[type="button"]:hover,
button:hover,
.button:hover {
  background-color: rgba(144, 144, 144, 0.075);
}

input[type="submit"]:active,
input[type="reset"]:active,
input[type="button"]:active,
button:active,
.button:active {
  background-color: rgba(144, 144, 144, 0.15);
}

input[type="submit"].primary,
input[type="reset"].primary,
input[type="button"].primary,
button.primary,
.button.primary {
  box-shadow: none;
  background-color: #4696e5;
  color: #ffffff !important;
}

input[type="submit"].primary:hover,
input[type="reset"].primary:hover,
input[type="button"].primary:hover,
button.primary:hover,
.button.primary:hover {
  background-color: #5ca3e8;
}

input[type="submit"].primary:active,
input[type="reset"].primary:active,
input[type="button"].primary:active,
button.primary:active,
.button.primary:active {
  background-color: #3089e2;
}

/* Form */

form {
  margin: 0 0 2em 0;
}

label {
  display: block;
  font-size: 0.9em;
  font-weight: bold;
  margin: 0 0 1em 0;
}

input[type="text"],
input[type="password"],
input[type="email"],
select,
textarea {
  -moz-appearance: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
  border-radius: 6px;
  border: none;
  border-style: solid;
  border-width: 1px;
  color: inherit;
  display: block;
  outline: 0;
  padding: 0 1em;
  text-decoration: none;
  width: 100%;
}

input[type="text"]:invalid,
input[type="password"]:invalid,
input[type="email"]:invalid,
select:invalid,
textarea:invalid {
  box-shadow: none;
}

select {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' preserveAspectRatio='none' viewBox='0 0 40 40'%3E%3Cpath d='M9.4,12.3l10.4,10.4l10.4-10.4c0.2-0.2,0.5-0.4,0.9-0.4c0.3,0,0.6,0.1,0.9,0.4l3.3,3.3c0.2,0.2,0.4,0.5,0.4,0.9 c0,0.4-0.1,0.6-0.4,0.9L20.7,31.9c-0.2,0.2-0.5,0.4-0.9,0.4c-0.3,0-0.6-0.1-0.9-0.4L4.3,17.3c-0.2-0.2-0.4-0.5-0.4-0.9 c0-0.4,0.1-0.6,0.4-0.9l3.3-3.3c0.2-0.2,0.5-0.4,0.9-0.4S9.1,12.1,9.4,12.3z' fill='%23e6e6e6' /%3E%3C/svg%3E");
  background-size: 1.25rem;
  background-repeat: no-repeat;
  background-position: calc(100% - 1rem) center;
  height: 2.75em;
  padding-right: 2.75em;
  text-overflow: ellipsis;
}

select option {
  color: #828282;
  background: #ffffff;
}

select:focus::-ms-value {
  background-color: transparent;
}

select::-ms-expand {
  display: none;
}

input[type="text"],
input[type="password"],
input[type="email"],
select {
  height: 2.75em;
}

textarea {
  padding: 0.75em 1em;
}

input[type="checkbox"],
input[type="radio"] {
  -moz-appearance: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
  display: block;
  float: left;
  margin-right: -2em;
  opacity: 0;
  width: 1em;
  z-index: -1;
}

input[type="checkbox"] + label,
input[type="radio"] + label {
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  font-size: 1em;
  font-weight: normal;
  padding-left: 2.4em;
  padding-right: 0.75em;
  position: relative;
}

input[type="checkbox"] + label:before,
input[type="radio"] + label:before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1;
  text-transform: none !important;
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
}

input[type="checkbox"] + label:before,
input[type="radio"] + label:before {
  border-radius: 6px;
  border-style: solid;
  border-width: 1px;
  content: "";
  display: inline-block;
  font-size: 0.8em;
  height: 2.0625em;
  left: 0;
  line-height: 2.0625em;
  position: absolute;
  text-align: center;
  top: 0;
  width: 2.0625em;
}

input[type="checkbox"]:checked + label:before,
input[type="radio"]:checked + label:before {
  content: "\f00c";
}

input[type="checkbox"] + label:before {
  border-radius: 6px;
}

input[type="radio"] + label:before {
  border-radius: 100%;
}

::-webkit-input-placeholder {
  opacity: 1;
}

:-moz-placeholder {
  opacity: 1;
}

::-moz-placeholder {
  opacity: 1;
}

:-ms-input-placeholder {
  opacity: 1;
}

.formerize-placeholder {
  opacity: 1;
}

label {
  color: #828282;
}

input[type="text"],
input[type="password"],
input[type="email"],
select,
textarea {
  color: inherit;
  background-color: rgba(144, 144, 144, 0.075);
  border-color: #e6e6e6;
}

input[type="text"]:focus,
input[type="password"]:focus,
input[type="email"]:focus,
select:focus,
textarea:focus {
  border-color: #4696e5;
  box-shadow: 0 0 0 1px #4696e5;
}

.select-wrapper:before {
  color: #e6e6e6;
}

input[type="checkbox"] + label,
input[type="radio"] + label {
  color: #999999;
}

input[type="checkbox"] + label:before,
input[type="radio"] + label:before {
  background-color: rgba(144, 144, 144, 0.075);
  border-color: #e6e6e6;
}

input[type="checkbox"]:checked + label:before,
input[type="radio"]:checked + label:before {
  background-color: #4696e5;
  border-color: #4696e5;
  color: #ffffff;
}

input[type="checkbox"]:focus + label:before,
input[type="radio"]:focus + label:before {
  border-color: #4696e5;
  box-shadow: 0 0 0 1px #4696e5;
}

::-webkit-input-placeholder {
  color: #e0e0e0 !important;
}

:-moz-placeholder {
  color: #e0e0e0 !important;
}

::-moz-placeholder {
  color: #e0e0e0 !important;
}

:-ms-input-placeholder {
  color: #e0e0e0 !important;
}

.formerize-placeholder {
  color: #e0e0e0 !important;
}

/* Icon */

.icon {
  text-decoration: none;
  border-bottom: none;
  position: relative;
}

.icon:before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1;
  text-transform: none !important;
  font-family: "Font Awesome 5 Free";
  font-weight: 400;
}

.icon > .label {
  display: none;
}

.icon:before {
  line-height: inherit;
}

.icon.solid:before {
  font-weight: 900;
}

.icon.brands:before {
  font-family: "Font Awesome 5 Brands";
}

.icon {
  color: #e0e0e0;
}

/* Image */

.image {
  border-radius: 50%;
  border: 0;
  display: inline-block;
  position: relative;
  overflow: hidden;
}

.image img {
  border-radius: 50%;
  display: block;
}

.image.left,
.image.right {
  width: 40%;
}

.image.left img,
.image.right img {
  width: 100%;
}

.image.left {
  float: left;
  margin: 0 1.5em 1em 0;
  top: 0.25em;
}

.image.right {
  float: right;
  margin: 0 0 1em 1.5em;
  top: 0.25em;
}

.image.fit {
  display: block;
  margin: 0 0 2em 0;
  width: 100%;
}

.image.fit img {
  width: 100%;
}

.image.main {
  display: block;
  margin: 0 0 3em 0;
  width: 100%;
}

.image.main img {
  width: 100%;
}

.image.phone {
  box-shadow: none;
  border-radius: 0;
  margin: 0 0 3em 0;
  width: 13em;
}

.image.phone img {
  border-radius: 0;
  display: block;
  position: relative;
  width: 100%;
}

.image.phone .inner,
.image.phone:before,
.image.phone:after {
  display: block;
  border: solid 2px rgba(255, 255, 255, 0.25);
}

.image.phone .inner {
  position: relative;
}

.image.phone .inner:before,
.image.phone .inner:after {
  content: "";
  position: absolute;
  left: 50%;
}

.image.phone .inner:before {
  top: -1.375em;
  margin-left: -1em;
  width: 2em;
  height: 0.25em;
  border-radius: 0.5em;
  background: rgba(255, 255, 255, 0.25);
}

.image.phone .inner:after {
  bottom: -2.75em;
  margin-left: -1em;
  width: 2em;
  height: 2em;
  border-radius: 100%;
  border: solid 2px rgba(255, 255, 255, 0.25);
}

.image.phone:before,
.image.phone:after {
  content: "";
}

.image.phone:before {
  height: 2.5em;
  border-radius: 1em 1em 0 0;
  border-bottom: 0;
}

.image.phone:after {
  height: 3.5em;
  border-radius: 0 0 1em 1em;
  border-top: 0;
}

.image {
  box-shadow: 0 0 0 4px #ffffff, 0 0 0 5px #e6e6e6;
}

.image.phone {
  box-shadow: none;
}

.image.phone .inner,
.image.phone:before,
.image.phone:after {
  border-color: #e6e6e6;
}

.image.phone .inner:before {
  background: #e6e6e6;
}

.image.phone .inner:after {
  border-color: #e6e6e6;
}

/* List */

ol {
  list-style: decimal;
  margin: 0 0 2em 0;
  padding-left: 1.25em;
}

ol li {
  padding-left: 0.25em;
}

ul {
  list-style: disc;
  margin: 0 0 2em 0;
  padding-left: 1em;
}

ul li {
  padding-left: 0.5em;
}

ul.alt {
  list-style: none;
  padding-left: 0;
}

ul.alt li {
  border-top-style: solid;
  border-top-width: 1px;
  padding: 0.5em 0;
}

ul.alt li:first-child {
  border-top: 0;
  padding-top: 0;
}

dl {
  margin: 0 0 2em 0;
}

dl dt {
  display: block;
  font-weight: bold;
  margin: 0 0 1em 0;
}

dl dd {
  margin-left: 2em;
}

ul.alt > li {
  border-top-color: #e6e6e6;
}

/* Actions */

ul.actions {
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  cursor: default;
  list-style: none;
  margin-left: -1em;
  padding-left: 0;
}

ul.actions li {
  padding: 0 0 0 1em;
  vertical-align: middle;
}

ul.actions.special {
  -moz-justify-content: center;
  -webkit-justify-content: center;
  -ms-justify-content: center;
  justify-content: center;
  width: 100%;
  margin-left: 0;
}

ul.actions.special li:first-child {
  padding-left: 0;
}

ul.actions.stacked {
  -moz-flex-direction: column;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-left: 0;
}

ul.actions.stacked li {
  padding: 1.3em 0 0 0;
}

ul.actions.stacked li:first-child {
  padding-top: 0;
}

ul.actions.fit {
  width: calc(100% + 1em);
}

ul.actions.fit li {
  -moz-flex-grow: 1;
  -webkit-flex-grow: 1;
  -ms-flex-grow: 1;
  flex-grow: 1;
  -moz-flex-shrink: 1;
  -webkit-flex-shrink: 1;
  -ms-flex-shrink: 1;
  flex-shrink: 1;
  width: 100%;
}

ul.actions.fit li > * {
  width: 100%;
}

ul.actions.fit.stacked {
  width: 100%;
}

@media screen and (max-width: 480px) {
  ul.actions:not(.fixed) {
    -moz-flex-direction: column;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-left: 0;
    width: 100% !important;
  }

  ul.actions:not(.fixed) li {
    -moz-flex-grow: 1;
    -webkit-flex-grow: 1;
    -ms-flex-grow: 1;
    flex-grow: 1;
    -moz-flex-shrink: 1;
    -webkit-flex-shrink: 1;
    -ms-flex-shrink: 1;
    flex-shrink: 1;
    padding: 1em 0 0 0;
    text-align: center;
    width: 100%;
  }

  ul.actions:not(.fixed) li > * {
    width: 100%;
  }

  ul.actions:not(.fixed) li:first-child {
    padding-top: 0;
  }

  ul.actions:not(.fixed) li input[type="submit"],
  ul.actions:not(.fixed) li input[type="reset"],
  ul.actions:not(.fixed) li input[type="button"],
  ul.actions:not(.fixed) li button,
  ul.actions:not(.fixed) li .button {
    width: 100%;
  }

  ul.actions:not(.fixed) li input[type="submit"].icon:before,
  ul.actions:not(.fixed) li input[type="reset"].icon:before,
  ul.actions:not(.fixed) li input[type="button"].icon:before,
  ul.actions:not(.fixed) li button.icon:before,
  ul.actions:not(.fixed) li .button.icon:before {
    margin-left: -0.5em;
  }
}

section.special,
article.special {
  text-align: center;
}

header p {
  position: relative;
  margin: 0 0 1.5em 0;
}

@media screen and (max-width: 736px) {
  header p br {
    display: none;
  }
}

header h2 + p {
  font-size: 1.25em;
  margin-top: -0.5em;
  line-height: 1.5em;
}

header h3 + p {
  font-size: 1.1em;
  margin-top: -0.25em;
  line-height: 1.5em;
}

header h4 + p,
header h5 + p,
header h6 + p {
  font-size: 0.9em;
  margin-top: -0.6em;
  line-height: 1.5em;
}

header.major {
  margin: 0 0 2.5em 0;
  text-align: center;
}

header.major:after {
  content: "";
  border-bottom: solid 2px #e6e6e6;
  display: block;
  width: 4em;
  margin: 2em auto 0 auto;
}

@media screen and (max-width: 736px) {
  header.major {
    margin: 0 0 2em 0;
  }

  header.major p {
    font-size: 1em;
  }
}

    *{
        border: 1px solid red;
    }

    background-color: #f7f7f7;

    .mainBody{
        background-color: #4696e5;
        padding: 0 0 2.5rem 0;
        -moz-align-items: center;
        -webkit-align-items: center;
        -ms-align-items: center;
        align-items: center;
        display: -moz-flex;
        display: -webkit-flex;
        display: -ms-flex;
        display: flex;
        -moz-justify-content: center;
        -webkit-justify-content: center;
        -ms-justify-content: center;
        justify-content: space-evenly;
        background-image: url(${overlay}), url(${patternS1});
        background-position: top left, center center;
        background-attachment: fixed, fixed;
        background-size: auto, cover;
        height: 70vh;
        min-height: 35em;
        border-bottom: 2px solid #828282;
        border-bottom-left-radius: 50% 6%;
        border-bottom-right-radius: 50% 6%;

        @media (max-width: 1000px){
            flex-direction:column;
        }
    }

    &::after{
        content:'';
        width: 100%;
        height: 30vh;
        background: #f7f7f7;
        position: absolute;
    }

    .mainBody div, form{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .welcome{
        width: 40%;

        @media (max-width: 1000px){
            width: 80%;
        }
    }
    
    h1{
        color: #fff;
        font-size:2.5rem;
        font-weight: 700;
        text-align: center;
        width: 80%;
        margin: 0 auto;
    }

    .errorMessage{
        font-size:.8rem;
        color: black;
    }

    .form div {
        max-width: 100%;
    }

    .form{
        background: white;
        border-radius: 10px;
        border: 2px solid #eeeeee;
        display: flex;
        flex-direction: column;
        padding: 1rem 3rem 1.5rem;
        box-shadow: 0 1px 2px rgba(0,0,0,0.07), 
                    0 2px 4px rgba(0,0,0,0.07), 
                    0 4px 8px rgba(0,0,0,0.07), 
                    0 8px 16px rgba(0,0,0,0.07),
                    0 16px 32px rgba(0,0,0,0.07), 
                    0 32px 64px rgba(0,0,0,0.07);
    }

    .form input {
        width: 100%;
        margin-bottom: 10%;
    }

    h2{
        font-weight: bolder;
        color: #828282
    }

    .form .submitButton{
        width: 90%;
    }
`