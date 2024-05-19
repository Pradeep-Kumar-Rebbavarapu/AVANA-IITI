import React from 'react'
import { AllEventsData } from '@/data/EventsPageData/AllEventsData'
import EachEvent from '@/components/EventsPage/EachEvent'
import { NextSeo } from 'next-seo';
export default function EventsPage({event}) {
    return (
        <div>
                
                <div id="fh5co-feature-product" className="fh5co-section-gray">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center heading-section ">
                                <h3>{event?.title}</h3>
                                <p>{`AVANA IIT INDORE has always been consistent to conduct various activities with prime goal of
                                supporting the children, women and the underprivileged in our society. Here are a few of the
                                events that we've conducted so far.`}</p>
                            </div>
                        </div>
                        {event?.results?.map((ele, index) => {
                            return (
                                <div key={index}>
                                    <EachEvent ele={ele} />
                                </div>
                            )
                        })}

                    </div>
                </div>
          
        </div>
    )
}
