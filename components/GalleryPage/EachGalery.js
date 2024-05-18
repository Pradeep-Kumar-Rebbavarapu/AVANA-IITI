import React from 'react'

export default function EachGalery({ ele }) {
    const { title, image } = ele
    return (
        <div>
            <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="fh5co-blog animate-box">
                    <a href="#"><img className="img-responsive" src={image} alt="" /></a>
                    <div className="case-studies-summary">
                        <span>{title}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
