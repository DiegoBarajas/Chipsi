export const getError = (error) => {
    return error.respnose && error.response.data.message
    ? error.response.data.message
    : error.message;
};

export const backend = ()=>{
    return 'http://localhost:4000';
}