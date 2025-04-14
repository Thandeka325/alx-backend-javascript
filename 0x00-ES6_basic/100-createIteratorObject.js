export default function createIteratorObject(report) {
  const { allEmployees } = report;

  return {
    * [Symbol.iterator]() {
      for (const department of Object.values(allEmployees)) {
        for (const employee of department) {
          yield employee;
        }
      }
    },
  };
}
