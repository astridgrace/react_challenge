import React from 'react';
import { Client } from '../types';

// Définir l’interface pour les props du composant
interface ClientsListProps {
  clients: Client[];
  // Soit un objet Record<string, Client>, soit un objet vide (si non-coché)
  oldestClients: Record<string, Client>;
}

const ClientsList: React.FC<ClientsListProps> = ({ clients, oldestClients }) => {
  return (
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr style={{ borderBottom: '2px solid black' }}>
          <th style={{ textAlign: 'left', padding: '8px' }}>Name</th>
          <th style={{ textAlign: 'left', padding: '8px' }}>City</th>
          <th style={{ textAlign: 'left', padding: '8px' }}>Birthday</th>
        </tr>
      </thead>
      <tbody>
        {clients.map((client, idx) => {
          // Vérifier si ce client est le plus âgé de sa ville
          const isOldest =
            oldestClients[client.city] &&
            oldestClients[client.city].name === client.name;

          // Appliquer un style de surbrillance si c'est le plus âgé
          const rowStyle: React.CSSProperties = {
            backgroundColor: isOldest ? '#cceeff' : 'transparent',
          };

          return (
            <tr key={idx} style={rowStyle}>
              <td style={{ padding: '8px' }}>{client.name}</td>
              <td style={{ padding: '8px' }}>{client.city}</td>
              <td style={{ padding: '8px' }}>{client.birthday}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ClientsList;
