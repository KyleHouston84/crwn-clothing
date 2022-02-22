import React from "react";
import { useParams } from "react-router-dom";

import CollectionItem from "../../components/collection-item/collection-item.component";

import './collection.styles.scss';

const CollectionPage = () => {
  const param = useParams();
  
  return (
    <div className="category">
      <h2>CATEGORY PAGE "{param.collection}"</h2>
    </div>
  );
}

export default CollectionPage;