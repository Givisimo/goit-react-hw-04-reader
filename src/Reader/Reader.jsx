import React, { useState, useEffect } from 'react';
import T from 'prop-types';
import queryString from 'query-string';
import Controls from '../Controls/Controls';
import Progress from '../Progress/Progress';
import Publication from '../Publication/Publication';

const Reader = ({ match, history, location, items }) => {

  const handlePubInx = () => {
    const pubInxObj = queryString.parse(location.search);
    const pubInx = pubInxObj.item;
    return Number(pubInx);
  };

  const showPublication = () => {
    const pubInxObj = queryString.parse(location.search);
    const pubInx = pubInxObj.item;
    const pub = items[pubInx - 1];
    return pub;
  };

  const onButtonClick = item => {
    history.push(`/reader?item=${handlePubInx() + item}`);
  };

  useEffect(() => {
    if (handlePubInx() <= items.length) {
      return;
    }
    history.replace('/reader?item=1');
  });

  const publication = showPublication();
  const prevBtnDisabled = handlePubInx() === 1;
  const nextBtnDisabled = handlePubInx() === items.length;

  return (
    <>
      <Controls
        onButtonClick={onButtonClick}
        prevBtnDisabled={prevBtnDisabled}
        nextBtnDisabled={nextBtnDisabled}
      />
      <Progress currentPage={handlePubInx() - 1} totalPages={items.length} />
      {publication && <Publication publication={publication} />}
    </>
  );
};

Reader.propTypes = {
  items: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      title: T.string.isRequired,
      text: T.string.isRequired,
    }).isRequired,
  ).isRequired,
  location: T.instanceOf(Object).isRequired,
  history: T.instanceOf(Object).isRequired,
};
// class Reader extends Component {
//   state = {};
//

//
//   componentDidMount() {
//     const { history, items } = this.props;
//     if (this.handlePubInx() <= items.length) {
//       return;
//     }
//     history.replace('/reader?item=1');
//   }
//
//   showPublication = () => {
//     const pubInxObj = queryString.parse(this.props.location.search);
//     const pubInx = pubInxObj.item;
//     const pub = this.props.items[pubInx - 1];
//     return pub;
//   };
//
//   onButtonClick = item => {
//     this.props.history.push(`/reader?item=${this.handlePubInx() + item}`);
//   };
//
//   handlePubInx = () => {
//     const pubInxObj = queryString.parse(this.props.location.search);
//     const pubInx = pubInxObj.item;
//     return Number(pubInx);
//   };
//
//   render() {
//     const { items } = this.props;
//     const { length } = items;
//     const publication = this.showPublication();
//     const prevBtnDisabled = this.handlePubInx() === 1;
//     const nextBtnDisabled = this.handlePubInx() === length;
//
//     return (
//       <>
//         <Controls
//           onButtonClick={this.onButtonClick}
//           prevBtnDisabled={prevBtnDisabled}
//           nextBtnDisabled={nextBtnDisabled}
//         />
//         <Progress currentPage={this.handlePubInx() - 1} totalPages={length} />
//         {publication && <Publication publication={publication} />}
//       </>
//     );
//   }
// }

export default Reader;
