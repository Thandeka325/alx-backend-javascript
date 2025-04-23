interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'Jabulile',
  fullTimeEmployee: false,
  lastName: 'Mavundla',
  location: 'Izingolweni',
  contract: false,
};

console.log(teacher3);
