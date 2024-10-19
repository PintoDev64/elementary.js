declare interface GlobalContext_ReducerProps {
    StateToModify: 'Path' | 'routerTree';
    StateValue: string
}
declare interface GlobalContext {
    Path: string;
    routerTree: null;
    changeState: (data: GlobalContext_ReducerProps) => void
}

declare type Global_MouseEvent<T> = React.MouseEvent<T, MouseEvent>
declare interface childrenProp {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type: any
}