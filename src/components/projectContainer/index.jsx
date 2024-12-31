import React from 'react'
import './projectContainer.css'


function ProjectContainer({name, painpoint, solution, shortName, openPopup}) {

  return (
    <div className='project-container'>
        <div className='left-project-container'>
        <h4 className='project-title'>{`${name}`}</h4>
        <p className='project-description'><b>Pain Point: </b>{`${painpoint}`}</p>
        <p className='project-description'><b>Solution: </b>{`${solution}`}</p>
        </div>
        <div className='grid-project-images'>
            <img src={`static/images/Projects/${shortName}/one.jpg`} alt="ilustration-one" onClick={() => openPopup("one", shortName)}/>
            <img src={`static/images/Projects/${shortName}/two.jpg`} alt="ilustration-two" onClick={() => openPopup("two", shortName)}/>
            <img src={`static/images/Projects/${shortName}/three.jpg`} alt="ilustration-three" onClick={() => openPopup("three", shortName)}/>
            <img src={`static/images/Projects/${shortName}/four.jpg`} alt="ilustration-four" onClick={() => openPopup("four", shortName)}/>
            <img src={`static/images/Projects/${shortName}/five.jpg`} alt="ilustration-five" onClick={() => openPopup("five", shortName)}/>
            <img src={`static/images/Projects/${shortName}/six.jpg`} alt="ilustration-six" onClick={() => openPopup("six", shortName)}/>
        </div>
    </div>

  )
}

export default ProjectContainer