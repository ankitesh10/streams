import React from 'react';
import { connect } from 'react-redux';

import { signIn, signOut } from '../actions';


class GoogleAuth extends React.Component{


    componentDidMount() {
        window.gapi.load('client: auth2', ()=>{
            window.gapi.client.init({
                clientId: '730169811002-1mht32q0sm0g4kvtvi38e8ikba1i4ppa.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth= window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = isSignedIn => {
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        } else{
            this.props.signOut();
        }
    }

    onClickSignOut = () => {
        this.auth.signOut();
    }

    onClickSignIn = () => {
        this.auth.signIn();
    }


    renderAuthButton(){
        if(this.props.isSignedIn === null){
            return null;
        } else if(this.props.isSignedIn === true){
            return (
                <button onClick = {this.onClickSignOut} className="ui red google button">
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        } else{
            return(
                <button onClick= {this.onClickSignIn} className="ui red google button">
                    <i className="google icon" />
                    Sign In with Google
                </button>
            );
        }
    }


    render(){
        return <div>{this.renderAuthButton()}</div>;
    }


}

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn}
}

export default  connect(
 mapStateToProps,
 { signIn, signOut }
) (GoogleAuth);