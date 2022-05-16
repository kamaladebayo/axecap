import { Skeleton } from '@mui/material';
import './NewsCard.css'
const NewsCard = ({newsTitle, newsSource, newsSourceLink, newsDescription, newsLink, newsImage}) => {
    return ( 
        <div className="newscard">
            <div className="newscard__content">
                <h4 className='newscard__title'><a href={newsLink} target='_blank' rel="noreferrer">{newsTitle? newsTitle : <Skeleton variant="text" />}</a></h4>
                <p className='news__description'>{newsDescription? newsDescription : <Skeleton variant="text" />}</p>
                <a href={newsSourceLink} target='_blank' rel="noreferrer" className='newscard__source'>{newsSource}</a>
            </div>
            <div className="newscard__image">
                {newsImage? <img src={newsImage} alt={newsTitle} /> : <Skeleton variant="rectangular" sx={{height: 1/1}}/> }
            </div>
        </div>
     );
} 
export default NewsCard;