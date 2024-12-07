import { Header } from '@/components/header';
import { MAX_PRODUCTS } from '@/constants';
import { getProducts } from '@/features/products/actions/get-products';
import { ProductClient, ProductBtn } from '@/features/products/components/product-client';

export default async function ProductsPage() {
  const productsQuery = await getProducts();

  const products = productsQuery || [];

  return (
    <>
      <Header
        title='Products'
        description={`Max Products: ${products.length}/${MAX_PRODUCTS}`}
        action={<ProductBtn />}
      />
      <div className='px-0 md:px-6'>
        <div className='max-w-screen-2xl mx-auto'>
          <ProductClient products={products} />
        </div>
      </div>
    </>
  );
}
