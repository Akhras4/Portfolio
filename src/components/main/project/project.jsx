import React, { useContext } from 'react'
import './project.css'
import LanguageContext from '../../../context/context'
import Icon from './icon'
import './icon.css'

export default function Project() {
    const {t}=useContext(LanguageContext)
  return (
    <div className='project'>
<div className='projectGridCon'>
<div className='cell' id='bookstore'>bookstore
    <div className='videoProject'></div>
    <div className='aboutProject'>
            <div  className='head'><h1>Bookstore</h1> <Icon /></div>
            <h2 className='overview'>{t('Overview')}{t('Overview1')}{t('Overview2')}</h2>
            <h2 className='tenhno'>{t('Technologies Used')}:</h2>  
    </div>
</div>
<div className='cell' id='samOptic'>samOptic
<div className='videoProject'></div>
    <div className='aboutProject'>

           <div className='head'><h1>samOptic</h1></div>
            <h2>Overview</h2>  

    </div>
</div>
<div className='cell' id='clothestore'>clothestore
<div className='videoProject'></div>
<div className='aboutProject'>
        <hgroup>
            <h1>clothestore</h1>
            <h2>Overview</h2>  
        </hgroup>
    </div>
</div>
<div className='cell' id='clothestore'>clothestore
<div className='videoProject'></div>
<div className='aboutProject'>
        <hgroup>
            <h1>clothestore</h1>
            <h2>Overview</h2>  
        </hgroup>
    </div>
</div>
</div>
    </div>
  )
}
