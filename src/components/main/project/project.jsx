import React, { useContext, useEffect, useState, useRef } from 'react';
import './project.css';
import LanguageContext from '../../../context/context';
import Icon from './icon';
import Lightproject from './lightproject';
import useMediaQuery from '../../../customHook/useMediaQuery';
import kracht from '../../../asset/video/kracht.webm';
import samoptic from '../../../asset/video/samoptic.webm';
import ProjectCell from './ProjectCell';

export default function Project() {
    const { t } = useContext(LanguageContext);
    const isMediumScreen = useMediaQuery('(max-width: 900px)');
    const projectRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
    const [visibleCells, setVisibleCells] = useState([false, false, false, false]);

    useEffect(() => {
        const handleScroll = () => {
            projectRefs.forEach((ref, index) => {
                if (ref.current) {
                    const position = ref.current.getBoundingClientRect();
                    setVisibleCells(prev => {
                        const updated = [...prev];
                        updated[index] = position.top < window.innerHeight;
                        return updated;
                    });
                }
            });
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const projects = [
        {
            title: 'kracht',
            videoSrc: kracht,
            githubLink: '',
            websiteLink: '',
            overview: t('Project.ProjectOne.Overview', { returnObjects: true })  // Ensure returnObjects: true
        },
        {
            title: 'samOptic',
            videoSrc: samoptic,
            githubLink: '',
            websiteLink: '',
            overview: t('Project.ProjectTwo.Overview', { returnObjects: true })  // Ensure returnObjects: true
        },
        {
            title: 'clothestore',
            videoSrc: null,
            githubLink: '',
            websiteLink: '',
            overview: t('Project.ProjectThree.Overview', { returnObjects: true })  // Ensure returnObjects: true
        },
        {
            title: 'clothestore',
            videoSrc: null,
            githubLink: '',
            websiteLink: '',
            overview: t('Project.ProjectFour.Overview', { returnObjects: true })  // Ensure returnObjects: true
        }
    ];

    return (
        <div className='project'>
            <Lightproject />
            <div className='projectGridCon'>
                {projects.map((project, index) => (
                    <div ref={projectRefs[index]} key={project.title}>
                        <ProjectCell
                            index={index} 
                            isMediumScreen={isMediumScreen}
                            videoSrc={project.videoSrc}
                            title={project.title}
                            isVisible={visibleCells[index]}
                            overview={project.overview}
                            IconComponent={<Icon githupLink={project.githubLink} websiteLink={project.websiteLink} />}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

