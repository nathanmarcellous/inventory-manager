import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from './ui/sidebar';

type HeaderProps = {
  title: string;
  description: string;
  action?: React.ReactNode;
};

export const Header = ({ title, description, action }: HeaderProps) => {
  return (
    <header className='p-3 md:px-6 bg-muted/80 border-b'>
      <div className='flex justify-between items-center max-w-screen-2xl mx-auto'>
        <div className='flex items-center gap-2'>
          <SidebarTrigger />
          <Separator orientation='vertical' className='h-5 mr-2' />
          <div className='flex flex-col gap-1'>
            <h1 className='font-semibold leading-none tracking-tight text-lg'>{title}</h1>
            <p className='text-xs text-muted-foreground'>{description}</p>
          </div>
        </div>
        {action && <div>{action}</div>}
      </div>
    </header>
  );
};
