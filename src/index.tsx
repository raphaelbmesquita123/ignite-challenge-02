import { render } from 'react-dom'
import { SideBarContextProvaider } from './context/SideBarContext'

import { App } from './App'

render(
    <SideBarContextProvaider>
        <App />
    </SideBarContextProvaider>
    , document.getElementById('root'))