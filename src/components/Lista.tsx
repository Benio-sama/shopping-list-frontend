interface Item {
    id: number;
    name: string;
    quantity: number;
    purchased: boolean;
}

interface Props {
    items: Item[];
    onDelete: (id: number) => void;
    onTogglePurchased: (id: number, purchased: boolean) => void;
}

export function Lista(props: Props) {
    return (
        <>
            <ul>
                {props.items.map((item) => (
                    <li key={item.id}>
                        {item.name} ({item.quantity}){' '}
                        <button onClick={() => props.onDelete(item.id)}>Torles</button>
                        <button onClick={() => props.onTogglePurchased(item.id, item.purchased)}>
                            {item.purchased ? 'Nem vasarolt' : 'Vasarolt'}
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}