import React from "react";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { AllTeamData } from "@/data/TeamPageData/AllTeamData";
import EachTeam from "@/components/TeamPage/EachTeam";
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
                    <div class="flex flex-wrap -m-4">

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
