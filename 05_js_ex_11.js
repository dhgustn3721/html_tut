/**
 * Created by Administrator on 2017-06-29.
 */

// 주석 종류

/**
 *
 * */

/*

 */

// 매개변수를 사용하는 함수 연습

/*

  매개 변수 함수를 사용하는 경우

  1. 전역변수, 지역변수의 적용 범위를 개선하기 위한 사용

  2. 함수의 재사용성을 높이기 위해 사용

 */

// 두 수의 합을 계산하는 코딩

// 1) 매개변수를 사용하지 않는 경우
(function(){

  // 변수 선언
  var a=10;
  var b=20;
  var c=40;
  var d=50;

  // 함수 선언
  function sum1(){
    console.log(a+b);
  }

  function sum2(){
    console.log(b+c);
  }

  function sum3(){
    console.log((a+b)+d);
  }

  // 함수 실행
  sum1();

  sum2();

  sum3();
})();

// 2) 매개변수를 사용하는 경우
(function(){

  // 매개변수는 var을 사용해서 변수 선언을 할 필요가 없음
  // 함수 선언
  function sumArg(arg1, arg2){
    console.log(arg1+arg2);
  }

  // 함수 실행
  sumArg(10,20);
  sumArg(20,40);
  sumArg(30,50);
})();


// 예제 연습
(function(){

  function hello(arg1) {

    console.log('안녕하세요~ '+arg1+'님!');

  }

  hello('영수');
  hello('철수');
  hello('영희');
  hello('민수');
  hello('태용');

})();

(function(){

  function info(name, age, sex, height, area){
    console.log('이름: ' + name);
    console.log('나이: ' + age);
    console.log('성별: ' + sex);
    console.log('신장: ' + height);
    console.log('지역: ' + area);
  }

  info('멍구', 30, '남자', 190, '오사카');
  info('짱구', 30, '여자', 290, '라스베가스');
  info('빡구', 30, '뇨자', 150, '제주도');

})();