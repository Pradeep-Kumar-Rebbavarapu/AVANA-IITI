import EachBlog from "@/components/BlogPage/EachBlog";
import { AllBlogsData } from "@/data/BlogPageData/AllBlogsData";
import React from "react";
import { NextSeo } from "next-seo";
import Link from "next/link";
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
                <div className="row">
    
          <div  className="col-lg-4 col-md-6 col-sm-6 mb-4 mx-52 ">
            <div className="fh5co-blog animate-box">
              <Link href="#">
                <img className="img-responsive" src="https://images.unsplash.com/photo-1519068737630-e5db30e12e42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c291cmNlfGVufDB8fDB8fHww" alt="" />
              </Link>
              <div className="card-body h-fit">
                        <div className="text-center">
                            <p>
                        
                                   <b><span style={{ color: 'black' }}>Aditya Girge</span> </b>
                                <br></br>
                        Club Head</p>
                             
                        </div>
                    </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 mb-4 mx-4">
            <div className="fh5co-blog animate-box">
              <Link href="#">
                <img className="img-responsive" src="https://images.unsplash.com/photo-1519068737630-e5db30e12e42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c291cmNlfGVufDB8fDB8fHww" alt="" />
              </Link>
              
              <div className="card-body h-fit">
                        <div className="text-center">
                            <p>
                        
                                   <b><span style={{ color: 'black' }}>Vijit Balsori</span> </b>
                                <br></br>
                            Club Co-Head</p>
                             
                        </div>
                    </div>
            </div>
          </div>
          </div>
                    <div className="row row-bottom-padded-md">
                        {AllBlogsData?.map((ele, index) => {
                            return (
                                <div key={index}>
                                    <EachBlog ele={ele} />
                                </div>
                            );
                        })}
                    </div>

                    <div className="row">
                        <div className="col-md-4 col-md-offset-4 text-center animate-box">
                            <a
                                href="https://helphenindiablog.wordpress.com/"
                                target="_blank"
                                className="btn btn-primary btn-lg"
                            >
                                Older Posts
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
