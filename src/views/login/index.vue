<template>
  <div class="page-login">
    <!-- 一级路由登录 -->
    <h1>登录</h1>
    <input type="text" placeholder="用户名"><br>
    <input type="password" placeholder="密码"><br>
    <button @click="handLogin">点我直接登录</button>
  </div>
</template>

<script>
export default {
  name: 'login',
  methods: {
    handLogin () {
      window.localStorage.setItem(
        'userInfo',
        JSON.stringify({ name: 'tom' })
      )
      let redirect = this.$route.query.redirect || '/center'
      this.$router.replace(redirect)
    }
  }
}
</script>
