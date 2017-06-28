/**
 * Created by Administrator on 2017-06-28.
 */

/**
 *
 * 변수 스코프 ( Scope : 적용 범위 )
 *
 * 1. 전역 변수( Global Variable ) : 코드 가장 바깥쪽에 선언되어 코드 전체에 걸쳐서 접근 가능한 변수
 *
 * 2. 지역 변수( Local Variable ) : 함수 내부에 선언되어 코드 전체가 아닌 함수 내부에서만 접근 가능한 변수
 *
 * **자바스크립트는 변수 선언을 하지 않고 사용해도 오류가 발생하지 않고 자동으로 변수 선언이 되어 사용됨
 * */

var a = 10;
var b = 20;

function foo()