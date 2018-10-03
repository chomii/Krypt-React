import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react'

const CustomLoader = (props) => {

    return(
        <div className='loaderWrapper'>
            <Dimmer active inverted>
                <Loader size='massive' inline='centered'>Loading</Loader>
            </Dimmer>
        </div>
    )
}

export default CustomLoader;