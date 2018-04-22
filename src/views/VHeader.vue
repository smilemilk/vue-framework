<!--------------------------------------------------
  XXX项目 - Header.vue
  这是一个页面的简单介绍。
---------------------------------------------------->
<template>
  <el-card class="hello">
    {{msg}}
  </el-card>
</template>

<script>
import Vue from 'vue';
import { Card } from 'element-ui';

Vue.use(Card);

export default {
  name: 'VHeader',
  data() {
    return {
      msg: '【XXX项目】 - Header.vue'
    };
  }
};
</script>

<style lang="less" scoped>
.el-card{
  font-size  : 24px;
  color      : #cc0000;
  background : #fcfcfc;
}
</style>
