import React from 'react';
import Select, { SingleValue, StylesConfig } from 'react-select';
import Switch from 'react-switch';

interface FilterBarProps {
  searchName: string;
  setSearchName: React.Dispatch<React.SetStateAction<string>>;
  selectedCity: string;
  setSelectedCity: React.Dispatch<React.SetStateAction<string>>;
  highlightOldest: boolean;
  setHighlightOldest: React.Dispatch<React.SetStateAction<boolean>>;
  allCities: string[];
}

interface CityOption {
  value: string;
  label: string;
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
  // Conteneur "glass"
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: '12px',
    padding: '16px',
    borderRadius: '12px',
    background: 'rgba(255, 255, 255, 0.15)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    marginBottom: '16px',
  };

  // Champ texte "Name"
  const inputStyle: React.CSSProperties = {
    padding: '8px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    outline: 'none',
    minWidth: '150px',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
  };

  // Options pour React Select
  const cityOptions: CityOption[] = allCities.map((city) => ({
    value: city,
    label: city,
  }));
  const selectedOption =
    cityOptions.find((opt) => opt.value === selectedCity) || null;

  const handleCityChange = (option: SingleValue<CityOption>) => {
    if (option) {
      setSelectedCity(option.value);
    } else {
      setSelectedCity('');
    }
  };

  // Styles React Select
  const customSelectStyles: StylesConfig<CityOption, false> = {
    container: (provided) => ({
      ...provided,
      minWidth: '150px',
      maxWidth: '200px',
    }),
    control: (provided) => ({
      ...provided,
      backgroundColor: 'rgba(255, 255, 255, 0.6)',
      border: '1px solid #ccc',
      borderRadius: '6px',
      boxShadow: 'none',
      cursor: 'pointer',
      ':hover': {
        borderColor: '#888',
      },
    }),
    menu: (provided) => ({
      ...provided,
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      background: 'rgba(255, 255, 255, 0.85)',
      border: '1px solid rgba(0, 0, 0, 0.1)',
      boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? 'rgba(0, 150, 255, 0.2)' : 'transparent',
      color: '#000',
      cursor: 'pointer',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#000',
    }),
    menuPortal: (base) => ({
      ...base,
      zIndex: 9999,
    }),
  };

  // Switch (React Switch) - nouveau style
  const switchWrapperStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  };

  const labelStyle: React.CSSProperties = {
    fontWeight: 600,
  };

  return (
    <div style={containerStyle}>
      {/* Champ "Name" */}
      <label
        style={{
          fontWeight: 600,
          display: 'flex',
          gap: '4px',
          alignItems: 'center',
        }}
      >
        Name:
        <input
          type="text"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          style={inputStyle}
          placeholder="Rechercher..."
        />
      </label>

      {/* Sélecteur de ville via React Select */}
      <label
        style={{
          fontWeight: 600,
          display: 'flex',
          gap: '4px',
          alignItems: 'center',
        }}
      >
        City:
        <Select
          options={cityOptions}
          value={selectedOption}
          onChange={handleCityChange}
          placeholder="Select city..."
          styles={customSelectStyles}
          isClearable
          menuPortalTarget={document.body}
        />
      </label>

      {/* Switch "Highlight oldest" */}
      <div style={switchWrapperStyle}>
        <label style={labelStyle}>Highlight oldest:</label>
        <Switch
          checked={highlightOldest}
          onChange={(checked) => setHighlightOldest(checked)}

          // Track (fond du switch) OFF et ON
          offColor="#ccc"         // gris clair quand OFF
          onColor="#4BD863"       // vert “toggle” quand ON

          // Poignée OFF et ON
          offHandleColor="#fff"   // poignée gris plus foncé OFF
          onHandleColor="#fff"    // poignée blanche ON

          handleDiameter={22}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0 2px 6px rgba(0,0,0,0.3)"
          activeBoxShadow="0 0 2px 3px #999"
          height={26}
          width={50}
        />
      </div>
    </div>
  );
};

export default FilterBar;
