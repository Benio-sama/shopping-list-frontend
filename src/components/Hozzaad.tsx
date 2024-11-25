import { useState } from "react"

interface Props {
    onAdd: (item: { name: string; quantity: number }) => void;
}
export function Hozzaad(props: Props) {
    const [newItem, setNewItem] = useState({ name: '', quantity: 1 });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        props.onAdd(newItem);
        setNewItem({ name: '', quantity: 1 });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={newItem.name}
                onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                placeholder="Termek neve"
            />
            <input
                type="number"
                value={newItem.quantity}
                onChange={(e) => setNewItem({ ...newItem, quantity: parseInt(e.target.value, 10) })}
                placeholder="Mennyiseg"
            />
            <button type="submit">Hozzaad</button>
        </form>
    );
};
