import React from 'react'
const Auth=(Wrap)=>{
    return({isAuth,...props})=>{
        if(isAuth){
            return <p>acess denied.</p>;
        }
        return<wrap{...props}/>;
    };

};
export default Auth