import Style from '../../styles/utilities/Spinner.module.css'

const Spinner = () => {
    return (
        <div className={Style.spinner}>
            <div className={Style.doubleBounce1}></div>
            <div className={Style.doubleBounce2}></div>
        </div>
    )
}

export default Spinner