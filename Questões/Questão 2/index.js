blackUniformHeights = [150, 179, 149, 152, 154];
orangeUniformHeights = [162, 181, 151, 160, 170];

function photograph(blackUniformHeights, orangeUniformHeights) {
  let black = blackUniformHeights.sort((a, b) => a - b);
  let orange = orangeUniformHeights.sort((a, b) => a - b);

  let blackCount = 0;
  let orangeCount = 0;

  for (let i = 0; i < black.length; i++) {
    if (black[i] > orange[i]) {
      blackCount++;
    } else {
      orangeCount++;
    }
  }

  if (blackCount === 0 || orangeCount === 0) {
    return true;
  } else {
    return false;
  }
}

let result = photograph(blackUniformHeights, orangeUniformHeights);

console.log(result);