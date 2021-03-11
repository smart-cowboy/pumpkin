import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import WalletPage from './WalletPage';

const mapDispatchToProps = (dispatch) => ({
});

const mapStateToProps = createStructuredSelector({
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'wallet', reducer });
const withSaga = injectSaga({ key: 'wallet', saga });

export default compose(withReducer, withSaga, withConnect)(WalletPage);
export { mapDispatchToProps };
