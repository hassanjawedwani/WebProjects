const getAverage = (scores) => {
  let sum = 0;
  for (const score of scores) {
    sum += score;
  }
  return sum / scores.length;
};

const getGrade = (score) => {
  if (score === 100) {
    return "A++";
  } else if (score >= 90 && score <= 99) {
    return "A";
  } else if (score >= 80 && score <= 89) {
    return "B";
  } else if (score >= 70 && score <= 79) {
    return "C";
  } else if (score >= 60 && score <= 69) {
    return "D";
  } else if (score >= 0 && score <= 59) {
    return "F";
  }
};

const isPassed = (studentScore) => {
  return getGrade(studentScore) !== "F";
};

const studentMessage = (scores, studentScore) => {
  if (isPassed(studentScore)) {
    return (
      'Congratulations!, You passed the exam.\nYou got a "' +
      getGrade(studentScore) +
      '" Grade.\n' +
      "Average of class is " +
      getAverage(scores)
    );
  } else {
    return (
      'Sorry!, You failed the exam.\nYou got a "' +
      getGrade(studentScore) +
      '" Grade.\n' +
      "Average of class is " +
      getAverage(scores)
    );
  }
};

console.log(studentMessage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 92));