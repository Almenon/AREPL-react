import { spy } from 'sinon';
import * as React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Editor from '../../src/Renderer/components/Editor';

function setup() {
    
    const onCode = spy()

    const component = shallow(<Editor onCode={onCode}/>)

    return {
        component,
        onCode,
        textarea: component.find('textarea')
    }
}

describe('editor component', ()=>{
    it('should call onCode when a change is made', ()=>{
        const {onCode, textarea} = setup()

        const mockEvent = {
            target: {
                value: "x=1"
            }
        }

        textarea.simulate('change', mockEvent)

        expect(onCode.called).toBe(true)
    })
}) 