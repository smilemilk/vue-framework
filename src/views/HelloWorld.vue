<template>
  <el-card class="hello">
    <el-date-picker
      v-model="value"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
  </el-card>
</template>

<script>

import Vue from 'vue';
import { Card, DatePicker } from 'element-ui';

Vue.use(Card);
Vue.use(DatePicker);

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      value: null
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2{
  font-weight : normal;
}
ul{
  list-style-type : none;
  padding         : 0;
}
li{
  display : inline-block;
  margin  : 0 10px;
}
a{
  color : #42b983;
}
</style>
