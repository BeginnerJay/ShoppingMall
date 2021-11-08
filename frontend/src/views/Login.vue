<template>
  <div class="login">
    <h1>사용자 정보를 입력하세요.</h1>
    <form name="user" method="post" action="/post">
      <div class="input-row">
        <label for="userid">아이디</label>
        <input id="userid" v-model="user.userid" type="text">
      </div>
      <div class="input-row">
        <label for="name">이름</label>
        <input id="name" v-model="user.name" type="text">
      </div>
      <div class="input-row">
        <label for="address">주소</label>
        <input id="address" v-model="user.address" type="text">
      </div>
      <button type="submit">전송</button>
    </form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      user: {
        userid: '',
        name: '',
        address: ''
      }
    }
  }
}
</script>
