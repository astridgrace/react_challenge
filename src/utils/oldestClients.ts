import { Client } from '../types';

export function getOldestClientsPerCity(clientsList: Client[]): Record<string, Client> {
  const groupedByCity: Record<string, Client[]> = {};

  clientsList.forEach((client) => {
    if (!groupedByCity[client.city]) {
      groupedByCity[client.city] = [];
    }
    groupedByCity[client.city].push(client);
  });

  const oldestPerCity: Record<string, Client> = {};
  Object.keys(groupedByCity).forEach((city) => {
    let oldest: Client | null = null;
    groupedByCity[city].forEach((person) => {
      if (!oldest) {
        oldest = person;
      } else {
        const currentBirthday = new Date(person.birthday).getTime();
        const oldestBirthday = new Date(oldest.birthday).getTime();
        if (currentBirthday < oldestBirthday) {
          oldest = person;
        }
      }
    });
    if (oldest) {
      oldestPerCity[city] = oldest;
    }
  });

  return oldestPerCity;
}
