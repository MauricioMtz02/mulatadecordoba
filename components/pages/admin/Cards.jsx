import Card from "./Card"

const cards = [
    {
        catalogo: 'articulos',
        title: 'Total de Articulos',
        icon: 'stickies-fill'
    },
    {
        catalogo: 'categorias',
        title: 'Total de Categorías',
        icon: 'grid-fill'
    },
    {
        catalogo: 'users',
        title: 'Total de Usuarios',
        icon: 'person-fill'
    }
]

const Cards = () => {
    return (
        <div className="row gx-0 gx-md-4 gy-4 gy-xl-0">
            {cards.map(card => (
                <div
                    key={card.catalogo}
                    className="col-md-6 col-xl-4 col-xxl-3"
                >
                    <Card
                        card={card}
                    />
                </div>
            ))}
        </div>
    )
}

export default Cards