import React, { useEffect } from 'react'
import Script from 'next/script'
import $ from 'jquery';
import { useRef } from 'react';
import { AllProjectsData } from '@/data/ProjectsPageData/AllProjectsData';
import CryptoJS from 'crypto-js';
import Link from 'next/link';
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function Navbar() {
    const navbarRef = useRef(null);
    useEffect(() => {
        const offcanvas = function () {
            const menuWrap = document.getElementById('fh5co-menu-wrap');
            if (menuWrap) {
                const clone = menuWrap.cloneNode(true);
                clone.id = 'offcanvas-menu';
                // Remove class and id attributes from child ul elements
                const uls = clone.getElementsByTagName('ul');
                for (let i = 0; i < uls.length; i++) {
                    uls[i].className = '';
                    uls[i].id = '';
                }

                const page = document.getElementById('fh5co-page');
                if (page) {
                    page.prepend(clone);
                }

                // Click the burger
                const navToggle = document.querySelector('.js-fh5co-nav-toggle');
                if (navToggle) {
                    navToggle.addEventListener('click', function () {
                        document.body.classList.toggle('fh5co-offcanvas');
                    });
                }

                // Set the height of the cloned menu
                clone.style.height = `${window.innerHeight}px`;

                window.addEventListener('resize', function () {
                    clone.style.height = `${window.innerHeight}px`;
                    if (window.innerWidth > 769) {
                        document.body.classList.remove('fh5co-offcanvas');
                    }
                });
            }
        };

        if (navbarRef.current) {
            offcanvas();
        }
    }, []);

    function encryptTitle(title) {
        const encrypted = CryptoJS.AES.encrypt(title, 'secretkey').toString().replace(/\//g, ' ');
        return encrypted;
    }
    
    

    return (
        <div ref={navbarRef} className='!z-[100000] '>
            <div className="header-top">
                <div className="container  !w-full">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 text-left fh5co-link">
                            <Link href="/Contact">Contact</Link>
                        </div>
                        <div className="col-md-6 col-sm-6 text-right fh5co-social flex justify-end items-center mt-2">
                            
                            <a href="https://www.instagram.com/helphenindia/" className="" target="_blank"><i><AiFillInstagram className='ml-auto' /></i></a>
                            <a href="https://in.linkedin.com/in/avana-iiti" className="" target="_blank"><i><FaLinkedin className='ml-auto' /></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="fh5co-header-section" className="sticky-banner">
                <div className="container !w-full">
                    <div className="nav-header flex justify-between">
                        <div className="js-fh5co-nav-toggle fh5co-nav-toggle dark"><i></i></div>
                        <h1 id="fh5co-logo" className='flex items-center mb-5 '><Link href="/" ><img className='w-24 h-24 my-auto flex justify-center items-center mt-1' src="images/helphen%20India%20logo.png"
                            alt="logo" /></Link></h1>

                        <nav id="fh5co-menu-wrap" role="navigation">
                            <ul className="sf-menu" id="fh5co-primary-menu">
                                <li className="active">
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <a href="#" className="fh5co-sub-ddown">Our Works</a>
                                    <ul className="fh5co-sub-menu">
                                        <li><Link href="/Events">Events</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" className="fh5co-sub-ddown">Projects</a>
                                    <ul className="fh5co-sub-menu">
                                        {AllProjectsData?.map((ele,index)=>{
                                            return (
                                                <li key={index}><Link href={`/${ele.id}`}>{ele.title}</Link></li>
                                            )
                                        })}
                                        
                                    </ul>
                                </li>
                                <li><Link href="/Gallery">Gallery</Link></li>
                                <li><Link href="/Blog">Blog</Link></li>
                                {/* <li><Link href="/Sponsors">Sponsors</Link></li> */}
                                <li><Link href="/Contact">Contact</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

        </div>
    )
}
