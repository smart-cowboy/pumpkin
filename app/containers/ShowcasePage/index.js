import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import ShowcasePage from './ShowcasePage';

const mapDispatchToProps = (dispatch) => ({
});

const mapStateToProps = createStructuredSelector({
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'showcase', reducer });
const withSaga = injectSaga({ key: 'showcase', saga });

export default compose(withReducer, withSaga, withConnect)(ShowcasePage);
export { mapDispatchToProps };
