export type CreatePropDefaults<T extends Record<string, any>> = {
    [K in keyof T]: T[K];
};

const createPropsDefault = <T extends Record<string, any>>(propsDefault: T): CreatePropDefaults<T> => {
    const props: CreatePropDefaults<T> = Object.keys(propsDefault).reduce((acc: CreatePropDefaults<T>, key: string) => ({...acc, [key]: undefined }), {} as CreatePropDefaults<T>);
    for (const key in propsDefault) {
        if (Object.prototype.hasOwnProperty.call(propsDefault, key)) {
            props[key] = propsDefault[key];
        }
    }
    return props;
};

export {
    createPropsDefault
};
