import React, { FC } from 'react';
import classnames from 'classnames';

export declare type IconNameType =
  | 'search'
  | 'home'
  | 'settings'
  | 'done'
  | 'account_circle'
  | 'info'
  | 'delete'
  | 'shopping_cart'
  | 'favorite'
  | 'check_circle'
  | 'logout'
  | 'description'
  | 'help_outline'
  | 'language'
  | 'filter_alt'
  | 'list'
  | 'login'
  | 'help'
  | 'article'
  | 'open_in_new';

export interface IconPropsStrict {
  /** Additional classes */
  className?: string;
  /** Fill color of icon */
  color?: string;
  /** An element type to render as */
  el?: any;
  /** Name of the icon */
  name?: IconNameType;
  /** Size of icon */
  size?: string | number;
}

export interface IconProps extends IconPropsStrict {
  [propName: string]: any;
}

export const IconNameArray: IconNameType[] = ['search'];

export const Icon: FC<IconProps> = ({
  color = 'currentColor',
  className,
  el: IconElement = 'i',
  name,
  size = '1em',
  ...restProps
}) => {
  // Returns svg data in object like { content: ''', viewbox: ... }, content paths are cleaned form fill='#010100'
  const getIconData = () => {
    switch (name) {
      case 'account_circle':
        return {
          viewbox: '0 0 24 24',
          content: (
            <>
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
            </>
          ),
        };
      default:
        return null;
    }
  };

  const iconData = getIconData();

  if (!iconData) {
    console.warn('Icon does not exist', name);
    return null;
  }

  const IconClasses = classnames('kda-Icon', `kda-Icon--${name}`, className);

  return (
    <IconElement
      className={IconClasses}
      width={size}
      height={size}
      {...restProps}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={color}
        height={size}
        width={size}
        viewBox={iconData.viewbox}
      >
        {iconData.content}
      </svg>
    </IconElement>
  );
};
