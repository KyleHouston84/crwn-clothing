import React from "react";
import { connect } from "react-redux";
import { firestore, convertCollectionsSnapToMap } from "../../firebase/firebase.utils";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { updateCollections } from "../../redux/shop/shop.actions";

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');
    
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapToMap(snapshot);
      updateCollections(collectionsMap);
    });
  }
  
  render() {
    return (
      <div className="shop-page">
        <CollectionsOverview />
      </div>
    )
  }
} 

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);