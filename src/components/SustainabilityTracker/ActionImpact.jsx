import React from 'react';
import ImpactChart from './ImpactChart'; // importe o gráfico

function ActionImpact({ impact }) {
    const formatNumber = (num) => num.toFixed(2).replace('.', ',');

    const renderImpactItem = (value, label, unit, icon) => {
        if (value <= 0) return null;
        return (
            <div className="impact-item">
                <span className="impact-icon">{icon}</span>
                <div className="impact-details">
                    <span className="impact-value">{formatNumber(value)} {unit}</span>
                    <span className="impact-label">{label}</span>
                </div>
            </div>
        );
    };

    const treesEquivalent = impact.co2Reduced / 22;

    const isEmptyImpact = impact.waterSaved + impact.co2Reduced + impact.resourcesSaved + impact.pollutionReduced <= 0;

    // Conversão para o gráfico
    const chartImpact = {
        water: impact.waterSaved || 0,
        co2: impact.co2Reduced || 0,
        energy: impact.resourcesSaved || 0, // usando resourcesSaved como "energia" estimada
    };

    return (
        <div className="impact-container">
            <h3>Seu Impacto Positivo</h3>

            {isEmptyImpact ? (
                <p className="no-impact">Comece a registrar suas ações para ver seu impacto!</p>
            ) : (
                <>
                    <div className="impact-grid">
                        {renderImpactItem(impact.waterSaved, 'de água economizada', 'litros', '💧')}
                        {renderImpactItem(impact.co2Reduced, 'de CO₂ não emitido', 'kg', '🌿')}
                        {renderImpactItem(impact.resourcesSaved, 'de recursos naturais preservados', 'unidades', '🌎')}
                        {renderImpactItem(impact.pollutionReduced, 'de poluição evitada', 'unidades', '✨')}

                        {impact.co2Reduced > 0 && (
                            <div className="tree-equivalent">
                                <p>
                                    <span className="tree-icon">🌳</span>
                                    <span>
                                        Seu impacto equivale a <strong>{formatNumber(treesEquivalent)}</strong> árvores
                                        absorvendo CO₂ por um ano!
                                    </span>
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Gráfico de impacto ambiental */}
                    <ImpactChart impact={chartImpact} />
                </>
            )}
        </div>
    );
}

export default ActionImpact;
