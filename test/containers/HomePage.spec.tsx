import * as React from 'react'
import Enzyme, { mount } from 'enzyme'
import  { Provider } from 'react-redux'
import {createBrowserHistory} from 'history'
import { ConnectedRouter } from 'react-router-redux'
import HomePage from '../../src/Renderer/containers/HomePage'
import configureStore from '../../src/Renderer/store/configureStore.dev'
import { Output } from '../../src/Renderer/components/Output';

interface MockEvent{
    target:{
        value:string
    }
}

function setup(initialState?){
    const store = configureStore.configureStore(initialState)
    const history = createBrowserHistory();
    const provider = (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <HomePage/>
            </ConnectedRouter>
        </Provider>
    )
    const app = mount(provider)
    return {
        app,
        editor: app.find('textarea'),
        error: app.find('Error'),
        output: app.find('Output'),
        varDisplay: app.find('VariableView')
    }
}

describe('HomePage', ()=>{
    it('should output vars when user types in editor', () => {
        const {editor, output, varDisplay} = setup()

        const mockEvent: MockEvent = {
            target: {
                value: "x=1"
            }
        }

        editor.prop('onCode')
        editor.simulate('change', mockEvent)

        expect(output.props()).toMatchSnapshot()
        expect(varDisplay.prop('vars')).toMatchSnapshot()
    })
})