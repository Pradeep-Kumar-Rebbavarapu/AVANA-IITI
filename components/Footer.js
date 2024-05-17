import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <div>
            <footer>
                <div id="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 text-center">
                                <p className="fh5co-social-icons">
                                    <Link
                                        href="https://twitter.com/HelphenIndia"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="icon-twitter2"></i>
                                    </Link>
                                    <Link
                                        href="https://www.facebook.com/helphenindia"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="icon-facebook2"></i>
                                    </Link>
                                    <Link
                                        href="https://www.instagram.com/helphenindia/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="icon-instagram"></i>
                                    </Link>
                                </p>
                                <p>
                                    Copyright 2024 <Link href="/">AVANA IITI</Link>. All Rights
                                    Reserved. <br />
                                    Made with <i className="icon-heart3"></i> by{' '}
                                    <Link href="/">AVANA IITI</Link>
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
