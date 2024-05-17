import React from 'react'
import { AllGalleryData } from '@/data/GalleryPageData/AllGalleryData'
import EachGalery from '@/components/GalleryPage/EachGalery'
export default function Gallery() {
    return (
        <div>
            <div id="fh5co-blog-section" class="fh5co-section-gray">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-md-offset-2 text-center heading-section animate-box">
                            <h3>Our Gallery</h3>
                            <p>Every beautiful memory shall be lost to time unless captured in the right moment. Here are a
                                few of those moments which we shall always cherish in our hearts</p>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row row-bottom-padded-md">
                        {AllGalleryData?.map((ele,index)=>{
                            return (
                                <div key={index}>
                                    <EachGalery ele={ele} />
                                    <div class="clearfix visible-md-block"></div>
                                </div>
                            )
                        })}
                            
                    </div>
                </div>
            </div>
        </div>
    )
}
