const loginForm = document.querySelector('.login-form');

const handlerSubmit = e => {
    e.preventDefault();
    
    const { email: { value: email}, password: { value: password } } = e.target.elements;
    const data = {
        email: email.trim(),
        password: password.trim()
    }
    
    if (!data.email || !data.password) {
        return alert('All form fields must be filled in');
    }
    
    console.log(data);
    e.target.reset();
}

loginForm.addEventListener('submit', handlerSubmit);
