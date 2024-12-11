import { useAction } from 'next-safe-action/hooks';
import { toast } from 'sonner';

import { createProduct } from '@/features/products/actions/create-product';
import { ProductForm } from '@/features/products/components/product-form';
import { useNewProduct } from '@/features/products/hooks/use-new-product';

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';

export const NewProductSheet = () => {
  const { isOpen, onClose } = useNewProduct();

  const { execute, isPending } = useAction(createProduct, {
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
          <SheetTitle>New Product</SheetTitle>
          <SheetDescription>Create a new product to add to your store.</SheetDescription>
        </SheetHeader>
        <ProductForm
          onSubmit={execute}
          disabled={isPending}
        />
      </SheetContent>
    </Sheet>
  );
};
