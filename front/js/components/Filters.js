/**
 * @file Filters component.
 */

import React, { useEffect } from 'react';

import useCategoryProvider from '../hooks/use-category-provider';
import useSubcategoryProvider from '../hooks/use-subcategory-provider';
import useLevelProvider from '../hooks/use-level-provider';
import usePriceProvider from '../hooks/use-price-provider';

const Filters = () => {
  const [categories, fetchCategory] = useCategoryProvider();
  const [subcategories, fetchSubcategory] = useSubcategoryProvider();
  const [levels, fetchLevel] = useLevelProvider();
  const [prices, fetchPrice] = usePriceProvider();

  useEffect(() => {
    fetchCategory();
    fetchSubcategory();
    fetchLevel();
    fetchPrice();
  }, []);

  return (
    <div className="filter__content">
      <div className="select__option">
        <p>CATEGORIA</p>
        <select name="Select">
          <option value="todos">Todos</option>
          {categories != null
            ? categories.map(function (category) {
                // console.log(categories);
                return (
                  <option value="value1" key={category.id}>
                    {category.category}
                  </option>
                );
              })
            : null}
        </select>
      </div>

      <div className="select__option">
        <p>SUBCATEGORIA</p>
        <select name="Select">
          <option value="todos">Todos</option>
          {subcategories != null
            ? subcategories.map(function (subcategory) {
                return (
                  <option value="value1" key={subcategory.id}>
                    {subcategory.name}
                  </option>
                );
              })
            : null}
        </select>
      </div>

      <div className="select__option">
        <p>NIVEL</p>
        <select name="Select">
          <option value="todos">Todos</option>
          {levels != null
            ? levels.map(function (level) {
                return (
                  <option value="value1" key={level.id}>
                    {level.name}
                  </option>
                );
              })
            : null}
        </select>
      </div>

      <div className="select__option">
        <p>PRECIO</p>
        <select name="Select">
          <option value="todos">Todos</option>
          {prices != null
            ? prices.map(function (price) {
                return (
                  <option value="value1" key={price.id}>
                    {price.amount}
                  </option>
                );
              })
            : null}
        </select>
      </div>

      <div className="button__filter">
        <button type="button">Aplicar Filtros</button>
      </div>
    </div>
  );
};

export default Filters;
