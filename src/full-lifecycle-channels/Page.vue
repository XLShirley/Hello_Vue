<!--
 * @Author: 肖玲
 * @Date: 2023-11-08 18:12:00
 * @LastEditTime: 2023-11-08 18:41:41
 * @LastEditors: 肖玲
 * @Description: 
 * @FilePath: \Hello_Vue\src\full-lifecycle-channels\Page.vue
 * 全生命周期
-->
<template>
  <div>
    <!-- <ViewHeader parentName="渠道发货分析">
      <a-button
        v-if="$store.state.funcModuleArray.indexOf(4033001) > -1"
        size="large"
        data-html2canvas-ignore="true"
        :loading="exportLoading"
        @click="onExport"
        >导出
      </a-button>
    </ViewHeader> -->
    <el-button :loading="exportLoading" @click="onExport">导出 </el-button>
    <div class="view-content">
      <!-- <a-card class="card">
        <a-form-model :model="filterSearch" layout="inline">
          <a-form-model-item label="截止月份：">
            <a-month-picker
              v-model="filterSearch.end_date"
              style="min-width: 200px"
              valueFormat="yyyy-MM"
              placeholder="请选择机制月份"
              :allowClear="false"
            />
          </a-form-model-item>
          <a-form-model-item label="产品：">
            <a-select
              v-model="filterSearch.goods_id"
              :allowClear="false"
              style="min-width: 200px"
            >
              <a-select-option
                :value="item.goods_id"
                v-for="item in goodsList"
                :key="item.value"
              >
                {{ item.name + ' ' + item.spec }}
              </a-select-option>
            </a-select>
          </a-form-model-item>

          <a-form-model-item label="工业筛选：">
            <a-select
              v-model="filterSearch.client_id"
              :allowClear="false"
              style="min-width: 200px"
            >
              <a-select-option
                :value="item.client_id"
                v-for="item in industrialList"
                :key="item.value"
              >
                {{ item.name }}
              </a-select-option>
            </a-select>
          </a-form-model-item>

          <a-form-model-item label="">
            <a-input-search
              v-model="filterSearch.batch"
              placeholder="批号"
              @search="onSearch"
              enter-button="查找"
            >
            </a-input-search>
          </a-form-model-item>
        </a-form-model>
      </a-card> -->

      <a-card class="card">
        <div
          class="tree-body"
          @mousedown="dragMousedown"
          @mousemove="dragMousemove"
          @wheel="onWheel"
        >
          <div class="tip-box" v-if="data">
            <p class="tip-box-title">产品信息</p>
            <div>产品：{{ data.goods_info.goods_name_spec }}</div>
            <div>批号：{{ data.goods_info.batch }}</div>

            <p class="tip-box-title">工业发货</p>
            <div>
              工业发货总量：{{ data.total_info.industrial_purchase_total }}
            </div>

            <p class="tip-box-title">商业库存</p>
            <div>整体商业库存汇总：{{ data.total_info.sy_stock_total }}</div>
            <div>
              一级商业库存汇总：{{ data.total_info.sy_level_1_stock_total }}
            </div>
            <div>
              二级商业库存汇总：{{ data.total_info.sy_level_2_stock_total }}
            </div>

            <p class="tip-box-title">终端购进</p>
            <div>终端购进总量：{{ data.total_info.zd_purchase_total }}</div>
          </div>
          <div
            class="tree-content"
            :style="{
              transform: `translateX(${treeLeft}px) translateY(${treeTop}px) scale(${scale})`,
            }"
          >
            <TreeNode v-if="data" isFirst :dataList="data.data_list"></TreeNode>
            <div class="default-client" v-else>
              <div class="text">
                {{ defaultClient }}
              </div>
            </div>
          </div>
        </div>
      </a-card>

      <div class="export-tree-content" ref="treeContent" v-show="exportLoading">
        <div class="tip-box" v-if="data">
          <p class="tip-box-title">产品信息</p>
          <div>产品：{{ data.goods_info.goods_name_spec }}</div>
          <div>批号：{{ data.goods_info.batch }}</div>

          <p class="tip-box-title">工业发货</p>
          <div>
            工业发货总量：{{ data.total_info.industrial_purchase_total }}
          </div>

          <p class="tip-box-title">商业库存</p>
          <div>整体商业库存汇总：{{ data.total_info.sy_stock_total }}</div>
          <div>
            一级商业库存汇总：{{ data.total_info.sy_level_1_stock_total }}
          </div>
          <div>
            二级商业库存汇总：{{ data.total_info.sy_level_2_stock_total }}
          </div>

          <p class="tip-box-title">终端购进</p>
          <div>终端购进总量：{{ data.total_info.zd_purchase_total }}</div>
        </div>
        <TreeNode v-if="data" isFirst :dataList="data.data_list"></TreeNode>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import { throttle } from '@/utils/util';
