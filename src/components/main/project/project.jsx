import React, { useContext, useEffect, useState, useRef } from 'react';
import './project.css';
import LanguageContext from '../../../context/context';
import Icon from './icon';
import Lightproject from './lightproject';
import useMediaQuery from '../../../customHook/useMediaQuery';
import kracht from '../../../asset/video/kracht.webm';
import samoptic from '../../../asset/video/samoptic.webm';
import bookstore from '../../../asset/video/book-store.mp4'
import todo from '../../../asset/video/todo.webm'
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
            githubLink: 'https://github.com/Akhras4/website-kracht.git',
            websiteLink: 'https://kracht.netlify.app',
            overview: t('Project.ProjectOne.Overview', { returnObjects: true })  
        },
        {
            title: 'samOptic',
            videoSrc: samoptic,
            githubLink: 'https://github.com/Akhras4/sham-sunglass.git',
            websiteLink: '',
            overview: t('Project.ProjectTwo.Overview', { returnObjects: true }) 
        },
        {
            title: 'Bookstore Management System',
            videoSrc: bookstore,
            githubLink: 'https://github.com/Akhras4/Bookstore-Management-System-main.git',
            websiteLink: 'https://bookstore-management-system-book.up.railway.app/login',
            overview: t('Project.ProjectThree.Overview', { returnObjects: true })  
        },
        {
            title: 'To Do and more',
            videoSrc: todo,
            githubLink: 'https://github.com/Akhras4/todo.git',
            websiteLink: 'https://akhras4.netlify.app',
            overview: t('Project.ProjectFour.Overview', { returnObjects: true }) 
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

