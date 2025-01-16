import React, { useState } from 'react';
import { clientsData } from './data/clients';
import { Client } from './types';
import { getOldestClientsPerCity } from './utils/oldestClients';

// Composants
import FilterBar from './components/FilterBar';
import ClientsList from './components/ClientsList';

const App: React.FC = () => {
  const [searchName, setSearchName] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [highlightOldest, setHighlightOldest] = useState<boolean>(false);

  // Filtrage
  const filteredByName = clientsData.filter((client: Client) =>
    client.name.toLowerCase().includes(searchName.toLowerCase())
  );
  const filteredClients = filteredByName.filter((client: Client) =>
    selectedCity ? client.city === selectedCity : true
  );

  // Calcul du plus âgé
  const oldestClients = highlightOldest
    ? getOldestClientsPerCity(filteredClients)
    : {};

  // Liste de toutes les villes
  const allCities = Array.from(new Set(clientsData.map((c) => c.city)));

  return (
    // Le conteneur qui gère l'image de fond
    <div
      style={{
        background: "url('src/assets/background.png') no-repeat center center fixed",
        backgroundSize: 'cover',
        minHeight: '100vh', 
      }}
    >
      {/* Contenu centré */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '16px' }}>
        <h1>Clients list</h1>

        <FilterBar
          searchName={searchName}
          setSearchName={setSearchName}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          highlightOldest={highlightOldest}
          setHighlightOldest={setHighlightOldest}
          allCities={allCities}
        />

        <ClientsList clients={filteredClients} oldestClients={oldestClients} />
      </div>
    </div>
  );
};

export default App;
