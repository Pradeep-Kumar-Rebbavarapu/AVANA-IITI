import React from "react";
import { AllContacts } from "@/data/ContactPageData/AllContacts";
import { FaLocationDot } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { IoPerson } from "react-icons/io5";
import { NextSeo } from "next-seo";
export default function Contact() {
    return (
        <div>
            <NextSeo
                title="Avana - Contact"
                description="The Avana Club of IIT Indore"
            />
            <div id="fh5co-contact" className="animate-box">
                <div className="container">
                    <form action="#">
                        <div className="row">
                            <div className="col-md-6">
                                <h3 className="section-title">
                                    Personal Contacts
                                </h3>
                                <p>
                                    You can contact us through the given
                                    information below
                                </p>
                                <ul className="contact-info">
                                    <li className="">
                                        <i className="-translate-y-3">
                                            <IoPerson />
                                        </i>
                                        {AllContacts?.club_head_name} (Club Head
                                        - {AllContacts?.club_head_number})
                                    </li>
                                    <li className="">
                                        {" "}
                                        <i className="-translate-y-3">
                                            <IoPerson />
                                        </i>
                                        {AllContacts?.co_club_head_name} (Club
                                        Co Head -{" "}
                                        {AllContacts?.co_club_head_number})
                                    </li>
                                    <li className="">
                                        <i className="-translate-y-3">
                                            <IoPerson />
                                        </i>
                                        {AllContacts?.website_developer_name}{" "}
                                        (Website Developer -{" "}
                                        {AllContacts?.website_developer_number})
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <h3 className="section-title">Our Address</h3>
                                <p>You can Visit Our Social Media Handles</p>
                                <ul className="contact-info">
                                    <li className="flex">
                                        <i>
                                            <FaLocationDot />
                                        </i>
                                        {AllContacts?.avana_club_address}
                                    </li>
                                    <li className="flex">
                                        <i className="-translate-y-2">
                                            <CgMail />
                                        </i>
                                        <a href="mailto:avana@iiti.ac.in">
                                            {AllContacts?.avana_gmail}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
