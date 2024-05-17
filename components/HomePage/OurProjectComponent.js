import React from 'react'
import Link from 'next/link'
import { CiHeart } from "react-icons/ci";
export default function OurProjectComponent({ ele }) {
	const { project_link, title, description } = ele
	return (

		<div className="col-md-4 col-sm-4">
			<div className="services animate-box">
				<span >
					<CiHeart className='flex justify-center items-center mx-auto w-32 h-32' />
				</span>
				<Link href={project_link}>
					<h3>{title}</h3>
				</Link>
				<p>
					{description}
				</p>
			</div>
		</div>

	)
}
