import React from 'react';

function ActionList({ actions, onDeleteAction }) {
    // Função para formatar data ISO para formato brasileiro
    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        return date.toLocaleDateString('pt-BR');
    };

    if (actions.length === 0) {
        return (
            <div className="action-list-container">
                <h3>Suas Ações</h3>
                <p className="no-actions">Você ainda não registrou nenhuma ação sustentável.</p>
            </div>
        );
    }

    return (
        <div className="action-list-container">
            <h3>Suas Ações</h3>
            <div className="action-list">
                {actions.map(action => (
                    <div key={action.id} className="action-item">
                        <div className="action-details">
                            <h4>{action.typeName}</h4>
                            <p>
                                <strong>{action.quantity} {action.unit}</strong> em {formatDate(action.date)}
                            </p>
                        </div>
                        <button
                            className="btn-delete"
                            onClick={() => onDeleteAction(action.id)}
                            aria-label="Excluir ação"
                        >
                            ✕
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ActionList; 