export const getEmployeesByFilter = (employees, filter) => {
    switch (filter) {
        case "rise":
            return employees.filter((item) => item.rise);
        case "moreThen100":
            return employees.filter((item) => item.salary > 1000);
        default:
            return employees;
    }
}
