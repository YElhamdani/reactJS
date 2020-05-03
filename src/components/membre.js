import React, {Fragment} from 'react'   





const Membre = ({nom, children, age}) => { 
    return (

    <Fragment>
        <h2>Membre de ma famille : {nom}</h2>
        <h3>Age : {age}</h3>
        { children ? <p>{children}</p> : <Fragment />}
    </Fragment>
    
    )
}

export default Membre