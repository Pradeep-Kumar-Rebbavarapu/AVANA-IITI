import React from 'react'

export default function EachEvent({ ele }) {
    const { title, description, images } = ele
    return (
        <div>
            <div class="eventcat">

                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div class="row">
                <div class="col-md-6 text-center animate-box container1">
                    <p><img src={images[0]} alt="Free HTML5 Bootstrap Template" class="img-responsive" />

                    </p>

                </div>

                <div class="col-md-6 text-center animate-box container1">
                    <p><img src={images[1]} alt="Free HTML5 Bootstrap Template" class="img-responsive" />

                    </p>


                </div>

            </div>
            <div class="row">
                <div class="col-md-6 text-center animate-box container1">
                    <p><img src={images[2]} alt="Free HTML5 Bootstrap Template" class="img-responsive" />

                    </p>

                </div>

                <div class="col-md-6 text-center animate-box container1">
                    <p><img src={images[3]} alt="Free HTML5 Bootstrap Template" class="img-responsive" />

                    </p>

                </div>

            </div>
        </div>
    )
}
