export const fetchLoginData = async (email: string, password: string) => {
    try{
        const response = await fetch('https://api.escuelajs.co/api/v1/auth/login/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
          });
        return response.json();
    }   catch (error) {
        console.error('Login error', error);
        throw error
    }
}

export const createUser = async (email: string, password: string, name: string) => {
    try {
        const response = await fetch('https://api.escuelajs.co/api/v1/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password, name }),
          });
          return response.json();
    }   catch (error) {
        console.error('Register error', error);
        throw error
    }
}