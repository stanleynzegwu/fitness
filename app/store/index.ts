import { proxy } from 'valtio'
//import _ from 'lodash'

interface State {
    bodyParts:string[] | [];
    exercises:{}[] | [];
    selectedBodyPart: string;
  }

const initialState: State = {
    bodyParts: [],
    exercises: [],
    selectedBodyPart: 'all'
};

const state = proxy(initialState);

// const reset = () => {
//   const resetObj = _.cloneDeep(initialState);
//   Object.keys(resetObj).forEach((key) => {
//     state[key] = resetObj[key];
//   });
// };

export {state}
//, reset