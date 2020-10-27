import React from 'react';

const WithLoadingWrapper = (WrappedComponent) => {

    const WithLoading = (props) => {
        return  props.loading ?
            <WrappedComponent {...props} />
            : 'Loading'
    } 

    WithLoading.displayName = `ComponentLoading(${WrappedComponent.displayName || WrappedComponent.name || ''})`;
    return WithLoading
}

export default WithLoadingWrapper