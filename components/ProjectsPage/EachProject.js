import React from "react";

export default function EachProject({ ele }) {
    const { title, description, images } = ele;
    return (
        <div>
            <div id="fh5co-feature-product" className="fh5co-section-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center heading-section">
                            <h3>{title}</h3>

                            <p>{description}</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 text-center animate-box">
                            <p>
                                <img
                                    src={`/${images[0]}`}
                                    alt="Free HTML5 Bootstrap Template"
                                    className="img-responsive img-overlay"
                                />
                                <div className="overlay">
                                    <div className="text">
                                        {" "}
                                        Caption for Image
                                    </div>
                                </div>
                            </p>
                        </div>
                        <div className="col-md-6 text-center animate-box">
                            <p>
                                <img
                                    src={`/${images[1]}`}
                                    alt="Free HTML5 Bootstrap Template"
                                    className="img-responsive img-overlay"
                                />
                                <div className="overlay">
                                    <div className="text">
                                        {" "}
                                        Caption for Image
                                    </div>
                                </div>
                            </p>
                        </div>
                        <div className="col-md-6 text-center animate-box">
                            <p>
                                <img
                                    src={`/${images[2]}`}
                                    alt="Free HTML5 Bootstrap Template"
                                    className="img-responsive img-overlay"
                                />
                                <div className="overlay">
                                    <div className="text">
                                        {" "}
                                        Caption for Image
                                    </div>
                                </div>
                            </p>
                        </div>
                        <div className="col-md-6 text-center animate-box">
                            <p>
                                <img
                                    src={`/${images[3]}`}
                                    alt="Free HTML5 Bootstrap Template"
                                    className="img-responsive img-overlay"
                                />
                                <div className="overlay">
                                    <div className="text">
                                        {" "}
                                        Caption for Image
                                    </div>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
