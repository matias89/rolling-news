import React from "react"


const Home = () => {
    const listArticles = articles.map(article => {
        <Card 
            key={article.id}
            imgName={article.img}
            title={article.title}
            size={md}
            />
    })
    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form>
                            <div class="form-group">
                                <InputElement type="search" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row" />
                    <div className="col-9">
                        <Carousel>
                            <Icon />
                        </Carousel>
                    </div>
                    <div className="col-3">
                        <Aside />
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">
                        <CardComponent />
                    </div>
                    <div className="col-4">
                        {featuredArticles}
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        {listArticles}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
