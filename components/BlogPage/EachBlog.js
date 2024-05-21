import React from "react";
import Link from "next/link";
export default function EachBlog({ ele }) {
    const {
        image,
        
        title,
       
        description,
    } = ele;

    return (
        <div>
            <div className=" col-md-2 mx-7">
                <div className="fh5co-blog animate-box">
                    <Link href={image}>
                        <img className="img-responsive" src={image} alt="" />
                    </Link>
                    <div className="card-body h-fit">
                        <div className="text-center">
                            <p>
                        
                                   <b><span style={{ color: 'black' }}>{title}</span> </b>
                                <br></br>
                            {description}</p>
                             
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}