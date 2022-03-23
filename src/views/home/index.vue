<template>
  <div class="page-home">
    <!-- 一级路由首页 -->
    <!-- 二级路由坑 -->
    <router-view></router-view>

    <ul class="navbar">
      <li>
        <router-link to="/films">
          <i class="iconfont icon-dianying"></i>
          <span>电影</span>
        </router-link>
      </li>
      <li>
        <router-link to="/cinemas">
          <i class="iconfont icon-yingyuana"></i>
          <span>影院</span>
        </router-link>
      </li>
      <li>
        <router-link to="/center">
          <i class="iconfont icon-weibiaoti-"></i>
          <span>个人中心</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@import '../../assets/style/common/mixins.scss';

.page-home {
  height: 100%;
  display: flex;
  overflow: hidden;
  flex-direction: column;

  > div:first-child {
    flex: 1;
    overflow: auto;
  };

  .navbar {
    @include border-top;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    li>a{
      text-decoration: none;
      display: inline-block;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #797d82;
      i{
        font-size: 21px;
        margin-bottom: 4px;
      }
      span {
        font-size: 10px;
        line-height: 12px;
      }
      &.router-link-exact-active {
        color: #ff5f16;
      }
    }
  }
}
</style>
