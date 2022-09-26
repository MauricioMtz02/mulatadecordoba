const Facebook = () => {
    return (
        <div className="d-flex justify-content-center justify-content-md-end">
            <iframe 
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FLaMulataDeCordoba&tabs=timeline&width=350&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=504366728175128" 
                height="600" 
                width="350"
                style={{
                    border:'none', 
                    overflow: 'hidden'
                }} 
                scrolling="no"
                frameBorder={0}
                allowFullScreen
                className="rounded shadow-sm"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
        </div>
    )
}

export default Facebook