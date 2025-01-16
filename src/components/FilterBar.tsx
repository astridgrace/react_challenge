import React from 'react';

interface FilterBarProps {
  searchName: string;
  setSearchName: React.Dispatch<React.SetStateAction<string>>;
  selectedCity: string;
  setSelectedCity: React.Dispatch<React.SetStateAction<string>>;
  highlightOldest: boolean;
  setHighlightOldest: React.Dispatch<React.SetStateAction<boolean>>;
  allCities: string[];
}

const FilterBar: React.FC<FilterBarProps> = ({
  searchName,
  setSearchName,
  selectedCity,
  setSelectedCity,
  highlightOldest,
  setHighlightOldest,
  allCities,
}) => {
  // Conteneur général avec un effet "glass"
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: '12px',
    padding: '16px',
    borderRadius: '12px',
    // Glassmorphism
    background: 'rgba(255, 255, 255, 0.15)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    marginBottom: '16px',
  };

  // Style commun aux champs (input, select)
  const fieldStyle: React.CSSProperties = {
    padding: '8px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    outline: 'none',
    minWidth: '150px',
    backgroundColor: 'rgba(255, 255, 255, 0.6)', // léger fond pour voir le texte
  };

  // Style label
  const labelStyle: React.CSSProperties = {
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  };

  // Style de la case à cocher (pour aligner joliment)
  const checkboxContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  };

  return (
    <div style={containerStyle}>
      {/* Champ de recherche par nom */}
      <label style={labelStyle}>
        Name:
        <input
          type="text"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          style={fieldStyle}
          placeholder="Search..."
        />
      </label>

      {/* Sélecteur de ville */}
      <label style={labelStyle}>
        City:
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          style={fieldStyle}
        >
          <option value="">Select city</option>
          {allCities.map((city, idx) => (
            <option key={idx} value={city}>
              {city}
            </option>
          ))}
        </select>
      </label>

      {/* Case à cocher pour "Highlight oldest per city" */}
      <div style={checkboxContainerStyle}>
        <label style={labelStyle}>
          Highlight oldest
          <input
            type="checkbox"
            checked={highlightOldest}
            onChange={() => setHighlightOldest(!highlightOldest)}
            style={{ cursor: 'pointer' }}
          />
        </label>
      </div>
    </div>
  );
};

export default FilterBar;
