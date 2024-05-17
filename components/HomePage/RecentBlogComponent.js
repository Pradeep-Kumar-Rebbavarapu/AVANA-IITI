import React from 'react'
import Link from 'next/link'
export default function RecentBlogComponent({ele}) {
    const {image,learn_more_link,title,title_link,created_on_date,description} = ele
    
    return (
        <div>
            <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="fh5co-blog animate-box">
                    <Link href={image}>
                        <img
                            className="img-responsive"
                            src={image}
                            alt=""
                        />
                    </Link>
                    <div className="blog-text">
                        <div className="prod-title">
                            <h3>
                                <Link
                                    href={title_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {title}
                                </Link>
                            </h3>
                            <span className="posted_by">{created_on_date}</span>
                            <p>
                                {description}
                            </p>
                            <p>
                                <Link
                                    href={learn_more_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Learn More...
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
