<template>
  <div class="home">
     <div id="intro">
     
        <h1> Model Maker</h1>
        <p>   
          <img src="../../public/imgs/basic/avatar.jpg" > 
         MegicPix allows users to easily increase their inventory of virtual assets by simply uploading a single image and share a 3D virtual asset model.
          </p>
    </div>
    <div id="trans">
      <div class="title">IMAGES to MODDELS</div>
      <el-input class="urlin" v-model="input" placeholder="Image URL e.g. https://i.imgflip.com/3kn.jpg"></el-input>or
      <el-upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" 
            :on-preview="handlePreview" :on-remove="handleRemove"  :auto-upload="false">
        <el-button size="medium" class="button"  type="primary">选取文件</el-button>
        <el-button style="margin-left: 10px;"  size="medium" type="success" @click="submitUpload">上传到服务器</el-button>
      </el-upload>

      <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
        <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>      
      </el-upload>
    </div>
    <div id="show" class="title">
      Models Preview
    </div>
    <div id="footer">
        This is foot of the page.
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
      return {
        input: '',
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      };
    },
    methods: {
      submitUpload() {
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
    }
}
</script>

<style scoped>
.home{
  background: url('https://sm.ms/image/VcPre7312KG9ouW') no-repeat center fixed;
  background-size: cover;
}
.home #intro{
  display: inline-block;
  height: 250px;
  width: 100%;
  font-size: 14px;
  
}
#intro p{
  font-size: 20px;
  display: inline-block;
  width:800px;
  height: 170px;
}
#intro img{
  float: left;
  width:120px;
  height:120px;
  margin-right:30px;
  display: block;
  border-radius: 15px;
  position:absolute;
  left: 15.5%;

}
.home #trans{
  display: block;
  height: 500px;
  width:1000px;
  padding: 30px;
  margin: 30px auto;
  background-color: rgba(255, 255, 255,0.6);
  border-radius: 10px;
  
}
.home #trans .urlin{
  display: inline-block;
  width: 400px;
  margin: 30px auto;
  padding:30px;
  width: 40%;
  text-align: left;
}
.home #trans .upload-demo{
  display: inline-block;
  width:400px;
  padding: 30px;
  margin: 30px auto;
  text-align: left;
}
.home #trans .title{
  font-size:30px;
}
.home #trans .title:hover{
  font-weight: bolder;
  color: rgb(186, 255, 48);
  transition: 0.5s;
}
.home #trans .upload-demo .button{
  display: inline-block;
  color: black;
  background-color: rgba(255, 255, 255,0.5);
  border-width: 3px;
  border-style: solid;
  border-color: slateblue;
}
.home #trans .upload-demo .button:hover{
  background-color:rgba(106, 90, 205,0.5);
}
.home #show{
  display: block;
  height: 300px;
  width:1000px;
  padding: 30px;
  margin: 30px auto;
  background-color: rgba(255, 255, 255,0.6);
  border-radius: 10px;
  
}
.home #footer{
  display: inline-block;
  height: 100px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.6);
  font-size: 20px;
}
</style>