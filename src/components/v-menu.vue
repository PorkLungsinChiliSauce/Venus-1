<template>
  <div id="nav-col">
    <section id="col-left" class="col-left-nano">
      <div id="col-left-inner" class="col-left-nano-content">
        <div id="user-left-box" class="clearfix hidden-sm hidden-xs dropdown profile2-dropdown">
          <img alt="" src="../assets/images/samples/scarlet-159.png"/>

          <div class="user-box">
									<span class="name">
										<a class="dropdown-toggle" data-toggle="dropdown">
                      Scarlett J.
                      <i class="fa fa-angle-down"></i>
                    </a>
										<ul class="dropdown-menu">
                      <li><a href="#/pages/user-profile"><i class="fa fa-user"></i>Profile</a>
                      </li>
                      <li><a href=""><i class="fa fa-cog"></i>Settings</a></li>
                      <li><a href=""><i class="fa fa-envelope-o"></i>Messages</a></li>
                      <li><a href=""><i class="fa fa-power-off"></i>Logout</a></li>
                    </ul>
									</span>
									<span class="status">
										<i class="fa fa-circle"></i> Online
									</span>
          </div>
        </div>
        <div class="collapse navbar-collapse navbar-ex1-collapse" id="sidebar-nav" bs-navbar>
          <ul class="nav nav-pills nav-stacked">
            <li class="nav-header nav-header-first hidden-sm hidden-xs">
              <br/>
            </li>
            <li data-match-route="/dasboard">
              <a href="" class="dropdown-toggle">
                <i class="fa fa-dashboard"></i>
                <span>系统管理</span>
                <i class="fa fa-angle-right drop-icon"></i>
              </a>
              <ul class="submenu">
                <li>
                  <router-link to="/index/test">机构管理</router-link>
                </li>
                <li>
                  <router-link to="/index">角色管理</router-link>
                </li>
                <li>
                  <router-link to="/index/hello">用户管理</router-link>
                </li>
                <li>
                  <a data-match-route="/tables/tables-advanced" href="#/tables/tables-advanced">
                    菜单管理
                  </a>
                </li>

              </ul>
            </li>
            <li data-match-route="/dasboard">
              <a href="" class="dropdown-toggle">
                <i class="fa fa-dashboard"></i>
                <span>示例</span>
                <i class="fa fa-angle-right drop-icon"></i>
              </a>
              <ul class="submenu">
                <li>
                  <router-link to="/index/Notifi">通知</router-link>
                </li>
                <li>
                  <router-link to="/index/MessageBox">提示框</router-link>
                </li>
                <li>
                  <router-link to="/index/Tabs">标签页</router-link>
                </li>
                <li>
                  <router-link to="/index/form">Form表单</router-link>
                </li>
                <li>
                  <router-link to="/index/Pagination">分页组件</router-link>
                </li>
                <li>
                  <router-link to="/index/table">表格</router-link>
                </li>

                <li>
                  <a data-match-route="/tables/tables-advanced" href="#/tables/tables-advanced">
                    菜单管理
                  </a>
                </li>

              </ul>
            </li>
            <li data-match-route="/tables*">
              <a href="" class="dropdown-toggle">
                <i class="fa fa-table"></i>
                <span>参数管理</span>
                <i class="fa fa-angle-right drop-icon"></i>
              </a>
              <ul class="submenu">
                <li>
                  <a data-match-route="/tables/simple" href="#/tables/simple">
                    公共参数管理
                  </a>
                </li>
                <li>
                  <a data-match-route="/tables/tables-advanced" href="#/tables/tables-advanced">
                    数据字典管理
                  </a>
                </li>

              </ul>
            </li>
            <li data-match-route="/email*">
              <a href="" class="dropdown-toggle">
                <i class="fa fa-envelope"></i>
                <span>批量管理</span>
                <i class="fa fa-angle-right drop-icon"></i>
              </a>
              <ul class="submenu">
                <li>
                  <a data-match-route="/email/email-inbox" href="#/email/email-inbox">
                    定时任务配置
                  </a>
                </li>
                <li>
                  <a data-match-route="/email/email-detail" href="#/email/email-detail">
                    作业监控
                  </a>
                </li>
                <li>
                  <a data-match-route="/email/email-compose" href="#/email/email-compose">
                    批量监控
                  </a>
                </li>
              </ul>
            </li>
            <li data-match-route="/email*">
              <a href="" class="dropdown-toggle">
                <i class="fa fa-envelope"></i>
                <span>消息管理</span>
                <span class="label label-primary label-circle pull-right">28</span>
              </a>
            </li>
            <li data-match-route="/graphs*">
              <a href="" class="dropdown-toggle">
                <i class="fa fa-bar-chart-o"></i>
                <span>统一流水</span>
                <span class="label label-success pull-right">New</span>
              </a>

            </li>
            <li data-match-route="/widgets">
              <a href="" class="dropdown-toggle">
                <i class="fa fa-th-large"></i>
                <span>开发人员工具</span>
                <i class="fa fa-angle-right drop-icon"></i>
              </a>
              <ul class="submenu">
                <li>
                  <a data-match-route="/graphs/graphs-morris" href="#/graphs/graphs-morris">
                    代码生成器
                  </a>
                </li>
                <li>
                  <a href="" class="dropdown-toggle">
                    组件示例
                    <i class="fa fa-angle-right drop-icon"></i>
                  </a>
                  <ul class="submenu">
                    <li>
                      <a data-match-route="/ui-kit/icons/icons-awesome" href="#/ui-kit/icons/icons-awesome">
                        表格组件
                      </a>
                    </li>
                    <li>
                      <a data-match-route="/ui-kit/icons/icons-halflings" href="#/ui-kit/icons/icons-halflings">
                        树形组件
                      </a>
                    </li>
                    <li>
                      <a data-match-route="/ui-kit/icons/icons-halflings" href="#/ui-kit/icons/icons-halflings">
                        分页组件
                      </a>
                    </li>
                    <li>
                      <a data-match-route="/ui-kit/icons/icons-halflings" href="#/ui-kit/icons/icons-halflings">
                        提示框组件
                      </a>
                    </li>
                    <li>
                      <a data-match-route="/ui-kit/icons/icons-halflings" href="#/ui-kit/icons/icons-halflings">
                        表单组件
                      </a>
                    </li>


                  </ul>
                </li>
              </ul>
            </li>

          </ul>
        </div>
      </div>
    </section>
    <div id="nav-col-submenu"></div>
  </div>
</template>
<script>
  export default{
    name:'menu'
  }
</script>
