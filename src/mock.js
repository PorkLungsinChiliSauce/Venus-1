/**
 * Created by dongweizhao on 17/3/1.
 */
//前端挡板,以便开发不依赖与后台提供服务
import Mock from 'mockjs'

//测试表格
Mock.mock('/query_table_list', {
  'tableData|10': [{
    'date': '@date("yyyy-MM-dd")',
    'name': '@First',
    'address': '上海市普陀区金沙江路 1518 弄'
  }]

});
