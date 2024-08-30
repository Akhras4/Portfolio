import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './project.css';

export default function ProjectCell({ 
    isMediumScreen, 
    videoSrc, 
    title, 
    isVisible, 
    overview, 
    IconComponent,
    index 
}) {
    const overviewRef = useRef(null);
    const aboutProjectRef=useRef(null)
    const [isOverflowing, setIsOverflowing] = useState(false);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const checkOverflow = () => {
            if (overviewRef.current) {
                setIsOverflowing(overviewRef.current.scrollHeight > overviewRef.current.clientHeight);
            }
        };
        checkOverflow();
        window.addEventListener('resize', checkOverflow);
        window.addEventListener('scroll', checkOverflow);
        return () => {
            window.removeEventListener('resize', checkOverflow);
            window.removeEventListener('scroll', checkOverflow);
        };
    }, [expanded]);

    useEffect(() => {
        if (!expanded && overviewRef.current) {
            overviewRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [expanded]);

    if (!isVisible) {
        return <div className='cell' style={{ visibility: 'hidden' }}></div>;
    }

    const initialX = index % 2 === 0 ? -100 : 100;

    return (
        <motion.div
            className='cell'
            initial={{ x: isMediumScreen ? -100 : initialX, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
           
        >
            {title}
            {videoSrc && (
                <div className={`videoProject ${expanded ? 'expanded' : ''}`}  ref={aboutProjectRef}>
                    <video width="100%" height="100%" controls autoPlay muted preload="auto">
                        <source src={videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            )}
            <div className={`aboutProject ${expanded ? 'expanded' : ''}`} >
                <div className='head'>
                    <h1>{title}</h1> 
                    {IconComponent}
                </div>
                <div
                    className={`overview ${expanded ? 'expanded' : ''}`}
                    ref={overviewRef}
                    style={{
                        overflow: expanded ? 'visible' : 'hidden',
                        position: 'relative',
                    }}
                >
                    <div style={{ position: expanded ? 'relative' : null }} className='pcontiner'>
                        {overview.map((line, i) => (
                            <p key={i} className={`par${i}`}>{line}</p>
                        ))}
                        {isOverflowing && !expanded ? (
                            <div className="see-more" style={{ position: 'absolute', bottom: '-7px' }} 
                            onClick={() => {setExpanded(true);
                                if (aboutProjectRef.current) {
                                    aboutProjectRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }
                            }}>
                                See More
                            </div>
                        ) : (
                            expanded && (
                                <div className="see-more" style={{ position: 'absolute', bottom: '110', zIndex: '66', backgroundColor: 'transparent' }} onClick={() => {
                                    setExpanded(false);
                                    overviewRef.current.scrollTop = 0;
                                }}>
                                    See Less
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
