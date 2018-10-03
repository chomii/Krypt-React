import React from 'react';
import CustomLoader from '../components/Loader/CustomLoader';

function WithLoader(Component) {
    return function WithLoaderComponent({isLoading, ...props}) {
        if(!isLoading) return (<Component {...props} />);
        return <CustomLoader/>
    }
}