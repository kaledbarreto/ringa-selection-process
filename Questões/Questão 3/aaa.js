string = "BBBBBBBBBBBBBAACCCDD"

function encoder(string) {
  str = string.split("");
  console.log(str);

  let count = 0;

  let modelo = str[0];
  let save = "";

  for (let i = 0; i < str.length; i++) {
    if (modelo === str[i]) {
      count++;
      console.log(count + str[i]);

      if (count === 9) {
        save = save + count + modelo;
        count = 0;
      }

    } else {
      save = save + count + modelo;
      count = 0;
      modelo = str[str.lastIndexOf(modelo) + 1];

      count++;
      console.log(count + str[i]);
    }
  }

  return save;
}

let result = encoder(string);

console.log(result); string = "BBBBBBBBBBBBBAACCCDD"

function encoder(string) {
  str = string.split("");
  console.log(str);

  let count = 0;

  let modelo = str[0];
  let save = "";

  for (let i = 0; i < str.length; i++) {
    if (modelo === str[i]) {
      count++;
      console.log(count + str[i]);

      if (count === 9) {
        save = save + count + modelo;
        count = 0;
      }

    } else {
      save = save + count + modelo;
      count = 0;
      modelo = str[str.lastIndexOf(modelo) + 1];

      count++;
      console.log(count + str[i]);
    }
  }

  return save;
}

let result = encoder(string);

console.log(result);