import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from '../../redux/shop/shop.selectors';

import CollectionItem from "../../components/collection-item/collection-item.component";

import './collection.styles.scss';

const CollectionPage = ({ collections }) => {
  const param = useParams();
  const routeCollection = collections[param.collectionId];
  const {title, items} = routeCollection;

  
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {
          items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))
        }
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps)(CollectionPage);