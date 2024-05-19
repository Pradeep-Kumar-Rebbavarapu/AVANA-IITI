import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { RecentBlogData } from "@/data/HomePageData/RecentBlogData";
import RecentBlogComponent from "@/components/HomePage/RecentBlogComponent";
import { OurProjectData } from "@/data/HomePageData/OurProjectData";
import OurProjectComponent from "@/components/HomePage/OurProjectComponent";
import { NextSeo } from 'next-seo';
export default function Home() {
	return (
		<div>
			<NextSeo
				title="The Avana Club - IIT Indore"
				description="The Avana Club of IIT Indore"
			/>

			<div className="fh5co-hero">
				<div className="fh5co-overlay"></div>
				<div
					className="fh5co-cover text-center after:bg-black after:absolute after:w-full after:h-full  after:left-0 after:top-0 after:opacity-50"
					data-stellar-background-ratio="1.3"
					style={{ backgroundImage: 'url(images/background.gif)' }}
				>
					<div className="desc animate-box ">

						<span>
							<a
								className="btn mt-10 btn-primary btn-lg"

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
							Avana, a Sanskrit word meaning favour/protection,
							 is a compassionate social welfare club dedicated to uplifting the lives of underprivileged individuals. 
							 Founded on the principles of empathy and solidarity, 
							 we strive to create a more equitable society where everyone has access to essential resources and opportunities for a better future.


							</p>
						</div>
					</div>

					<div className="row">
						<div className="col-md-4">
							<div className="feature-text">
								<h3>Goal</h3>
								<p>
								Our primary objective at Avana is to lower poverty and promote social justice by providing vital support and resources to those in need. 
								Through various programs and initiatives, we aim to empower people to overcome socio-economic barriers and achieve self-sufficiency.


								</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="feature-text">
								<h3>Principles</h3>
								<p>{`
											At the heart of Avana lies the belief that inner healing happens through social healing. We operate on the fundamental principle of inclusivity, recognising every individual's inherent dignity and worth regardless of their background or circumstances. We believe in fostering a culture of compassion, empathy, and respect, guided by a commitment to equity, fairness, and social responsibility.
											`}
								</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="feature-text">
								<h3>Main events</h3>
								<p>
								Through these concerted efforts, Avana endeavours to catalyse positive change and make a tangible difference in the lives of those we serve, 
								striving towards a more compassionate, equitable, and inclusive society for all.


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
											<h2>collection</h2>
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
											<h2>{`collection`}</h2>
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
											<h2>collection</h2>
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
	);
}
