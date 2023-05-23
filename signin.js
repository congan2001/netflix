function dangNhap(event){
    event.preventDefault();
    const enteredUsername = document.getElementById('tendangnhap').value;
    const enteredPassword = document.getElementById('matkhau').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    
    if (enteredUsername === storedUsername && enteredPassword === storedPassword) 
    {
    alert('Đăng nhập thành công!');}
    else {
    alert('Đăng nhập không thành công. Vui lòng kiểm tra lại tên đăng nhập và mật khẩu.');
}
}

const signinButton = document.getElementById('signinbtn');
signinButton.addEventListener('click', dangNhap)
