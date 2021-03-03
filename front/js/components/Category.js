/**
 * @file Category component.
 */

import React, { useEffect } from 'react';

import useCategoryProvider from '../hooks/use-category-provider';

const Category = () => {
  const [categories, fetchCategory] = useCategoryProvider();

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <section className="category_content">
      <h4>Title H4 - Categories</h4>
      <div className="categories__content wrapper">
        {categories != null ? (
          categories.map(function (e) {
            return (
              <div className="categories" key={e.id}>
                {/* <img src=""></img> */}
                <p>{e.category}</p>
              </div>
            );
          })
        ) : (
          <p>Gaaa</p>
        )}
      </div>
    </section>
  );
};

export default Category;
