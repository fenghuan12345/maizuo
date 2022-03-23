<template>
  <div class="page-home-center">
    <!-- 二级路由个人中心 -->
    <p>个人中心</p>

    <p v-if="userInfo.name">{{userInfo.name}}</p>
    <!-- 如果没有登录页面会报错，原因是userinfo是一个undefined，undefined.name会报错，此时如果没有登录的话将userinfo设置为空对象即可 -->
    <router-link to="/login" v-else >登录</router-link>

    <hr>
    <router-link to="/money">余额</router-link>
    <hr>
    <router-link to="/card">卡卷</router-link>
  </div>
</template>
<script>
export default {
  name: 'center',
  data () {
    let userInfo = window.localStorage.getItem('userInfo')
    return {
      userInfo: userInfo ? JSON.parse(userInfo) : {}
    }
  }
}
</script>
