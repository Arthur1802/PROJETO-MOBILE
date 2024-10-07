let errors = {};

export const Login = (email, senha) => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
    if (!emailRegex.test(email)) {
        errors.email = 'Invalid email'
    }

    if (senha.length < 6) {
        errors.senha = 'Password must be at least 6 characters long'
    }
}