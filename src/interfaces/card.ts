interface Card {
    "@context": string;
    "@id": string;
    "@type": string;
    reference: string;
    loreEntries: any[]; 
    cardType: CardType;
    cardSubTypes: CardSubType[];
    cardSet: CardSet;
    rarity: Rarity;
    cardRulings: any[]; 
    imagePath: string;
    assets: Assets;
    lowerPrice: number;
    qrUrlDetail: string;
    id: string;
    mainFaction: Faction;
    allImagePath: Record<string, string>;
    name: string;
    elements: Elements;
  }
  
  interface CardType {
    "@id": string;
    "@type": string;
    reference: string;
    id: string;
    name: string;
  }
  
  interface CardSubType {
    "@id": string;
    "@type": string;
    reference: string;
    id: string;
    name: string;
  }
  
  interface CardSet {
    "@id": string;
    "@type": string;
    id: string;
    reference: string;
    name: string;
  }
  
  interface Rarity {
    "@id": string;
    "@type": string;
    reference: string;
    id: string;
    name: string;
  }
  
  interface Assets {
    WEB: string[];
  }
  
  interface Faction {
    "@id": string;
    "@type": string;
    reference: string;
    color: string;
    id: string;
    name: string;
  }
  
  interface Elements {
    MAIN_COST: string;
    RECALL_COST: string;
    MOUNTAIN_POWER: string;
    OCEAN_POWER: string;
    FOREST_POWER: string;
    MAIN_EFFECT: string;
  }