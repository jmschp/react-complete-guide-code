# 127. Learning the "Rules of Hooks"

- Only call React Hooks in React Functions
  - React Component Functions
  - Custom Hooks
- Only call React Hooks at the Top Level
  - Don’t call them in nested functions
  - Don’t call them in any block statements

Rule spcific to `useEffect`:
> extra, unofficial Rule for useEffect(): ALWAYS add everything you refer to inside of useEffect() as a dependency!
