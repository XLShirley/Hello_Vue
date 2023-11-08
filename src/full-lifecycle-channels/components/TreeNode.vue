<!--
 * @Author: 肖玲
 * @Date: 2023-11-08 18:13:31
 * @LastEditTime: 2023-11-08 18:13:41
 * @LastEditors: 肖玲
 * @Description: 
 * @FilePath: \Hello_Vue\src\full-lifecycle-channels\components\TreeNode.vue
 * 树状图组件
-->
<template>
  <div class="tree-node">
    <div class="tree-node-item" v-for="(item, index) in dataList" :key="index">
      <div
        class="node-item"
        :class="{
          'has-node-item': item.next_list.length > 0 && open,
        }"
      >
        <div class="node-item-content">
          <div
            class="node-item-content-title"
            :title="item.client_name"
            :style="{
              background: isFirst
                ? ''
                : item.client_cls == 3 || item.client_cls == 4
                ? '#FBD6D6'
                : '#FCDFAF',
            }"
          >
            {{ item.client_name }}
          </div>
          <div class="node-item-content-content">
            <div v-if="isFirst">发货总量：{{ item.sales }}</div>

            <div v-else-if="item.client_cls == 3 || item.client_cls == 4">
              <div>首次购进时间：{{ item.first_date }}</div>

              <div style="display: flex; justify-content: space-between">
                <span>实际购进总量：{{ item.purchase }}</span>
                <span>理论购进总量：{{ item.theory_purchase }}</span>
              </div>
              <div style="display: flex; justify-content: space-between">
                <span>销售总量：{{ item.sales }}</span>
                <span>库存数量：{{ item.stock }}</span>
              </div>
            </div>
            <div v-else>
              <div>首次购进时间：{{ item.first_date }}</div>
              <div>购进总量：{{ item.purchase }}</div>
            </div>
          </div>
          <img
            v-if="open && item.next_list.length > 0"
            @click="onChangeOpen(1)"
            src="~@/assets/icon/scale_icon.png"
            class="node-item-content-icon"
          />
          <img
            v-if="!open && item.next_list.length > 0"
            @click="onChangeOpen(2)"
            src="~@/assets/icon/open_icon.png"
            class="node-item-content-icon"
          />
        </div>
      </div>

      <div
        class="tree-node-item-node"
        :class="{
          'open-child': !open,
        }"
        v-if="item.next_list.length"
      >
        <div
          class="node-line"
          :class="{
            'has-node': nextNode.next_list.length > 0 && !open,
          }"
          v-for="(nextNode, nextIndex) in item.next_list"
          :key="nextNode.client_id"
        >
          <div
            class="line"
            v-if="item.next_list.length !== 1"
            :class="{
              'line-mid-left': nextIndex == 0,
              'line-mid-right': item.next_list.length === nextIndex + 1,
            }"
          ></div>
          <tree-node :dataList="[nextNode]"></tree-node>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tree-node',
  props: {
    dataList: {
      type: Array,
      default: () => [],
    },
    isFirst: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      open: true,
    };
  },
  methods: {
    onChangeOpen(type) {
      this.open = !this.open;
    },
  },
};
</script>

<style lang="less" scoped>
.tree-node {
  display: flex;
  justify-content: center;
  .tree-node-item {
    // position: relative;
    // display: flex;
    // justify-content: center;
    .node-item {
      display: flex;
      justify-content: center;
      position: relative;

      .node-item-content {
        width: 220px;
        padding-bottom: 10px;
        background: #fff;
        position: relative;
        border: 1px solid #f2f2f2;
        box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        &-title {
          padding: 5px;
          box-sizing: border-box;
          text-align: center;
          background: #ccd9fd;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
        &-content {
          padding: 5px 10px;
          box-sizing: border-box;
        }
        &-icon {
          width: 20px;
          height: 20px;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
    .has-node-item {
      &::before {
        content: '';
        position: absolute;
        top: 100%;
        left: 50%;
        /* z-index: -1; */
        width: 4px;
        height: 30px;
        transform: translateX(-2px);
        background-color: #ccc;
      }
    }
    &-node {
      // position: absolute;

      transform: translateY(30px);
      // bottom: -40px;
      // width: 100%;
      display: flex;
      justify-content: space-around;

      .node-line {
        // padding: 0 50px;
        min-width: 350px;
        position: relative;
        padding-top: 50px;
        &::before {
          content: '';
          position: absolute;
          top: 0px;
          left: 50%;
          transform: translateX(-2px);
          /* z-index: -1; */
          width: 4px;
          height: 40px;
          background-color: #ccc;
        }
        &::after {
          content: '';
          position: absolute;
          top: 40px;
          left: 50%;
          transform: translateX(-6px);
          width: 0;
          height: 4px;
          border-style: solid;
          border-width: 8px 6px 4px;
          border-color: #ccc transparent transparent;
        }
        .line {
          width: 100%;
          height: 4px;
          background: #ccc;
          position: absolute;
          top: 0;
          left: 0;
        }

        .line-mid-left {
          width: 50%;
          left: 50%;
        }
        .line-mid-right {
          width: 50%;
          right: 50%;
        }
      }

      .has-node {
        padding-left: 0;
        padding-right: 0;
      }
    }

    .open-child {
      display: none;
    }
  }
}
</style>
