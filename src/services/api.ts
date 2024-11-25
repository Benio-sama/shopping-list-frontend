
const API_URL = 'http://localhost:3000/items';

export const getItems = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error('Hiba a listázás során.');
  return response.json();
};

export const addItem = async (item: { name: string; quantity: number }) => {
  let data = {
    ...item,
    purchased: false,
  }
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Hiba a hozzáadás során.');
  return response.json();
};

export const deleteItem = async (id: number) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Hiba a törlés során.');
};

export const updateItem = async (
  id: number,
  item: Partial<{ name: string; quantity: number; purchased: boolean }>
) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item),
  });
  if (!response.ok) throw new Error('Hiba a frissítés során.');
  return response.json();
};
