const express = require('express');
const fs = require('fs');

const app = express();
const database = process.argv[2];

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const headers = lines.shift().split(',');
      const fieldIdx = headers.indexOf('field');
      const firstnameIdx = headers.indexOf('firstname');

      const fields = {};

      lines.forEach((line) => {
        const record = line.split(',');
        const field = record[fieldIdx];
        const name = record[firstnameIdx];

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(name);
      });

      const total = lines.length;
      const summary = [`Number of students: ${total}`];

      for (const [field, names] of Object.entries(fields)) {
        summary.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }

      resolve(summary.join('\n'));
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.set('Content-Type', 'text/plain');
  try {
    const output = await countStudents(database);
    res.send(`This is the list of our students\n${output}`);
  } catch (err) {
    res.send('This is the list of our students\nCannot load the database');
  }
});

app.listen(1245);

module.exports = app;
