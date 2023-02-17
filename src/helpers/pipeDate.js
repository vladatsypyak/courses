import Moment from 'react-moment';

export default function pipeDate(date) {
    console.log(date)
    return <Moment format="DD/MM/YYYY">
        {date}
    </Moment>
}