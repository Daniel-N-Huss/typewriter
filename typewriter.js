const sentence = 'hello there from lighthouse labs and everyone here at channel 4 news';

const print = (string) => {

  for (let i = 0; i < string.length; i++) {
    setTimeout(() => {
      process.stdout.write(sentence[i]);
    }, 60 * i);
  }

  setTimeout(() => {
    process.stdout.write('\n');
  }, 65 * string.length);

};

print(sentence);