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
  return (
    <div style={{ marginBottom: '16px' }}>
      {/* Champ de recherche par nom */}
      <label style={{ marginRight: '8px' }}>
        Name:
        <input
          type="text"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          style={{ marginLeft: '4px' }}
        />
      </label>

      {/* Sélecteur de ville */}
      <label style={{ marginRight: '8px' }}>
        City:
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          style={{ marginLeft: '4px' }}
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
      <label style={{ marginRight: '8px' }}>
        Highlight oldest:
        <input
          type="checkbox"
          checked={highlightOldest}
          onChange={() => setHighlightOldest(!highlightOldest)}
          style={{ marginLeft: '4px' }}
        />
      </label>
    </div>
  );
};

export default FilterBar;
