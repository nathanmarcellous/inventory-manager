import { useAction } from 'next-safe-action/hooks';
import { toast } from 'sonner';

import { createCustomer } from '@/features/customers/actions/create-customer';
import { CustomerForm } from '@/features/customers/components/customer-form';
import { useNewCustomer } from '@/features/customers/hooks/use-new-customer';

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';

export const NewCustomerSheet = () => {
  const { isOpen, onClose } = useNewCustomer();

  const { execute, isPending } = useAction(createCustomer, {
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
          <SheetTitle>New Customer</SheetTitle>
          <SheetDescription>Create a new customer to add to your store.</SheetDescription>
        </SheetHeader>
        <CustomerForm
          onSubmit={execute}
          disabled={isPending}
        />
      </SheetContent>
    </Sheet>
  );
};
