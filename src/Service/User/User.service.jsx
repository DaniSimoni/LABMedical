import { LocalStorageService } from "./LocalStorage.server";

const Get = () => {
    return localStorage.getItem('users')  ? JSON.parse(localStorage.getItem('users')) : null
   }

/* const Get = () => {
    return users;
} */
const Create = (user) => {
    const users = Get();

    user = {
        id: user.length + 1,
        ... user,
    }

    LocalStorageService.set('users', [... users, user]);
}

const Show = (id) => {
    return Get().find(  user => user.id === id);
}

const ShowByEmail = (email) => {
    return Get().find(  user => user.email === email);
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