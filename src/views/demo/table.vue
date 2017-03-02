<template>
  <div>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    <el-row style="float:right">
      <el-col :span="24">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="2"
          :page-size="100"
          layout="total, prev, pager, next"
          :total="1000">
        </el-pagination>
      </el-col>
    </el-row>


  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: []
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        console.log(`当前页: ${val}`);
        this.load();
      },
      load(){
        this.$http({url: '/query_table_list'}).then(function (res) {
          this.tableData = res.data.tableData;
        }, function (res) {
          //this.showMsg = true;
        });
      }
    },mounted: function () {
       this.load();
    }
  }
</script>
