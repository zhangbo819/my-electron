import React, { PureComponent } from 'react';
import { shell } from 'electron';


export default class Home extends PureComponent {

    handleOpen = () => {
        // 打开网页
        // shell.openExternal('https://github.com')
        
        // 打开文件夹
        // shell.showItemInFolder('/Users/zzb/WEB/Electron-test/dist')
        
        // 打开文件
        const res = shell.openItem('/Users/zzb/WEB/Electron-test/dist/index.html')
    }

    render() {
        return <div>
            <button onClick={this.handleOpen}>open</button>
        </div>
    }
}