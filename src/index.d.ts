//#region -------------|Global/Browser Routing Context
interface GlobalRouting_InitProperties {
    Path: GlobalRoutingContext['Path']
}
interface GlobalRouting_ReducerProps {
    StateToModify: 'Path' | 'routerTree';
    StateValue: string
}
interface GlobalRoutingContext {
    Path: string;
    changeState: (data: GlobalContext_ReducerProps) => void
}

//#region -------------| Local Routing Context
interface LocalRouting_ReducerProps {
    StateIdentifier: string;
    StateValue: string
}
interface LocalRoutingContext {
    state: {
        Name: string;
        Path: string
    }[] | [];
    changeState: (data: LocalRouting_ReducerProps) => void
}

//#region -------------| Global |------------- //
declare namespace EventDefinitions {
    export type MouseEvent<T> = React.MouseEvent<T, MouseEvent>
}