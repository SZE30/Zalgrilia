function save(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function load(key, fallback) {
  const d = localStorage.getItem(key);
  return d ? JSON.parse(d) : fallback;
}