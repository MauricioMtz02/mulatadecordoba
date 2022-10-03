import Enlace from "./Enlace"
import Logout from "./Logout"

const enlaces = [
    {
        name: 'Dashboard',
        icon: 'speedometer',
        href: '/admin'
    },
    {
        name: 'Articulos',
        icon: 'stickies-fill',
        href: '/admin/articulos'
    },
    {
        name: 'Categorías',
        icon: 'grid-fill',
        href: '/admin/categorias'
    },
    {
        name: 'Mensajes',
        icon: 'chat-dots-fill',
        href: '/admin/mensajes'
    }
]

const Enlaces = () => {
    return (
        <div className='d-flex flex-column'>
            {enlaces.map(enlace => (
                <Enlace
                    key={enlace.name}
                    enlace={enlace}
                />
            ))}

            <div className="mt-5 d-flex flex-column">
                <Enlace
                    enlace={{
                        name: 'Usuarios',
                        icon: 'person-fill',
                        href: '/admin/users'
                    }}
                />
                <Enlace
                    enlace={{
                        name: 'Redes Sociales',
                        icon: 'award',
                        href: '/admin/sociales'
                    }}
                />
                <Logout/>
            </div>
        </div>
    )
}

export default Enlaces