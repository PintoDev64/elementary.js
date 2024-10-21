export function getActualLocation() {
    return window.location.pathname
}

export function getProfiling(id: unknown, phase: unknown, actualDuration: unknown, baseDuration: unknown, startTime: unknown, commitTime: unknown) {
    console.log({
        id, phase, actualDuration, baseDuration, startTime, commitTime
    });
}