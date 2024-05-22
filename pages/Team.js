import React from "react";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { AllTeamData } from "@/data/TeamPageData/AllTeamData";
import EachTeam from "@/components/TeamPage/EachTeam";
import { HeadData } from "@/data/TeamPageData/HeadData";
import HeadCard from "@/components/TeamPage/HeadCard";
export default function Blog() {
    return (
        <div>
            <NextSeo
                title="Avana - Team"
                description="The Avana Club of IIT Indore"
            />
            <section class=" text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="!text-6xl font-medium title-font mb-4 text-gray-900">OUR TEAM</h1>
                        
                    </div>
                    <div className="grid md:grid-cols-2  ">
                    {HeadData?.map((ele,index)=>{
                        return (
                            <React.Fragment key={index} >
                                <HeadCard ele={ele} />
                            </React.Fragment>
                        )
                    })}
                    </div>
                    <div class="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 ">
                    
                    {AllTeamData?.map((ele,index)=>{
                        return (
                            <React.Fragment key={index} >
                                <EachTeam ele={ele} />
                            </React.Fragment>
                        )
                    })}

                        
                    </div>
                </div>
            </section>
        </div>
    );
}
