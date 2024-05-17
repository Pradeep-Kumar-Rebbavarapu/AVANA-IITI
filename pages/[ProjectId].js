import { useRouter } from 'next/router';
import { AllProjectsData } from '@/data/ProjectsPageData/AllProjectsData';
import React, { useEffect, useState } from 'react';
import EachProject from '@/components/ProjectsPage/EachProject';

export default function Project() {
    const router = useRouter();
    const { ProjectId } = router.query;
    const [loading, setLoading] = useState(true); 
    const [projectElement, setProjectElement] = useState(null);

    useEffect(() => {
        if (ProjectId) {
            const foundProject = AllProjectsData.find((project) => String(project.id) === ProjectId);
            setProjectElement(foundProject);
            setLoading(false);
        }
    }, [ProjectId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!projectElement) {
        return <div>Project not found</div>;
    }

    return (
        <div>
            <EachProject ele={projectElement} />
        </div>
    );
}
