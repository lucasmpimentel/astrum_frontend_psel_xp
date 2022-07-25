function setLocalStorage(key: string, value: any) {
  const data: string = JSON.stringify(value);
  localStorage.setItem(key, data);
}

function getLocalStorage(key: string) {
  try {
    let data = localStorage.getItem(key);
    if (data) {
      data = JSON.parse(data);
    }
    return data;
  } catch (err) {
    throw new Error('Chave local não encontrada');
  }
}

function setSessionStorage(key: string, value: any) {
  const data: string = JSON.stringify(value);
  sessionStorage.setItem(key, data);
}

function getSessionStorage(key: string) {
  try {
    let data = sessionStorage.getItem(key);
    if (data) {
      data = JSON.parse(data);
    }
    return data;
  } catch (err) {
    throw new Error('Chave de sessão não encontrada');
  }
}

export default {
  setLocalStorage,
  getLocalStorage,
  setSessionStorage,
  getSessionStorage,
};
