import React, {Component} from 'react';

export default function Hoc(WrappedComponent){
    class WithLoading extends Component{
        render(){
        return  this.props.loading ?
            <WrappedComponent {...this.props} />
            : 'Loading'
        }
    } 

    WithLoading.displayName = `ComponentLoading(${WrappedComponent.displayName || WrappedComponent.name || ''})`;
    return WithLoading
}
