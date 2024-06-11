import React from 'react'

const NewsItem =(props)=> {

    
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className="my-3">
                <div className="card" style={{ width: "20rem" }}>
                <div style={
                        {
                            display: 'flex',
                            justifyContent: 'flex-end',
                            position: 'absolute',
                            right: '0'
                        }
                    }>
                        <span className="badge rounded-pill bg-danger" >
                            {source}
                        </span>

                    </div>

                    <img src={!imageUrl ? "https://static.toiimg.com/thumb/msid-110383115,imgsize-32744,width-400,resizemode-4/110383115.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title} </h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()} </p>
                        <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    
}

export default NewsItem
