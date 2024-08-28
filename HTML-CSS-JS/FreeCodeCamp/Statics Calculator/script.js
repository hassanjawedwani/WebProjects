const getMean = (array) => {
  return array.reduce((acc, el) => acc + el, 0) / array.length;
};

const getMedian = (unsortedArray) => {
  const array = unsortedArray.sort((a, b) => a - b);
  if (array.length % 2 === 0) {
    return getMean([array[array.length / 2 - 1], array[array.length / 2]]);
  } else {
    return getMean([array[array.length / 2]]);
  }
};

const getMode = (array) => {
  // const counts = {};
  // array.map(el => counts[el] = (counts[el] || 0) + 1);
  // console.log(Object.values(counts));
  // if (new Set(Object.values(counts)).size === 1) {
  //   return null;
  // }


  return "need update"
}

const getRange = (array) => {
  return Math.max(...array) - Math.min(...array);
}

const getVariance = (array) => {
  const mean = getMean(array);
  const variance = array.reduce((acc, el) => {
    const difference = mean - el;
    const square = difference ** 2;
    return acc + square
  }, 0) / array.length
  return variance;
}

const getStandardDeviation = (array) => {
  return Math.sqrt(getVariance(array));
}

const calculate = () => {
  const value = document.getElementById("numbers").value;
  const array = value.split(/,\s*/g);
  const numbers = array.map((el) => Number(el)).filter((num) => !isNaN(num));
  document.getElementById("mean").textContent = getMean(numbers);
  document.getElementById("median").textContent = getMedian(numbers);
  document.getElementById("mode").textContent = getMode(numbers);
  document.getElementById("range").textContent = getRange(numbers);
  document.getElementById("variance").textContent = getVariance(numbers);
  document.getElementById("standard-deviation").textContent = getStandardDeviation(numbers);

};

