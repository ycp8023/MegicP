<template>
  <div id="app">
    <div id="nav">
      <div id="search">
        <section class="search-sec">
            <input class="search1" type="text">
            <el-button class="search2" icon="el-icon-search" style="display:inline-block">搜索</el-button>
            <div class="_3CMTD"></div>
        </section>
      </div>
      <router-link to="/">Home</router-link> |
      <router-link to="/models">Models</router-link>  |
      <router-link to="/center">Center</router-link>  |
      <router-link to="/about">About</router-link>
      <div v-if = "log" style="color:black">已经登录</div>
      <div class="btn" v-else>
         <button @click="gotolog" class="login">Login</button>
    </div>
    
  </div>
    
  
      
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'App',
  components: {
  
  },
  data() {
    return {
      log: this.$store.state.isLogin
    }
  },
  methods: {
    gotolog(){
      this.$router.push({path:"/login"});
    }
  },
}
</script>

<style>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: darkslateblue;
}

#nav {
  padding: 30px;
  display: inline-block;
  height: 8px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.6);
  font-size: 20px;
  transition: 1s;

}
#nav:hover {
  background-color: rgba(255, 255, 255, 0.8);
  color: darkslateblue;
}

#nav a {
  font-weight: bold;
  color: darkslateblue;
}
#search .search-sec{
    text-align: left;
  position: absolute;
  left: 20%;
  display: inline-block;
  height: 40px;
  transform: translateY(-50%);
}
#search .search-sec .search1{
  
  display: inline-block;
  width: 150px;
  height:30px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: rgba(255, 255, 255,1);
}
#search .search-sec .search2{
   display: inline-block;
  width: 80px;
  height:40px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: rgba(72, 61, 139,0.6);
}
#search .search-sec .search2:hover{
  background-color: rgba(72, 61, 139,0.8);
}


#nav .btn{
  display: inline-block;
  position: absolute;
  right: 5%;
}

#nav .btn .login{
    border-radius: 15px;
    border: 2px solid mediumpurple;
    display: block;
    position: absolute;
    top: 50%;
    transform:translateY(-50%)translateX(-50%);
    height: 30px;
    width: 90px;
    margin: auto;
    transition: 0.5s;
    /* 设置光标样式 */
    cursor: pointer;
    background-color: rgba(135, 206, 250,0.6);
    font-size: 15px;
    color: black;
}
#nav .btn .login:hover{
    height: 40px;
    width: 120px;
    background-color: rgba(135, 206, 250,0.8);
    font-size: 20px;
    
}




#nav a.router-link-exact-active {
  color: rgb(186, 255, 48)
}


</style>
