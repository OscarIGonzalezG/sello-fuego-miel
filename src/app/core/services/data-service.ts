import { Injectable, signal } from '@angular/core';

export interface Character {
  id: number;
  name: string;
  title: string;
  description: string;
  role: string;
  image: string;
  quote: string;
  color: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface Story {
  intro: string;
  mission: string;
  vision: string;
}

@Injectable({ providedIn: 'root' })

export class DataService {

  /** ⚡ Signals reactivas — el corazón de tu app */
  characters = signal<Character[]>([]);
  products = signal<Product[]>([]);
  story = signal<Story | null>(null);


  /** 🍯 Cargar los JSON desde /assets/data */
  async loadCharacters() {
    const res = await fetch('assets/data/characters.json');
    if (!res.ok) throw new Error('Error al cargar characters.json');
    this.characters.set(await res.json());
  }

  async loadProducts() {
    const res = await fetch('assets/data/products.json');
    if (!res.ok) throw new Error('Error al cargar products.json');
    this.products.set(await res.json());
  }

  async loadStory() {
    const res = await fetch('assets/data/story.json');
    if (!res.ok) throw new Error('Error al cargar story.json');
    this.story.set(await res.json());
  }
  

  /** 🚀 Método rápido para cargar todo en paralelo */
  async loadAll() {
    await Promise.all([
      this.loadCharacters(),
      this.loadProducts(),
      this.loadStory(),
    ]);
  }
}
