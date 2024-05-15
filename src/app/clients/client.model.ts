export interface Client {
    id: string;
    name: string;
    state: string; // "ACTIVE" or "INACTIVE"
    tva: number;  // Assuming TVA is a tax value (French: Taxe sur la Valeur Ajoutée)
    totalCaHt: number;  // Assuming CaHt represents "Chiffre d'Affaires Hors Taxe" (French: Turnover Excluding Tax)
    comment?: string; // Optional comment property
  }