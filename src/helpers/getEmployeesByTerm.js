export const getEmployeesByTerm = (employees, term) => {
    if (term.length === 0) {
        return employees;
    }

    return employees.filter((item) => {
        return item.name.indexOf(term) > -1;
    })
}