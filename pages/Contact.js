import React from 'react'
import { AllContacts } from '@/data/ContactPageData/AllContacts'
export default function Contact() {
    return (
        <div>
            <div id="fh5co-contact" class="animate-box">
                <div class="container">
                    <form action="#">
                        <div class="row">
                            <div class="col-md-6">
                                <h3 class="section-title">Personal Contacts</h3>
                                <p>You can contact us through the given information below</p>
                                <ul class="contact-info">
                                    <li><i class="icon-location-pin"></i>{AllContacts?.avana_club_address}
                                    </li>
                                    <li><i class="icon-globe2"></i>{AllContacts?.club_head_name} (Club Head - {AllContacts?.club_head_number})  
                                    </li>
                                    <li><i class="icon-globe2"></i>{AllContacts?.co_club_head_name} (Club Co Head - {AllContacts?.co_club_head_number})  
                                    </li>
                                    <li><i class="icon-globe2"></i>{AllContacts?.website_developer_name} (Website Developer - {AllContacts?.website_developer_number})  
                                    </li>
                                   
                                </ul>
                            </div>
                            <div class="col-md-6">
                                <h3 class="section-title">Our Address</h3>
                                <p>You can Visit Our Social Media Handles</p>
                                <ul class="contact-info">
                                    <li><i class="icon-location-pin"></i>{AllContacts?.avana_club_address}
                                    </li>
                                    <li><i class="icon-mail"></i><a href="mailto:helphenindiavellore@gmail.com">{AllContacts?.avana_gmail}</a>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
