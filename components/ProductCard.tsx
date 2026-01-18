
import React from 'react';
import { Product } from '../types';
import { CATEGORY_ICONS } from '../constants';
import { Check, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group bg-[#111] border border-white/5 rounded-3xl overflow-hidden transition-all duration-500 hover:border-[#39FF14]/30 hover:shadow-[0_0_30px_rgba(57,255,20,0.1)] flex flex-col h-full">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-60" />
        <div className="absolute top-4 left-4 bg-[#0a0a0a]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center space-x-2">
          {CATEGORY_ICONS[product.category as keyof typeof CATEGORY_ICONS]}
          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-300">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold group-hover:text-[#39FF14] transition-colors line-clamp-2 leading-tight">
            {product.name}
          </h3>
          <span className="text-[#39FF14] font-black text-xl whitespace-nowrap">
            {product.price}
          </span>
        </div>
        
        <p className="text-gray-400 text-sm mb-6 line-clamp-2">
          {product.description}
        </p>

        <ul className="space-y-3 mb-8 flex-grow">
          {product.features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-xs text-gray-300">
              <Check className="w-4 h-4 text-[#39FF14] mr-2 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <button className="w-full py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl group-hover:bg-[#39FF14] group-hover:text-black transition-all flex items-center justify-center">
          <ShoppingCart className="w-5 h-5 mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
