import React from 'react'
import { AllEventsData } from '@/data/EventsPageData/AllEventsData'
import EachEvent from '@/components/EventsPage/EachEvent'

export default function Events() {
    return (
        <div className='z-[-1]'>
           
            <div id="fh5co-feature-product" class="fh5co-section-gray">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 text-center heading-section ">
                            <h3>Events</h3>
                            <p>{`AVANA IIT INDORE has always been consistent to conduct various activities with prime goal of
                                supporting the children, women and the underprivileged in our society. Here are a few of the
                                events that we've conducted so far.`}</p>
                        </div>
                    </div>
                    {AllEventsData?.map((ele,index)=>{
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
