
import React, {Component} from 'react';

export default class User extends Component{
    render(){
        return (
                <div>
                    <h3>{this.props.user.name}</h3>
                </div>
            )
    }
}
