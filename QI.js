export const QI = {
    scan(obj){
        return {
            id: obj.id || "CORE",
            core: !!obj.core,
            fn: !!obj.fn,
            stable: !!obj.stable,
            ready: !!obj.ready,
            respo: !!obj.respo360,
            time: Date.now(),
            meta: {
                type: typeof obj,
                keys: Object.keys(obj)
            }
        };
    }
};

