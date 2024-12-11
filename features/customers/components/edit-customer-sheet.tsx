import { Loader2 } from 'lucide-react';
import { useAction } from 'next-safe-action/hooks';
import { toast } from 'sonner';

import { updateCustomer } from '@/features/customers/actions/update-customer';
import { CustomerForm } from '@/features/customers/components/customer-form';
import { useGetCustomer } from '@/features/customers/hooks/use-get-customer';
import { useOpenCustomer } from '@/features/customers/hooks/use-open-customer';

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';


export const EditCustomerSheet = () => {
  const { isOpen, onClose, id } = useOpenCustomer();

  const { data, isLoading } = useGetCustomer(id);

  const { execute, isPending } = useAction(updateCustomer, {
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
          <SheetTitle>Edit Customer</SheetTitle>
          <SheetDescription>Edit an existing customer in your store.</SheetDescription>
        </SheetHeader>
        {isLoading ? (
          <div className='absolute inset-0 flex items-center justify-center'>
            <Loader2 className='size-4 text-muted-foreground animate-spin' />
          </div>
        ) : (
          <CustomerForm
            id={id}
            onSubmit={execute}
            disabled={isPending}
            initialData={data}
          />
        )}
      </SheetContent>
    </Sheet>
  );
};
