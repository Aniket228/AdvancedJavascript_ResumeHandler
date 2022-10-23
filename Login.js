function login() {
    let username = document.getElementById('user-input').value;
    let password = document.getElementById('password-input').value;
    window.localStorage.setItem('username', 'Robert');
    window.localStorage.setItem('password', 'pass123');
    if(username === username && password === password) {
        window.location = 'Resume.html';
    } else {
        document.getElementById('invalid').style.display = 'block';
        document.getElementById('user-input').value = ''
        document.getElementById('password-input').value = '';
    }
}