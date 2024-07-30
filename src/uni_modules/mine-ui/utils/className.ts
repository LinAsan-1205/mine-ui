const appendNamespace = 'mine' as const
type Classes = (string | [boolean, string, string?])[]
const createClassNamespace = <C extends string>(classNamespace: C) => {
    const componentName = `${appendNamespace}-${classNamespace}` as const;

    const createBEM = <S extends string | undefined = undefined | any>(suffix?: S): string => {
        if (!suffix) {
            return componentName;
        }
        if (!suffix.startsWith('-') || !suffix.startsWith('--')) {
            return `${appendNamespace}-${suffix}`;
        }
        return (suffix.startsWith('--') ? `${componentName}${suffix}` : `${componentName}__${suffix}`);
    }

    const classes = (...classes: Classes): any[] => {
        return classes
            .filter((name) => name)
            .map((className) => {
                if (Array.isArray(className)) {
                    const [state, truthy, falsy = null] = className;
                    return state ? truthy : falsy;
                }
                return className;
            })
    };
    return {
        componentName,
        classes,
        createBEM
    }
}
export {
    createClassNamespace
}
