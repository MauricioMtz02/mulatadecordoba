import Image from "next/image"
import { dateFormat } from "../helpers"

const Mensaje = ({register}) => {
    const { fullname, email, subject, msg, created_at } = register

    return (
        <div>
            <div className="d-flex flex-column flex-lg-row justify-content-between">
                <div className="d-flex">
                    <Image
                        src={`${process.env.URL_AVATAR}&name=${fullname}`}
                        alt={`avatar ${fullname}`}
                        width={55}
                        height={55}
                        className={'shadow-sm rounded-circle'}
                        layout={'fixed'}
                    />

                    <div className="d-flex flex-column ms-3">
                        <h2 className="fs-6">{subject}</h2>
                        <a href={`mailto:${email}?Subject=${subject}`} className="small">De: {email}</a>
                    </div>
                </div>

                <div className="order-first order-lg-last text-end">
                    <p className="small mb-0">{dateFormat(created_at).full}</p>
                </div>
            </div>

            <div className="mt-5">
                {msg}
            </div>

            <a
                href={`mailto:${email}?Subject=${subject}`}
                className='btn btn-info mt-2'
            >
                Responder
            </a>
        </div>
    )
}

export default Mensaje