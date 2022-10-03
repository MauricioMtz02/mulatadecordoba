import useDashboard from "../../hooks/useDashboard"

const Notification = () => {
    const { notification, handleNotification } = useDashboard()
    const { msg, type } = notification

    return msg ? (
        <div className="toast show position-fixed bottom-0 end-0 z-index-1000 m-3" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-header">
                <strong className="me-auto">{type === 'success' ? 'Éxito' : 'Error'}</strong>
                <button onClick={handleNotification} type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div className="toast-body">
                {msg}
            </div>
        </div>
    ) : ''
}

export default Notification