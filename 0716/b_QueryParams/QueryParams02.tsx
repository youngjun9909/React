import React from 'react'
import { useSearchParams } from 'react-router-dom'

interface Product {
  id: number;
  name: string;
  category: string;
}

const Products: Product[] = [
  {id:1, name: 'A', category: "category1"},
  {id:2, name: 'B', category: "category2"},
  {id:3, name: 'C', category: "category1"}
];

export default function QueryParams02() {
  const [searchParams, setSearchParams] = useSearchParams();

  const filter = searchParams.get('category') || '';

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchParams({category: e.target.value});
  }

  const filteredProducts = Products.filter(product =>
    filter === '' || product.category === filter
  )

  return (
    <div>
      <h2>Product List</h2>
      <select value={filter} onChange={handleFilterChange}>
        <option value="">All Category</option>
        <option value="Category1">Category1</option>
        <option value="Category2">Category2</option>
      </select>

      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>
            {product.name} - {product.category}
          </li>
        ))}
      </ul>
    </div>
  )
}
