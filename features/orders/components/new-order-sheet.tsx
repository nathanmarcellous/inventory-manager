import { useAction } from 'next-safe-action/hooks';
import { toast } from 'sonner';

import { createOrder } from '@/features/orders/actions/create-order';
import { OrderForm } from '@/features/orders/components/order-form';
import { useNewOrder } from '@/features/orders/hooks/use-new-order';

import { useGetCustomers } from '@/features/customers/hooks/use-get-customers';
import { useGetProducts } from '@/features/products/hooks/use-get-products';

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';

export const NewOrderSheet = () => {
  const { isOpen, onClose } = useNewOrder();

  const { data: customers, isLoading: isLoadingCustomers } = useGetCustomers();
  const { data: products, isLoading: isLoadingProducts } = useGetProducts();

  const { execute, isPending } = useAction(createOrder, {
    onSuccess: ({ data }) => {
      toast.success(data?.message);
      onClose();
    },
    onError: ({ error }) => {
      toast.error(error.serverError);
    },
  });

  return (
    <Sheet
      open={isOpen}
      onOpenChange={onClose}
    >
      <SheetContent>
        <SheetHeader>
          <SheetTitle>New Order</SheetTitle>
          <SheetDescription>Create a new order to add to your store.</SheetDescription>
        </SheetHeader>

          <OrderForm
            onSubmit={execute}
            disabled={isPending}
            products={products || []}
            customers={customers || []}
          />

      </SheetContent>
    </Sheet>
  );
};
