import React from "react";
import Link from "next/link";
export default function HeadCard({ ele }) {
    const {
        image,

        name,

        position,
    } = ele;

    return (
        
            <div class="p-4  py-10">
                <div class="h-full flex flex-col items-center text-center">
                    <img alt="team" class="flex-shrink-0 rounded-lg w-[400px] h-[400px] object-center mb-4" src={`/${image}`} />
                    <div class="w-full">
                        
                        <h3 class="text-gray-500 mb-3">{name}</h3>
                        <p class="mb-4">{position}</p>
                        
                    </div>
                </div>
                
            </div>
       
    );
}