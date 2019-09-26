import React, { PureComponent } from 'react';
import { shell } from 'electron';


export default class Home extends PureComponent {

    handleOpen = () => {
        shell.openExternal('https://github.com')
    }

    render() {
        return <div>
            <button onClick={this.handleOpen}>open</button>
        </div>
    }
}