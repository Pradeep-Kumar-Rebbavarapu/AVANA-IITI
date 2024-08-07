import { useRouter } from "next/router";
import { AllProjectsData } from "@/data/ProjectsPageData/AllProjectsData";
import React, { useEffect, useState } from "react";
import EachProject from "@/components/ProjectsPage/EachProject";
import { NextSeo } from "next-seo";
export default function Project() {
    const router = useRouter();
    const { id } = router.query;
    const [loading, setLoading] = useState(true);
    const [projectElement, setProjectElement] = useState(null);

    useEffect(() => {
        if (id) {
            const foundProject = AllProjectsData.find(
                (project) => String(project.id) === id,
            );
            console.log(foundProject);
            setProjectElement(foundProject);
            setLoading(false);
        }
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!projectElement) {
        return <div>Project not found</div>;
    }

    return (
        <div>
            <NextSeo
                title={`Avana - Project ${id}`}
                description="The Avana Club of IIT Indore"
            />
            <EachProject ele={projectElement} />
        </div>
    );
}
