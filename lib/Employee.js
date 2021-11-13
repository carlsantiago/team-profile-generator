class Employee {
    constructor(name, id, email){
    this.name = name;
    this.id = id;
    this.email = email;

    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;

    }

    getEmail() {
        return this.email;

    }

    getRole() {
        return 'Employee'
        }
        
    newEmployee(role) {
        console.log("yes")
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: `What is your ${role}'s name'? `
            },
            {
                type: 'input',
                name: 'id',
                message: `What is the ${role}'s ID? `
            },
            {
                type: 'input',
                name: 'email',
                message: `What is the ${role}'s email? `
            },
         ])
         .then(role =>{
             if (role === "Engineer") {
                return inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'github',
                        message: `What is your ${role}'s GitHub username'? `
                    }
                 ])
             }
         })
        }

    }


module.exports = Employee;