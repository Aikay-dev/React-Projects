const localStorageSave = (storageName, data) => {
    return localStorage.setItem(storageName, JSON.stringify(data));
}

export default localStorageSave