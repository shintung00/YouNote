import React from 'react';
import CategoryListEntry from './CategoryListEntry.jsx';
import AddCategoryForm from './AddCategoryForm.jsx'
import AddVideoForm from './AddVideoForm.jsx';

var CategoryList = (props) => (
  <div className="category-list">
    {props.category.map((category, i) =>
      <div>
        <h2>{category.name}</h2>
        <CategoryListEntry key={i} name={category.name} vids={category.videos}></CategoryListEntry>
      </div>
    )}
  <AddCategoryForm add={props.add} />
  <AddVideoForm search={props.search} />
  </div>
);

export default CategoryList;