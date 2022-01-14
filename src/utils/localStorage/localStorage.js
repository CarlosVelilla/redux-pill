const postLocalStorage = (post) => {
    window.localStorage.setItem('result', JSON.stringify(post));
}

const getLocalStorage = ()=>{
    const post = window.localStorage.getItem('result');
    let result=[];
    if (post) {
        return result = JSON.parse(post);
    }
    return [];
}

export {postLocalStorage, getLocalStorage};

