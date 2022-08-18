<template>
  <div id="app">
    <h1>123333</h1>
    <Button>asdsddssds</Button>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { Button, Select } from "element-ui";

export default {
  name: "App",
  components: {
    HelloWorld,
    Button,
    Select,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
