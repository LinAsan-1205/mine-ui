type IndexType = string | number

export interface ButtonProps {
    /**
     * 按钮文字
     */
    text?: string | number;

    /**
     * 按钮索引
     */
    index?: IndexType;
    /**
     *
     */
    block?: boolean

    /**
     * 禁用状态。优先级：Button.disabled > Form.disabled
     */
    disabled?: boolean;

    /**
     * 是否显示为加载状态
     * @default false
     */
    loading?: boolean;

    /**
     * 组件尺寸
     * @default medium
     */
    size?: 'default' | 'small' | 'medium' | 'large' | number;
    /**
     * 按钮形状，有 4 种：长方形、正方形、圆角长方形、圆形
     * @default rectangle
     */
    shape?: 'rectangle' | 'square' | 'round' | 'circle';

    /**
     * 组件风格，依次为品牌色、危险色
     * @default default
     */
    theme?: 'default' | 'primary' | 'danger' | 'light';

    /**
     * 按钮类型
     * @default button
     */
    type?: 'submit' | 'reset' | 'button';


    openType?: 'contact' | 'getPhoneNumber' | 'getUserInfo'
}

export type  ButtonEvents = {
    (event: "click", e: MouseEvent, index?: IndexType): void
    (event: "getPhoneNumber"): void
}
