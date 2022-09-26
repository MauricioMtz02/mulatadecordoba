import Valor from "./Valor"

const valores = [
    {
        name: 'Honestidad',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quidem commodi vel.',
        icon: 'honestidad.png'
    },
    {
        name: 'Objetividad',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quidem commodi vel.',
        icon: 'objetividad.png'
    },
    {
        name: 'Compromiso',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quidem commodi vel.',
        icon: 'compromiso.png'
    },
    {
        name: 'Novedad',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quidem commodi vel.',
        icon: 'novedad.png'
    },
    {
        name: 'Confianza',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quidem commodi vel.',
        icon: 'confianza.png'
    },
    {
        name: 'Pasión',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quidem commodi vel.',
        icon: 'pasion.png'
    }
]

const Valores = () => {
    return (
        <div className="row g-4 justify-content-center">
            {valores.map(valor => (
                <Valor
                    key={valor.name}
                    valor={valor}
                />
            ))}
        </div>
    )
}

export default Valores