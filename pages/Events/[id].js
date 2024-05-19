import { useRouter } from "next/router";
import { AllProjectsData } from "@/data/ProjectsPageData/AllProjectsData";
import React, { useEffect, useState } from "react";
import EachProject from "@/components/ProjectsPage/EachProject";
import { NextSeo } from "next-seo";
import { AllEventsData } from "@/data/EventsPageData/AllEventsData";
import EventsPage from "@/components/EventsPage/EventsPage";
export default function Project() {
    const router = useRouter();
    const { id } = router.query;
    const [loading, setLoading] = useState(true);
    const [EventElement, setEventElement] = useState(null);

    useEffect(() => {
        if (id) {
            const foundEvent = AllEventsData.find(
                (event) => String(event.id) === id,
            );
            setEventElement(foundEvent);
            setLoading(false);
        }
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!EventElement) {
        return <div>Project not found</div>;
    }

    return (
        <div>
            <NextSeo
                title={`Avana - Project ${id}`}
                description="The Avana Club of IIT Indore"
            />
            <EventsPage event={EventElement} />
        </div>
    );
}
