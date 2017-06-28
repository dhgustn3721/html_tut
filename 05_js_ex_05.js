/**
 * Created by Administrator on 2017-06-28.
 */

var eng = 92;
var kor = 80;

if((eng >= 90) && (kor >= 90)){
  console.log('수');
} else if((eng >= 90) && (kor >= 80)){
  console.log('우');
} else if((eng >= 80) && (kor >= 80)){
  console.log('미');
} else{
  console.log('낙제');
}