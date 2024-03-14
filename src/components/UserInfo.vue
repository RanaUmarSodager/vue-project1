<template>
<div class="main-container">
    <div class="container-1">
        <form @submit.prevent="addUser" class="add-user-form">
            <h2>Add User</h2>
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="newUser.name" placeholder="Name" required>
            </div>

            <div class="form-group">
                <label for="email">Email</label><br>
                <input type="email" id="email" v-model="newUser.email" placeholder="email@domain.com" ><br>
            </div>
            <div class="form-group">
                <label for="age">Age:</label>
                <input type="number" id="age" v-model="newUser.age" required>
            </div>
            <button type="submit">Add User</button>
        </form>
    </div>
    <div class="container-2">
        <h2>Users</h2>
        <table class="user-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.age }}</td>
                    <td><button @click="removeUser(user.id)">Remove</button></td>
                </tr>
            </tbody>
        </table>
        <div class="button_2">
            <button @click="removeLastUser">Remove Last User</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'UserInfo',
    data() {
        return {
            newUser: {
                id: 0,
                name: '',
                email: '',
                age: 0
            },
            users: []
        };
    },
    methods: {

        checkDuplicateUser(name, email, age) {
            const isDuplicate = this.users.some(user => user.name === name && user.email === email && user.age === age);
            if (isDuplicate) {
                return true; // Indicates that the user is a duplicate
            }
        },
        addUser() {

            if (this.checkDuplicateUser(this.newUser.name, this.newUser.email, this.newUser.age) == 1) {
                alert('User already exists!');
            } else {
                this.newUser.id = this.users.length + 1;
                this.users.push({
                    ...this.newUser
                });

            }

            this.clearForm();
        },
        removeLastUser() {
            this.users.pop(); //pop function is use to remove lastest element from array 

        },
        removeUser(id) {
            const index = this.users.findIndex(user => user.id === id); //match user id in user array return to index
            if (index !== -1) { //if index value is not equle to -1 then one element is removed from array of same id 
                this.users.splice(index, 1); //index is postion and 1 how many elements are remove 
            }
        },

        clearForm() {
            this.newUser.name = '';
            this.newUser.email = '';
            this.newUser.age = 0;
        }
    }
};
</script>

<style scoped>
.main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.container-1,
.container-2 {
    width: 80%;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
}

.container-1 {
    order: 1;
    /* Display the Add User form on top */
}

.container-2 {
    order: 2;
    /* Display the Users table at the bottom */
}

.form-group {
    margin-bottom: 10px;
}

label {
    display: block;
    font-weight: bold;
}

input[type="text"],
input[type="email"],
input[type="number"] {
    width: 100%;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
}

button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

th {
    background-color: #f2f2f2;
}
</style>
