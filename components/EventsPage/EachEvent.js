import React from "react";

export default function EachEvent({ ele }) {
    const { title, description, images } = ele;
    return (
        <div>
            <div className="eventcat">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className="row">
                <div className="col-md-6 text-center animate-box container1">
                    <p>
                        <img
                            src={`/${images[0]}`}
                            alt="Free HTML5 Bootstrap Template"
                            className="img-responsive !object-cover "
                        />
                    </p>
                </div>

                <div className="col-md-6 text-center animate-box container1">
                    <p>
                        <img
                            src={`/${images[1]}`}
                            alt="Free HTML5 Bootstrap Template"
                            className="img-responsive !object-cover"
                        />
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 text-center animate-box container1">
                    <p>
                        <img
                            src={`/${images[2]}`}
                            alt="Free HTML5 Bootstrap Template"
                            className="img-responsive !object-cover"
                        />
                    </p>
                </div>

                <div className="col-md-6 text-center animate-box container1">
                    <p>
                        <img
                            src={`/${images[3]}`}
                            alt="Free HTML5 Bootstrap Template"
                            className="img-responsive !object-cover"
                        />
                    </p>
                </div>
            </div>
        </div>
    );
}
