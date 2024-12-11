import { Loader2 } from 'lucide-react';
import { useAction } from 'next-safe-action/hooks';
import { toast } from 'sonner';

import { updateOrder } from '@/features/orders/actions/update-order';
import { OrderForm } from '@/features/orders/components/order-form';
import { useGetOrder } from '@/features/orders/hooks/use-get-order';
import { useOpenOrder } from '@/features/orders/hooks/use-open-order';

import { useGetCustomers } from '@/features/customers/hooks/use-get-customers';
import { useGetProducts } from '@/features/products/hooks/use-get-products';

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';

export const EditOrderSheet = () => {
  const { isOpen, onClose, id } = useOpenOrder();

  const { data, isLoading } = useGetOrder(id);
  const { data: customers, isLoading: isLoadingCustomers } = useGetCustomers();
  const { data: products, isLoading: isLoadingProducts } = useGetProducts();

  const { execute, isPending } = useAction(updateOrder, {
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
          <SheetTitle>Edit Order</SheetTitle>
          <SheetDescription>Edit an existing order in your store.</SheetDescription>
        </SheetHeader>
        {isLoading || isLoadingCustomers || isLoadingProducts ? (
          <div className='absolute inset-0 flex items-center justify-center'>
            <Loader2 className='size-4 text-muted-foreground animate-spin' />
          </div>
        ) : (
          <OrderForm
            id={id}
            onSubmit={execute}
            disabled={isPending}
            initialData={data}
            products={products || []}
            customers={customers || []}
          />
        )}
      </SheetContent>
    </Sheet>
  );
};
