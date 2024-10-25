import { useContext } from "react"

// Contexts
import { LocalRoutingContext } from "../context";

export default function useRouterLocal() {
    const LocalContext = useContext(LocalRoutingContext);

    const localStructure = () => {
        if (LocalContext === null) throw new RangeError("No se encuentra dentro del contexto");

        function findIndex({ _Name, _Path }: { _Name?: string, _Path?: string }): number | undefined {
            if (_Name === undefined && _Path === undefined) throw new Error("No se proporcionaron parametros");
            if (_Name !== undefined && _Path !== undefined) return LocalContext?.state.findIndex(({ Name, Path }) => (Name === _Name) && (Path === _Path))
            if (_Name !== undefined && _Path === undefined) return LocalContext?.state.findIndex(({ Name }) => Name === _Name)
            if (_Name === undefined && _Path !== undefined) return LocalContext?.state.findIndex(({ Path }) => Path === _Path)
        }

        function find<T extends { _Name?: string, _Path?: string }>({ _Name, _Path }: T): { Name?: string, Path?: string } | { Name?: string, Path?: string }[] | undefined {
            if (_Name === undefined && _Path === undefined) throw new Error("No se proporcionaron parametros");
            if (_Name !== undefined && _Path !== undefined) return LocalContext?.state.find(({ Name, Path }) => (Name === _Name) && (Path === _Path))
            if (_Name !== undefined && _Path === undefined) return LocalContext?.state.find(({ Name }) => Name === _Name)
            if (_Name === undefined && _Path !== undefined) return LocalContext?.state.find(({ Path }) => Path === _Path)
        }

        return {
            data: LocalContext.state,
            find,
            findIndex
        }
    }

    return {
        localStructure
    }
}