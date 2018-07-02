# AREPL: a real-time python scratchpad 

A redo of [AREPL](https://github.com/Almenon/arepl) in react, built from the [electron react](https://github.com/chentsulin/electron-react-boilerplate) and [typescript](https://github.com/ManuKle/electron-react-typescript-boilerplate) boilerplate

I'm experimenting with redoing AREPL for three reasons:
1. To Refactor messy jquery logic in AREPL into a modern library
2. To learn react
3. To take advantage of the feature-rich electron react boilerplate

## Current Status

App is very barebones but functional. A texteditor dispatches an action that gets debounced into arepl-backend.  Eventually output is returned which is reduced into state.

#### Deveveloper Setup:

1. Install python 3 and npm (if not already installed)
2. clone this repository
3. npm install
5. npm run dev <--- IMPORTANT - do not do npm start, that does production build

The app should now be up and running.

see [AREPL-backend](https://github.com/Almenon/AREPL-backend) for the npm package that executes the python code
