import Moment from 'react-moment';

export default function pipeDate(date) {

    return <Moment format="DD/MM/YYYY">
        {date}
    </Moment>
}