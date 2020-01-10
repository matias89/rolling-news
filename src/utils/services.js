const get = (url) => {
    return window.fetch(url)
        .then(response => response.json());
};

const post = (url, data) => {
    return window.fetch(url, {
        method: 'POST',
        body: JSON.stringify(data)
    })
        .then(response => response.json());
};

export { get, post };