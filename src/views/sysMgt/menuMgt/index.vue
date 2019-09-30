<template>
  <div class="app-container ">

    <div class="menu-management">

      <div class="table-search">
        <el-form ref="search-form" :model="formData" :inline="true">
          <el-form-item label="活动名称" prop="registrationName">
            <el-input v-model="formData.registrationName" size="mini" placeholder="活动名称" />
          </el-form-item>
          <el-form-item label="创建人" prop="creator">
            <el-input v-model="formData.creator" size="mini" placeholder="创建人名字" />
          </el-form-item>
          <el-form-item prop="creator">
            <el-button type="primary" size="mini" class="search">搜索</el-button>
            <el-button type="primary" size="mini" class="mid-btn">重置</el-button>
          </el-form-item>
        </el-form>
      </div>

      <div class="table-action">
        <el-button type="primary" size="mini">新增</el-button>
        <el-button type="primary" size="mini">批量删除</el-button>
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
            label="菜单名称"
            width="150"
          />
          <el-table-column
            prop="city"
            label="菜单标题"
            width="200"
          />
          <el-table-column
            prop="name"
            label="父级菜单"
            width="150"
          />
          <el-table-column
            prop="province"
            label="菜单URL"
            width="200"
          />

          <el-table-column
            prop="address"
            label="菜单图标"
            width="300"
          />
          <el-table-column
            prop="zip"
            label="是否缓存"
            width="170"
          />
          <el-table-column
            prop="zip"
            label="是否面包屑中显示"
            width="170"
          />
          <el-table-column
            prop="zip"
            label="面包屑中是否点击"
            width="170"
          />
          <el-table-column
            prop="zip"
            label="显示根路由"
            width="170"
          />
          <el-table-column
            fixed="right"
            label="操作"
            width="210"
          >
            <template slot-scope="scope">
              <el-button
                type="text"
                size="small"
                @click="addMeuns(scope.row)"
              >
                新增子菜单
              </el-button>
              <el-button
                type="text"
                size="small"
                @click="assignPermissions(scope.row)"
              >
                角色授权
              </el-button>
              <el-button
                type="text"
                size="small"
              >
                <el-dropdown trigger="click">
                  <span class="el-dropdown-link">
                    更多<i class="el-icon-caret-bottom el-icon--right" />
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item @click="editMenus(scope.row)">修改</el-dropdown-item>
                    <el-dropdown-item class="btn-danger" @click="delMenus(scope.row)">删除</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
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
      tableHeght: (window.innerHeight - 290),
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

    },
    addMeuns() {

    },
    delMenus() {

    },
    editMenus() {

    },
    assignPermissions() {

    }
  }
}
</script>

<style lang="scss" scoped>
    .menu-management{
      .table-search{
        .el-form-item{
          margin-bottom: 15px;
        }
      }
      .table-action{
        margin:0 0 10px 0;
      }
      .table-body{
        border-top:1px solid #ebeef5;
        border-left:1px solid #ebeef5;
        border-right:1px solid #ebeef5;
        .el-dropdown-link {
          cursor: pointer;
          color: #409EFF;
          font-size: 12px;
        }
      }
    }
</style>
