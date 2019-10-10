<template>
  <div class="page-home">
    <!-- 一级路由首页 -->
    <!-- 二级路由坑 -->
    <router-view></router-view>

    <ul>
      <li>
        <router-link to="/films">电影</router-link>
      </li>
      <li>
        <router-link to="/cinemas">影院</router-link>
      </li>
      <li>
        <router-link to="/center">个人中心</router-link>
      </li>
    </ul>
  </div>
</template>
