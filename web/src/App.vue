<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
    window.onbeforeunload  = function () {
        if(event.clientX>document.body.clientWidth&&event.clientY<0||event.altKey)
        {
            return "您要离开吗？";
        }
    }
    export default {
        name: 'app'
    }
</script>

<style>
  body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, p, blockquote, th, td {
    margin: 0;
    padding: 0;
  }
  body {
    color: #555;
    font-size: 14px;
    font-family: Verdana, Arial, Helvetica, sans-serif;
    /*background: url("/../static/images/e48e1d0cbffed09322e60ec6a930eaf3.jpg") fixed left top no-repeat;*/
    background-color:honeydew;
    background-size: cover;
  }
  td, th, caption {
    font-size: 14px;
  }
  address, caption, cite, code, dfn, em, strong, th, var {
    font-style: normal;
    font-weight: normal;
  }
  a {
    color: #555;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  img {
    border: none;
  }
  ol, ul, li {
    list-style: none;
  }
  input, textarea, select, button {
    font: 14px Verdana, Helvetica, Arial, sans-serif;
  }
  .clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  .clearfix {
    *zoom: 1;
  }
  input::-ms-clear {
    display: none;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