// import { getGoodsListOA } from '@/api/goods';
// import { industrialList } from '@/api/behaviorManage';
// import { fullLifecycleChannels } from '@/api/stats';
import TreeNode from '@/full-lifecycle-channels/components/TreeNode.vue';
import html2canvas from 'html2canvas';
export default {
  components: {
    TreeNode,
  },
  data() {
    return {
      filterSearch: {
        end_date: '',
        goods_id: '',
        client_id: '',
        batch: '',
      },
      goodsList: [],
      industrialList: [],
      startclientX: 0,
      startclientY: 0,
      treeLeft: 0,
      treeTop: 0,
      isMousedown: false,
      scale: 1,
      defaultClient: '',
      data: {
        client_info: {
          client_id: 32675,
          client_code: 'BJL000001',
          name: '工业1工业1工业1工业1工业1工业1工业1工业1工业1工业1工业1工业1工业1工业1工业1工业1工业1工业1工业1工业1工业1工业1工业1工业1工业1工业1工业1工业1工业1工业1工业1工业1工业1工业1工业1工业1工业1工业1',
        },
        goods_info: {
          goods_id: 1454,
          goods_code: 'GML00012132',
          name: '感冒灵',
          spec: '50ml',
          batch: '2023090805',
          goods_name_spec: '感冒灵 50ml',
        },
        total_info: {
          industrial_purchase_total: '0',
          sy_stock_total: '0',
          sy_level_1_stock_total: '0',
          sy_level_2_stock_total: '0',
          zd_purchase_total: '2,114',
        },
        data_list: [
          {
            client_id: 167041,
            client_cls: 4,
            client_name: '旺达制药',
            first_date: '',
            purchase: '0',
            theory_purchase: '0',
            sales: '2000',
            stock: '0',
            next_list: [
              {
                superior_client_id: 167041,
                client_id: 165103,
                client_name:
                  '测试配送商测试配送商测试配送商测试配送商测试配送商测试配送商测试配送商测试配送商测试配送商测试配送商测试配送商测试配送商测试配送商测试配送商测试配送商测试配送商测试配送商测试配送商测试配送商测试配送商测试配送商测试配送商测试配送商测试配送商',
                client_cls: 4,
                first_date: '',
                purchase: '0',
                theory_purchase: '0',
                sales: '0',
                stock: '0',
                next_list: [
                  {
                    superior_client_id: 166938,
                    client_id: 165201,
                    client_name: '配送中心医院阿',
                    client_cls: 4,
                    next_list: [
                      {
                        superior_client_id: 165201,
                        client_id: 124588,
                        client_name:
                          '益丰大药店连锁股份有限公司浏阳市大瑶镇瑶发街店',
                        client_cls: 1,
                        next_list: [
                          {
                            superior_client_id: 124588,
                            client_id: 124589,
                            client_name:
                              '湖南康尔佳宝庆大药房连锁有限公司隆回县水源康普药店',
                            client_cls: 1,
                            next_list: [],
                            first_date: '2023-07-12',
                            purchase: '1',
                            theory_purchase: '0',
                            sales: '0',
                            stock: '0',
                          },
                        ],
                        first_date: '2023-08-28',
                        purchase: '1,013',
                        theory_purchase: '0',
                        sales: '0',
                        stock: '0',
                      },
                    ],
                    first_date: '',
                    purchase: '0',
                    theory_purchase: '0',
                    sales: '1,013',
                    stock: '0',
                  },
                  {
                    superior_client_id: 166938,
                    client_id: 166996,
                    client_name: '回源制药集团',
                    client_cls: 3,
                    next_list: [],
                    first_date: '',
                    purchase: '0',
                    theory_purchase: '0',
                    sales: '0',
                    stock: '0',
                  },
                ],
              },
              {
                superior_client_id: 167041,
                client_id: 1651055,
                client_name: '测试配送商',
                client_cls: 4,
                next_list: [
                  {
                    superior_client_id: 166938,
                    client_id: 165201,
                    client_name: '配送中心医院阿',
                    client_cls: 4,
                    next_list: [
                      {
                        superior_client_id: 165201,
                        client_id: 124588,
                        client_name:
                          '益丰大药店连锁股份有限公司浏阳市大瑶镇瑶发街店',
                        client_cls: 1,
                        next_list: [
                          {
                            superior_client_id: 124588,
                            client_id: 124589,
                            client_name:
                              '湖南康尔佳宝庆大药房连锁有限公司隆回县水源康普药店',
                            client_cls: 1,
                            next_list: [],
                            first_date: '2023-07-12',
                            purchase: '1',
                            theory_purchase: '0',
                            sales: '0',
                            stock: '0',
                          },
                        ],
                        first_date: '2023-08-28',
                        purchase: '1,013',
                        theory_purchase: '0',
                        sales: '0',
                        stock: '0',
                      },
                    ],
                    first_date: '',
                    purchase: '0',
                    theory_purchase: '0',
                    sales: '1,013',
                    stock: '0',
                  },
                  {
                    superior_client_id: 166938,
                    client_id: 166996,
                    client_name: '回源制药集团',
                    client_cls: 3,
                    next_list: [],
                    first_date: '',
                    purchase: '0',
                    theory_purchase: '0',
                    sales: '0',
                    stock: '0',
                  },
                ],
                first_date: '',
                purchase: '0',
                theory_purchase: '0',
                sales: '0',
                stock: '0',
              },
              {
                superior_client_id: 167041,
                client_id: 1653103,
                client_name: '测试配送商',
                client_cls: 4,
                first_date: '',
                purchase: '0',
                theory_purchase: '0',
                sales: '0',
                stock: '0',
                next_list: [
                  {
                    superior_client_id: 166938,
                    client_id: 165201,
                    client_name: '配送中心医院阿',
                    client_cls: 4,
                    next_list: [
                      {
                        superior_client_id: 165201,
                        client_id: 124588,
                        client_name:
                          '益丰大药店连锁股份有限公司浏阳市大瑶镇瑶发街店',
                        client_cls: 1,
                        next_list: [
                          {
                            superior_client_id: 124588,
                            client_id: 124589,
                            client_name:
                              '湖南康尔佳宝庆大药房连锁有限公司隆回县水源康普药店',
                            client_cls: 1,
                            next_list: [],
                            first_date: '2023-07-12',
                            purchase: '1',
                            theory_purchase: '0',
                            sales: '0',
                            stock: '0',
                          },
                        ],
                        first_date: '2023-08-28',
                        purchase: '1,013',
                        theory_purchase: '0',
                        sales: '0',
                        stock: '0',
                      },
                    ],
                    first_date: '',
                    purchase: '0',
                    theory_purchase: '0',
                    sales: '1,013',
                    stock: '0',
                  },
                  {
                    superior_client_id: 166938,
                    client_id: 166996,
                    client_name: '回源制药集团',
                    client_cls: 3,
                    next_list: [],
                    first_date: '',
                    purchase: '0',
                    theory_purchase: '0',
                    sales: '0',
                    stock: '0',
                  },
                ],
              },
              {
                superior_client_id: 167041,
                client_id: 166938,
                client_name: '批量药店062902',
                client_cls: 1,
                next_list: [
                  {
                    superior_client_id: 166938,
                    client_id: 165201,
                    client_name: '配送中心医院阿',
                    client_cls: 4,
                    next_list: [
                      {
                        superior_client_id: 165201,
                        client_id: 124588,
                        client_name:
                          '益丰大药店连锁股份有限公司浏阳市大瑶镇瑶发街店',
                        client_cls: 1,
                        next_list: [
                          {
                            superior_client_id: 124588,
                            client_id: 124589,
                            client_name:
                              '湖南康尔佳宝庆大药房连锁有限公司隆回县水源康普药店',
                            client_cls: 1,
                            next_list: [],
                            first_date: '2023-07-12',
                            purchase: '1',
                            theory_purchase: '0',
                            sales: '0',
                            stock: '0',
                          },
                        ],
                        first_date: '2023-08-28',
                        purchase: '1,013',
                        theory_purchase: '0',
                        sales: '0',
                        stock: '0',
                      },
                    ],
                    first_date: '',
                    purchase: '0',
                    theory_purchase: '0',
                    sales: '1,013',
                    stock: '0',
                  },
                  {
                    superior_client_id: 166938,
                    client_id: 166996,
                    client_name: '回源制药集团',
                    client_cls: 3,
                    next_list: [],
                    first_date: '',
                    purchase: '0',
                    theory_purchase: '0',
                    sales: '0',
                    stock: '0',
                  },
                ],
                first_date: '2023-08-20',
                purchase: '1,100',
                theory_purchase: '0',
                sales: '0',
                stock: '0',
              },
              {
                superior_client_id: 167041,
                client_id: 1669328,
                client_name: '批量药店062902',
                client_cls: 1,
                next_list: [
                  {
                    superior_client_id: 166938,
                    client_id: 165201,
                    client_name: '配送中心医院阿',
                    client_cls: 4,
                    next_list: [
                      {
                        superior_client_id: 165201,
                        client_id: 124588,
                        client_name:
                          '益丰大药店连锁股份有限公司浏阳市大瑶镇瑶发街店',
                        client_cls: 1,
                        next_list: [
                          {
                            superior_client_id: 124588,
                            client_id: 124589,
                            client_name:
                              '湖南康尔佳宝庆大药房连锁有限公司隆回县水源康普药店',
                            client_cls: 1,
                            next_list: [],
                            first_date: '2023-07-12',
                            purchase: '1',
                            theory_purchase: '0',
                            sales: '0',
                            stock: '0',
                          },
                        ],
                        first_date: '2023-08-28',
                        purchase: '1,013',
                        theory_purchase: '0',
                        sales: '0',
                        stock: '0',
                      },
                    ],
                    first_date: '',
                    purchase: '0',
                    theory_purchase: '0',
                    sales: '1,013',
                    stock: '0',
                  },
                  {
                    superior_client_id: 166938,
                    client_id: 166996,
                    client_name: '回源制药集团',
                    client_cls: 3,
                    next_list: [],
                    first_date: '',
                    purchase: '0',
                    theory_purchase: '0',
                    sales: '0',
                    stock: '0',
                  },
                ],
                first_date: '2023-08-20',
                purchase: '1,100',
                theory_purchase: '0',
                sales: '0',
                stock: '0',
              },
              {
                superior_client_id: 167041,
                client_id: 16226938,
                client_name: '批量药店062902',
                client_cls: 1,
                next_list: [
                  {
                    superior_client_id: 166938,
                    client_id: 165201,
                    client_name: '配送中心医院阿',
                    client_cls: 4,
                    next_list: [
                      {
                        superior_client_id: 165201,
                        client_id: 124588,
                        client_name:
                          '益丰大药店连锁股份有限公司浏阳市大瑶镇瑶发街店',
                        client_cls: 1,
                        next_list: [
                          {
                            superior_client_id: 124588,
                            client_id: 124589,
                            client_name:
                              '湖南康尔佳宝庆大药房连锁有限公司隆回县水源康普药店',
                            client_cls: 1,
                            next_list: [],
                            first_date: '2023-07-12',
                            purchase: '1',
                            theory_purchase: '0',
                            sales: '0',
                            stock: '0',
                          },
                        ],
                        first_date: '2023-08-28',
                        purchase: '1,013',
                        theory_purchase: '0',
                        sales: '0',
                        stock: '0',
                      },
                    ],
                    first_date: '',
                    purchase: '0',
                    theory_purchase: '0',
                    sales: '1,013',
                    stock: '0',
                  },
                  {
                    superior_client_id: 166938,
                    client_id: 166996,
                    client_name: '回源制药集团',
                    client_cls: 3,
                    next_list: [],
                    first_date: '',
                    purchase: '0',
                    theory_purchase: '0',
                    sales: '0',
                    stock: '0',
                  },
                ],
                first_date: '2023-08-20',
                purchase: '1,100',
                theory_purchase: '0',
                sales: '0',
                stock: '0',
              },
            ],
          },
        ],
      },

      exportLoading: false,
    };
  },
  created() {
    // this.getGoodsList();
    // this.getIndustrialList();
    this.filterSearch.end_date = moment().format('YYYY-MM');
  },
  mounted() {
    document.addEventListener('mouseup', this.dragMouseup);
  },
  methods: {
    getData() {
      fullLifecycleChannels(this.filterSearch).then((res) => {
        console.log(res, '获取到的数据');
        if (res.status == 0) {
          this.data = res.data;
        } else {
          this.$message.error(res.msg);
        }
      });
    },
    /**
     * 获取产品列表
     */
    getGoodsList() {
      getGoodsListOA({
        check_department: 1,
      }).then((res) => {
        if (0 === res.status) {
          this.goodsList = res.data;
          this.filterSearch.goods_id = this.goodsList[0].goods_id;
          console.log(res, '获取产品');
        } else {
        }
      });
    },
    /**
     * 获取工业列表
     */
    getIndustrialList() {
      industrialList({
        status: 1 || '',
      }).then((res) => {
        if (0 === res.status) {
          console.log(res, '获取产品');
          this.industrialList = res.data;
          this.filterSearch.client_id = this.industrialList[0].client_id || '';
          this.defaultClient = this.industrialList[0].name || '';
        } else {
        }
      });
    },
    /**
     * 导出
     */
    onExport() {
      // if (!this.filterSearch.batch) {
      //   return this.$message.error('请输入产品批号');
      // }

      this.exportLoading = true;
      this.$nextTick(() => {
        html2canvas(this.$refs.treeContent, {
          allowTaint: true,
          scale: 3,
        }).then((canvas) => {
          let filename = '全生命周期渠道导出.png';
          let a = document.createElement('a');
          a.href = canvas.toDataURL('image/png');
          a.download = filename;
          a.click();

          this.exportLoading = false;
        });
      });
    },
    /**
     * 查询
     */
    onSearch() {
      if (!this.filterSearch.batch) {
        return this.$message.error('请输入产品批号');
      }
      this.getData();
    },
    /**
     * 拖拽开始
     */
    dragMousedown(event) {
      console.log(event, '拖拽开始');
      this.startclientX = event.clientX - this.treeLeft; // 记录拖拽元素初始位置
      this.startclientY = event.clientY - this.treeTop;

      this.isMousedown = true;
    },

    /**
     * 拖拽中
     */
    dragMousemove: throttle(function (event) {
      if (this.isMousedown) {
        console.log(event, '拖拽中');
        let x = event.clientX - this.startclientX; // 计算偏移量
        let y = event.clientY - this.startclientY;

        this.treeLeft = x;
        this.treeTop = y;
      }
    }),
    /**
     * 拖拽结束
     */
    dragMouseup() {
      this.isMousedown = false;
    },
    onWheel: throttle(function (event) {
      if (event.deltaY > 0) {
        if (this.scale > 0.4) {
          this.scale -= 0.05;
        }
        //向下
        console.log('正在向下');
      } else if (event.deltaY < 0) {
        this.scale += 0.05;
        //向上
        console.log('正在向上');
      }
    }),
  },
  destroyed() {
    document.removeEventListener('mouseup', this.dragMouseup);
  },
};
</script>

<style lang="less" scoped>
.tree-body {
  user-select: none;
  width: 100%;
  height: calc(~'100vh - 300px');
  position: relative;
  overflow: hidden;
  background: #f0faff;
  padding-top: 50px;
  box-sizing: border-box;

  .tree-content {
    min-width: 100%;
    min-height: 100%;
    transition: all 0.1s;
  }

  .default-client {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 100px;
    .text {
      background: #ccd9fd;
      box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      width: fit-content;
      padding: 5px 20px;
    }
  }
}
.tip-box {
  position: absolute;
  right: 10px;
  top: 10px;
  width: 240px;
  background: #fff;
  border: 1px solid #f2f2f2;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.1);
  opacity: 1;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 20px;
  box-sizing: border-box;
  z-index: 9999;
  &-title {
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: #333333;
  }
}
.export-tree-content {
  width: fit-content;
  height: fit-content;
  position: relative;
  padding-bottom: 150px;
  padding-right: 250px;
  background: #fff;
  z-index: -1;
}
</style>
