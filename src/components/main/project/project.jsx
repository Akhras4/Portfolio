import React, { useContext, useEffect, useRef, useState } from 'react'
import './project.css'
import LanguageContext from '../../../context/context'
import Icon from './icon'
import './icon.css'
import Lightproject from './lightproject'
import { AnimatePresence,motion } from 'framer-motion'

export default function Project() {
    const { t } = useContext(LanguageContext)
    const [isOverflowing, setIsOverflowing] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const overviewRef = useRef(null);
    const projectCell1Ref = useRef(null);
    const projectCell2Ref = useRef(null);
    const projectCell3Ref = useRef(null);
    const projectCell4Ref = useRef(null);
    const [isViewCell1, setIsViewCell1] = useState(false)
    const [isViewCell2, setIsViewCell2] = useState(false)
    const [isViewCell3, setIsViewCell3] = useState(false)
    const [isViewCell4, setIsViewCell4] = useState(false)

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


    useEffect(() => {
        const checkOverflow = () => {
            if (overviewRef.current) {
                setIsOverflowing(overviewRef.current.scrollHeight > overviewRef.current.clientHeight);
            }
        };
        checkOverflow();
        window.addEventListener('resize', checkOverflow);
        return () => {
            window.removeEventListener('resize', checkOverflow);
        };
    }, [expanded]);

    const expandOverview = (flag) => {
        setExpanded(flag);
    };


    return (
        <div className='project' >
            <Lightproject />
            <div className='projectGridCon'>
                <div  ref={projectCell1Ref}>
                <AnimatePresence  initial={false}>
                    {isViewCell1 && <motion.div
                        className='cell'
                        id='bookstore'
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        
                    >bookstore
                        <div className={`videoProject ${expanded ? 'expanded' : ''}`}>
                            <video width="100%" height="100%" controls>
                                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
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
                    </AnimatePresence>
                </div>
                <div ref={projectCell2Ref}>
                <AnimatePresence  initial={false}>
                    {isViewCell2 && <motion.div
                        className='cell'
                        id='samoptic'
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                

                    >samOptic
                        <div className='videoProject'></div>
                        <div className='aboutProject'>

                            <div className='head'><h1>samOptic</h1></div>
                            <h2>Overview</h2>

                        </div>
                    </motion.div>
                    }
                    </AnimatePresence>
                </div>
                <div ref={projectCell3Ref}>
                <AnimatePresence  initial={false}>
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
                     </AnimatePresence>
                </div>
                <div ref={projectCell4Ref}>
                <AnimatePresence  initial={false}>
                    {isViewCell4 && <motion.div
                        className='cell'
                        id='cls'
                        initial={{ x: 100, opacity: 0 }}
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
                     </AnimatePresence>
                </div>
            </div>
        </div>
    )
}
