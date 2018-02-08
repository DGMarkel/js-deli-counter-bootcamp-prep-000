function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  for (let i = 0; i < katzDeli.length; i++) {
  return `Welcome, ${name}.  You are number ${katzDeli[i]} in line.`
}
}


function currentLine(deliLine) {
  if (deliLine[0] === undefined) {
    return 'The line is currently empty.';
  } else {
    for (let i = 1; i < deliLine.length; i++) {
      deliLine[i] = (i) + '. ' + deliLine[i];
    }
  }
  return deliLine.tostring;
}
