import { Link } from 'react-router-dom';
import { ProductContext } from '../store/Context';
import { useContext } from 'react';


const Navbar = () => {
  const { cart } = useContext(ProductContext);

  const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white shadow-md">
      <button className="px-4 py-2 text-xl bg-green-600 hover:bg-green-500 rounded-lg transition">
        <Link to="/" className="block">Store</Link>
      </button>
      <h1 className='text-4xl'>Navbar</h1>
      <button className="px-4 py-2 text-xl bg-blue-600 hover:bg-blue-700 rounded-lg transition font-semibold">
        <Link to="/cart" className="block">
          Cart ( {totalQty} )
        </Link>
      </button>
    </nav>
  )
}

export default Navbar