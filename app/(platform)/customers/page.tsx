import { Header } from '@/components/header';
import { MAX_CUSTOMERS } from '@/constants';
import { getCustomers } from '@/features/customers/actions/get-customers';
import { CustomerBtn, CustomerClient } from '@/features/customers/components/customer-client';

export default async function CustomersPage() {
  const customersQuery = await getCustomers();

  const customers = customersQuery || [];

  return (
    <>
      <Header
        title='Customers'
        description={`Max Customers: ${customers.length}/${MAX_CUSTOMERS}`}
        action={<CustomerBtn />}
      />
      <div className='px-0 md:px-6'>
        <div className='max-w-screen-2xl mx-auto'>
          <CustomerClient customers={customers} />
        </div>
      </div>
    </>
  );
}
