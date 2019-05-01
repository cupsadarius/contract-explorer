import App from '../components/App';
import { connect } from 'react-redux';
import { web3Connect } from '../../../redux/components/web3/actions';
import { web3, isConnected} from '../../../redux/components/web3/selectors';

const mapDispatchToProps = {
  web3Connect
};

const mapStateToProps = (state) => ({
  web3: web3(state),
  isConnected: isConnected(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);