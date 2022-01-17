const getLocalStorage = (key) => {
    return JSON.parse(window.localStorage.getItem(key));
}

const postLocalStorage = (key, value) =>{
    window.localStorage.setItem(key, JSON.stringify(value));
}

const deleteLocalStorage = (key)=>{
    window.localStorage.removeItem(key)
}

export{
    getLocalStorage,
    postLocalStorage,
    deleteLocalStorage
}