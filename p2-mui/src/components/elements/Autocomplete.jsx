import React, { useState, useEffect } from 'react';

const Autocomplete = ({ array, placeholder }) => {
    const [userType, setUserType] = useState('');
    const [items, setItems] = useState(array); // no se realmente q hice aca pero lo dejó ahi por si me sirve de algo(?)
    const [activarLista, setActivarLista] = useState(false);

    const handleSelect = (selectedItem) => {
        setUserType(selectedItem.name);
        setItems(array);
        setActivarLista(false);
    };

    const toggleAutocomplete = (inOpen) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setActivarLista(inOpen);
    };

    return (
        <div className='autocomplete'>
            <input
                type="text"
                onChange={(e) => {
                    const inputText = e.target.value;
                    setActivarLista(true)
                    setUserType(inputText);
                    setItems(array.filter(item => item.name.toLowerCase().includes(inputText.toLowerCase())));
                    inputText && setItems(array.filter(item => item.name.toLowerCase().includes(inputText.toLowerCase())));
                }}
                // onClick={() => setActivarLista(true)}
                value={userType}
                placeholder={placeholder}
                onKeyDown={toggleAutocomplete(false)}
            />

            {activarLista && (
                <div className='autocomplete__list'>
                    {items.length > 0 ? (
                        items.map((item) => (
                            <div onClick={() => handleSelect(item)} className='autocomplete__item' key={item.key}>
                                <p className='autcomplete__item-title'>{item.name}</p>
                            </div>
                        ))
                    
                    ) : (
                        <p className='autocomplete__item'>No se encontró ningún elemento que coincida con "{userType}"</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default Autocomplete;
