import React from 'react'
import { AllGalleryData } from '@/data/GalleryPageData/AllGalleryData'
import EachGalery from '@/components/GalleryPage/EachGalery'
import { NextSeo } from 'next-seo';
export default function Gallery() {
    return (
        <div>
            <NextSeo
				title="Avana - Gallery"
				description="The Avana Club of IIT Indore"
			/>
            <div id="fh5co-blog-section" className="fh5co-section-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
                            <h3>Our Gallery</h3>
                            <p>Every beautiful memory shall be lost to time unless captured in the right moment. Here are a
                                few of those moments which we shall always cherish in our hearts</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row row-bottom-padded-md">
                        {AllGalleryData?.map((ele,index)=>{
                            return (
                                <div key={index}>
                                    <EachGalery ele={ele} />
                                    <div className="clearfix visible-md-block"></div>
                                </div>
                            )
                        })}
                            
                    </div>
                </div>
            </div>
        </div>
    )
}
