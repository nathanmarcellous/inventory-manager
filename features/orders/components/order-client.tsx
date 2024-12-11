'use client';

import { Plus } from 'lucide-react';
import { useAction } from 'next-safe-action/hooks';
import { toast } from 'sonner';

import { bulkDeleteOrder } from '@/features/orders/actions/bulk-delete-order';
import { columns } from '@/features/orders/components/columns';
import { useNewOrder } from '@/features/orders/hooks/use-new-order';
import { FlattenedOrder } from '@/features/orders/types';

import { DataTable } from '@/components/data-table';
import { Button } from '@/components/ui/button';

type Props = {
  orders: FlattenedOrder[];
};

export const OrderBtn = () => {
  const newOrder = useNewOrder();

  return (
    <Button
      size='sm'
      className='text-sm gap-1'
      onClick={newOrder.onOpen}
    >
      <Plus className='size-4 mr-2' />
      Add new
    </Button>
  );
};

export const OrderClient = ({ orders }: Props) => {
  const { execute, isPending } = useAction(bulkDeleteOrder, {
    onSuccess: ({ data }) => {
      toast.success(data?.message);
    },
    onError: () => {
      toast.error('Error deleting orders');
    },
  });

  return (
    <DataTable
      filterKey='customer'
      columns={columns}
      data={orders}
      onDelete={row => {
        const ids = row.map(r => r.original.id);
        execute({ ids });
      }}
      disabled={isPending}
    />
  );
};
