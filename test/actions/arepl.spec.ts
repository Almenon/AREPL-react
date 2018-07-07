import { executeCode } from '../../src/Renderer/actions/arepl'

describe('arepl actions', () => {
    it('should evaluate simple python code', (done)=>{

        const codeExecutor = executeCode({savedCode:"",evalCode:"x=1+1"})

        const dispatch = (result) => {

            // clear these because they may vary randomly
            result.execTime = 0
            result.totalTime = 0
            result.totalPyTime = 0

            expect(result).toMatchSnapshot()
            done()
        }

        codeExecutor(dispatch)
    })
})