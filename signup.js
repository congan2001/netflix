function dangKy(event){
    event.preventDefault();
    const newUsername = document.getElementById('tendangnhapmoi').value;
    const newPassword = document.getElementById('matkhaumoi').value;

    localStorage.setItem("username", newUsername);
    localStorage.setItem("password", newPassword);
    
    alert('Đăng ký thành công');
}
const signupButton = document.getElementById("signupbtn");
signupButton.addEventListener("click", dangKy); 
