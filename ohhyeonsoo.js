/**
 * Created by Administrator on 2017-08-29.
 */

var a = [1, 2, 3, 4, 5];

var hap=0;
var gob = parseInt(a);
var sub=0;

function test(calType){
  if( calType == '+' ){
    for(var i=0; i<=4; i++){
      hap += a[i];
    }
  }

  else if ( calType == '*' ){
    for(var j=0; j<=4; j++){
      gob *= a[j];
    }
  }

  else if ( calType == '-' ){
    for(var z=0; z<=4; z++){
      sub -= a[z];
    }
  }
}

test('+');
test('*');
test('-');

console.log("덧셈" + hap);
console.log("곱셈" + gob);
console.log("뺄셈" + sub);
