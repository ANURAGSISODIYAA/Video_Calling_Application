
function handleLogin(event) {
      event.preventDefault();

    const email  = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user={
      email : email ,
      password : password
    };


    fetch('https://video-calling-application-3o55.onrender.com/api/vd1/users/login', {
      method:'POST',
      headers:{ 'content-Type':'application/json'},
      body: JSON.stringify(user)
    }).then(response => {
      console.log('Response:', response);
      if(!response.ok){
             alert('Login or Password is Incorrect');
      }
        return response.json();
    }).then(response =>{
      console.log('Data:', response);
      localStorage.setItem('connected', JSON.stringify(response));
      window.location.href ='index.html'
    }).catch(error =>{
      console.error('Post request error', error);
    });

}

const logingForm  = document.getElementById("loginForm");
logingForm.addEventListener("submit", handleLogin);



