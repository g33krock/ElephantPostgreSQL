export class UserService {
    static async getTeachers() {
        const response = await fetch('http://localhost:3001/users');
        return await response.json();  
      }
      
      static async createTeacher() {
        let teacher_id = prompt('Enter teacher_id');
        let firstname = prompt('Enter teacher firstname');
        let lastname = prompt('Enter teacher lastname');
        let campus = prompt('Enter teacher campus');
        let role = prompt('Enter teacher role');
        let image = prompt('Enter teacher image');
        const response = await fetch('http://localhost:3001/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({teacher_id, firstname, lastname, campus, role, image}),
        });
        const data = await response.text();
        console.log(data)
      }

      static async updateTeacher() {
        let teacher_id = prompt('Enter teacher_id');
        let firstname = prompt('Enter teacher firstname');
        let lastname = prompt('Enter teacher lastname');
        let campus = prompt('Enter teacher campus');
        let role = prompt('Enter teacher role');
        let image = prompt('Enter teacher image');
        const response = await fetch(`http://localhost:3001/users/${teacher_id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({teacher_id, firstname, lastname, campus, role, image}),
        });
        const uData = await response.text();
        console.log(uData)
      }

      static async deleteTeacher() {
        let id = prompt('Enter teacher id');
        const response = await fetch(`http://localhost:3001/users/${id}`, {
          method: 'DELETE',
        })
          const dData = await response.text();
        console.log(dData)
      }

      
}