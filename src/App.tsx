import React, { useState } from 'react';

// Données mock
import { clientsData } from './data/clients';
import { Client } from './types';

// Utilitaire pour repérer le plus âgé par ville
import { getOldestClientsPerCity } from './utils/oldestClients';

// Composants
import FilterBar from './components/FilterBar';
import ClientsList from './components/ClientsList';

const App: React.FC = () => {
  // States pour le filtrage
  const [searchName, setSearchName] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [highlightOldest, setHighlightOldest] = useState<boolean>(false);

  // 1) Filtrage par nom
  const filteredByName = clientsData.filter((client: Client) =>
    client.name.toLowerCase().includes(searchName.toLowerCase())
  );

  // 2) Filtrage par ville
  const filteredClients = filteredByName.filter((client: Client) =>
    selectedCity ? client.city === selectedCity : true
  );

  // 3) Calcul de la personne la plus âgée par ville (si coché)
  const oldestClients = highlightOldest
    ? getOldestClientsPerCity(filteredClients)
    : {};

  // Extraire la liste de toutes les villes possibles pour la dropdown
  const allCities = Array.from(new Set(clientsData.map((c) => c.city)));

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '16px' }}>
      <h1>CRM - Liste des Clients</h1>

      {/* Barre de filtre (recherche, ville, highlight) */}
      <FilterBar
        searchName={searchName}
        setSearchName={setSearchName}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        highlightOldest={highlightOldest}
        setHighlightOldest={setHighlightOldest}
        allCities={allCities}
      />

      {/* Affichage de la liste de clients filtrée */}
      <ClientsList clients={filteredClients} oldestClients={oldestClients} />
    </div>
  );
};

export default App;
