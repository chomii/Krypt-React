import React from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react'

const CustomLoader = (props) => {

    return(
        <Segment>
            <Dimmer active inverted>
                <Loader size='massive' inline='centered'/>
            </Dimmer>
        </Segment>
    )
}

export default CustomLoader;