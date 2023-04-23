const fs = require('fs');
const fsp = fs.promises;

const blachat = async () => {
   const text1 = await fsp.readFile(`${__dirname}/text1.txt`, 'utf-8');
   console.log(text1)

   const newtext1 = '===' + text1 + 'esche dobavil' + '===';
   await fsp.writeFile(`${__dirname}/text1.txt`, newtext1)
   console.log('Finaly first text')

   const text2 = await fsp.readFile(`${__dirname}/faraway.txt`, 'utf-8');
   console.log(text2)

   const newtext2 = '===' + text2 + 'novi slova' + '===';
   await fsp.writeFile(`${__dirname}/faraway.txt`, newtext2);
   console.log(newtext2)

   const text3 = await fsp.readFile(`${__dirname}/homework.txt`, 'utf-8');
   console.log(text3)

   const newtext3 = '===' + text3 + 'shablontext3' + '===';
   await fsp.writeFile(`${__dirname}/homework.txt`, newtext3)
   console.log(text3)

   const text4 = await fsp.readFile(`${__dirname}/kitty.txt`, 'utf-8')
   console.log(text4)

   const newtext4 = '===' + text4 + 'yakitotextshablon'+ '===';
   await fsp.writeFile(`${__dirname}/kitty.txt`,newtext4);
   console.log(text4)
}
blachat()
