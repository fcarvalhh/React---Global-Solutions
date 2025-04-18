import React, { useState, useEffect } from 'react';
import ActionForm from './ActionForm';
import ActionList from './ActionList';
import ActionImpact from './ActionImpact';
import './SustainabilityTracker.css';

// Definição dos tipos de ações sustentáveis e seus impactos
const ACTION_TYPES = {
    WATER_SAVING: {
        label: 'Economia de Água',
        unit: 'litros',
        impact: {
            waterSaved: 1, // 1 litro por unidade
            co2Reduced: 0.0005, // em kg
        }
    },
    RECYCLING: {
        label: 'Reciclagem',
        unit: 'kg',
        impact: {
            co2Reduced: 2.5, // em kg por kg reciclado
            resourcesSaved: 1, // unidades genéricas
        }
    },
    PLASTIC_REDUCTION: {
        label: 'Redução de Plástico',
        unit: 'unidades',
        impact: {
            co2Reduced: 0.1, // em kg
            pollutionReduced: 1, // unidades genéricas
        }
    }
};

function SustainabilityTracker() {
    const [actions, setActions] = useState(() => {
        // Recuperar ações salvas do localStorage, se houver
        const savedActions = localStorage.getItem('sustainableActions');
        return savedActions ? JSON.parse(savedActions) : [];
    });

    const [impact, setImpact] = useState({
        waterSaved: 0,
        co2Reduced: 0,
        resourcesSaved: 0,
        pollutionReduced: 0
    });

    // Calcular impacto total quando as ações mudarem
    useEffect(() => {
        calculateTotalImpact();
        // Salvar ações no localStorage
        localStorage.setItem('sustainableActions', JSON.stringify(actions));
    }, [actions]);

    const addAction = (actionType, quantity, date) => {
        const newAction = {
            id: Date.now(),
            type: actionType,
            quantity: Number(quantity),
            date: date || new Date().toISOString(),
            typeName: ACTION_TYPES[actionType].label,
            unit: ACTION_TYPES[actionType].unit
        };

        setActions([...actions, newAction]);
    };

    const deleteAction = (actionId) => {
        setActions(actions.filter(action => action.id !== actionId));
    };

    const calculateTotalImpact = () => {
        const newImpact = {
            waterSaved: 0,
            co2Reduced: 0,
            resourcesSaved: 0,
            pollutionReduced: 0
        };

        actions.forEach(action => {
            const actionTypeInfo = ACTION_TYPES[action.type];
            const { impact: actionImpact } = actionTypeInfo;

            // Multiplicar o impacto pela quantidade
            Object.keys(actionImpact).forEach(key => {
                newImpact[key] += actionImpact[key] * action.quantity;
            });
        });

        setImpact(newImpact);
    };

    return (
        <div className="sustainability-tracker">
            <h2>Rastreador de Ações Sustentáveis</h2>
            <p className="tracker-intro">
                Registre suas ações sustentáveis diárias e veja o impacto positivo que você está causando no planeta!
            </p>

            <ActionForm onAddAction={addAction} actionTypes={ACTION_TYPES} />

            <div className="tracker-content">
                <ActionImpact impact={impact} />
                <ActionList actions={actions} onDeleteAction={deleteAction} />
            </div>
        </div>
    );
}

export default SustainabilityTracker; 