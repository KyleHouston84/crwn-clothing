import React from "react";
import { useNavigate } from "react-router-dom";
import CollectionItem from "../collection-item/collection-item.component";

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => {
  const navigate = useNavigate();

  return (
    <div className="collection-preview">
      <h1 className="title" onClick={() => navigate(`/shop/${title.toLowerCase()}`)}>{ title.toUpperCase() }</h1>
      <div className="preview">
        { 
          items
            .filter((item, index) => index < 4)
            .map((item) => (
              <CollectionItem key={item.id} item={item} />
          ))
        }
      </div>
    </div>
  )
};

export default CollectionPreview;