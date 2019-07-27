import React from 'react';
import {connect} from 'react-redux';
import {createStreams} from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
    
    // renderInput(formsProps){
    //     console.log(formsProps);
    //     return <input />
    // }

    onSubmit = (formValues) =>{
        this.props.createStreams(formValues);
    }


    render(){
        return(
            <div>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}



export default connect(null, {createStreams})(StreamCreate);