<template>
  <h1>Hello, {{title}}!</h1>
  <div>
    <div v-html="htmlString"></div>
    <input type="text" v-model="valueModel" />
    <br><br>
    <input type="number" v-model.number="numberModel" />
    <br><br>
    <textarea v-model="message"></textarea>
    <br><br>
    <select v-model="city">
      <option value="02">서울</option>
      <option value="051">부산</option>
      <option value="064">제주</option>
    </select>
    <br><br>
    <label>
      <input type="checkbox" v-model="checked01"> {{checked01}}
    </label>
    <br>
    <label>
      <input type="checkbox" v-model="checked02" true-value="yes" false-value="no"> {{checked02}}
    </label>
    <br>
    <label>
      <input type="checkbox" value="서울" v-model="checked03"> 서울
    </label>
    <label>
      <input type="checkbox" value="부산" v-model="checked03"> 부산
    </label>
    <label>
      <input type="checkbox" value="제주" v-model="checked03"> 제주
    </label>
    <br>
    <span>체크한 지역 : {{checked03}}</span>
    <br><br>
    <label>
      <input type="radio" v-bind:value="radioValue01" v-model="picked"> 서울
    </label>
    <label>
      <input type="radio" v-bind:value="radioValue02" v-model="picked"> 부산
    </label>
    <label>
      <input type="radio" v-bind:value="radioValue03" v-model="picked"> 제주
    </label>
    <br>
    <span>선택한 지역 : {{picked}}</span>
    <br><br>
    <img v-bind:src="imgSrc" />
    <br><br>
    <div class="container" v-bind:class="{
      'active': isActive, 'text-red': hasError
    }">Class Binding</div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      title: 'World',
      htmlString: '<p style="color:red;">this is a red string.</p>', // html을 이중 중괄호 처리하면 그냥 문자열로 인식함.
      valueModel: 'South Korea',
      numberModel: 3,
      message: '여러 줄을 입력할 수 있는 textarea 입니다.',
      city: '064',
      checked01: true,
      checked02: true,
      checked03: [],
      picked: '',
      radioValue01: '"서울"',
      radioValue02: '"부산"',
      radioValue03: '"제주"',
      // 체크박스는 v-model이 내부적으로 체크박스의 checked 속성을 사용함. value 속성을 사용하는 것이 아님.
      // 그러므로 value 속성에 데이터 바인딩을 하려면 v-model이 아니라 v-bind:value를 사용해야 한다.

      // 라디오도 v-model이 value 속성이 아닌 checked 속성을 사용한다.
      // 그러므로 value 속성에 데이터 바인딩을 하려면 v-model이 아니라 v-bind:value를 사용해야 한다.
      // 라디오에서 체크를 하게 되면 체크된 v-bind:value에 연결된다.
      imgSrc: 'https://kr.vuejs.org/images/logo.png'
      // 클래스에 대한 바인딩 처리를 할 때, 반드시 적용해야 하는 클래스는
      // 기존에 사용하던 방식처럼 class 속성에 클래스명을 입력하면 되고,
      // 데이터 바인딩 처리를 하는ㄴ 클ㄹ래스는 v-bind:class를 이용해서 추가적으로 정의해야 한다는 것이다.
      isActive: true,
      hasError: false
    }
  }
}
</script>
<style>
  container {
    width: 100%;
    height: 200px;
  }
  .active {
    background-color: yellow;
    font-weight: bold;
  }
  .text-red {
    color: red;
  }
</style>
