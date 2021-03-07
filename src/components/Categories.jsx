import React, { useState } from 'react';

function Categories({ items }) {
    const [activeItem, setActiveItems] = useState(true)

    const onSelectItem = (index) => {
        setActiveItems(index)
    }
    return (
        <div className="categories">
            <ul>
                <li className={activeItem === true ? 'active' : ''} onClick={() => setActiveItems(true)}>Все</li>
                {items && items.map((item, index) => <li className={activeItem === index ? 'active' : ''} onClick={() => onSelectItem(index)} key={`${item}_${index}`}>{item}</li>)}
            </ul>
        </div>
    );
}

export default Categories;