import { useState, useEffect } from 'react';
import type { Product } from '../types';

const API_PORT = import.meta.env.VITE_API_PORT || '3333';
const API_BASE_URL = `http://localhost:${API_PORT}`;

export const useProducts = (search?: string) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const url = search
          ? `${API_BASE_URL}/products?search=${encodeURIComponent(search)}`
          : `${API_BASE_URL}/products`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [search]);

  return { products, loading, error };
};

export const fetchProductById = async (id: number): Promise<Product> => {
  const response = await fetch(`${API_BASE_URL}/products/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch product');
  }
  return response.json();
};