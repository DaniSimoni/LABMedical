import { LocalStorageService } from "./LocalStorage.server";

const API_URL = 'http://localhost:3000/users'

const Get = async () => {
   /*  return localStorage.getItem('users')  ? JSON.parse(localStorage.getItem('users')) : null */
    const response = await fetch(API_URL);
    const data = await response.json();

    return data;
   }

const Create = async(data) => {

    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Accept': 'aplication/json',
            'Content-Type': 'aplication/json',
        },
        body: JSON.stringify(data),
    });
    const res = await response.json();
    console.log(res && `Usuario ${data.email} criado com sucesso`);



 /*    const users = Get();

    user = {
        id: user.length + 1,
        ... user,
    }

    LocalStorageService.set('users', [... users, user]); */
}

const Show = async (id) => {
/*     return Get().find(  user => user.id === id); */
const response = await fetch(`${API_URL}/${id}`);
const data = await response.json();
 
return data;
}

const ShowByEmail = async (email) => {
    /* return Get().find(  user => user.email === email); */
    const filter = `?email=${email}`;
    const response = await fetch(`${API_URL}/${filter}`);
    const data = await response.json();
    
    return data[0];
}


const Delete = (id) => {
    LocalStorageService.set('users', Get().filter( user => user.id !== id));
}


const Update = (id, newUser) => {
    const users = Get();
    users[users.find(user => user.ide === id).indexOf] = newUser;
    LocalStorageService.set('users', users)
}



export const UserService = {
    Get,
    Create,
    Show,
    ShowByEmail,
    Delete,
    Update
}