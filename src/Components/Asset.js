import { Button, Card, CardActions, CardContent, Skeleton } from '@mui/material';
const Asset = ({assetName, assetPrice}) => {
    return ( 
        <div className="asset">
            <Card sx={{ minWidth: 230 }} variant="outlined">
                <CardContent>
                    <h3>{assetName? assetName : <Skeleton variant="text" />}</h3>
                    <p>{assetPrice? assetPrice : <Skeleton variant="text" />}</p>
                </CardContent>
                <CardActions>
                    <Button size="small">See More</Button>
                </CardActions>
            </Card>
        </div>
     );
}
 
export default Asset;