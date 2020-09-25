
export const randCount = (exclMax) => Math.floor(Math.random() * exclMax);

export const randLoop = (exclMax, func) => {
    for (let i = 0; i < randCount(exclMax); i++) {
        func();
    }
}
