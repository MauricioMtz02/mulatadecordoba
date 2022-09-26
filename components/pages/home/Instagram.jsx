const post = [
    {
        img: 'insta_post1.jpg',
        href: '#'
    },
    {
        img: 'insta_post2.jpg',
        href: '#'
    },
    {
        img: 'insta_post3.jpg',
        href: '#'
    },
    {
        img: 'insta_post4.jpg',
        href: '#'
    },
    {
        img: 'insta_post5.jpg',
        href: '#'
    }
]

const Instagram = () => {
    return (
        <section className="pt-5">
            <h3 className="pb-2 text-uppercase fw-semibold text-dark text-center"><span className="fw-normal text-secondary">Siguenos en</span> Instagram</h3>

            <div className="row g-0 justify-content-center">
                {post.map(p => (
                    <div key={p.img} className="col-6 col-md-4 col-lg-2">
                        <a
                            rel="noreferrer"
                            target="_blank"
                            className="d-block bg-white bg-image h-10rem w-100 rounded shadow-sm"
                            href={p.href}
                            style={{
                                backgroundImage: `url(/assets/${p.img})`
                            }}
                        ></a>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Instagram