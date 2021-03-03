import React from 'react';

import Filters from './Filters';
import Cards from './Cards';

const Catalogue = () => {
  return (
    <section className="Catalogue_content">
      <div className="list__course">
        <h4>Title H4 - Listado de cursos</h4>
      </div>
      <Filters />
      <Cards />
    </section>
  );
};

export default Catalogue;
