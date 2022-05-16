import { Timeline } from 'react-twitter-widgets';
import './Actions.css'
const Actions = () => {
    return ( 
        <div className="actions">
            <Timeline 
                dataSource={{
                    sourceType: 'profile',
                    screenName: 'cryptonews'
                }}
                options={{
                height: '400'
                }}
            />
        </div>
     );
}

export default Actions;