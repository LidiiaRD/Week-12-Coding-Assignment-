//activate submit button in a form to be able to create a new user
document.getElementById('form').addEventListener('submit', (e) => {
   let name = document.getElementById("name").value;
   let email = document.getElementById("email").value;
   createUser(name, email);
   e.preventDefault();
});

//store users data in an array
var users = [];

function createUser(name, email) {
   var user = {
      name: name,
      email: email
   }
   users.push(user);
   readUser();
   console.log(users);
   document.getElementById('form').reset();
}

//create a function to add new users data
function readUser() {
   var userhtml = document.getElementById('user');
   userhtml.innerHTML = '';
   for (var i = 0; i < users.length; i++) {
      userhtml.innerHTML += `
      <div class="card mb-2">
         <div class="card-body">
            <p><i class="bi bi-people-fill"></i> User: ${users[i].name}</p>
            <p><i class="bi bi-envelope-at-fill"></i> Email: ${users[i].email}</p>
            <button class="col-5 btn btn-warning" onClick="editUser('${i}')"><i class="bi bi-pencil-square"></i> Edit</button>
            <button class="col-5 btn btn-danger" onClick="deletetUser('${i}')"><i class="bi bi-trash3"></i> Delete</button>
         </div>
      </div> `
   }
}

//create a function to delete users data
function deletetUser(i) {
   users.splice(i, 1);
   readUser();
   console.log(users);
}

//create a function to edit users data
function editUser(index) {
   var userhtml = document.getElementById('user');
   userhtml.innerHTML = '';
   for (var i = 0; index < users.length; i++) {
      if (i == index) {
         userhtml.innerHTML += `
         <div class="card dot mb-2">
            <div class="card-body">
               <p><i class="bi bi-people-fill"></i> User: </p>
               <input class="form-control mb-2" id="inputEditName" placeholder="${users[i].name}">
               <p><i class="bi bi-envelope-at-fill"></i> Email: </p>
               <input id="inputEditEmail" class="form-control mb-2" placeholder="${users[i].email}"> 
               <button class="col-5 btn btn-success" onClick="updateUser('${i}')"><i class="bi bi-pencil-square"></i> Update</button>
               <button class="col-5 btn btn-danger" onClick="readUser()"><i class="bi bi-x-circle-fill"></i> Cancel</button>
            </div>
         </div> `
      } else {
         userhtml.innerHTML += `
         <div class="card mb-2">
            <div class="card-body">
            <p><i class="bi bi-people-fill"></i> User: ${users[i].name}</p>
            <p><i class="bi bi-envelope-at-fill"></i> Email: ${users[i].email} </p>
            <button disabled class="col-5 btn btn-warning" onclick="editUser('${i}')"><i class="bi bi-pencil-square"></i> Edit</button>
            <button disabled class="col-5 btn btn-danger" onclick="deletetUser('${i}')"><i class="bi bi-trash3"></i> Delete</button>
            </div>
         </div> `
      }
   }
}

function updateUser(index) {
   var updatename = document.getElementById('inputEditName').value;
   var updateemail = document.getElementById('inputEditEmail').value;
   if (updatename == '' || updateemail == '') {
      alert("INCOMPLETE");
   } else {
      users[index].name = updatename;
      users[index].name = updateemail;
      readUser();
   }
}

