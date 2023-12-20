'use strict'

export const showElement = (e, el) => {
    const target = e.target.innerText
    el.updateLowerUI(target)
  };