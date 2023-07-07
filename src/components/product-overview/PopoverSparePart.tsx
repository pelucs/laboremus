import * as Popover from '@radix-ui/react-popover';
import { WarningCircle } from 'phosphor-react';

export default () => {
  return(
    <Popover.Root>
      <Popover.Trigger>
        <WarningCircle 
          size={24} 
          weight="fill" 
          className="text-orange-500 animate-bounce"
        />
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content className="p-4 rounded bg-black border border-orange-500 relative bottom-5
         uppercase text-xs">
          <strong className="text-white">
            *Conferir com o departamento comercial
          </strong>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );  
}