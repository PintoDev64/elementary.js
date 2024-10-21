/**
* 
*/
export default function funtionalReducer(prevState: LocalRoutingContext['state'], { StateIdentifier, StateValue }: LocalRouting_ReducerProps): LocalRoutingContext['state'] {
    const location = prevState.findIndex(({ Name }) => Name === StateIdentifier);

    if (location === -1) {
        return [...prevState, { Name: StateIdentifier, Path: StateValue }];
    }

    // Crea un nuevo estado en lugar de mutar el anterior
    return prevState.map((entry, index) =>
        index === location ? { ...entry, Path: StateValue } : entry
    );
}