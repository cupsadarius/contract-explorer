import Explore from '../components/Explore';
import { connect } from 'react-redux';
import { web3, isConnected} from '../../../redux/components/web3/selectors';
import { contract} from '../../../redux/components/reader/selectors';

const mapDispatchToProps = {
};

const mapStateToProps = (state) => ({
  web3: web3(state),
  isConnected: isConnected(state),
  contract: contract(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Explore);