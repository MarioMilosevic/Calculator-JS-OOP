'use strict'

export const showNumber = (e, el) => {
    const target = e.target.innerText
    el.updateLowerUI(target)
  };