<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html, body, #app {
  height: 100%;
  width: 100%;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

i {
  font-style: normal;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

/* 饿了么ui 级联选择器下拉框下册滚动条 */
.el-scrollbar__wrap {
  overflow: hidden !important;
}
</style>
