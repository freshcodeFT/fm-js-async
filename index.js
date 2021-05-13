async function getDataFromJson(path) {
  const response = await fetch(path);
  return await response.json();
}

async function asyncWriteData(path) {
  try {
    const data = await getDataFromJson(path);
    document.body.append(JSON.stringify(data));
  } catch (e) {
    console.dir(e);
  }
}

function syncWriteData(path) {
  getDataFromJson(path)
    .then((data) => document.body.append(JSON.stringify(data)))
    .catch((e) => console.dir(e));
}
