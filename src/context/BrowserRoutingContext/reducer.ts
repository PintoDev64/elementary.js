/**
* 
*/
export default function funtionalReducer(prevState: GlobalRouting_InitProperties, { StateToModify, StateValue }: GlobalRouting_ReducerProps): GlobalRouting_InitProperties {
    return {
        ...prevState,
        [StateToModify]: StateValue
    }
}