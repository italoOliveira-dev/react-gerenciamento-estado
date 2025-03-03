import MenuItem from '@/components/template/MenuItem';
import { IconForms } from '@tabler/icons-react';

export default function Home() {
  return (
    <div
      className="
      flex flex-col justify-center items-center h-screen
      bg-gradient-to-br to-zinc-800 from-black gap-20
    "
    >
      <div className="text-6xl">
        <span className="opacity-40 font-thin">Gerenciamento de </span>
        <span
          className="
            font-black bg-gradient-to-r from-blue-500 to-green-500
            text-transparent bg-clip-text
        "
        >
          Estado
        </span>
      </div>
      <div>
        <MenuItem icone={<IconForms />} texto="Estado" url="/revisao/estado" />
      </div>
    </div>
  );
}
