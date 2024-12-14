import { User } from "./common";

export interface Card {
    "@context": string;
    "@id": string;
    "@type": string;
    reference: string;
    cardType: CardType;
    cardSubTypes: CardSubType[];
    cardSet: CardSet;
    rarity: Rarity;
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
  
  export interface CardType {
    "@id": string;
    "@type": string;
    reference: string;
    id: string;
    name: string;
  }
  
  export interface CardSubType {
    "@id": string;
    "@type": string;
    reference: string;
    id: string;
    name: string;
  }
  
  export interface CardSet {
    "@id": string;
    "@type": string;
    id: string;
    reference: string;
    name: string;
  }
  
  export interface Rarity {
    "@id": string;
    "@type": string;
    reference: string;
    id: string;
    name: string;
  }
  
  export interface Assets {
    WEB: string[];
  }
  
  export interface Faction {
    "@id": string;
    "@type": string;
    reference: string;
    color: string;
    id: string;
    name: string;
  }
  
  export interface Elements {
    MAIN_COST: string;
    RECALL_COST: string;
    MOUNTAIN_POWER: string;
    OCEAN_POWER: string;
    FOREST_POWER: string;
    MAIN_EFFECT: string;
  }

  export interface CardDb {
    card: Card;
    user: User;
  }