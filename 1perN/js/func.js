
/*
1 per number function
*/

// 변수 정리
// dutchPay : function name 
// numMember : number of people
// totalAmount : total amount of the price
// unitMoney : minimum money unit

// totalAmountunit : 최소단위로 나눈 숫자
// amountPerson : totalAmountunit를 numMember로 나눈 값의 소수점 이하는 버림.

// 계산하는 방법
// 함수에 인원수, 금액, 단위를 주면 인원수에 따른 금액을 최소 단위로 나누고 그 몫을 결과값으로 반환한다.
// 나머지가 발생하는 경우 마지막 인원에 추가하여 두가지의 결과값을 반환한다.

function dutchPay(numMember, totalAmount, unitMoney) {
  // 소수점 이하는 버리는 함수를 이용하여 totalAmount를 unitMoney로 나누고  numMember로 나눈 결과값의 소수점 이하를 버린 값에 다시 unitMoney를 곱한다.
  let dutchPerson = totalAmount / numMember;
  let totalAmountunit = (totalAmount / unitMoney); // 총 금액을 설정된 최소단위로 나눔.
  let payAmount = (totalAmount % numMember); // 총 금액을 인원수로 나눴을 때 나머지
  let amountPerson = parseInt(totalAmountunit / numMember, 10); // 최소단위로 나눈 값을 인원수로 나누고 소수점 이하는 버림.
  let payPerson = amountPerson * unitMoney; // 다수는 소수점 이하는 버린 최소단위별로 금액 지불.
  let payMore = totalAmount - (payPerson * (numMember-1));
  // 소수점 이하를 버린 액수 만큼 오차가 발생하므로 1/n 값과 인원수에서 한명을 뺀 값을 곱하여 총 금액에서 뺀다.

  if( payAmount === 0) {
    return dutchPerson ;
  }else {
    return [payPerson, payMore];
  }
}
console.log(dutchPay(3, 10000, 1000)); // 3명이 10,000을 1000원의 최소단위로 나눈 결과
console.log(dutchPay(9, 1000000, 10000)); // 9명이 1,000,000을 10,000원의 최소단위로 나눈 결과


/*
  Random pay
*/




