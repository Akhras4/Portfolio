import React, { useContext, useEffect, useRef, useState } from 'react'
import './project.css'
import LanguageContext from '../../../context/context'
import Icon from './icon'
import './icon.css'
import Lightproject from './lightproject'
import { motion } from 'framer-motion'
import useMediaQuery from '../../../customHook/useMediaQuery'
import kracht from '../../../asset/video/kracht.webm'
import samoptic from '../../../asset/video/samoptic.webm'

export default function Project() {
    const { t } = useContext(LanguageContext)
    const [isOverflowing, setIsOverflowing] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const isMediumScreen = useMediaQuery('(max-width: 900px)')
    const overviewRef = useRef(null);
    const projectCell1Ref = useRef(null);
    const projectCell2Ref = useRef(null);
    const projectCell3Ref = useRef(null);
    const projectCell4Ref = useRef(null);
    const [isViewCell1, setIsViewCell1] = useState(false)
    const [isViewCell2, setIsViewCell2] = useState(false)
    const [isViewCell3, setIsViewCell3] = useState(false)
    const [isViewCell4, setIsViewCell4] = useState(false)

    /* This `useEffect` hook is responsible for handling the scroll event on the window. It checks the
    position of specific elements (`projectCell1Ref`, `projectCell2Ref`, `projectCell3Ref`,
    `projectCell4Ref`) relative to the viewport when the user scrolls. */
    useEffect(() => {
        const handelScroll = () => {
            if (projectCell1Ref.current || projectCell2Ref.current || projectCell3Ref.current || projectCell4Ref.current) {
                const positionCell1 = projectCell1Ref.current.getBoundingClientRect()
                const positionCell2 = projectCell2Ref.current.getBoundingClientRect()
                const positionCell3 = projectCell3Ref.current.getBoundingClientRect()
                const positionCell4 = projectCell4Ref.current.getBoundingClientRect()
                const viewPort = window.innerHeight
                if (positionCell1.top < viewPort) {
                    setIsViewCell1(true)
                } else {
                    setIsViewCell1(false)
                }
                if (positionCell2.top < viewPort) {
                    setIsViewCell2(true)
                } else {
                    setIsViewCell2(false)
                }
                if (positionCell3.top < viewPort) {
                    setIsViewCell3(true)
                } else {
                    setIsViewCell3(false)
                }
                if (positionCell4.top < viewPort) {
                    setIsViewCell4(true)
                } else {
                    setIsViewCell4(false)
                }
            }
        }
        window.addEventListener('scroll', handelScroll)
        return () => {
            window.removeEventListener('scroll', handelScroll)
        }
    }, [isViewCell1, isViewCell2, isViewCell3, isViewCell4])
   /* This `useEffect` hook is responsible for checking if the content inside the `overviewRef` element
   is overflowing its container. It first defines a function `checkOverflow` that compares the
   `scrollHeight` of the `overviewRef` element with its `clientHeight` to determine if overflow is
   happening. */
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
    }, [expanded, t]);
    const expandOverview = (flag) => {
        setExpanded(flag);
    };
    return (
        <div className='project' >
            <Lightproject />
            <div className='projectGridCon'>
                <div ref={projectCell1Ref}>
                    {!isViewCell1 && (
                        <div className='cell' style={{ visibility: 'hidden', }}></div>   
                    )}
                    {isViewCell1 &&
                        <motion.div
                            className='cell'
                            id='bookstore'
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >kracht
                            <div className={`videoProject ${expanded ? 'expanded' : ''}`}>
                                <video width="100%" height="100%" controls autoPlay muted  preload="auto" replay >
                                    <source src={kracht} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className={`aboutProject ${expanded ? 'expanded' : ''}`}>
                                <div className='head'><h1>Bookstore</h1> <Icon /></div>
                                <div
                                    className={`overview ${expanded ? 'expanded' : ''}`}
                                    ref={overviewRef}
                                    style={{
                                        overflow: expanded ? 'visible' : 'hidden',
                                        position: 'relative',
                                    }}> <h2 id='overview' >{t('Overview')}{t('Overview1')}{t('Overview2')}</h2>
                                    {isOverflowing && !expanded ? (
                                        <div className="see-more" onClick={() => expandOverview(true)}>
                                            See More
                                        </div>
                                    ) : (<div className="see-more" onClick={() => expandOverview(false)}>
                                        See less
                                    </div>)}</div>
                                <h2 className='techno'>{t('Technologies Used')}:</h2>

                            </div>
                        </motion.div>
                    }
                </div>
                <div ref={projectCell2Ref}>
                    {!isViewCell2 && (
                        <div className='cell' style={{ visibility: 'hidden', }}></div>   
                    )}
                    {isViewCell2 && <motion.div
                        className='cell'
                        id='samoptic'
                        initial={{ x: isMediumScreen ? -100 : 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >samOptic
                         <div className={`videoProject ${expanded ? 'expanded' : ''}`}>
                                <video width="100%" height="100%" controls autoPlay muted  preload="auto" replay >
                                    <source src={samoptic} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        <div className='aboutProject'>

                            <div className='head'><h1>samOptic</h1><Icon /></div>
                            <h2>Overview</h2>

                        </div>
                    </motion.div>
                    }
                </div>
                <div ref={projectCell3Ref}>
                    {!isViewCell3 && (
                        <div className='cell' style={{ visibility: 'hidden', }}></div>   
                    )}
                    {isViewCell3 && <motion.div
                        className='cell'
                        id='clothestore'
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >clothestore
                        <div className='videoProject'></div>
                        <div className='aboutProject'>
                            <hgroup>
                                <h1>clothestore</h1>
                                <h2>Overview</h2>
                            </hgroup>
                        </div>
                    </motion.div>
                    }
                </div>
                <div ref={projectCell4Ref}>
                    {!isViewCell4 && (
                        <div className='cell' style={{ visibility: 'hidden' }}>

                        </div>
                    )}
                    {isViewCell4 && <motion.div
                        className='cell'
                        id='cls'
                        initial={{ x: isMediumScreen ? -100 : 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}

                    >clothestore
                        <div className='videoProject'></div>
                        <div className='aboutProject'>
                            <hgroup>
                                <h1>clothestore</h1>
                                <h2>Overview</h2>
                            </hgroup>
                        </div>
                    </motion.div>
                    }
                </div>
            </div>
        </div>
    )
}
