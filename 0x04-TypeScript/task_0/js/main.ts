interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Thandeka',
  lastName: 'Mavundla',
  age: 28,
  location: 'Cape Town'
};

const student2: Student = {
  firstName: 'Alex',
  lastName: 'Smith',
  age: 30,
  location: 'Johannesburg'
};

const studentsList: Student[] = [student1, student2];

// Create and style the table
const table = document.createElement('table');
table.style.border = '1px solid #333';
table.style.borderCollapse = 'collapse';
table.style.width = '60%';
table.style.margin = '20px auto';
table.style.fontFamily = 'Arial, sans-serif';
table.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';

const thead = document.createElement('thead');
const headerRow = document.createElement('tr');

['First Name', 'Location'].forEach((text) => {
  const th = document.createElement('th');
  th.textContent = text;
  th.style.border = '1px solid #333';
  th.style.padding = '10px';
  th.style.backgroundColor = '#f2f2f2';
  th.style.textAlign = 'left';
  headerRow.appendChild(th);
});

thead.appendChild(headerRow);
table.appendChild(thead);

const tbody = document.createElement('tbody');

studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const nameCell = document.createElement('td');
  nameCell.textContent = student.firstName;

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;

  [nameCell, locationCell].forEach((cell) => {
    cell.style.border = '1px solid #333';
    cell.style.padding = '10px';
  });

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
