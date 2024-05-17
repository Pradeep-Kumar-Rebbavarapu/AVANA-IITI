import React from 'react';
import Link from 'next/link';
import { FaHeart } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function Footer() {
    return (
        <div>
            <footer>
                <div id="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 text-center">
                                <p className="fh5co-social-icons flex justify-center">
                                <Link
                                        href="https://www.instagram.com/avana_iiti"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i><FaTwitter className='mx-auto' /></i>
                                    </Link>
                                    <Link
                                        href="https://www.instagram.com/avana_iiti"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i><FaFacebook  className='mx-auto' /></i>
                                    </Link>
                                    <Link
                                        href="https://www.instagram.com/avana_iiti"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i><AiFillInstagram className='mx-auto' /></i>
                                    </Link>
                                    <Link
                                        href="https://in.linkedin.com/in/avana-iiti"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i><FaLinkedin  className='mx-auto' /></i>
                                    </Link>
                                </p>
                                <p className='!w-full'>
                                    Copyright 2024 <Link href="/">AVANA IITI</Link>. All Rights
                                    Reserved. <br />
                                    <div className='flex justify-center'>
                                    Made with <FaHeart className='mx-2 w-8 h-8' /> <span className='mr-2'>by</span>
                                    <Link href="/">AVANA IITI</Link></div>
                                </p>
                            </div>
                        </div>

                        <div
                            className="a2a_kit a2a_kit_size_32 a2a_floating_style a2a_default_style"
                            style={{ bottom: 0, right: 0, backgroundColor: '#ffffff' }}
                        >
                            <Link className="a2a_dd" href="https://www.addtoany.com/share"></Link>
                            <Link href="/" className="a2a_button_facebook"></Link>
                            <Link href="/" className="a2a_button_twitter"></Link>
                            <Link href="/" className="a2a_button_whatsapp"></Link>
                            <Link href="/" className="a2a_button_telegram"></Link>
                        </div>
                        <script
                            dangerouslySetInnerHTML={{
                                __html: `
                                    var a2a_config = a2a_config || {};
                                    a2a_config.onclick = 1;
                                `,
                            }}
                        />
                        <script
                            async
                            src="https://static.addtoany.com/menu/page.js"
                        ></script>
                    </div>
                </div>
            </footer>
        </div>
    );
}
