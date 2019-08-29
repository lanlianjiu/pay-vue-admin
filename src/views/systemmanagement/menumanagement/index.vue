<template>
  <div class="app-container ">

    <div class="menu-management">

      <div class="table-search">
        <el-form ref="search-form" :model="formData" :inline="true">
          <el-form-item label="活动名称" prop="registrationName">
            <el-input v-model="formData.registrationName" placeholder="活动名称" />
          </el-form-item>
          <el-form-item label="创建人" prop="creator">
            <el-input v-model="formData.creator" placeholder="创建人名字" />
          </el-form-item>
          <el-form-item prop="creator">
            <el-button type="primary" class="search">搜索</el-button>
            <el-button type="primary" class="mid-btn">重置</el-button>
          </el-form-item>
        </el-form>
      </div>

      <div class="table-action">
        <el-button type="primary" icon="delete" class="handle-del mr10">批量删除</el-button>
      </div>

      <div class="table-body">
        <el-table
          :height="tableHeght"
          :data="tableData"
          :stripe="true"
          tooltip-effect="dark"
          style="width: 100%, max-width: 100%"
        >
          <el-table-column
            type="selection"
            width="40"
            fixed="left"
          />
          <el-table-column
            prop="date"
            label="日期"
            width="150"
          />
          <el-table-column
            prop="name"
            label="姓名"
            width="150"
          />
          <el-table-column
            prop="province"
            label="省份"
            width="200"
          />
          <el-table-column
            prop="city"
            label="市区"
            width="200"
          />
          <el-table-column
            prop="address"
            label="地址"
            width="300"
          />
          <el-table-column
            prop="zip"
            label="邮编"
            width="170"
          />
          <el-table-column
            fixed="right"
            label="操作"
            width="180"
          >
            <template slot-scope="scope">
              <el-button
                type="text"
                size="small"
              >
                移除{{ scope.row.date }}
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <div class="table-pagination">
        <pagination :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" />
      </div>

    </div>

  </div>
</template>

<script>
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
export default {
  name: 'Menumanagement',
  components: { Pagination },
  data() {
    return {
      tableHeght: (window.innerHeight - 330),
      formData: {},
      total: 100,
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: '+id'
      },
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }]
    }
  },
  methods: {
    handleCurrentChange() {

    },
    handleSizeChange() {

    }
  }
}
</script>

<style lang="scss" scoped>
    .menu-management{
      .table-search{

      }
      .table-action{
        margin:0 0 10px 0;
      }
      .table-body{
        border-top:1px solid #ebeef5;
        border-left:1px solid #ebeef5;
        border-right:1px solid #ebeef5;
      }
      .table-pagination{
        margin-top: 10px;
      }
    }
</style>
