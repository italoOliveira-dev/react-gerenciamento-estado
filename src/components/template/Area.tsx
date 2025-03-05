interface AreaProps {
    titulo: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: any
    sumario?: string
    cor: string
}

const cores: Cores = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    red: 'bg-red-500',
    sky: 'bg-sky-500'
}

export default function Area(props: AreaProps) {
    return (
        <div className={`
            flex flex-col items-center ${cores[props.cor]}
            rounded-md w-full
        `}>
            <div className={`
                flex items-center ${props.sumario ? 'justify-between' : 'justify-center'}
                w-full h-14 text-3xl font-black opacity-70 bg-black/20
            `}>
                <span className="px-4">
                    {props.titulo}
                </span>
                {props.sumario && (
                    <div className="
                        flex items-center px-4
                         h-full bg-black/20
                    ">
                        {props.sumario}
                    </div>
                )}
            </div>
            <div className="p-7">
                {props.children}
            </div>
        </div>
    );
}