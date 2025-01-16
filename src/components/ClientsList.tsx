import React from 'react';
import { Client } from '../types';

interface ClientsListProps {
  clients: Client[];
  oldestClients: Record<string, Client>;
}

const tableContainerStyle: React.CSSProperties = {
  background: 'rgba(255, 255, 255, 0.2)',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '12px',
  overflow: 'hidden',
  marginTop: '16px',
};

const ClientsList: React.FC<ClientsListProps> = ({ clients, oldestClients }) => {
  return (
    <div style={tableContainerStyle}>
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
            const isOldest =
              oldestClients[client.city] &&
              oldestClients[client.city].name === client.name;

            const rowStyle: React.CSSProperties = {
              backgroundColor: isOldest ? '#cceeff' : 'transparent',
              fontWeight: 'bold',
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
    </div>
  );
};

export default ClientsList;
