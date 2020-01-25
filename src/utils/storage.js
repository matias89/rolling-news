const setItem = (key,valor) => {
    localStorage.setItem(key,JSON.stringify(valor));
};

const getItem = (key) => {
    return JSON.parse(localStorage.getItem(key));
};

export { setItem, getItem };