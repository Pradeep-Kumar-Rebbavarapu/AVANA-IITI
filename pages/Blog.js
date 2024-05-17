import EachBlog from '@/components/BlogPage/EachBlog'
import { AllBlogsData } from '@/data/BlogPageData/AllBlogsData'
import React from 'react'

export default function Blog() {
    return (
        <div>
            <div id="fh5co-blog-section" class="fh5co-section-gray">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-md-offset-2 text-center heading-section animate-box">
                            <h3>Read. Learn. Share</h3>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row row-bottom-padded-md">
                        {AllBlogsData?.map((ele, index) => {
                            return (
                                <div key={index}>
                                    <EachBlog ele={ele} />
                                </div>
                            )
                        })}
                    </div>

                    <div class="row">
                        <div class="col-md-4 col-md-offset-4 text-center animate-box">
                            <a href="https://helphenindiablog.wordpress.com/" target="_blank"
                                class="btn btn-primary btn-lg">Older Posts</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
