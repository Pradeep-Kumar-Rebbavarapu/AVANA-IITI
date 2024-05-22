import React, { useEffect } from "react";
import Script from "next/script";
import $ from "jquery";
import { useRef } from "react";
import { AllProjectsData } from "@/data/ProjectsPageData/AllProjectsData";
import CryptoJS from "crypto-js";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AllEventsData } from "@/data/EventsPageData/AllEventsData";
export default function Navbar() {
    const navbarRef = useRef(null);
    useEffect(() => {
        const offcanvas = function () {
            const menuWrap = document.getElementById("fh5co-menu-wrap");
            if (menuWrap) {
                const clone = menuWrap.cloneNode(true);
                clone.id = "offcanvas-menu";
                // Remove class and id attributes from child ul elements
                const uls = clone.getElementsByTagName("ul");
                for (let i = 0; i < uls.length; i++) {
                    uls[i].className = "";
                    uls[i].id = "";
                }

                const page = document.getElementById("fh5co-page");
                if (page) {
                    page.prepend(clone);
                }

                // Click the burger
                const navToggle = document.querySelector(
                    ".js-fh5co-nav-toggle",
                );
                if (navToggle) {
                    navToggle.addEventListener("click", function () {
                        document.body.classList.toggle("fh5co-offcanvas");
                    });
                }

                // Set the height of the cloned menu
                clone.style.height = `${window.innerHeight}px`;

                window.addEventListener("resize", function () {
                    clone.style.height = `${window.innerHeight}px`;
                    if (window.innerWidth > 769) {
                        document.body.classList.remove("fh5co-offcanvas");
                    }
                });
            }
        };

        if (navbarRef.current) {
            offcanvas();
        }
    }, []);

    function encryptTitle(title) {
        const encrypted = CryptoJS.AES.encrypt(title, "secretkey")
            .toString()
            .replace(/\//g, " ");
        return encrypted;
    }

    return (
        <div ref={navbarRef} className="!z-[100000] ">
            <div className="header-top">
                <div className="container  !w-full">
                    <div className="row flex justify-between items-center !w-full">
                        <div className="col-md-6 col-sm-6 !text-left fh5co-link !w-full  ">
                            <Link href="/Contact">contact</Link>
                        </div>
                        <div className="!mr-0 !text-right !w-full fh5co-social flex justify-end items-center mt-2">
                            <a
                                href="https://www.instagram.com/avana_iiti"
                                className=""
                                target="_blank"
                            >
                                <i>
                                    <AiFillInstagram className="ml-auto w-8 h-8" />
                                </i>
                            </a>
                            <a
                                href="https://in.linkedin.com/in/avana-iiti"
                                className=""
                                target="_blank"
                            >
                                <i>
                                    <FaLinkedin className="ml-auto w-8 h-8" />
                                </i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="fh5co-header-section" className="sticky-banner">
                <div className="container !w-full">
                    <div className="nav-header flex justify-between">
                        <div className="js-fh5co-nav-toggle fh5co-nav-toggle dark">
                            <i></i>
                        </div>
                        <div>
                            <div id="fh5co-logo" className="flex items-center mb-5 ">
                                <Link href="/" className="flex">
                                    <div className="">
                                        <img
                                            className="w-38 h-24 my-auto flex justify-center items-center mt-1 "
                                            src="images/main_logo.png"
                                            alt="logo"
                                        />
                                    </div>

                                </Link>

                            </div>

                        </div>
                        <nav id="fh5co-menu-wrap" role="navigation">
                            <ul className="sf-menu" id="fh5co-primary-menu">
                                <li className="active">
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <a href="#" className="fh5co-sub-ddown">
                                        Our Works
                                    </a>
                                    <ul className="fh5co-sub-menu">
                                        {AllEventsData?.map((ele, index) => {
                                            return (
                                                <li key={index}>
                                                    <Link
                                                        href={`/Events/${ele.id}`}
                                                    >
                                                        {ele.title}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" className="fh5co-sub-ddown">
                                        Projects
                                    </a>
                                    <ul className="fh5co-sub-menu">
                                        {AllProjectsData?.map((ele, index) => {
                                            return (
                                                <li key={index}>
                                                    <Link
                                                        href={`/Projects/${ele.id}`}
                                                    >
                                                        {ele.title}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </li>
                                <li>
                                    <Link href="/Gallery">Gallery</Link>
                                </li>
                                <li>
                                    <Link href="/Team">Team</Link>
                                </li>
                                {/* <li><Link href="/Sponsors">Sponsors</Link></li> */}
                                <li>
                                    <Link href="/Contact">Contact</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}
