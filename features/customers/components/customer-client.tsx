'use client';

import { Customer } from '@prisma/client';
import { Plus } from 'lucide-react';
import { useAction } from 'next-safe-action/hooks';
import { toast } from 'sonner';

import { bulkDeleteCustomer } from '@/features/customers/actions/bulk-delete-customer';
import { columns } from '@/features/customers/components/columns';
import { useNewCustomer } from '@/features/customers/hooks/use-new-customer';

import { DataTable } from '@/components/data-table';
import { Button } from '@/components/ui/button';

type Props = {
  customers: Customer[];
};

export const CustomerBtn = () => {
  const newCustomer = useNewCustomer();

  return (
    <Button
      size='sm'
      className='text-sm gap-1'
      onClick={newCustomer.onOpen}
    >
      <Plus className='size-4 mr-2' />
      Add new
    </Button>
  );
};

export const CustomerClient = ({ customers }: Props) => {
  const { execute, isPending } = useAction(bulkDeleteCustomer, {
    onSuccess: ({ data }) => {
      toast.success(data?.message);
    },
    onError: () => {
      toast.error('Error deleting customers');
    },
  });

  return (
    <DataTable
      filterKey='name'
      columns={columns}
      data={customers}
      onDelete={row => {
        const ids = row.map(r => r.original.id);
        execute({ ids });
      }}
      disabled={isPending}
    />
  );
};
