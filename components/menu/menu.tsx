import * as React from 'react'
import {
  KeyType,
  MenuMode,
  MenuTheme,
  MenuClickEventHandler,
  TriggerSubMenuAction,
  SubMenuChangeEventHandler,
} from './interface'
import { toArray } from '../_utils/react-children'
import { ConfigContext } from '../config-provider'
import { getCompProps } from '../_utils'
import classNames from 'classnames'
import devWarning from '../_utils/devwarning'

import MenuItem from './menuItem'
import SubMenu from './subMenu'

export interface MenuProps extends React.HTMLAttributes<HTMLElement> {
  mode?: MenuMode
  collapsed?: boolean
  inlineIndent?: number
  forceSubMenuRender?: boolean
  defaultOpenKeys?: string[]
  openKeys?: string[]
  defaultSelectedKey?: string
  selectedKey?: string
  triggerSubMenuAction?: TriggerSubMenuAction
  additionalTools?: React.ReactNode
  onOpenChange?: SubMenuChangeEventHandler
  theme?: MenuTheme
}

interface MenuType extends React.FC<MenuProps> {
  Item: typeof MenuItem
  SubMenu: typeof SubMenu
}

const isFunction = (fn: any): boolean => {
  return fn && typeof fn === 'function'
}

const Menu: MenuType = (props) => {
  const { getPrefixCls, prefixCls: pkgPrefixCls, compDefaultProps: userDefaultProps } = React.useContext(ConfigContext)

  const {
    prefixCls: customPrefixcls,
    mode,
    inlineIndent,
    forceSubMenuRender,
    additionalTools,
    onClick,
    onOpenChange,
    children,
    className,
    theme,
    collapsed,
    ...restProps
  } = getCompProps('Menu', userDefaultProps, props)

  const prefixCls = getPrefixCls!(pkgPrefixCls, 'menu', customPrefixcls)

  devWarning(['inline', 'vertical', undefined].indexOf(mode!) === -1, 'menu', `cannot found menu mode '${mode}'`)

  const defaultSelectedKey: KeyType =
    ('selectedKey' in restProps ? restProps.selectedKey : restProps.defaultSelectedKey) || ''
  const defaultOpenKeys: KeyType[] = ('openKeys' in restProps ? restProps.openKeys : restProps.defaultOpenKeys) || []

  // const [collapsed, setCollapsed] = React.useState<boolean | undefined>(restProps.collapsed)

  const [selectedKey, setSelectedKey] = React.useState<KeyType>(defaultSelectedKey)
  const [openKeys, setOpenKeys] = React.useState<KeyType[]>(defaultOpenKeys)

  // triggerSubMenuAction内嵌模式固定为click，即该值设置只对垂直模式有效
  if (mode === 'inline') {
    restProps.triggerSubMenuAction = 'click'
  }

  // React.useEffect(() => {
  //   setCollapsed(restProps.collapsed)
  // }, [restProps.collapsed])

  const handleOnClick: MenuClickEventHandler = (info) => {
    setSelectedKey(info.key)

    if (mode !== 'inline' && openKeys.length > 0) {
      setOpenKeys([])
    }

    onClick && onClick(info)
  }

  const handleMouseEnterMenu = () => {
    if (isFunction(restProps.onMouseEnter)) {
      restProps.onMouseEnter()
    }
  }

  const handleMouseLeaveMenu = () => {
    if (isFunction(restProps.onMouseLeave)) {
      restProps.onMouseLeave()
    }
  }

  // 子菜单展开关闭的回调
  const handleOnOpenChange = (openKey: string) => {
    const index = openKeys.indexOf(openKey)
    if (index > -1) {
      openKeys.splice(index, 1)
      setOpenKeys(openKeys)
    } else {
      setOpenKeys(openKeys.concat(openKey))
    }
    onOpenChange && onOpenChange(openKey)
  }

  const renderMenu = (): React.ReactElement => {
    return (
      <ul>
        {toArray(children).map((item: React.ReactElement, i) => {
          if (!item) return
          const key = item?.key || i
          return React.cloneElement(item, {
            key,
            keyValue: key,
            collapsed,
            mode,
            openKeys,
            selectedKey,
            triggerSubMenuAction: restProps.triggerSubMenuAction,
            forceSubMenuRender,
            handleOnOpenChange,
            handleOnClick,
            inlineIndent,
          })
        })}
      </ul>
    )
  }

  const style: React.CSSProperties = {
    ...restProps.style,
    width: !collapsed && restProps.style?.width,
    transition: 'width 0.2s cubic-bezier(0,.4,.4,1)',
  }

  const mouseEvent = {
    onMouseLeave: handleMouseLeaveMenu,
    onMouseEnter: handleMouseEnterMenu,
  }

  return (
    <div
      className={classNames(prefixCls, className, {
        [`${prefixCls}-inline`]: mode === 'inline',
        [`${prefixCls}-vertical`]: mode !== 'inline',
        [`${prefixCls}-collapsed`]: true,
        [`${prefixCls}-${theme === 'light' ? 'light' : 'dark'}`]: true,
      })}
      role="menu"
      style={style}
      {...mouseEvent}
    >
      {children && renderMenu()}
      {additionalTools}
    </div>
  )
}

Menu.displayName = 'Menu'

Menu.Item = MenuItem

Menu.SubMenu = SubMenu

export default Menu
