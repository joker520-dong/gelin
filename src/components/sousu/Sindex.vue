<template>
  <div>
    <van-search
      v-model="value"
      show-action
      @search="onSearch"
      @cancel="onCancel"
      placeholder="请输入搜索关键词"
    >
      <template #left>
        <van-icon name="arrow-left" @click="fanhui" />
      </template>
    </van-search>

    <van-cell title="更多热搜内容" is-link @click="xx" />
    <hr />

    <van-cell title="搜索历史">
      <template #right-icon>
        <van-icon name="delete" class="search-icon" @click="remove" />
      </template>
    </van-cell>

    <!-- 下面的历史 -->
    <!-- 得拿到数据  遍历下面得单元格 -->

    <van-cell v-for="(val,index) in arr" :key="index"    :title=val icon="underway-o">
      <template #right-icon>
        <van-icon name="cross" class="search-icon" @click="shanchu(index)" />
      </template>
    </van-cell>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "Sindex",
  data() {
    return {
      value: "",
      arr:['新冠病毒','nihao']
    };
  },
  methods: {
    onSearch(val) {
    this.arr.push(val)
    this.value=''
    },
    onCancel() {
      Toast("取消");
    },
    xx() {
     this.$router.push({ path: '/sresou'});
    },
    fanhui() {
      this.$router.go(-1);
    },
    remove() {
      this.arr=""
    },
    shanchu(index) {
    this.arr.splice(index,1)
    },
  },
};
</script>
<style lang="scss" scoped>
.custom-title {
  margin-right: 4px;
  vertical-align: middle;
}

.search-icon {
  font-size: 16px;
  line-height: inherit;
}
</style>
