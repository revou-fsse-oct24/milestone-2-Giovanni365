import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
      <div>
          <div className="fixed bg-blue-500 py-2 px-5 top-0 left-0 right-0 p-3 flex justify-center z-50">
              <div className="container mx-auto px-4">
                  <div className="flex items-center h-16 justify-between">
                  <Link href='/' className='text-white'>ShopSmart</Link>
                  <Link href='/products' className='text-white'>Store</Link>
                  <Link href='/login' className='text-white'>Sign in</Link>
                  </div>
              </div>
          </div>
      </div>
    )
  }
  
  export default Navbar