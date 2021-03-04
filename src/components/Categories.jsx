import React, { useState } from 'react';

function Categories({ items, onClick }) {
    const [activeItem, setActiveItems] = useState(null)
    return (
        <div className="categories">
            <ul>
                <li>Все</li>
                {items.map((item, index) => <li className={activeItem === index ? 'active' : ''} onClick={() => setActiveItems(index)} key={`${item}_${index}`}>{item}</li>)}
            </ul>
        </div>
    );
}

export default Categories;