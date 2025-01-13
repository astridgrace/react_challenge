import { Client } from '../types';

/**
 * Retourne un objet dont la clé est la ville
 * et la valeur est le client le plus âgé (celui qui a la date de naissance la plus ancienne).
 */
export function getOldestClientsPerCity(clientsList: Client[]): Record<string, Client> {
  const groupedByCity: Record<string, Client[]> = {};

  // Regrouper les clients par ville
  clientsList.forEach((client) => {
    if (!groupedByCity[client.city]) {
      groupedByCity[client.city] = [];
    }
    groupedByCity[client.city].push(client);
  });

  // Pour chaque ville, trouver le plus âgé
  const oldestPerCity: Record<string, Client> = {};
  Object.keys(groupedByCity).forEach((city) => {
    let oldest: Client | null = null;

    groupedByCity[city].forEach((person) => {
      if (!oldest) {
        oldest = person;
      } else {
        // Comparer les dates (plus vieille = plus petit timestamp)
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
