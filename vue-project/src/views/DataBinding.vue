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
    }">Class Binding by class</div>
    <br>
    <div class="container"
         v-bind:class="[activeClass, errorClass]">Class binding by array</div>
    <br>
    <div v-bind:class="styleObject">인라인 스타일 바인딩</div>
    <br>
    <div v-bind:class="[baseStyle, addStyle]">인라인 스타일 바인딩</div>
    <br>
    <table>
      <thread>
        <tr>
          <th>제품명</th>
          <th>가격</th>
          <th>카테고리</th>
          <th>배송료</th>
        </tr>
      </thread>
      <tbody>
      <tr :key="i" v-for="(product, i) in productList">
        <td>{{product.product_name}}</td>
        <td>{{product.price}}</td>
        <td>{{product.category}}</td>
        <td>{{product.delivery_price}}</td>
      </tr>
      </tbody>
    </table>
    <div>
      <h1 v-if="type=='A'">A</h1>
      <h1 v-else-if="type=='B'">B</h1>
      <h1 v-else>C</h1>
    </div>
    <div>
      <button type="button" v-on:click=increaseCounter>Add 1</button>
      <p>The Counter is : {{counter}}</p>
      <button type="button" v-on:click=setCount(7)>Set 7</button>
      <p>The Counter is : {{counter}}</p>
    </div>
    <div>
      <select v-model="selectedValue" v-on:change="changeSelect">
        <option value="서울">서울</option>
        <option value="부산">부산</option>
        <option value="제주">제주</option>
      </select>
    </div>
    <input v-on:keyup.enter="submit" />
    <input v-on:keyup.alt.enter="clear" />
    <div v-on:click.ctrl="doSomething">Do something</div>
    <h1>Full Name : {{fullName}}</h1>
    <br>
    <h1>Full Name : {{full_name}}</h1>
    <button type="button" v-on:click="changeName">변경</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'World',
      htmlString: '<p style="color:red;">this is a red string.</p>',
      // html을 이중 중괄호 처리하면 그냥 문자열로 인식함.
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
      imgSrc: 'https://kr.vuejs.org/images/logo.png',
      // 클래스에 대한 바인딩 처리를 할 때, 반드시 적용해야 하는 클래스는
      // 기존에 사용하던 방식처럼 class 속성에 클래스명을 입력하면 되고,
      // 데이터 바인딩 처리를 하는 클래스는 v-bind:class를 이용해서 추가적으로 정의해야 한다는 것이다.
      isActive: true,
      hasError: false,
      // 배열을 사용하는 경우, 특정 조건에 따른 클래스 바인딩 처리를 true,false로 할 수 없다(직접 이름 입력해야함)
      activeClass: 'active',
      errorClass: 'text-red',
      // 인라일 스타일의 경우 데이터를 Object로 선언해서 바인딩 가능.
      styleObject: {
        color: 'red',
        fontsize: '13px'
      },
      baseStyle: 'background-color:yellow;width:100%;height;200px',
      addStyle: 'color:red;font; font-weight:bold',
      // 배열 데이터(select의 옵션, table의 tr 데이터처럼 반복되는객체)는 v-for 디렉티브로 바인딩 가능.
      // items는 데이터 배열, index는 순서
      productList: [
        { product_name: '기계식키보드', price: 25000, category: '노트북.태블릿', delivery_price: 5000 },
        { product_name: '무선마우스', price: 12000, category: '노트북.태블릿', delivery_price: 5000 },
        { product_name: '태블릿거치대', price: 32000, category: '노트북.태블릿', delivery_price: 5000 },
        { product_name: '무선충전기', price: 42000, category: '노트북.태블릿', delivery_price: 5000 }
      ],
      type: 'A',
      // v-on 디렉티브는 @로도 사용 가능.
      counter: 0,
      // 명명된 함수에는 키워드와 함수 이름 사이에 공백 필요. 익명 함수에는 공백이 필요하지 않음.
      selectedValue: '',

      firstName: '재욱',
      lastName: '김',
      full_name: ''
    }
  },
  methods: {
    increaseCounter () {
      this.counter = this.counter + 1
    },
    setCount (counter) {
      this.counter = counter
    },
    changeSelect () {
      alert(this.selectedValue)
    },
    changeName () {
      this.firstName = '효주'
    }
  },
  // computed는 정의된 데이터 값을 바탕으로 새로운 데이터 값을 생성하고, 새로운 데이터 값에서 참조하고 있는 기존 데이터 값 변경 감지.
  // 그리고 참조하고 있는 데이터 값의 변경과 상관없이 최초에 compound에 정의된 데이터 함수를 실행함.
  computed: {
    fullName () {
      return this.firstName + ' ' + this.lastName
    }
  },
  // watch는 초기에 할당된 값에서 변경이 일어나야 watch에 정의된 함수를 실행한다는 차이가 있다.
  watch: {
    firstName () {
      this.full_name = this.firstName + ' ' + this.lastName
    },
    lastName () {
      this.full_name = this.firstName + ' ' + this.lastName
    }
  }
}
</script>
<style scoped>
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
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>
<!-- 한번에 두 개도 된다 td,th처럼-->
