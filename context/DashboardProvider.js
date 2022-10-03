import { useState, createContext } from 'react'
import { setStatus } from '../services/helpers'

const DashboardContext = createContext()

const DashboardProvider = ({children}) => {

    const [sidebarView, setSidebarView] = useState(false)
    const [notification, setNotification] = useState({
        type: 'success',
        msg: ''
    })

    const handleSidebar = () => {
        setSidebarView(!sidebarView)
    }

    const printAlert = (msg, type) => {
        setNotification({
            type,
            msg
        })

        setTimeout(() => {
            setNotification({
                type,
                msg: ''
            })
        }, 8000);
    }

    const handleNotification = () => {
        setNotification({
            type: 'success',
            msg: ''
        })
    }

    const handleStatus = async (id, catalogo) => {
        await setStatus(id, catalogo)
    }

    return(
        <DashboardContext.Provider
            value={{
                sidebarView,
                handleSidebar,
                printAlert,
                handleStatus,
                notification,
                handleNotification
            }}
        >
            {children}
        </DashboardContext.Provider>
    )
}

export {
    DashboardProvider
}

export default DashboardContext