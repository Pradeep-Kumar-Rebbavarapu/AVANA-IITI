import EachBlog from '@/components/BlogPage/EachBlog'
import { AllBlogsData } from '@/data/BlogPageData/AllBlogsData'
import React from 'react'
import { NextSeo } from 'next-seo';
export default function Blog() {
    return (
        <div>
            <NextSeo
				title="Avana - Blog"
				description="The Avana Club of IIT Indore"
			/>
            <div id="fh5co-blog-section" className="fh5co-section-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
                            <h3>Read. Learn. Share</h3>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row row-bottom-padded-md">
                        {AllBlogsData?.map((ele, index) => {
                            return (
                                <div key={index}>
                                    <EachBlog ele={ele} />
                                </div>
                            )
                        })}
                    </div>

                    <div className="row">
                        <div className="col-md-4 col-md-offset-4 text-center animate-box">
                            <a href="https://helphenindiablog.wordpress.com/" target="_blank"
                                className="btn btn-primary btn-lg">Older Posts</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
