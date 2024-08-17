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

const calculate = () => {
  const value = document.getElementById("numbers").value;
  const array = value.split(/,\s*/g);
  const numbers = array.map((el) => Number(el)).filter((num) => !isNaN(num));
  document.getElementById("mean").textContent = getMean(numbers);
  document.getElementById("median").textContent = getMedian(numbers);
};
