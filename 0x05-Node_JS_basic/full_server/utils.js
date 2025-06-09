import fs from 'fs';

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data.trim().split('\n');
    const students = {};

    lines.slice(1).forEach((line) => {
      if (line.trim() !== '') {
        const [firstName, , , field] = line.split(',');
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstName);
      }
    });

    resolve(students);
  });
});

export default readDatabase;
