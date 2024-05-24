
function handleRegistrationForm(event) {


       event.preventDefault();
       // User input
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const status = 'online';

     //Create User Object
  const user= {
    username:username,
    email:email,
    password:password,
    status:status,
  };

  //calling registration Controller
    fetch('https://video-calling-application-3o55.onrender.com/api/vd1/users/register',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(user)
    }).then(response =>{
      if(!response.ok){
        throw new Error('Network response was not ok')
      }
      return response;
    }).then(()=>{
      localStorage.setItem('connected', JSON.stringify(user));
      window.location.href='index.html'
    }).catch(error =>{
      console.error('POST request error :', error);
    });


}


const registrationForm = document.getElementById('registrationForm');
registrationForm.addEventListener('submit', handleRegistrationForm)