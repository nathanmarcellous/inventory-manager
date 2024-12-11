'use client';

import { useMountedState } from 'react-use';

import { EditProductSheet } from '@/features/products/components/edit-product-sheet';
import { NewProductSheet } from '@/features/products/components/new-product-sheet';

import { EditCustomerSheet } from '@/features/customers/components/edit-customer-sheet';
import { NewCustomerSheet } from '@/features/customers/components/new-customer-sheet';

import { NewOrderSheet } from '@/features/orders/components/new-order-sheet';
import { EditOrderSheet } from '@/features/orders/components/edit-order-sheet';

export const DrawerProvider = () => {
  const isMounted = useMountedState();

  if (!isMounted) return null;

  return (
    <>
      <NewProductSheet />
      <EditProductSheet />

      <NewCustomerSheet />
      <EditCustomerSheet />

      <NewOrderSheet />
      <EditOrderSheet />
    </>
  );
};
