import React from 'react'

export default props => {
  const triggerShowAddCategory = () => {
    props.showAddCategory()
  }

  const setNewActiveCategory = index => {
    props.setNewActiveCategory(index)
  }

  const liStyle =
    'p-4 inline hover:bg-grey-light uppercase font-black cursor-pointer'

  return (
    <ul className="list-reset inline flex justify-center border-b-4 mb-0">
      <li
        className={
          liStyle +
          (props.activeCategory === '' || props.activeCategory === undefined
            ? ' bg-grey-dark'
            : ' bg-grey-lighter')
        }
        onClick={() => setNewActiveCategory('')}
      >
        All
      </li>

      {props.categories
        ? props.categories.map((value, index) => {
            return (
              <li
                className={
                  liStyle +
                  (props.activeCategory === index
                    ? ' bg-grey-dark'
                    : ' bg-grey-lighter')
                }
                key={index}
                onClick={() => setNewActiveCategory(index)}
              >
                {value}
              </li>
            )
          })
        : '<li>No categories</li>'}

      <li className={liStyle} onClick={triggerShowAddCategory}>
        ➕
      </li>
    </ul>
  )
}
