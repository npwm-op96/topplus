const GET_LOCAL_TOKEN = () => {
    let _token = ""
    if (process.client) {
        _token = localStorage.getItem("auth._token.local");
    }
    return _token
};

export { GET_LOCAL_TOKEN };