const inputValue = document.getElementById("cash");
const changeDue = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn");

let price = 3.26;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];

let resultArr;
let cidCpy;

const currency = [
  ["PENNY", 0.01],
  ["NICKEL", 0.05],
  ["DIME", 0.1],
  ["QUARTER", 0.25],
  ["ONE", 1],
  ["FIVE", 5],
  ["TEN", 10],
  ["TWENTY", 20],
  ["ONE HUNDRED", 100],
];

const checkDue = (dues) => {
  let due = dues;
  for (let i = cidCpy.length - 1; i >= 0; i--) {
    while (due - currency[i][1] >= 0 && cidCpy[i][1] >= currency[i][1]) {
      cidCpy[i][1] = parseFloat((cidCpy[i][1] - currency[i][1]).toFixed(2));
      due = (due - currency[i][1]).toFixed(2);
    }
  }
  return due;
};

const convertArrToStr = (arr) => {
  let resultStr = "";
  arr.map((curr) => {
    if (curr[1] > 0) {
      resultStr = `${curr[0]}: $${Number(curr[1])} ` + resultStr;
    }
  });
  return resultStr;
};

const purchaseHandler = () => {
  resultArr = [];
  cidCpy = [];
  cid.map((arr) => {
    cidCpy.push([...arr]);
    resultArr.push([...arr]);
  });

  resultArr.map((arr) => {
    arr[1] = 0;
  });

  const cash = parseFloat(inputValue.value);
  if (cash === price) {
    changeDue.innerText = "No change due - customer paid with exact cash";
  } else if (cash < price) {
    alert("Customer does not have enough money to purchase the item");
  } else {
    const due = (cash - price).toFixed(2);

    let remainingDue = parseFloat(checkDue(due));

    let remainingDraw = parseFloat(
      cidCpy.reduce((sum, curr) => sum + curr[1], 0).toFixed(2)
    );

    for (let i = 0; i < resultArr.length; i++) {
      resultArr[i][1] = (cid[i][1] - cidCpy[i][1]).toFixed(2);
    }

    const resultStr = convertArrToStr(resultArr);

    if (remainingDue > 0) {
      changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
    } else if (remainingDue === 0 && remainingDraw === 0) {
      changeDue.textContent = "Status: CLOSED";
      changeDue.textContent += ` ${resultStr}`;
    } else {
      changeDue.textContent = `Status: OPEN ${resultStr}`;
    }
  }
};

purchaseBtn.addEventListener("click", purchaseHandler);
