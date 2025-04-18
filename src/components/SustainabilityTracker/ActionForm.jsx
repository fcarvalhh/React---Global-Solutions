import React, { useState } from 'react';

function ActionForm({ onAddAction, actionTypes }) {
    const [actionType, setActionType] = useState('WATER_SAVING');
    const [quantity, setQuantity] = useState(1);
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

    const handleSubmit = (e) => {
        e.preventDefault();

        if (quantity <= 0) {
            alert('Por favor, insira uma quantidade válida maior que zero.');
            return;
        }

        onAddAction(actionType, quantity, date);

        // Reset form
        setQuantity(1);
    };

    return (
        <div className="action-form-container">
            <h3>Registrar Nova Ação</h3>
            <form className="action-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="action-type">Tipo de Ação:</label>
                    <select
                        id="action-type"
                        value={actionType}
                        onChange={(e) => setActionType(e.target.value)}
                    >
                        {Object.entries(actionTypes).map(([key, value]) => (
                            <option key={key} value={key}>
                                {value.label} ({value.unit})
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="quantity">Quantidade:</label>
                    <input
                        type="number"
                        id="quantity"
                        min="0.1"
                        step="0.1"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        required
                    />
                    <span className="unit">{actionTypes[actionType].unit}</span>
                </div>

                <div className="form-group">
                    <label htmlFor="action-date">Data:</label>
                    <input
                        type="date"
                        id="action-date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="btn-add-action">
                    Registrar Ação
                </button>
            </form>
        </div>
    );
}

export default ActionForm; 