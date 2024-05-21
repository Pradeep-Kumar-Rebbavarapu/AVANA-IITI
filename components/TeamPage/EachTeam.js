import React from "react";
import Link from "next/link";
export default function EachTeam({ ele }) {
    const {
        image,

        name,

        position,
    } = ele;

    return (
        
            <div class="p-4  py-10">
                <div class=" flex flex-col items-center text-center  ">
                    <img alt="team" class="flex-shrink-0 rounded-lg !h-[180px] !w-[300px]  !border-2 !border-red-500    h-68 object-center mb-4" src={`/${image}`} /> 
                    <div class="w-full">
                        
                        <h3 class="text-gray-500 mb-3">{name}</h3>
                        <p class="mb-4">{position}</p>
                        
                    </div>
                </div>
                
            </div>
       
    );
}