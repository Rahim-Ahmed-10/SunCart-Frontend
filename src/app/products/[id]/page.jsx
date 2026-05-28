import { FaStar } from "react-icons/fa";


const ProductsDetailsPage =async ({params}) => {

    const {id}= await params;
    const res= await fetch("https://sun-cart-frontend.vercel.app/data.json");
    const products=await res.json();

    const product = products.find(p => p.id == id)



    return (
       <div className="bg-[#0f172a] min-h-screen text-white p-6 md:p-20">
          

           <div className="max-w-5xl mx-auto bg-[#1e293b]/60 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-gray-800 transition-all duration-300">
    
  
    <div className="md:w-1/2 relative group overflow-hidden">
        <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-[350px] md:h-full min-h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
        />
      
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/40 to-transparent"></div>
    </div>

    
    <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-between bg-gradient-to-b from-[#1e293b] to-[#111827]">
        
       
        <div>
            <div className="flex justify-between items-center mb-4">
                <span className="text-[#ff5200] text-xs font-black tracking-[0.2em] uppercase bg-[#ff5200]/10 px-3 py-1 rounded-md border border-[#ff5200]/20">
                    {product.category}
                </span>
                <span className="bg-[#0f172a] text-amber-400 px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 text-sm border border-gray-800 shadow-inner">
                    <FaStar className="text-amber-400 drop-shadow-[0_0_4px_rgba(251,191,36,0.5)]" /> 
                    {product.rating}
                </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-4 leading-none">
                {product.name}
            </h1>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed font-normal mb-6">
                {product.description}
            </p>
        </div>

       
        <div className="border-t border-b border-gray-800/80 py-4 my-2 grid grid-cols-2 gap-4">
            <div>
                <span className="text-gray-500 text-xs uppercase tracking-wider block">Brand</span>
                <span className="text-gray-300 font-semibold text-sm">{product.brand}</span>
            </div>
            <div>
                <span className="text-gray-500 text-xs uppercase tracking-wider block">Availability</span>
                <span className={`font-semibold text-sm ${product.stock > 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {product.stock > 0 ? `${product.stock} Items In Stock` : 'Out of Stock'}
                </span>
            </div>
        </div>

        
        <div className="flex items-center justify-between mt-6 gap-4">
            <div className="flex flex-col">
                <span className="text-gray-500 text-xs uppercase tracking-wider">Total Price</span>
                <span className="text-4xl font-black text-white tracking-tight">
                    ${product.price}
                </span>
            </div>
            
            <button className="flex-1 md:flex-none bg-[#ff5200] hover:bg-[#e64a00] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-[#ff5200]/10 hover:shadow-[#ff5200]/20 uppercase tracking-wider text-sm">
                Add To Cart
            </button>
        </div>

    </div>
</div>
        </div>
    );
};

export default ProductsDetailsPage;