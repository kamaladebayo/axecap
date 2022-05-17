import { Button, Card, CardActions, CardContent, Skeleton } from '@mui/material';
import './Asset.css'
const Asset = ({assetName, assetPrice, assetSymbol}) => {
    return ( 
        <div className="asset">
            <Card sx={{ minWidth: 230 }} variant="outlined">
                <CardContent>
                    <h3>{assetName? assetName : <Skeleton variant="text" />}</h3>
                    <p>{assetPrice? assetPrice : <Skeleton variant="text" />}</p>
                </CardContent>
                <CardActions>
                    <Button size="small">
                        <a href={`https://www.cnbc.com/quotes/${assetSymbol}.CM=`} className="asset__symbol" target='_blank' rel="noreferrer">See More</a>
                    </Button>
                </CardActions>
            </Card>
        </div>
     );
}
 
export default Asset;