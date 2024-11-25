import { useState, useEffect } from 'react'
import { getItems, addItem, deleteItem, updateItem } from './services/api';
import { Hozzaad } from './components/Hozzaad';
import { Lista } from './components/Lista';
import './App.css'

interface Item {
  id: number;
  name: string;
  quantity: number;
  purchased: boolean;
}

function App() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const data = await getItems();
      setItems(data);
    } catch (error) {
      console.error('Hiba a listazas soran:', error);
    }
  };

  const handleAdd = async (item: { name: string; quantity: number }) => {
    try {
      await addItem(item);
      fetchItems();
    } catch (error) {
      console.error('Hiba a hozzaadas soran:', error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteItem(id);
      fetchItems();
    } catch (error) {
      console.error('Hiba a torles soran:', error);
    }
  };

  const handleTogglePurchased = async (id: number, purchased: boolean) => {
    try {
      await updateItem(id, { purchased: !purchased });
      fetchItems();
    } catch (error) {
      console.error('Hiba az allapotvaltas soran:', error);
    }
  };

  return (
    <div>
      <h1>Bevasarlolista</h1>
      <Hozzaad onAdd={handleAdd} />
      <Lista items={items} onDelete={handleDelete} onTogglePurchased={handleTogglePurchased} />
    </div>
  );
};

export default App;