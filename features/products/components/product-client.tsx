'use client';

import { Product } from '@prisma/client';
import { Plus } from 'lucide-react';
import { useAction } from 'next-safe-action/hooks';
import { toast } from 'sonner';

import { bulkDeleteProduct } from '@/features/products/actions/bulk-delete-product';
import { columns } from '@/features/products/components/columns';
import { useNewProduct } from '@/features/products/hooks/use-new-product';

import { DataTable } from '@/components/data-table';
import { Button } from '@/components/ui/button';

type Props = {
  products: Product[];
};

export const ProductBtn = () => {
  const newProduct = useNewProduct();

  return (
    <Button
      size='sm'
      className='text-sm gap-1'
      onClick={newProduct.onOpen}
    >
      <Plus className='size-4 mr-2' />
      Add new
    </Button>
  );
};

export const ProductClient = ({ products }: Props) => {
  const { execute, isPending } = useAction(bulkDeleteProduct, {
    onSuccess: ({ data }) => {
      toast.success(data?.message);
    },
    onError: () => {
      toast.error('Error deleting products');
    },
  });

  return (
    <DataTable
      filterKey='name'
      columns={columns}
      data={products}
      onDelete={row => {
        const ids = row.map(r => r.original.id);
        execute({ ids });
      }}
      disabled={isPending}
    />
  );
};
