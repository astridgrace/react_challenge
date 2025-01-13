/**
 * Représente un client dans notre CRM.
 */
export interface Client {
    name: string;
    city: string;
    /**
     * Pour simplifier, on stocke la date de naissance au format string (YYYY-MM-DD).
     * On pourrait utiliser un type Date, mais on resterait cohérent côté back-end.
     */
    birthday: string;
  }
  