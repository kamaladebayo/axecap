import { Timeline } from 'react-twitter-widgets';
import './Actions.css'
const Actions = () => {
    return ( 
        <div className="actions">
            <Timeline 
                dataSource={{
                    sourceType: 'profile',
                    screenName: 'Blockworks_'
                }}
                options={{
                height: '400'
                }}
            />
        </div>
     );
}

export default Actions;