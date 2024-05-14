function displayUsers(data, userListElement) {
     userListElement.innerHTML="";

     data.forEach(user =>{
       const listItem = document.createElement("li");
       listItem.innerHTML=
       `    <div>
             <i class="fa fa-user-circle"></i>
             ${user.username}
             <i class="user-email">(${user.email})</i>
           </div>
          <i class="fa fa-lightbulb-o ${user.status === "online"?"online":"offline"}"></i>
      `
       userListElement.appendChild(listItem);
     })
}

function loadAndDisplayUsers(){

  //to prevent access to index if user is not connected
  const connectedUser = localStorage.getItem('connected');
  if(!connectedUser){
    window.location='login.html';
    return;
  }

  const userListElement = document.getElementById('userList');
  
  userListElement.innerHTML='Loading...';
  
  fetch('http://localhost:8080/api/vd1/users')
  .then((response) =>{
    return response.json();
  }).then((data) =>{
    console.log(data);
    displayUsers(data, userListElement);
  })
}

window.addEventListener("load", loadAndDisplayUsers);

function handleLogout() {
  fetch('http://localhost:8080/api/vd1/users/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: localStorage.getItem('connected')
  })
  .then((response) => {
    return response;
  })
  .then((data) => {
    localStorage.removeItem('connected');
    window.location.href = "login.html";
  });
}

const logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener("click", handleLogout)


function handleNewMeeting() {
    const connectedUser = JSON.parse(localStorage.getItem('connected'))
    window.open(`videocall.html?username=${connectedUser.username}`, "_blank")
}

const newMeetingBtn = document.getElementById('newMeetingBtn');
newMeetingBtn.addEventListener('click', handleNewMeeting)


function handleJoinMeeting() {
  const roomId = document.getElementById('meetingName').value;
 const connectedUser = JSON.parse(localStorage.getItem('connected'));
  const url = `videocall.html?roomID=${roomId}&username=${connectedUser.username}`;

  window.open(url, '_blank');
}

const joinMeetingBtn = document.getElementById('joinMeetingBtn');
joinMeetingBtn.addEventListener('click', handleJoinMeeting);