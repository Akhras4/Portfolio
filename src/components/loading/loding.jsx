import React from 'react'
import './loading.css'
import Androidsmall from './androidsmall'
import Androidlarg from './androuidlarg'
import Iphonelarg from './iphonelarg'
import Iphonemini from './iphonemini'
import Mac14 from './mac14'
import Mac16 from './mac16'
import Macair from './macair'
import useMedia from 'use-media';
import Ipadmini from './ipadmini'
import Ipadpro11 from './ipadpro11'
import Ipadpro12 from './ipadpro12'
import Desktop from './desktop'
import Between from './between'
import {useState,useEffect} from 'react' 




export default function Loading({props}) {
  const isMackBook16 = useMedia({ minWidth: '1728px' });
  const isMackBook14 = useMedia({ minWidth: '1512px' });
  const isDesktop = useMedia({ minWidth: '1440px' });
  const isMacBookAir = useMedia({ minWidth: '1280px' });
  const isIpadpro12 = useMedia({ minWidth: '1024px' });
  const isIpadpro11 = useMedia({ minWidth: '834px' });
  const isIpadmini = useMedia({ minWidth: '744px' });
  const isBetween = useMedia({ minWidth: '500px' });
  const isIphoneLarg = useMedia({ minWidth: '430px' });
  const isIphonesmall = useMedia({ minWidth: '375px' });
  const isAndroudLarg = useMedia({ minWidth: '360px', minHeight: '800px' });
  const isAndroudMin = useMedia({ minWidth: '360px', minHeight: '640px' });


  if (isMackBook16) {
    return <Mac16 props={props} />;
  } else if (isMackBook14) {
    return <Mac14 props={props}  />;
  } else if (isDesktop) {
    return <Desktop props={props}  />;
  } else if (isMacBookAir) {
    return <Macair props={props} />;
  } else if (isIpadpro12) {
    return <Ipadpro12 props={props}  />;
  } else if (isIpadpro11) {
    return <Ipadpro11 props={props}  />;
  } else if (isIpadmini) {
    return <Ipadmini props={props} />;
} else if (isBetween) {
    return <Between props={props} />;
  } else if (isIphoneLarg) {
    return <Iphonelarg props={props} />;
  } else if (isIphonesmall) {
    return <Iphonemini props={props}  />;
  } else if (isAndroudLarg) {
    return <Androidlarg props={props}  />;
  } else if (isAndroudMin) {
    return <Androidsmall props={props}  />;
  } else {
    return <div>loading . . .</div>;
  }
}
