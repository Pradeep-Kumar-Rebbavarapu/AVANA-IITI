import React from 'react'

export default function EachGalery({ ele }) {
    const { title, image } = ele
    return (
        <div>
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="fh5co-blog animate-box">
                    <a href="#"><img class="img-responsive" src={image} alt="" /></a>
                    <div class="case-studies-summary">
                        <span>{title}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
