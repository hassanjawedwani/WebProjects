function createPyramid(ch, cnt) {
  let rows = "";
  for (let i = 1; i <= cnt; i++) {
    const row =
      " ".repeat(cnt - i) + ch.repeat(i + (i - 1)) + " ".repeat(cnt - i);
    rows += row + "\n";
  }
  return rows;
}

// console.log(createPyramid("*", 10));