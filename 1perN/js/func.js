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



// console.log(numMember);
// console.log(totalAmount);
// console.log(tenThousand);
// console.log(oneThousand);
// console.log(oneHundreds);

const titleInput = document.getElementById('title');
const nameInput = document.getElementById('name');
const numMemberInput = document.getElementById('numMember');
const totalAmountInput = document.getElementById('totalAmount');
const tenThousandInput = document.getElementById('tenThousand');
const oneThousandInput = document.getElementById('oneThousand');
const oneHundredsInput = document.getElementById('oneHundreds');
const posForm = document.querySelector('.posForm');
const result = document.querySelector('.result');
const radioArray = [tenThousandInput, oneThousandInput, oneHundredsInput];

function dutchPay() {

  // document.querySelectorAll('[name="total"][name]')[0].checked === true && document.querySelectorAll('[name="total"][name]')[0].value

  let title = titleInput.value;
  let name = nameInput.value;
  let numMember = numMemberInput.value;
  let totalAmount = totalAmountInput.value;

  let unitMoney = 1000;
  // 소수점 이하는 버리는 함수를 이용하여 totalAmount를 unitMoney로 나누고  numMember로 나눈 결과값의 소수점 이하를 버린 값에 다시 unitMoney를 곱한다.
  for(var i = 0; i < radioArray.length; i++) {
    if(radioArray[i].checked === true) {
      unitMoney = radioArray[i].value;
    }
  }
  if (){ // 만약 입력 값이 문자이면 숫자로 입력하라고 안내를 한다.

  }

  let today = new Date();

  let dutchPerson = totalAmount / numMember;
  let totalAmountunit = (totalAmount / unitMoney); // 총 금액을 설정된 최소단위로 나눔.
  let payAmount = (totalAmount % numMember); // 총 금액을 인원수로 나눴을 때 나머지
  let amountPerson = parseInt(totalAmountunit / numMember, 10); // 최소단위로 나눈 값을 인원수로 나누고 소수점 이하는 버림.
  let payPerson = amountPerson * unitMoney; // 다수는 소수점 이하는 버린 최소단위별로 금액 지불.
  let payMore = totalAmount - (payPerson * (numMember-1));
  // 소수점 이하를 버린 액수 만큼 오차가 발생하므로 1/n 값과 인원수에서 한명을 뺀 값을 곱하여 총 금액에서 뺀다.
  // if(!Number.isInteger(numMember)) return console.log(`인원은 2명 이상, 100명 미만으로 숫자만 입력해주세요.`);
  // if(!Number.isInteger(totalAmount)) return console.log(`금액은 10,000원 이상 1,000,000 미만의 숫자만 입력해주세요.`);
  // if(2 > n && n > 100) return console.log(`인원은 2명 이상, 100명 미만으로 숫자만 입력해주세요.`);
  // if(total<10000 || total>1000000) return console.log(`금액은 10,000원 이상 1,000,000 미만으로 입력해주세요.`);
  // if(totalAmount.length <= unitMoney) return console.log('절삭 금액의 단위가 총 금액보다 클 수 없습니다.');

  if( payAmount === 0) {
    return dutchPayRes(title, name, numMember, dutchPerson, totalAmount, today);
  }
  else {
    return dutchPayResTwo(title, name, numMember, payPerson, payMore, totalAmount, today);
  }

  

}

// function() {
//   console.log('1명당 ' + dutchPerson + '원을 냅시다.');
//   console.log(dutchPerson);
//   // rightZone.style.display = none;
// };

function dutchPayRes(title, name, numMember, dutchPerson, totalAmount, today) {
  posForm.style.display = 'none';
  result.style.display = 'block';
  let id = 0;
  let time = String(today).substring(0,10);
  const receiptOne = `<h4>title. ${title}</h4>
  <p>time. ${time}</p>
  <p>name. ${name}</p>
  <table>
    <th>
      <td>no.</td>
      <td>금액</td>
    </th>
    <tr>
      <td>${id+1}</td>
      <td>${dutchPerson}원</td>
    </tr>
    <tr>
      <td>Total: </td>
      <td>${totalAmount}원</td>
    </tr>
  </table>
  <button id="reRes">다시 계산</button>`
  document.querySelector('.result').insertAdjacentHTML('afterbegin', receiptOne);
  document.getElementById('reRes').addEventListener('click', reResFunc);
  // console.log(dutchPerson);
  // rightZone.style.display = none;
  // console.log(title);
  // console.log(name);
  // console.log(numMember);
  // console.log(dutchPerson);
  // console.log(totalAmount);
}

function dutchPayResTwo(title, name, numMember, payPerson, payMore, totalAmount, today) {
  posForm.style.display = 'none';
  result.style.display = 'block';
  let id = 0;
  let time = String(today).substring(0,10);
  const receiptTwo = `<h4>title. ${title}</h4>
  <p>date. ${time}</p>
  <p>name. ${name}</p>
  <table>
    <th>
      <td>no.</td>
      <td>금액</td>
    </th>
    <tr>
      <td>${numMember-1}</td>
      <td>${payPerson}</td>
    </tr>
    <tr>
      <td>${1}</td>
      <td>${payMore}</td>
    </tr>
    <tr>
      <td>Total: </td>
      <td>${totalAmount}원</td>
    </tr>
  </table>
  <button id="reRes">다시 계산</button>`
  document.querySelector('.result').insertAdjacentHTML('afterbegin', receiptTwo);
  document.getElementById('reRes').addEventListener('click', reResFunc);
  // console.log(title);
  // console.log(name);
  // console.log(numMember);
  // console.log(payPerson);
  // console.log(payMore);
  // console.log(totalAmount);
}

// console.log([numMember + '중' + (numMember-1) + '명은 ' + payPerson + '원을 내고 다른 한 명만 ' + payMore + ]);

function reResFunc() {
  location.replace('file:///Users/minyoungkim/Documents/hackathon/1perN/index.html');
}

function reset() {
  titleInput.value = '';
  nameInput.value = '';
  numMemberInput.value = '';
  totalAmountInput.value = '';
  for(var i = 0; i < radioArray.length; i++) {
    radioArray[i].checked = false;
  }
}

document.getElementById('calBtn').addEventListener('click', dutchPay);
document.getElementById('cancelBtn').addEventListener('click', reset);
// console.log(res);
// console.log(dutchPay(3, 10000, 1000)); // 3명이 10,000을 1000원의 최소단위로 나눈 결과
// console.log(dutchPay(9, 1000000, 10000)); // 9명이 1,000,000을 10,000원의 최소단위로 나눈 결과