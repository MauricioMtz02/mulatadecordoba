const Meta = ({articulo}) => {
    const {title, keywords, img, created_at, last_update, description} = articulo
    return (
        <>
            <meta
                name='description'
                content={title}
            />
            <meta name="robots" content="index" />
            <meta name="keywords" content={keywords} />
            <meta property="og:image" content={`${process.env.BACKEND_IMAGES}/${img ? img : 'articuloNone.jpg'}`}/>
            <meta property="og:image:url" content={`${process.env.BACKEND_IMAGES}/${img ? img : 'articuloNone.jpg'}`}/>
            <meta property="og:image:secure_url" content={`${process.env.BACKEND_IMAGES}/${img ? img : 'articuloNone.jpg'}`}/>
            <meta property="article:published_time" content={created_at}/>
            <meta property="article:modified_time" content={last_update} />

            <meta itemprop="name" content={title}/>
            <meta itemprop="headline" content={title}/>
            <meta itemprop="description" content={description}/>
            <meta itemprop="image" content={`${process.env.BACKEND_IMAGES}/${img ? img : 'articuloNone.jpg'}`}/>
            <meta itemprop="datePublished" content={created_at}/>
            <meta itemprop="dateModified" content={last_update} />
            <meta itemprop="author" content="La Mulata de Córdoba"/>
        </>
    )
}

export default Meta