var fs = require('fs');

var path = __dirname;

let weektablemd = ''
let headmd = ''
let links = []

fs.writeFile('signups.md', '', (err) => {
    if (err) throw err;
})



fs.readFile('signup[1][HEAD].md', function (err, data) {
  if (err)
    throw err;
  if (data)
    fs.appendFile('signups.md', data.toString('utf8'), (err) => {
        if (err) throw err;
    });
});

fs.readFile('monthtable.md', function (err, data) {
  if (err)
    throw err;
  if (data)
    fs.appendFile('signups.md', data.toString('utf8'), (err) => {
        if (err) throw err;
    });
});
