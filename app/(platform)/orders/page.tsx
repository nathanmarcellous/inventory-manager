import { Header } from '@/components/header';
import { getOrders } from '@/features/orders/actions/get-orders';
import { OrderBtn, OrderClient } from '@/features/orders/components/order-client';

export default async function OrdersPage() {
  const ordersQuery = await getOrders();

  const orders = ordersQuery || [];

  return (
    <>
      <Header
        title='Orders'
        description={`Orders: ${orders.length}`}
        action={<OrderBtn />}
      />
      <div className='px-0 md:px-6'>
        <div className='max-w-screen-2xl mx-auto'>
          <OrderClient orders={orders} />
        </div>
      </div>
    </>
  );
}
