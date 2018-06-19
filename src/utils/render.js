import React from 'react';
import ReactDOM from 'react-dom';

const appElement = document.getElementById('app');
const rootElement = document.getElementById('root');

/**
 * 创建挂载元素
 *
 * @returns {HTMLDivElement} MountElem 挂载元素
 */
function createMountElement() {
  let MountElem = document.getElementById('appRoot');

  if (MountElem === undefined || MountElem === null) {
    MountElem = document.createElement('div');
    MountElem.setAttribute('id', 'appRoot');
    document.body.insertBefore(MountElem, document.body.childNodes[0]);
  }

  return MountElem;
}

/**
 * 获取挂载元素
 *
 * @param {HTMLDivElement} MountElem 挂载元素
 * @returns {HTMLDivElement} 挂载元素
 */
function getMountElement(MountElem = appElement) {
  if (MountElem === undefined || MountElem === null) {
    if (rootElement !== undefined && rootElement !== null) {
      MountElem = rootElement;
    }

    MountElem = createMountElement();
  }

  return MountElem;
}

/**
 * Render
 *
 * @param {HTMLDivElement} MountElement 挂载元素
 * @param {ReactDOM.Renderer} Renderer 渲染方式
 * @returns {Function}
 */
function render(MountElement = appElement, Renderer = ReactDOM.render) {
  if (Renderer === undefined || Renderer === undefined) {
    Renderer = ReactDOM.render;
  }

  return (WrapperComponent) => {
    Renderer(React.createElement(WrapperComponent, null), getMountElement(MountElement));
  };
}

/**
 * Hydrate
 *
 * @param {HTMLDivElement} MountElement 挂载元素
 * @param {ReactDOM.Renderer} Renderer 渲染方式
 * @returns {Function}
 */
export function hydrate(MountElement, Renderer = ReactDOM.hydrate) {
  return render(MountElement, Renderer);
}

export default render;
