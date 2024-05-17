import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { RecentBlogData } from "@/data/HomePageData/RecentBlogData";
import RecentBlogComponent from "@/components/HomePage/RecentBlogComponent";
import { OurProjectData } from "@/data/HomePageData/OurProjectData";
import OurProjectComponent from "@/components/HomePage/OurProjectComponent";

export default function Home() {
	return (
		<div>
			
			<div id="fh5co-wrapper">
				<div id="fh5co-page">
					<div className="fh5co-hero">
						<div className="fh5co-overlay"></div>
						<div
							className="fh5co-cover text-center after:bg-black after:absolute after:w-full after:h-full  after:left-0 after:top-0 after:opacity-50"
							data-stellar-background-ratio="0.5"
							style={{ backgroundImage: 'url(images/background.gif)' }}
						>
							<div className="desc animate-box ">

								<span>
									<a
										className="btn btn-primary btn-lg"

									>
										<strong>
											AVANA IITI
										</strong>
									</a>
								</span>
							</div>
						</div>
					</div>

					<div id="fh5co-feature-product" className="fh5co-section-gray">
						<div className="container">
							<div className="row">
								<div className="col-md-12 text-center heading-section">
									<h3>About Us</h3>
									<p>
										Helphen, a derivative of German word helfen meaning help, is a
										non-profit organization that was established to help protect,
										promote and develop the welfare of the needy and indigent.
									</p>
								</div>
							</div>

							<div className="row">
								<div className="col-md-4">
									<div className="feature-text">
										<h3>Goal</h3>
										<p>
											Helphen aspires to be agents of change in the lives of children,
											youth, women and the under-privileged. With the unique
											development initiatives, Helphen focuses on uplifting the
											deprived and ensuring that all around us live a life well lived.
										</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="feature-text">
										<h3>Principles</h3>
										<p>{`
											Helphen's core principles lies in the belief that to have made
											one person's life a little better is to have succeeded. But they
											will by no means settle for a little better. Helphen wants the
											very best and will work together to achieve a society of equals.`}
										</p>
									</div>
								</div>
								<div className="col-md-4">
									<div className="feature-text">
										<h3>Plan of Action</h3>
										<p>
											Armed with inextinguishable enthusiasm and a spirit that refuses
											to quit, Helphen organizes events and workshops to raise
											awareness and encourage all to carry the torch of change.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div id="fh5co-portfolio">
						<div className="container">
							<div className="row">
								<div className="col-md-6 col-md-offset-3 text-center heading-section animate-box">
									<h3>Our Gallery</h3>
									<p>
										Every beautiful memory shall be lost to time unless captured in
										the right moment. Here are a few of those moments which we shall
										always cherish in our hearts
									</p>
								</div>
							</div>

							<div className="row row-bottom-padded-md">
								<div className="col-md-12">
									<ul id="fh5co-portfolio-list">
										<li
											className="two-third animate-box"
											data-animate-effect="fadeIn"
											style={{
												backgroundImage: 'url(images/Gallery1.jpg)',
											}}
										>
											<Link href="images/Gallery1.jpg" className="color-3">
												<div className="case-studies-summary">
													<h2>collection</h2>
												</div>
											</Link>
										</li>

										<li
											className="one-third animate-box"
											data-animate-effect="fadeIn"
											style={{ backgroundImage: 'url(images/Gallery2.jpg)' }}
										>
											<Link href="images/Gallery2.jpg" className="color-4">
												<div className="case-studies-summary">
													<h2>Sacred Hearts</h2>
												</div>
											</Link>
										</li>

										<li
											className="one-third animate-box"
											data-animate-effect="fadeIn"
											style={{ backgroundImage: 'url(images/Gallery3.jpg)' }}
										>
											<Link href="images/Gallery3.jpg" className="color-5">
												<div className="case-studies-summary">
													<h2>{`St Jude's Center`}</h2>
												</div>
											</Link>
										</li>
										<li
											className="two-third animate-box"
											data-animate-effect="fadeIn"
											style={{ backgroundImage: 'url(images/Gallery4.jpg)' }}
										>
											<Link href="images/cover_4.png" className="color-6">
												<div className="case-studies-summary">
													<h2>Karunalaya Children Home</h2>
												</div>
											</Link>
										</li>
									</ul>
								</div>
							</div>

							<div className="row">
								<div className="col-md-4 col-md-offset-4 text-center animate-box">
									<Link href="/Gallery" className="btn btn-primary btn-lg">
										See Gallery
									</Link>
								</div>
							</div>
						</div>
					</div>

					<div id="fh5co-services-section" className="fh5co-section-gray">
						<div className="container">
							<div className="row">
								<div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
									<h3>Our Projects</h3>
								</div>
							</div>
						</div>
						<div className="container">
							{OurProjectData?.map((ele, index) => {
								return (
									<div key={index}>
										<OurProjectComponent ele={ele} />
									</div>
								)
							})}</div>
					</div>

					<div id="fh5co-blog-section">
						<div className="container">
							<div className="row">
								<div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
									<h3>Recent Blogs</h3>
								</div>
							</div>
						</div>
						<div className="container">
							<div className="row row-bottom-padded-md">

								{RecentBlogData.map((ele, index) => {
									return (
										<div key={index}>
											<RecentBlogComponent ele={ele} />
											<div className="clearfix visible-sm-block"></div>
										</div>
									)
								})}
							</div>

							<div className="row">
								<div className="col-md-4 col-md-offset-4 text-center animate-box">
									<Link href="/Blog" className="btn btn-primary btn-lg">
										Our Blog
									</Link>
								</div>
							</div>
						</div>
					</div>


				</div>
			</div>
		</div>
	);
}
